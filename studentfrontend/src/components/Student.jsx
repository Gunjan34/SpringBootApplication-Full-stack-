import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper, Snackbar, Alert } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Student() {
    const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([]);
    const [editId, setEditId] = useState(null);

    // Snackbar state
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // success | error | warning | info

    const fetchStudents = () => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            });
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const showSnackbar = (message, severity = 'success') => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const student = { name, address };

        if (!name.trim() || !address.trim()) {
            showSnackbar("Please fill all fields!", "warning");
            return;
        }

        if (editId) {
            fetch(`http://localhost:8080/student/update/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            }).then(() => {
                showSnackbar("Student updated successfully!");
                resetForm();
                fetchStudents();
            }).catch(() => {
                showSnackbar("Error updating student!", "error");
            });
        } else {
            fetch("http://localhost:8080/student/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            }).then(() => {
                showSnackbar("New student added!");
                resetForm();
                fetchStudents();
            }).catch(() => {
                showSnackbar("Error adding student!", "error");
            });
        }
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/student/delete/${id}`, {
            method: "DELETE"
        }).then(() => {
            showSnackbar("Student deleted successfully!");
            fetchStudents();
        }).catch(() => {
            showSnackbar("Error deleting student!", "error");
        });
    };

    const handleEdit = (student) => {
        setName(student.name);
        setAddress(student.address);
        setEditId(student.id);
    };

    const resetForm = () => {
        setName('');
        setAddress('');
        setEditId(null);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
    };

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}>
                    <u>{editId ? "Edit Student" : "Add Student"}</u>
                </h1>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1 } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Student Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Student Address"
                        variant="outlined"
                        fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        {editId ? "Update" : "Submit"}
                    </Button>
                    {editId && (
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={resetForm}
                            style={{ marginLeft: "10px" }}
                        >
                            Cancel
                        </Button>
                    )}
                </Box>
            </Paper>

            <h1>Students</h1>
            <Paper elevation={3} style={paperStyle}>
                {students.map(student => (
                    <Paper
                        elevation={6}
                        style={{ margin: "10px", padding: "15px", textAlign: "left" }}
                        key={student.id}
                    >
                        <b>Id:</b> {student.id}<br />
                        <b>Name:</b> {student.name}<br />
                        <b>Address:</b> {student.address}<br />
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => handleEdit(student)}
                            style={{ marginRight: "10px", marginTop: "5px" }}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleDelete(student.id)}
                            style={{ marginTop: "5px" }}
                        >
                            Delete
                        </Button>
                    </Paper>
                ))}
            </Paper>

            {/* Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
}

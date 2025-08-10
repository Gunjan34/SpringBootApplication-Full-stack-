package com.SpringFullStackApp.StudentSystem.controller;

import com.SpringFullStackApp.StudentSystem.model.Student;
import com.SpringFullStackApp.StudentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New Student is added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PutMapping("/update/{id}")
    public String updateStudent(@PathVariable int id, @RequestBody Student student) {
        studentService.updateStudent(id, student);
        return "Student updated successfully";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable int id) {
        studentService.deleteStudent(id);
        return "Student deleted successfully";
    }
}

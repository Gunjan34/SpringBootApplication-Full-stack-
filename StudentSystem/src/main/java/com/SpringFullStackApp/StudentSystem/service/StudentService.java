package com.SpringFullStackApp.StudentSystem.service;

import com.SpringFullStackApp.StudentSystem.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);

    List<Student> getAllStudents();
    Student updateStudent(int id, Student student);
    void deleteStudent(int id);
}

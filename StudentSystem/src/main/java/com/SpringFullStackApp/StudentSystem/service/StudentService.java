package com.SpringFullStackApp.StudentSystem.service;

import com.SpringFullStackApp.StudentSystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}

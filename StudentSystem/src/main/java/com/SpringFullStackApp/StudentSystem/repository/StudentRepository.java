package com.SpringFullStackApp.StudentSystem.repository;

import com.SpringFullStackApp.StudentSystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository  extends JpaRepository<Student,Integer> {

}

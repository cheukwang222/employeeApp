package com.fullstack.project.employeeApp.dao;

import java.util.List;
import com.fullstack.project.employeeApp.model.Employee;

public interface EmployeeDAO {
    List<Employee> get();

    Employee get(int id);

    void save(Employee employee);

    void delete(int id);
}

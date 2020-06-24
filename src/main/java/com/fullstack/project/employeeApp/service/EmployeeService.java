package com.fullstack.project.employeeApp.service;

import java.util.List;
import com.fullstack.project.employeeApp.model.Employee;

public interface EmployeeService {
    List<Employee> get();

    Employee get(int id);

    void save(Employee employee);

    void delete(int id);
}

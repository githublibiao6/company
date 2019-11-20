package com.aladdin.manage.admin.service;

import com.aladdin.manage.admin.bean.Admin;

import java.util.List;

public interface AdminService {
    List<Admin> list();
    List<Admin> pagelist();
    boolean add(Admin menu);
    boolean update(Admin menu);
    boolean remove(String id);
    Admin findById(String id);
}

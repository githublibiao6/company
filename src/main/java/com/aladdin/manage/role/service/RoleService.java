package com.aladdin.manage.role.service;

import com.aladdin.manage.role.mode.Role;

import java.util.List;

public interface RoleService {
    List<Role> list();
    List<Role> pagelist();
    boolean add(Role menu);
    boolean update(Role menu);
    boolean remove(String id);
    Role findById(String id);
}

package com.aladdin.manage.menu.service;

import com.aladdin.manage.menu.mode.Menu;

import java.util.List;

public interface MenuService {
    List<Menu> list();
    List<Menu> pagelist();
    boolean add(Menu menu);
    boolean update(Menu menu);
    boolean remove(String id);
    Menu findById(String id);
}

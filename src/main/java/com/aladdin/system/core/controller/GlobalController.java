package com.aladdin.system.core.controller;

import com.aladdin.system.core.page.LayuiPageHandle;
import com.aladdin.system.core.page.PageHandle;
import com.aladdin.system.core.model.Result;

import java.util.List;

public class GlobalController {

    public Result result = new Result();
    PageHandle layui = new LayuiPageHandle();

    public <T> Result page(List<T> list,Integer page,Integer limit){
        return layui.turnPage(result,list,page,limit);
    }
}

package com.aladdin.api.out.controller;

import com.aladdin.system.core.controller.GlobalController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * admin controller
 * @author lb
 * @date 2018年6月5日 下午8:56:11
 */
@RequestMapping("api")
@Controller
public class ApiController extends GlobalController {
    
    /*@Reference
    TestServiceImpl service;

    @RequestMapping("/index.do")
    @ResponseBody
    public Result list(Admin admin) {
        result.setData(service.getList());
        return result;
    }*/
}

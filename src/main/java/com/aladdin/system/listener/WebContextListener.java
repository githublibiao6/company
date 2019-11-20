package com.aladdin.system.listener;

import org.springframework.context.event.ContextRefreshedEvent;

//@Service
//public class WebContextListener implements ApplicationListener<ContextRefreshedEvent>  {
public class WebContextListener{
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        if (contextRefreshedEvent.getApplicationContext().getParent() == null) {//保证只执行一次
            System.err.println("1111111111111111111111111111111111111111111111111111");
        }
    }
}

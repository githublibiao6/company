<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE  html>
<html>
  <head>
    <base href="<%=basePath%>">
    <title>测试redis</title>
  </head>
  <body>
  redis
  </body>
</html>

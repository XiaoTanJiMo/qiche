<%--这个是登录页面用的easyui--%>

<%--设定页面的字符编码UTF-8--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--指定你的项目名--%>
<%
    String path=request.getContextPath();
%>
<%--加载c标签包--%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>汽车查询平台</title>
<%--引用的css文件--%>
    <link rel="stylesheet" href="${ctx}/static/login/css/font-awesome.min.css">
    <link rel="stylesheet" href="${ctx}/static/login/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/static/login/css/demo.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/static/login/css/login.css">
    <%--引用jquery的js文件--%>
    <script type="text/javascript" src="${ctx}/static/js/jquery-3.2.1.min.js"></script>

    <script type="text/javascript">
        /*js中的function函数*/
        function login(){
            /*定义变量*/
            var username=$("#username").val();
            var password=$("#password").val();
            /*判断用户名和密码是否填写*/
            if(username=="" || password==""){
                alert("请填写用户名和密码");
                return ;
            }
            /*ajax函数*/
            $.ajax({
                /*向后台的路径*/
                url:"${ctx}/user/login",
                /*后台的传值*/
                data:{
                    username:username,
                    password:password
                },
                /*向后台的类型*/
                type:"post",
                /*后台返回的类型*/
                dataType:"json",
                /*执行成功就执行如下函数*/
                success:function(result){
                    if(result.success){
                        /*页面跳转*/
                        window.location.href="${ctx}/user/index";
                    }else{
                        alert(result.info);
                    }
                }
            })
        }
    </script>
</head>
<body>

<div class="demo" style="padding: 20px 0;">
    <div class="container">
        <div class="row">
            <div class="col-md-offset-3 col-md-6">
                <div class="form-horizontal">
                    <span class="heading">汽车查询平台</span>
                    <%--你输入用户名--%>
                    <div class="form-group">
                        <input type="email" class="form-control" id="username" placeholder="用户名或电子邮件">
                        <i class="fa fa-user"></i>
                    </div>
                    <%--你输入密码--%>
                    <div class="form-group help">
                        <input type="password" class="form-control" id="password" placeholder="密　码">
                        <i class="fa fa-lock"></i>
                        <a href="#" class="fa fa-question-circle"></a>
                    </div>
                    <div class="form-group">
                        <%--点击方法，当你点击是会跳转到js中，你可以按住ctrl在用鼠标的左键点击login(),就能查看是那的函数--%>
                        <button type="submit" onclick="login()" class="btn btn-default">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</body>
</html>


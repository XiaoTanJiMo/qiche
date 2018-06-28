<%--首页的页面分模块--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--调用封装的调用--%>
<%@include file="/WEB-INF/view/common.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>汽车查询平台</title>
    <style type="text/css">
        .myhref{
            text-decoration: none;
            color: #ffffff;
        }
    </style>
    <script type="text/javascript" src="${ctx}/static/js/main.js"></script>

</head>
<body class="easyui-layout">
    <div data-options="region:'north',border:false" style="height:50px;background:#00b4ef;padding:5px">
       <div style="float: left">
           <span style="font-size: 30px;margin-left: 10px;color: #ffffff"><strong>汽车查询系统</strong></span>
       </div>
       <div style="float: right;padding: 10px" >
           <span style="font-size: 15px;color: #ffffff">
               <strong>
                   <a  class="myhref" href="javascript:void(0)" onclick="changePwd()">
                       欢迎您，${sessionScope.username}
                   </a>
               </strong>
           </span>
           &nbsp;&nbsp;&nbsp;&nbsp;
           <span style="font-size: 15px;color: #ffffff">
               <strong>
               <a  class="myhref" href="javascript:void(0)" onclick="logout()">退出登录</a>
               </strong>
           </span>
       </div>




    </div>
    <div data-options="region:'west',split:true,title:'功能菜单'" style="width:200px;padding:10px;font-size: 30px">
        <div class="easyui-panel" style="width:100%;max-width:400px;padding:10px;">
        <div style="margin-bottom:20px">
            <a href="javascript:void(0)" onclick="addPanel('汽车查询','/user/select')">汽车查询</a><br>



        </div>
        </div>

        <%--<a href="javascript:void(0)" onclick="addPanel('权限管理','/auth/main')" >权限管理</a><br>
        <a href="javascript:void(0)" onclick="addPanel('用户管理','/user/main')">用户管理</a><br>--%>
    </div>
    <div  data-options="region:'center'">
        <div id="mainTab" class="easyui-tabs" data-options="fit:true" >
        </div>
    </div>
</body>
</html>

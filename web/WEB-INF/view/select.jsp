<%--汽车页面的展示--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/view/common.jsp"%>
<html>
<head>
    <title>Title</title>
    <style type="text/css">
        .redStar{
            color: red;
        }
    </style>
    <script type="text/javascript" src="${ctx}/static/js/select.js?version=<%=Math.random()%>" ></script>
</head>
<body class="easyui-layout">
<%--模糊查询--%>
<div data-options="region:'north',border:false" style="padding:5px">
    <input class="easyui-textbox" id="pinpai" label="汽车品牌:" labelPosition="before" data-options="labelAlign:'right',prompt:'按照汽车品牌查询'" style="width:20%;height:30px">
    <input class="easyui-textbox" id="xinghao" label="汽车型号:" labelPosition="before" data-options="labelAlign:'right',prompt:'按照汽车型号查询'" style="width:20%;height:30px">
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="javascript:void(0)" onclick="queryUser()"  class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="width:80px">搜 索</a>
    &nbsp;&nbsp;
    <a href="javascript:void(0)" onclick="showUserEditWin()" class="easyui-linkbutton" data-options="iconCls:'icon-add'" style="width:80px">增 加</a>
</div>
<%--增加和修改汽车信息--%>
<div align="center" id="userEditWin" class="easyui-window" data-options="closed:true">
    <input type="hidden" id="id">
    <p/>
    <input class="easyui-textbox" id="pinpai01" label="汽车品牌<span class='redStar'>*</span>:" labelPosition="before" data-options="labelWidth:70,labelAlign:'right'" style="width:90%;height:30px">
    <p/>
    <input class="easyui-textbox" id="xinghao01" label="汽车型号<span class='redStar'>*</span>:" labelPosition="before" data-options="labelWidth:70,labelAlign:'right'" style="width:90%;height:30px">
    <p/>
    <input class="easyui-textbox" id="jiage" label="汽车价格<span class='redStar'>*</span>:" labelPosition="before" data-options="labelWidth:70,labelAlign:'right'" style="width:90%;height:30px">
    <p/>
    <input class="easyui-textbox" id="miaoshu" label="汽车介绍<span class='redStar'>*</span>:" labelPosition="before" data-options="labelWidth:70,labelAlign:'right'" style="width:90%;height:30px">
    <p/>

    <div>
        <a href="javascript:void(0)" onclick="submitUser()" class="easyui-linkbutton" style="width: 80px" data-options="iconCls:'icon-ok'">提 交</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="javascript:void(0)" onclick="closeUserEditWin()" class="easyui-linkbutton" style="width: 80px" data-options="iconCls:'icon-cancel'">取 消</a>

    </div>
</div>

<div data-options="region:'center'">
    <table id="userData"></table>
</div>

<div id="grantWin">
    <input type="hidden" id="userid">
    <table id="grantGrid">
    </table>
</div>



</body>
</html>

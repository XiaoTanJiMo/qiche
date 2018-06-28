$(function(){
    $('#mainTab').tabs('add',{
        title: "首页",
        fit:true,
        content: '<iframe src="'+ctx+'/user/index01" style="width: 100%;height: 99%" scrolling="auto" frameborder="0"></iframe>',
        closable: false
    });
})

function logout(){
    $.messager.confirm("提示","确定要退出系统吗？",function(r){
        if(r){
            window.location.replace(ctx+"/user/logout");
        }
    })
}

/*function changePwd(){
    //$("#pwdWin").window("open");
    //完成window的初始化配置
    $("#pwdWin").window({
        title:"修改密码",
        modal:true,
        iconCls:'icon-save',
        width:350,
        height:250,
        collapsible:false,
        minimizable:false,
        maximizable:false,
        onBeforeClose:function(){
            $("#old").passwordbox("setValue","");
            $("#new1").passwordbox("setValue","");
            $("#new2").passwordbox("setValue","");
        }

    });
    //调用显示方法
    $("#pwdWin").window("open");
    $("#pwdWin").window("center");
}*/

/*function submitPwd(){
    var old=$("#old").passwordbox("getValue");
    var new1=$("#new1").passwordbox("getValue");
    var new2=$("#new2").passwordbox("getValue");
    if(old==""){
        $.messager.alert("提示","请填写原始密码");
        return;
    }
    if(new1==""){
        $.messager.alert("提示","请填写新密码");
        return;
    }
    if(new2==""){
        $.messager.alert("提示","请填写确认密码");
        return;
    }
    if(new2!=new1){
        $.messager.alert("提示","两次输入的密码不一致");
        return;
    }
    var data={
        old:old,
        new1:new1
    }

    var url=ctx+"/user/" +
        "";
    $.ajax({
        url:url,
        data:data,
        type:"post",
        dataType:"json",
        success:function(result){
            if(result.success){
                $.messager.alert("提示","修改成功",'info',function(){
                    window.location.replace(ctx+"/user/logout");
                });

            }else{
                $.messager.alert("提示",result.info);
            }
        }
    });
}*/

function closePwdWin(){
    $("#pwdWin").window("close");
}


function addPanel(name,url){
    var boolean=$("#mainTab").tabs("exists",name);
    if(boolean){
        $("#mainTab").tabs("select",name);
    }else{
        $('#mainTab').tabs('add',{
            title: name,
            fit:true,
            content: '<iframe src="'+ctx+url+'" style="width: 100%;height: 99%" scrolling="auto" frameborder="0"></iframe>',
            closable: true
        });
    }

}



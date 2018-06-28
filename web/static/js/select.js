/*在页面加载的时候执行这些方法*/
$(function(){
    initUserEditWin();
    initUserGrid();
    queryUser();
    initGrantWin();
})

/*汽车的增加与修改的弹出设定*/
function initUserEditWin(){
    $("#userEditWin").window({
        title:"汽车增加或修改",
        modal:true,
        iconCls:'icon-save',
        width:350,
        height:250,
        collapsible:false,
        minimizable:false,
        maximizable:false,
        onBeforeClose:function(){
            $("#id").val("");
            $("#pinpai01").textbox("setValue","");
            $("#xinghao01").textbox("setValue","");
            $("#jiage").textbox("setValue","");
            $("#miaoshu").textbox("setValue","");
        }
    });
}
/*弹窗的开启*/
function showUserEditWin(){
    $("#userEditWin").window("open");
    $("#userEditWin").window("center");
}
/*弹窗的关闭*/
function closeUserEditWin(){
    $("#userEditWin").window("close");
}
/*汽车的信息增加修改*/
function submitUser(){
    var id=$("#id").val();
    var pinpai=$("#pinpai01").textbox("getValue");
    var xinghao=$("#xinghao01").textbox("getValue");
    var jiage=$("#jiage").textbox("getValue");
    var miaoshu=$("#miaoshu").textbox("getValue");
    if(pinpai==""){
        $.messager.alert("提示","请填写汽车品牌");
        return;
    }
    if(xinghao==""){
        $.messager.alert("提示","请填写汽车型号");
        return;
    }

    var data={};
    data.id=id;
    data.pinpai=pinpai;
    data.xinghao=xinghao;
    data.jiage=jiage;
    data.miaoshu=miaoshu;
    console.log(data);

    var url=ctx+"/user/saveOrUpdate";
    $.ajax({
        url:url,
        data:data,
        type:"post",
        dataType:"json",
        success:function(result){
            if(result.success){
                $.messager.alert("提示","操作成功","info",function(){
                    closeUserEditWin();
                    queryUser();
                });
            }else{
                $.messager.alert("提示",result.info);
            }
        }
    });

}
/*分页*/
function initUserGrid(){
    $("#userData").datagrid({
        fit:true,//自动充满
        rownumbers:true,//显示行号
        singleSelect:true,//单行选择
        autoRowHeight:false,//自动行高
        pagination:true,//允许分页
        fitColumns:true,//自动适应列宽
        border:false,
        pageSize:5,//一页多少行
        pageList:[5,10,15],
        onDblClickRow:function(index,row){
                showUserEditWin();
                $("#id").val(row.id);
                $("#pinpai01").textbox("setValue",row.pinpai);
                $("#xinghao01").textbox("setValue",row.xinghao);
                $("#jiage").textbox("setValue",row.jiage);
                $("#miaoshu").textbox("setValue",row.miaoshu);

        },
        columns:[[
            {field:'pinpai',title:'汽车品牌',width:100},
            {field:'xinghao',title:'汽车型号',width:100},
            {field:'jiage',title:'汽车价格',width:100},
            {field:'miaoshu',title:'汽车介绍',width:100},
            {field:'cd',title:'时间',width:100},
            {field:'id',title:'操作',width:100,
                formatter:function(value,row,index){
                    return  "<a href='javascript:void(0)' onclick='resetPwd("+value+")' >删除</a>&nbsp;&nbsp;&nbsp;&nbsp;"

                }
            },
        ]]
    })
}

function grant(id){
    if(cu!="geng" && id==1){
        $.messager.alert("警告","您没有权限操作管理员的信息");
        return;
    }else{
        showGrantWin(id);
        $("#userid").val(id);
    }

}


function resetPwd(id){
        $.messager.confirm("提示","是否要删除",function(r){
            if(r){
                $.ajax({
                    url:ctx+"/user/de",
                    data:{
                        id:id
                    },
                    type:"post",
                    dataType:"json",
                    success:function(result){
                        if(result.success){
                            $.messager.alert("提示","操作成功！");
                        }else{
                            $.messager.alert("提示",result.info);
                        }
                    }
                })
            }
        })
}

function queryUser(){
    var pinpai=$("#pinpai").textbox("getValue");
    var xinghao=$("#xinghao").textbox("getValue");
    $("#userData").datagrid("options").queryParams={
        pinpai:pinpai,
        xinghao:xinghao

    };
    $("#userData").datagrid("options").url=ctx+"/user/query";
    $("#userData").datagrid("load");
}

function initGrantGrid(){
    $("#grantGrid").datagrid({
        fit:true,
        rownumbers:true,
        singleSelect:false,
        fitColumns:true,
        onLoadSuccess:function(data){
            console.log(data);
            var rows=data.rows;
            for(var i=0; i<rows.length; i++){
                var row=rows[i];
                if(row.checked){
                    $("#grantGrid").datagrid("selectRow",i);
                }
            }
        },
        toolbar:[{
            text:'提交',
            iconCls:'icon-ok',
            handler:function(){
                var userid= $("#userid").val();
                var authids=[];
                var checked=$("#grantGrid").datagrid("getSelections");
                if(checked.length==0){
                    $.messager.alert("提示","请选择权限！");
                    return;
                }
                for(var i=0; i<checked.length; i++){
                    authids.push(checked[i].id);
                }
                $.ajax({
                    url:ctx+"/user/grant",
                    data:{
                        userid:userid,
                        authids:authids
                    },
                    traditional:true,
                    type:"post",
                    dataType:"json",
                    success:function(result){
                        if(result.success){
                            $.messager.alert("提示","操作成功！");
                        }else{
                            $.messager.alert("提示",result.info);
                        }
                        $("#grantWin").window("close");
                    }
                })


            }
        },'-',{
            text:'取消',
            iconCls:'icon-cancel',
            handler:function(){
                $("#grantWin").window("close");
            }
        }],
        columns:[[
            {field:'id',checkbox:true},
            {field:'name',title:'权限名称',width:100},

        ]]
    })
}

function initGrantWin(){
    $("#grantWin").window({
        title:"授权窗口",
        modal:true,
        iconCls:'icon-save',
        width:300,
        height:450,
        closed:true,
        collapsible:false,
        minimizable:false,
        maximizable:false
    });
}

function showGrantWin(id){
    $("#grantWin").window("open");
    initGrantGrid();
    $("#grantGrid").datagrid("options").queryParams={
        id:id
    }
    $("#grantGrid").datagrid("options").url=ctx+"/user/queryAuth";
    $("#grantGrid").datagrid("load");
}

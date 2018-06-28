package com.oaec.qiche.controller;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.oaec.qiche.entity.Qiche;
import com.oaec.qiche.entity.User01;
import com.oaec.qiche.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller("usercontroller")
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;

    /*前台通过url到这里判断登录*/
    @ResponseBody
    @RequestMapping(value = "/login",produces = "text/html;charset=UTF-8")
    public String login(User01 user01,
                        HttpSession session){
        User01 login = userService.login(user01);
        JSONObject json=new JSONObject();
        if(login!=null){
            session.setAttribute("username",user01.getUsername());
            json.put("success",true);
            json.put("info","登录成功");
        }else{
            json.put("success",false);
            json.put("info","用户名或密码错误，请重新登录");
        }
        return json.toJSONString();
    }
/*登录成功页面跳转带main.jsp*这个是转发请求*/
    @RequestMapping("/index")
    public String index(){
        return "main";
    }
/*退出登录会返回登录页面用到重定向*/
    @RequestMapping("/logout")
    public String logout(HttpSession session){
        session.invalidate();
        return "redirect:/login.jsp";
    }
/*页面的首页*/
    @RequestMapping("/index01")
    public String index01(){
        return "index";
    }
/*汽车的信息*/
    @RequestMapping("/select")
    public String select(){
        return "select";
    }

/*汽车信息的查询*/
    @ResponseBody
    @RequestMapping(value = "/query",produces = "text/html;charset=UTF-8")
    public String query(Qiche qiche,
                        @RequestParam("page") int page,
                        @RequestParam("rows") int rows){
        Page pp= PageHelper.startPage(page,rows);
        List<Map<String,Object>> list=userService.query(qiche);
        long total=pp.getTotal();
        JSONObject json= new JSONObject();
        json.put("total",total);
        json.put("rows",list);
        return json.toJSONString();
    }

/*汽车信息的更新与增加*/
    @ResponseBody
    @RequestMapping(value = "/saveOrUpdate",produces = "text/html;charset=UTF-8")
    public String saveOrUpdate(Qiche qiche,
                        HttpSession session){
        Qiche qc = userService.queryqc(qiche);
        System.out.println("++++++++++++++++++"+qc);

        JSONObject json=new JSONObject();
        if(qc!=null){
            int i = userService.updateqc(qiche);
            if(i>0){json.put("success", true);
                json.put("info", "更新成功");
            }else{
                json.put("success",false);
                json.put("info","网络错误请重新添加");
            }

        }else{
            int i = userService.addqc(qiche);
            if(i>0) {
                json.put("success", true);
                json.put("info", "添加成功");
            }else{
                json.put("success",false);
                json.put("info","网络错误请重新添加");
            }
        }
        return json.toJSONString();
    }
}

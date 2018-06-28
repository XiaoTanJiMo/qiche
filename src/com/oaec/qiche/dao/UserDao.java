package com.oaec.qiche.dao;

import com.oaec.qiche.entity.Qiche;
import com.oaec.qiche.entity.User01;

import java.util.List;
import java.util.Map;
/*这是个接口*/
public interface UserDao {
/*登录*/
    public User01 login(User01 user01);
/*汽车信息*/
    public List<Map<String,Object>> query(Qiche qiche);
/*查询汽车的信息*/
    public Qiche queryqc(Qiche qiche);
/*汽车的增加*/
    public int addqc(Qiche qiche);
/*汽车信息的修改*/
    public  int updateqc(Qiche qiche);

}

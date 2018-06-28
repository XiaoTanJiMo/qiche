package com.oaec.qiche.service;

import com.oaec.qiche.entity.Qiche;
import com.oaec.qiche.entity.User01;

import java.util.List;
import java.util.Map;
/*这也是接口*/
/*同UserDao中一样*/
public interface UserService {

    public User01 login(User01 user01);

    public List<Map<String,Object>> query(Qiche qiche);


    public Qiche queryqc(Qiche qiche);

    public int addqc(Qiche qiche);

    public int updateqc(Qiche qiche);
}

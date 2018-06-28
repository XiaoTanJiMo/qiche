package com.oaec.qiche.serviceImpl;

import com.oaec.qiche.dao.UserDao;
import com.oaec.qiche.entity.Qiche;
import com.oaec.qiche.entity.User01;
import com.oaec.qiche.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;
/*这个类用于实现接口UserServce*/
@Service("userservice")
public class UserServiceImpl implements UserService {
/*依赖注入*/
    @Resource
    private UserDao userDao;
/*调用的接口中的方法*/
    @Override
    public List<Map<String, Object>> query(Qiche qiche) {
        return userDao.query(qiche);
    }

    @Override
    public Qiche queryqc(Qiche qiche) {
        return userDao.queryqc(qiche);
    }

    @Override
    public int updateqc(Qiche qiche) {
        return userDao.updateqc(qiche);
    }

    @Override
    public int addqc(Qiche qiche) {
        return userDao.addqc(qiche);
    }

    @Override
    public User01 login(User01 user01) {
        return userDao.login(user01);
    }
}

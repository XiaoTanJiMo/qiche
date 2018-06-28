/*汽车的实体类要与数据库的表名和列明一样*/
package com.oaec.qiche.entity;


import java.sql.Timestamp;

public class Qiche {

  /*属性也是数据库的列明*/
  private Integer id;//编号
  private String pinpai;//汽车品牌
  private String xinghao;//汽车的型号
  private String jiage;//汽车的价格
  private String miaoshu;//汽车的描述
  private Timestamp times;//创建时间

  /*toString方法，用于返回值*/
  @Override
  public String toString() {
    return "Qiche{" +
            "id=" + id +
            ", pinpai='" + pinpai + '\'' +
            ", xinghao='" + xinghao + '\'' +
            ", jiage='" + jiage + '\'' +
            ", miaoshu='" + miaoshu + '\'' +
            ", times=" + times +
            '}';
  }
/*无惨构造方法，可直接调用*/
  public Qiche() {
  }
/*有惨构造方法，可直接调用*/
  public Qiche(Integer id, String pinpai, String xinghao, String jiage, String miaoshu, Timestamp times) {

    this.id = id;
    this.pinpai = pinpai;
    this.xinghao = xinghao;
    this.jiage = jiage;
    this.miaoshu = miaoshu;
    this.times = times;
  }
/*给属性get和set方法用于获取值和赋值*/
  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public String getPinpai() {
    return pinpai;
  }

  public void setPinpai(String pinpai) {
    this.pinpai = pinpai;
  }


  public String getXinghao() {
    return xinghao;
  }

  public void setXinghao(String xinghao) {
    this.xinghao = xinghao;
  }


  public String getJiage() {
    return jiage;
  }

  public void setJiage(String jiage) {
    this.jiage = jiage;
  }


  public String getMiaoshu() {
    return miaoshu;
  }

  public void setMiaoshu(String miaoshu) {
    this.miaoshu = miaoshu;
  }


  public Timestamp getTimes() {
    return times;
  }

  public void setTimes(Timestamp times) {
    this.times = times;
  }

}

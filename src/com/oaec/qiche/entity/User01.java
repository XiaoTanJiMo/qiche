/*用户的实体类要与数据库的表名和列明一样*/
/*与qicheshi是一样的*/
package com.oaec.qiche.entity;


public class User01 {

  private long id;
  private String username;
  private String password;

  @Override
  public String toString() {
    return "User01{" +
            "id=" + id +
            ", username='" + username + '\'' +
            ", password='" + password + '\'' +
            '}';
  }

  public User01(long id, String username, String password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  public User01() {

  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }


  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

}

package com.aladdin.manage.employee.bean;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 人员  类
 * 
 * @author lb
 */
public class Employee {

    private String id;// 编号
    private String name;// 姓名
    private String password;// 登录密码ID
    private String citizenNo;
    private String sex;
    private String photoUri;
    private String position;// 职位
    @JsonFormat(locale="zh",timezone="GMT+8",pattern="yy-MM-dd")
    private Date birth;
    private String nation;
    private String polity;// 政治面貌
    private String marriage;// 婚姻状态
    private String phone;
    private String officeNo;
    private String email;
    private String education;// 学历
    private String degree;// 学位
    private Date contractStart;// 合同起始时间
    private Date contractEnd;// 合同结束时间
    private String createUser;// 创建人
    private Date createTime;// 创建时间
    private Date modifyUser;// 修改人
    private Date modifyTime;// 修改时间
    private String state;// 在职状态
    private String notes;// 说明
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getCitizenNo() {
        return citizenNo;
    }
    public void setCitizenNo(String citizenNo) {
        this.citizenNo = citizenNo;
    }
    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
    public String getPhotoUri() {
        return photoUri;
    }
    public void setPhotoUri(String photoUri) {
        this.photoUri = photoUri;
    }
    public String getPosition() {
        return position;
    }
    public void setPosition(String position) {
        this.position = position;
    }
    public Date getBirth() {
        return birth;
    }
    public void setBirth(Date birth) {
        this.birth = birth;
    }
    public String getNation() {
        return nation;
    }
    public void setNation(String nation) {
        this.nation = nation;
    }
    public String getPolity() {
        return polity;
    }
    public void setPolity(String polity) {
        this.polity = polity;
    }
    public String getMarriage() {
        return marriage;
    }
    public void setMarriage(String marriage) {
        this.marriage = marriage;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getOfficeNo() {
        return officeNo;
    }
    public void setOfficeNo(String officeNo) {
        this.officeNo = officeNo;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getEducation() {
        return education;
    }
    public void setEducation(String education) {
        this.education = education;
    }
    public String getDegree() {
        return degree;
    }
    public void setDegree(String degree) {
        this.degree = degree;
    }
    public Date getContractStart() {
        return contractStart;
    }
    public void setContractStart(Date contractStart) {
        this.contractStart = contractStart;
    }
    public Date getContractEnd() {
        return contractEnd;
    }
    public void setContractEnd(Date contractEnd) {
        this.contractEnd = contractEnd;
    }
    public String getCreateUser() {
        return createUser;
    }
    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }
    public Date getCreateTime() {
        return createTime;
    }
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
    public Date getModifyUser() {
        return modifyUser;
    }
    public void setModifyUser(Date modifyUser) {
        this.modifyUser = modifyUser;
    }
    public Date getModifyTime() {
        return modifyTime;
    }
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getNotes() {
        return notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }
    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", password=" + password + ", citizenNo=" + citizenNo
                + ", sex=" + sex + ", photoUri=" + photoUri + ", position=" + position + ", birth=" + birth
                + ", nation=" + nation + ", polity=" + polity + ", marriage=" + marriage + ", phone=" + phone
                + ", officeNo=" + officeNo + ", email=" + email + ", education=" + education + ", degree=" + degree
                + ", contractStart=" + contractStart + ", contractEnd=" + contractEnd + ", createUser=" + createUser
                + ", createTime=" + createTime + ", modifyUser=" + modifyUser + ", modifyTime=" + modifyTime
                + ", state=" + state + ", notes=" + notes + "]";
    }
    
}

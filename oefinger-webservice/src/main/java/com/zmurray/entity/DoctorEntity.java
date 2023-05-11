package com.zmurray.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "doctors", schema = "oefinger_dental")
public class DoctorEntity extends PanacheEntity {
    @Id
    @Column(name = "dr_id")
    private long doctorId;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "practice_group_id")
    private int practiceGroupId;

}

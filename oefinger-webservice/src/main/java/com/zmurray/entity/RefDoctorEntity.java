package com.zmurray.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ref_doctors", schema = "oefinger_dental")
public class RefDoctorEntity extends PanacheEntity {
    @Id
    @Column(name = "ref_dr_id")
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

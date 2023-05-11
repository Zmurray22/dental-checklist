package com.zmurray.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ref_office", schema = "oefinger_dental")
public class RefOfficeEntity {
    @Id
    @Column(name = "ref_office_id")
    private long officeId;

    @Column(name = "practice_group_id")
    private int practiceGroupId;

    @Column(name = "phone")
    private String phone;

    @Column(name = "fax")
    private String fax;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    private String email;

    @Column(name = "title")
    private String guardian;

}

package com.zmurray.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "patients", schema = "oefinger_dental")
public class PatientEntity {
    @Id
    @Column(name = "patient_id")
    private long patientId;

    @Column(name = "first_name")
    private String firstname;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "address")
    private String address;

    @Column(name = "guardian")
    private String guardian;

    @Column(name = "dr_id")
    private int doctorId;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "address_opt")
    private String addressOpt;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "zipcode")
    private String zipcode;

}

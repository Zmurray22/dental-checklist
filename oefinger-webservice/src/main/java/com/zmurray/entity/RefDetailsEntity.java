package com.zmurray.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.*;

@Entity
@Table(name = "referral_details", schema = "oefinger_dental")
public class RefDetailsEntity extends PanacheEntity {
    @Id
    @Column(name = "detail_id")
    private long detailId;

    @Column(name = "patient_id")
    private long patientId;

    @Column(name = "dr_id")
    private long doctorId;

    @Column(name = "ref_dr_id")
    private long refDoctorId;

    @Column(name = "reason")
    private String reason;

    @Column(name = "reason_detail")
    private String details;

    @Column(name = "existing_apt")
    private boolean hasExistingApt;

    @Column(name = "call_before")
    private boolean hasCallBefore;

    @Column(name = "office_id")
    private long officeId;

    @Column(name = "ref_office_id")
    private long refOfficeId;

}

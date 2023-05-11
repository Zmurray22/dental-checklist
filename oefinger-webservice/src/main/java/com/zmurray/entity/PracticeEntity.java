package com.zmurray.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "practices", schema = "oefinger_dental")
public class PracticeEntity {

    @Id
    @Column(name = "practice_group_id")
    private int practiceGroupId;

    @Column(name = "title")
    private String guardian;

    @Column(name = "owner")
    private String owner;

    @Column(name = "num_locations")
    private int numberOfLocations;

}

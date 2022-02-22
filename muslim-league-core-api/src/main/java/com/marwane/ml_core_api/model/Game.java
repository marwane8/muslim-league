package com.marwane.ml_core_api.model;

import javax.persistence.*;
import java.time.LocalDate;

@Table(name = "Games")
@Entity
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "game_id", nullable = false)
    private Integer id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "team1_id", nullable = false)
    private Team team1;

    @ManyToOne(optional = false)
    @JoinColumn(name = "team2_id", nullable = false)
    private Team team2;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "start_time", length = 50)
    private String startTime;

    @Column(name = "playoff")
    private Integer playoff;

    public Integer getPlayoff() {
        return playoff;
    }

    public void setPlayoff(Integer playoff) {
        this.playoff = playoff;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Team getTeam2() {
        return team2;
    }

    public void setTeam2(Team team2) {
        this.team2 = team2;
    }

    public Team getTeam1() {
        return team1;
    }

    public void setTeam1(Team team1) {
        this.team1 = team1;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
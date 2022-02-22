package com.marwane.ml_core_api.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Set;

@Table(name = "Teams", indexes = {
        @Index(name = "team_captian_idx", columnList = "team_captain")
})
@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_id", nullable = false)
    private Integer id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "season_id", nullable = false)
    private Season season;

    @Column(name = "team_name", nullable = false, length = 100)
    private String teamName;

    @ManyToOne
    @JoinColumn(name = "team_captain")
    private Player teamCaptain;

    @Column(name = "wins")
    private Integer wins;

    @Column(name = "losses")
    private Integer losses;

    @Column(name = "PF")
    private Integer pointsFor;

    @Column(name = "PA")
    private Integer pointsAgainst;

    @ManyToMany
    @JsonManagedReference
    @JoinTable(name = "teamsplayers",
            joinColumns = @JoinColumn(name = "team_id"),
            inverseJoinColumns = @JoinColumn(name = "player_id"))
    Set<Player> players;

    public Integer getPointsFor() {
        return pointsFor;
    }

    public void setPointsFor(Integer pointsFor) {
        this.pointsFor = pointsFor;
    }

    public Integer getPointsAgainst() {
        return pointsAgainst;
    }

    public void setPointsAgainst(Integer pointsAgainst) {
        this.pointsAgainst = pointsAgainst;
    }

    public Integer getLosses() {
        return losses;
    }

    public void setLosses(Integer losses) {
        this.losses = losses;
    }

    public Integer getWins() {
        return wins;
    }

    public void setWins(Integer wins) {
        this.wins = wins;
    }

    public Player getTeamCaptain() {
        return teamCaptain;
    }

    public void setTeamCaptain(Player teamCaptain) {
        this.teamCaptain = teamCaptain;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Season getSeason() {
        return season;
    }

    public void setSeason(Season season) {
        this.season = season;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Team{" +
                "id=" + id +
                ", season=" + season +
                ", teamName='" + teamName + '\'' +
                ", teamCaptain=" + teamCaptain +
                ", wins=" + wins +
                ", losses=" + losses +
                ", pointsFor=" + pointsFor;
    }
}
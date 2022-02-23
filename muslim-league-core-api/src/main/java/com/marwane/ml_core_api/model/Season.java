package com.marwane.ml_core_api.model;

import javax.persistence.*;

@Entity
public class Season {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "season_id", nullable = false)
    private Integer id;

    @Column(name = "season_name")
    private String seasonName;

    @Column(name = "year")
    private Integer year;

    public String getSeasonName() {
        return seasonName;
    }

    public void setSeasonName(String season) {
        seasonName = season;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        year = year;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Season{" +
                "id=" + id +
                ", SeasonName='" + seasonName + '\'' +
                ", Year=" + year +
                '}';
    }
}
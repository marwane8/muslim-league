package com.marwane.ml_core_api.controller;

import com.marwane.ml_core_api.model.Team;
import com.marwane.ml_core_api.service.teams.TeamsRepository;
import com.marwane.ml_core_api.service.teams.TeamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/seasons")
public class SeasonsController {

    @Autowired
    private TeamsService teamsService;
    @Autowired
    private TeamsRepository teamsRepository;

    @GetMapping("{seasonID}/teams")
    public List<Team> getTeams(@PathVariable("seasonID") int SeasonID) { return teamsService.getAllTeams(SeasonID);}
}

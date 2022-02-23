package com.marwane.ml_core_api.controller;

import com.marwane.ml_core_api.controller.requests.TeamRequest;
import com.marwane.ml_core_api.model.Team;
import com.marwane.ml_core_api.model.view.roster;
import com.marwane.ml_core_api.service.teams.TeamsRepository;
import com.marwane.ml_core_api.service.teams.TeamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/teams")
public class TeamsController {

    @Autowired
    private TeamsService teamsService;

    @Autowired
    private TeamsRepository teamsRepository;

    @PostMapping
    public Team insertTeam(@RequestBody TeamRequest teamRequest){
        return teamsService.insertTeam(teamRequest);
    }

    @GetMapping("{teamID}")
    public List<roster> getTeam(@PathVariable("teamID") int TeamID){
        return teamsService.getTeam(TeamID);
    }

    @GetMapping("leaders")
    public List<Team> getLeaderboard(){
        return teamsService.getLeaderboard();
    }

}

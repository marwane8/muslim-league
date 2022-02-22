package com.marwane.ml_core_api.service.teams;


import com.marwane.ml_core_api.controller.requests.TeamRequest;
import com.marwane.ml_core_api.model.Team;
import com.marwane.ml_core_api.model.view.roster;

import java.util.List;

public interface TeamsService {
    List<roster> getTeams(int TeamID);
    List<Team> getLeaderboard();
    Team insertTeam(TeamRequest teamRequest);
}

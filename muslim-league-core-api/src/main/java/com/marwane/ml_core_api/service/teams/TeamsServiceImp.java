package com.marwane.ml_core_api.service.teams;

import com.marwane.ml_core_api.controller.requests.TeamRequest;
import com.marwane.ml_core_api.model.Season;
import com.marwane.ml_core_api.model.Team;
import com.marwane.ml_core_api.model.view.roster;
import com.marwane.ml_core_api.service.players.PlayersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TeamsServiceImp implements TeamsService {

    @Autowired
    TeamsRepository teamsRepository;

    @Autowired
    PlayersRepository playersRepository;

    @Autowired
    SeasonsRepository seasonsRepository;

    @Override
    public List<roster> getTeam(int TeamID) {
        List<roster> roster = teamsRepository.getRoster();

        //Return players on roster by team id
        return roster.stream()
                .filter(player -> player.getTeam_id() == TeamID)
                .collect(Collectors.toList());
    }

    public List<Team> getAllTeams(Integer year, String seasonName){
        List<Season> seasons = seasonsRepository.findByYearAndSeasonName(year, seasonName);
        Season season = seasons.get(0);
        return teamsRepository.findBySeason(season);
    }

    public List<Team> getLeaderboard() {

        List<Team> standing = (List<Team>) teamsRepository.findAll();

        //Ranking Algorithm
        Comparator<Team> ranking = (team1, team2) -> {

            //Sort by team wins
            Integer wins1 = team1.getWins();
            Integer wins2 = team1.getWins();
            int winCompare = wins1.compareTo(wins2) * -1;

            if (winCompare != 0) {
                return winCompare;
            }

            //If it is a tie, compare point differential
            Integer score1, score2;
            score1 = team1.getPointsFor() - team1.getPointsAgainst();
            score2 = team2.getPointsFor() - team2.getPointsAgainst();
            return score1.compareTo(score2) * -1;
        };

        Collections.sort(standing, ranking);

        return standing;
    }

    @Override
    public Team insertTeam(TeamRequest teamRequest) {
        Team team = new Team();
        team.setSeason(seasonsRepository.findById(teamRequest.seasonID)
                .orElseThrow(()-> new EntityNotFoundException()));
        team.setTeamCaptain(playersRepository.findById(teamRequest.teamCaptainID)
                .orElseThrow(()-> new EntityNotFoundException()));
        team.setTeamName(teamRequest.teamName);
        return teamsRepository.save(team);
    }

}


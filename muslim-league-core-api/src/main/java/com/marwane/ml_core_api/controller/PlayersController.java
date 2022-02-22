package com.marwane.ml_core_api.controller;

import com.marwane.ml_core_api.controller.requests.PlayerRequest;
import com.marwane.ml_core_api.model.Player;
import com.marwane.ml_core_api.model.view.playerTotals;
import com.marwane.ml_core_api.service.players.PlayersService;
import com.marwane.ml_core_api.service.players.StatType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/players")
public class PlayersController {

    @Autowired
    private PlayersService playersService;

    @PostMapping
    public Player insertTeam(@RequestBody PlayerRequest playerRequest){
        return playersService.insertPlayer(playerRequest);
    }

    @GetMapping("leaders/points")
    public List<playerTotals> getPointLeaders(){
        return playersService.getLeaderboard(StatType.POINTS);
    }

    @GetMapping("leaders/rebounds")
    public List<playerTotals> getReboundLeaders(){
        return playersService.getLeaderboard(StatType.REBOUNDS);
    }
}

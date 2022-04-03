package com.marwane.ml_core_api.controller;

import com.marwane.ml_core_api.model.view.playerTotals;
import com.marwane.ml_core_api.model.view.schedule;
import com.marwane.ml_core_api.service.games.GamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/games")
public class GamesController {

    @Autowired
    private GamesService gamesService;

    @GetMapping
    public List<schedule> Games() { return gamesService.getGames(); }

    @GetMapping("{gameID}/stats")
    //@PreAuthorize("hasRole('ADMIN')")
    public List<playerTotals> getBoxScore(@PathVariable("gameID") int GameID ) { return gamesService.getBoxScore(GameID); }

    @PostMapping("{gameID}/stats")
    public List<playerTotals> inputStatistics(@PathVariable("gameID") int GameID ) { return gamesService.inputGameStatistics(GameID); }

}

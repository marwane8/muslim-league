package com.marwane.ml_core_api.service.players;

import com.marwane.ml_core_api.controller.requests.PlayerRequest;
import com.marwane.ml_core_api.model.Player;
import com.marwane.ml_core_api.model.view.playerTotals;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class PlayersServiceImp implements PlayersService{

    @Autowired
    private PlayersRepository playersRepository;

    @Override
    public Player insertPlayer(PlayerRequest playerRequest) {

        
        Player player = new Player();

        player.setPlayerName(playerRequest.player_name);
        player.setPlayerNumber(playerRequest.player_number);
        player.setPlayerPos(playerRequest.player_pos);

        return playersRepository.save(player);

    }

    @Override
    public List<playerTotals> getLeaderboard(StatType statType) {
        List<playerTotals> leaderBoard = playersRepository.getLeaderboard();

        List<playerTotals> Leaders = new ArrayList<>();

        switch (statType) {
            case POINTS:
                leaderBoard.sort(Comparator.comparing(playerTotals::getPoints).reversed());
                break;
            case REBOUNDS:
                leaderBoard.sort(Comparator.comparing(playerTotals::getRebounds).reversed());
                break;
        }

        for (int player = 0; player < 5; player++) {
            Leaders.add(leaderBoard.get(player));
        }
        return Leaders;
      }
    }

package com.marwane.ml_core_api.service.games;

import com.marwane.ml_core_api.model.view.playerTotals;
import com.marwane.ml_core_api.model.view.schedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
class GamesServiceImp implements GamesService {
    @Autowired
    GameRepository gameRepository;

    @Override
    public List<schedule> getGames() {

        return gameRepository.getSchedule();
    }

    @Override
    public List<playerTotals> getBoxScore(int GameID){
        //TODO: make game ID functional
        return gameRepository.BoxScore();
    }

    @Override
    public List<playerTotals> inputGameStatistics(int GameID) {
        //TODO: Implement here
        return null;
    }
}

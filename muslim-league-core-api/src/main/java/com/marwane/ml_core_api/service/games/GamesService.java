package com.marwane.ml_core_api.service.games;


import com.marwane.ml_core_api.model.view.playerTotals;
import com.marwane.ml_core_api.model.view.schedule;

import java.util.List;

public interface GamesService {
    List<schedule> getGames();
    List<playerTotals> getBoxScore(int GameID);
    List<playerTotals> inputGameStatistics(int GameID);
}

package com.marwane.ml_core_api.service.players;


import com.marwane.ml_core_api.controller.requests.PlayerRequest;
import com.marwane.ml_core_api.model.Player;
import com.marwane.ml_core_api.model.view.playerTotals;

import java.util.List;

public interface PlayersService {

    Player insertPlayer(PlayerRequest playerRequest);

    List<playerTotals> getLeaderboard(StatType statType);
}

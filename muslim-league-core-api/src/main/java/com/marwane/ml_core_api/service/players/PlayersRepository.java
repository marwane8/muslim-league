package com.marwane.ml_core_api.service.players;

import com.marwane.ml_core_api.model.Player;
import com.marwane.ml_core_api.model.view.playerTotals;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlayersRepository extends CrudRepository<Player,Integer> {
    @Query(nativeQuery = true, value = "SELECT * FROM player_totals")
    List<playerTotals> getLeaderboard();
}

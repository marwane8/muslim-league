package com.marwane.ml_core_api.service.games;

import com.marwane.ml_core_api.model.Game;
import com.marwane.ml_core_api.model.view.playerTotals;
import com.marwane.ml_core_api.model.view.schedule;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface GameRepository extends CrudRepository<Game,Integer> {

    @Query(nativeQuery = true, value = "SELECT * FROM player_statistics")
    List<playerTotals> BoxScore();

    @Query(nativeQuery = true, value = "SELECT * FROM schedule")
    List<schedule> getSchedule();
}

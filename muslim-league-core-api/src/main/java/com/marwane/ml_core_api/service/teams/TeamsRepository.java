package com.marwane.ml_core_api.service.teams;

import com.marwane.ml_core_api.model.Season;
import com.marwane.ml_core_api.model.Team;
import com.marwane.ml_core_api.model.view.roster;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TeamsRepository extends CrudRepository<Team,Integer> {

    List<Team> findBySeason(Season season);

@Query(nativeQuery = true, value = "SELECT * FROM roster")
    List<roster> getRoster();
}

package com.marwane.ml_core_api.service.teams;

import com.marwane.ml_core_api.model.Season;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SeasonsRepository extends CrudRepository<Season,Integer> {

    public List<Season> findByYearAndSeasonName(Integer year,String seasonName);
}

package com.marwane.ml_core_api.service.teams;

import com.marwane.ml_core_api.model.Season;
import org.springframework.data.repository.CrudRepository;

public interface SeasonsRepository extends CrudRepository<Season,Integer> {
}

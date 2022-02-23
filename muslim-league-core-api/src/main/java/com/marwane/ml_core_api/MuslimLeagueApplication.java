package com.marwane.ml_core_api;

import com.marwane.ml_core_api.model.Season;
import com.marwane.ml_core_api.model.Team;
import com.marwane.ml_core_api.service.teams.SeasonsRepository;
import com.marwane.ml_core_api.service.teams.TeamsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@SpringBootApplication
public class MuslimLeagueApplication implements CommandLineRunner {


	private static final Logger log = (Logger) LoggerFactory.getLogger(MuslimLeagueApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(MuslimLeagueApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		log.info("<---- COMMAND LINE APP ---->");
	}
}

package com.marwane.ml_core_api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class MuslimLeagueApplication implements CommandLineRunner {


	private static final Logger log = LoggerFactory.getLogger(MuslimLeagueApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(MuslimLeagueApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		log.info("<---- COMMAND LINE APP ---->");
	}
}

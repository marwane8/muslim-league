package com.marwane.ml_core_api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest
class MuslimLeagueApplicationTests {

	@Autowired
	private PasswordEncoder encoder;

	@Test
	void contextLoads() {
		System.out.println("Password is: ");
		System.out.println(encoder.encode("password"));
	}
}

package com.marwane.ml_core_api.controller;

import com.marwane.ml_core_api.controller.requests.LoginRequest;
import com.marwane.ml_core_api.model.User;
import com.marwane.ml_core_api.security.JwtTokenUtil;
import com.marwane.ml_core_api.service.accounts.RoleRepository;
import com.marwane.ml_core_api.service.accounts.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {


    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @PostMapping("/login")
    public Optional<User> login(@RequestBody LoginRequest login) {

        Optional<User> admin  = userRepository.findByUsernameOrEmail("muslimleaguect@gmail.com","muslimleaguect@gmail.com");
        return admin;
    }
}
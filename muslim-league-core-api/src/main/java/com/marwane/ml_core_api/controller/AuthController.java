package com.marwane.ml_core_api.controller;

import com.marwane.ml_core_api.controller.requests.LoginRequest;
import com.marwane.ml_core_api.security.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest login) {

        String jwt = jwtTokenUtil.makeToken();
        return jwt;
    }

}

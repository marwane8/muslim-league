package com.marwane.ml_core_api.controller;

import com.marwane.ml_core_api.controller.requests.LoginRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public LoginRequest login(@RequestBody LoginRequest login) {
        return login;
    }

}

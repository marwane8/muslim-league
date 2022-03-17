package com.marwane.ml_core_api.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenUtil {

    private static final Logger logger = LoggerFactory.getLogger(JwtTokenUtil.class);

    @Value("${jwt.secret}")
    private String jwtSecret;

    private static final long JWT_TOKEN_EXP = 5 * 60 * 60 * 1000;
    Date expirationDate = new Date(System.currentTimeMillis() + JWT_TOKEN_EXP);
    public String makeToken(){

        return Jwts.builder()
                .setSubject("hello")
                .setIssuedAt(new Date())
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512,jwtSecret)
                .compact();
    }


}

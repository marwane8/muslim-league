package com.marwane.ml_core_api.security;

import com.marwane.ml_core_api.config.UserPrincipal;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenUtil {

    private static final Logger logger = LoggerFactory.getLogger(JwtTokenUtil.class);

    @Value("${jwt.secret}")
    private String jwtSecret;

    private static final long JWT_TOKEN_DURATION = 5 * 60 * 60 * 1000;

    Date expirationDate = new Date(System.currentTimeMillis() + JWT_TOKEN_DURATION);

    public String generateToken(Authentication authentication){

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(Long.toString(userPrincipal.getId()))
                .setIssuedAt(new Date())
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512,jwtSecret)
                .compact();
    }

    public Long getUserId(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody();
        return Long.getLong(claims.getSubject());
    }

    public boolean validate(String token) {
       try {
           Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
           return true;
       } catch (SignatureException ex) {
           logger.error("Invalid JWT signature - {}", ex.getMessage());
       } catch (MalformedJwtException ex) {
           logger.error("Invalid JWT token - {}", ex.getMessage());
       } catch (ExpiredJwtException ex) {
           logger.error("Expired JWT token - {}", ex.getMessage());
       } catch (UnsupportedJwtException ex) {
           logger.error("Unsupported JWT token - {}", ex.getMessage());
       } catch (IllegalArgumentException ex) {
           logger.error("JWT claims string is empty - {}", ex.getMessage());
       }
       return false;

    }




}

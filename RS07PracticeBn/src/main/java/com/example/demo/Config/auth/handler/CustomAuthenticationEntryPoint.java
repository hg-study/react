package com.example.demo.Config.auth.handler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URLEncoder;

// =======================================
// 인증 진입점
// 미인증 접근 시 처리
// =======================================

// 로그인하지 않은 사용자가 인증이 필요한 주소에 접근할 때 실행됨
@Slf4j
@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        log.info("CustomAuthenticationEntryPoint's commence invoke.."+authException.getMessage());
        response.sendRedirect("/login?error="+ URLEncoder.encode(authException.getMessage(),"utf-8"));

    }
}

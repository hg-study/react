package com.example.demo.Config.auth.handler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URLEncoder;

// =======================================
// 로그인 실패 핸들러
// 로그인 실패 시 처리
// =======================================

// 로그인 실패(아이디 없음, 비밀번호 불일치) 시 실행됨
@Slf4j
@Component
public class CustomLoginFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        log.info("CustomFailureHandler's onAuthenticationFailure invoke.."+exception.getMessage());
        response.sendRedirect("/login?error="+ URLEncoder.encode(exception.getMessage(),"utf-8"));
    }
}

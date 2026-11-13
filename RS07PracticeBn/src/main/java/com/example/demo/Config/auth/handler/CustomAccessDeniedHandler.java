package com.example.demo.Config.auth.handler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URLEncoder;

// =======================================
// 접근 거부 핸들러
// 권한 부족 시 처리
// =======================================

// 로그인은 했지만 권한이 부족한 요청이 올 때 실행됨. REST 방식이라 오류 JSON 으로 응답함
@Slf4j
@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        log.info("CustomAccessDeniedHandler's handle invoke....");
        response.sendRedirect("/login?error="+ URLEncoder.encode(accessDeniedException.getMessage(),"utf-8"));

    }
}

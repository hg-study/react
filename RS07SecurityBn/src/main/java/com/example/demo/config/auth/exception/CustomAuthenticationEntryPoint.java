package com.example.demo.Config.auth.exception;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;

// =======================================
// 인증 진입점
// 미인증 접근 시 처리
// =======================================

// 로그인하지 않은 사용자가 인증이 필요한 주소에 접근할 때 실행됨
@Slf4j
@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Autowired
    @Qualifier("handlerExceptionResolver")
    private HandlerExceptionResolver handlerExceptionResolver;

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) {
        log.info("CustomAuthenticationEntryPoint's commence invoke.." + authException.getMessage());
        // GlobalExceptionHandler로 위임
        handlerExceptionResolver.resolveException(request, response, null, authException);
    }
}

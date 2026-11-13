package com.example.demo.Config.auth.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

// =======================================
// 전역 예외 처리
// 인증, 권한 예외를 JSON 으로 응답
// =======================================

// @RestControllerAdvice 로 모든 컨트롤러의 예외를 한곳에서 처리하고 JSON 으로 응답함
@RestControllerAdvice
public class GlobalExceptionHandler {
    // 미인증 (401) - EntryPoint에서 위임받음
    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorResponse> handleAuthentication(AuthenticationException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new ErrorResponse("AUTH_REQUIRED", "인증이 필요합니다."));
    }

    // 권한 부족 (403) - AccessDeniedHandler도 같은 방식으로 위임했다면
    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ErrorResponse> handleAccessDenied(AccessDeniedException e) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(new ErrorResponse("ACCESS_DENIED", "권한이 없습니다."));
    }
}

package com.example.demo.Config.auth.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

// =======================================
// 오류 응답
// 오류 코드와 메시지를 담는 객체
// =======================================

// 오류를 JSON 으로 돌려줄 때 쓰는 데이터 객체
@Getter
@AllArgsConstructor
public class ErrorResponse {
    private String code;
    private String message;
}
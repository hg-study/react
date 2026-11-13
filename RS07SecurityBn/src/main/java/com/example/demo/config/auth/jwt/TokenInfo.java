package com.example.demo.Config.auth.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// =======================================
// 토큰 정보
// 발급한 토큰 묶음
// =======================================

// 발급한 access-token 과 refresh-token 을 담는 객체
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class TokenInfo {
    private String grantType;
    private String accessToken;
    private String refreshToken;
}

package com.example.demo.Config.auth.provider;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Map;

// =======================================
// 카카오 사용자 정보
// 카카오 응답을 공통 규격으로 변환
// =======================================

// 카카오 응답(id, properties, kakao_account)을 읽음
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class KakaoUserInfo implements OAuth2UserInfo{
    private Long id;
    private LocalDateTime connected_at;
    private Map<String,Object> properties;
    private Map<String,Object> kakao_account;
    @Override
    public String getName() {
        return (String)properties.get("nickname");
    }

    @Override
    public String getEmail() {
        return (String)kakao_account.get("email");
    }

    @Override
    public String getProvider() {
        return "Kakao";
    }

    @Override
    public String getProviderId() {
        return id!=null ? id.toString() : "-1";
    }

    @Override
    public Map<String, Object> getAttributes() {
        return kakao_account;
    }
}

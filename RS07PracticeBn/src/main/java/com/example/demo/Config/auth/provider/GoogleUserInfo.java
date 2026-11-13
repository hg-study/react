package com.example.demo.Config.auth.provider;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

// =======================================
// 구글 사용자 정보
// 구글 응답을 공통 규격으로 변환
// =======================================

// 구글 응답(sub, name, email)을 읽음
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GoogleUserInfo implements OAuth2UserInfo{

    Map<String,Object> attributes;

    @Override
    public String getName() {
        return (String)attributes.get("name");
    }

    @Override
    public String getEmail() {
        return (String)attributes.get("email");
    }

    @Override
    public String getProvider() {
        return "Google";
    }

    @Override
    public String getProviderId() {
        return (String)attributes.get("sub");
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }
}

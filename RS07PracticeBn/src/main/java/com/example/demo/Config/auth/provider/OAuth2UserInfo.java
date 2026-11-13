package com.example.demo.Config.auth.provider;

import java.util.Map;

// =======================================
// 소셜 사용자 정보 규격
// 제공자별 사용자 정보를 통일
// =======================================

// 제공자마다 다른 사용자 정보 형식을 같은 방식으로 꺼내기 위한 공통 규격
public interface OAuth2UserInfo {
    String getName();       //이름 반환
    String getEmail();      //접속이메일계정 반환
    String getProvider();   //PROVIDER이름 반환
    String getProviderId(); //
    Map<String,Object> getAttributes(); //!계정 정보 반환
}

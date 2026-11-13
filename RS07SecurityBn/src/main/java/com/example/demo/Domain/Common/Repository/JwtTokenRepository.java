package com.example.demo.Domain.Common.Repository;

import com.example.demo.Domain.Common.Entity.JwtToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// =======================================
// 토큰 Repository
// 토큰 조회와 삭제
// =======================================

// 토큰 기록 조회, 삭제용 쿼리 메서드
@Repository
public interface JwtTokenRepository extends JpaRepository<JwtToken,Long> {
    //accesstoken -> token정보삭제
    void deleteByAccessToken(String accessToken);
    //accesstoken -> token정보가져오기
    JwtToken findByAccessToken(String accessToken);
    //username -> token정보가져오기
    JwtToken findByUsername(String username);
}

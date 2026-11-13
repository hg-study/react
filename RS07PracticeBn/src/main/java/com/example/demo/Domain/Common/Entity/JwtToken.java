package com.example.demo.Domain.Common.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// =======================================
// 토큰 엔티티
// 발급한 토큰 기록
// =======================================

// 발급한 토큰을 저장하는 테이블
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class JwtToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT",nullable = false)
    private String accessToken;
    @Column(columnDefinition = "TEXT",nullable = false)
    private String refreshToken;
    @Column
    private String username;
    @Column
    private String auth; // "ROLE_USER,ROLE_ADMIN"
    @Column(name="createdAt",columnDefinition = "DATETIME",nullable = false)
    private LocalDateTime createAt;
}

package com.example.demo.Domain.Common.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

// =======================================
// 서명 키 엔티티
// 서명용 비밀 키 저장
// =======================================

// 토큰 서명 키를 저장하는 테이블
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Signature {
    @Id
    @Column(name="signKey")
    private byte[] keyBytes;
    @Column(name="createAt")
    private LocalDate createAt;
}

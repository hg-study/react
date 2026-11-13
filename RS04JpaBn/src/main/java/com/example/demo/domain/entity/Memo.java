package com.example.demo.domain.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// =======================================
// 메모 엔티티
// memo 테이블과 매핑
// =======================================

// 엔티티 : memo 테이블과 매핑되는 클래스. @Id 가 기본키이고 IDENTITY 는 DB 의 auto_increment 를 사용
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Memo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String text;
    private String writer;
    private LocalDateTime regdate;

}

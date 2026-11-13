package com.example.demo.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// =======================================
// 사람 DTO
// 이름, 나이, 주소
// =======================================

// 사람 데이터 객체
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Person {
	private String name;
	private int age;
	private String addr;	
}

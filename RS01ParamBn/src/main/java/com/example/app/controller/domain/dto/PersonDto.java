package com.example.app.controller.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// =======================================
// 사람 DTO
// 이름, 나이, 주소
// =======================================

// 파라미터를 담는 DTO. Lombok 이 getter, setter, 생성자를 만들어 줌
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonDto {
    private String name;
    private Integer age;
    private String addr;
}

package com.example.demo.Domain.Common.Dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// =======================================
// 사용자 DTO
// 계정 정보 전달 객체
// =======================================

// 로그인과 회원가입 값을 옮기는 DTO
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {
    private String username;
    private String password;
    private String role;
}

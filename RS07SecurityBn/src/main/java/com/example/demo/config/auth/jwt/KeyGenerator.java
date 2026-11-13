package com.example.demo.Config.auth.jwt;


import java.security.SecureRandom;

// =======================================
// 키 생성기
// 서명용 난수 키 생성
// =======================================

// 토큰 서명에 쓸 256비트 난수 키를 만듦
public class KeyGenerator {

    public static byte[] keyGen()
    {
        SecureRandom secureRandom = new SecureRandom();
        byte[] keyBytes = new byte[256 / 8]; // 256비트 키 생성
        secureRandom.nextBytes(keyBytes); // 난수로 바이트 배열 생성
        System.out.println("KeyGenerator getKeygen Key: " + keyBytes);
        return keyBytes;
    }

}

package com.example.demo.Config.auth.redis;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

// =======================================
// Redis 설정값
// host, port 보관
// =======================================

// application.properties 의 Redis 주소를 읽음
@Component
@Data
public class RedisProperties {
    @Value("${spring.redis.port}")
    private int port;

    @Value("${spring.redis.host}")
    private String host;
}
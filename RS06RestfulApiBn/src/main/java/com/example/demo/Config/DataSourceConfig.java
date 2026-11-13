package com.example.demo.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// =======================================
// DataSource 설정
// 커넥션 풀 등록
// =======================================

// HikariCP 커넥션 풀을 Bean 으로 등록. password 는 본인 DB 비밀번호로 바꿔 사용
@Configuration
public class DataSourceConfig {

    @Bean
    public HikariDataSource dataSource()
    {
        return 	DataSourceBuilder.create()

                .type(HikariDataSource.class)
                .username("root")
                .password("YOUR_PASSWORD")
                .driverClassName("com.mysql.cj.jdbc.Driver")
                .url("jdbc:mysql://localhost:3306/testdb")
                .build();
    }
}

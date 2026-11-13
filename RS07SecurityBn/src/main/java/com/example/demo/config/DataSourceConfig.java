package com.example.demo.Config;


import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

// =======================================
// DataSource 설정
// 커넥션 풀 등록
// =======================================

// HikariCP 커넥션 풀을 Bean 으로 등록. password 는 본인 DB 비밀번호로 바꿔 사용
@Configuration
public class DataSourceConfig {
    @Bean
    public DataSource dataSource()
    {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/testdb");
        dataSource.setUsername("root");
        dataSource.setPassword("YOUR_PASSWORD");
        return dataSource;
    }
}

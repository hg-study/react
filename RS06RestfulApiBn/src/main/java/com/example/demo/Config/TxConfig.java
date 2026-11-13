package com.example.demo.config;

import com.zaxxer.hikari.HikariDataSource;
import jakarta.persistence.EntityManagerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaTransactionManager;

// =======================================
// 트랜잭션 설정
// JPA 트랜잭션 매니저 등록
// =======================================

// JPA 용 트랜잭션 매니저를 Bean 으로 등록
@Configuration
public class TxConfig {
    // Basic TransactionManager Settings
    @Autowired
    private HikariDataSource dataSource;

    //    JPA TransactionManager Settings
    @Bean
    public JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory);
        transactionManager.setDataSource(dataSource);
        return transactionManager;
    }

}
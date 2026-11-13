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

// 트랜잭션 매니저 설정. JPA 는 JpaTransactionManager 를 사용하고 @Transactional 이 이 매니저로 commit, rollback 을 처리함
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
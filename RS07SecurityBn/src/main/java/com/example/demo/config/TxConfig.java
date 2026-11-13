package com.example.demo.Config;

import jakarta.persistence.EntityManagerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

// =======================================
// 트랜잭션 설정
// JPA 트랜잭션 매니저 등록
// =======================================

// JPA 용 트랜잭션 매니저를 Bean 으로 등록
@Configuration
@EnableTransactionManagement
public class TxConfig {
    @Autowired
    private DataSource dataSource;
    // JPA Tx
    @Bean(name="jpaTransactionManager")
    public JpaTransactionManager jpaTransactionManager(EntityManagerFactory entityManagerFactory) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory);
        transactionManager.setDataSource(dataSource);
        return transactionManager;
    }
}

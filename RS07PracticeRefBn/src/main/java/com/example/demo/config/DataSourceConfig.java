package com.example.demo.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.zaxxer.hikari.HikariDataSource;

// =======================================
// DataSource 설정
// HikariCP 커넥션 풀 등록
// =======================================

// DataSource : DB 연결을 만들어 주는 커넥션 풀(HikariCP)을 Bean 으로 등록. password 는 본인 DB 비밀번호로 바꿔 사용
@Configuration
public class DataSourceConfig {


	@Value("${spring.datasource.classname}")
	private String DBClassName;
	@Value("${spring.datasource.url}")
	private String DBJdbcUrl;
	@Value("${spring.datasource.username}")
	private String username;
	@Value("${spring.datasource.password}")
	private String password;
	@Bean
	public HikariDataSource dataSource()
	{
		HikariDataSource dataSource = new HikariDataSource();
		dataSource.setDriverClassName(DBClassName);
		dataSource.setJdbcUrl(DBJdbcUrl);
		dataSource.setUsername(username);
		dataSource.setPassword(password);
		 
		return dataSource;
	}
	
	
}

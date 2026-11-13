package com.example.demo.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// =======================================
// 웹 MVC 설정
// 정적 자원과 업로드 폴더 경로 연결
// =======================================

// 정적 자원 경로 설정. @EnableWebMvc 를 쓰면 Boot 의 기본 정적 자원 설정이 꺼지므로 직접 지정함
// /upload/** 요청은 서버의 업로드 폴더(file:)에서 파일을 찾아 줌
@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {

    @Value("${upload.path}")
    private String uploadPath;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/js/**").addResourceLocations("classpath:/static/js/"); //.setCachePeriod(60*60*24*365);
        registry.addResourceHandler("/css/**").addResourceLocations("classpath:/static/css/"); //.setCachePeriod(60*60*24*365);
        registry.addResourceHandler("/assets/**").addResourceLocations("classpath:/static/assets/"); //.setCachePeriod(60*60*24*365);
        registry.addResourceHandler("/font/**").addResourceLocations("classpath:/static/font/");//.setCachePeriod(60*60*24*365);
        registry.addResourceHandler("/upload/**").addResourceLocations("file:/"+ uploadPath +"/");//.setCachePeriod(60*60*24*365);

    }


}
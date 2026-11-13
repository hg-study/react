package com.example.app.controller;


import com.example.app.controller.domain.dto.PersonDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Map;

// =======================================
// 파라미터 컨트롤러
// 쿼리 스트링, 경로 변수, JSON 본문을 받는 방법
// =======================================

// 파라미터를 받는 세 가지 방법을 React 에서 호출해 확인함. 결과는 JSON(Map)으로 응답
// @CrossOrigin : 다른 출처(React 개발 서버 localhost:3000)에서 오는 요청을 허용함. 브라우저는 출처가 다르면 기본적으로 응답을 막음(CORS)
@RestController
@Slf4j
@RequestMapping("/param")
@CrossOrigin(origins={"http://localhost:3000","http://127.0.0.1:3000"})
public class ParamController {

    // 01 쿼리 스트링: /param/01?name=홍길동. @RequestParam 으로 받음
    @RequestMapping(value="/01",method={RequestMethod.GET,RequestMethod.POST} , produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity< Map<String,Object>  > param01(@RequestParam(value="name",required = false)String name){
        Map<String,Object> map = new LinkedHashMap<>();
        log.info("GET/POST /param/01..." + name);

        map.put("name",name);
        map.put("status","success");

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    // 02 경로 변수: /param/02/홍길동/55/대구. 변수 이름이 DTO 필드와 같아 PersonDto 로 한 번에 받음
    @RequestMapping(value="/02/{name}/{age}/{addr}",method={RequestMethod.GET,RequestMethod.POST},produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity< Map<String,Object>  > param02(PersonDto personDto){
        Map<String,Object> map = new LinkedHashMap<>();
        log.info("GET /param/02..." + personDto);

        map.put("name",personDto.getName());
        map.put("age",personDto.getAge());
        map.put("addr",personDto.getAddr());

        return personDto==null ? new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED) : new ResponseEntity<>(map,HttpStatus.OK);
    }

    // 03 JSON 본문: @RequestBody 가 JSON 을 PersonDto 로 변환
    @PostMapping(value="/03",consumes = MediaType.APPLICATION_JSON_VALUE,produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity< Map<String,Object> > param03(@RequestBody PersonDto personDto){
        Map<String,Object> map = new LinkedHashMap<>();
        log.info("GET /param/03...");
        map.put("name",personDto.getName());
        map.put("age",personDto.getAge());
        map.put("addr",personDto.getAddr());
        map.put("status","success");

        return personDto==null ? new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED) : new ResponseEntity<>(map,HttpStatus.OK);
    }
}

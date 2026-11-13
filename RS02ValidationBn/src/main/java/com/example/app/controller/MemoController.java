package com.example.app.controller;


import com.example.app.domain.dto.MemoDto;
import com.example.app.domain.dto.PersonDto;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Map;

// =======================================
// 메모 컨트롤러
// JSON 본문을 검증하고 필드별 오류를 응답
// =======================================

// @Valid 로 검증한 결과를 필드별 오류 메시지 JSON 으로 응답함. 오류는 417(EXPECTATION_FAILED)로 알림
// @CrossOrigin : 다른 출처(React 개발 서버 localhost:3000)에서 오는 요청을 허용함. 브라우저는 출처가 다르면 기본적으로 응답을 막음(CORS)
@RestController
@Slf4j
@RequestMapping("/memo")
@CrossOrigin(origins={"http://localhost:3000","http://127.0.0.1:3000"})
public class MemoController {

    @PostMapping(value="/add",consumes = MediaType.APPLICATION_JSON_VALUE,produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String,Object>> add(@RequestBody @Valid MemoDto memoDto, BindingResult bindingResult){
        Map<String,Object> map = new LinkedHashMap<>();
        log.info("GET /memo/add..."+ memoDto);

        // 검증 오류가 있으면 {필드이름: 메시지} 형태로 만들어 돌려줌. React 가 이 키로 입력칸 옆에 메시지를 표시함
        if(bindingResult.hasErrors()) {
//			log.info("데이터 유효성 체크 오류 : " + bindingResult.getFieldError("id").getDefaultMessage()  );
//			model.addAttribute("id",bindingResult.getFieldError("id").getDefaultMessage());
            for(FieldError error : bindingResult.getFieldErrors()) {
                log.info("Error Field : "+error.getField()+" Error Msg : "+error.getDefaultMessage());
                map.put(error.getField(),error.getDefaultMessage());
            }
            return new ResponseEntity<>(map, HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>(map,HttpStatus.OK);
    }
}

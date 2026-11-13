package com.example.demo.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

// =======================================
// 업로드, 다운로드
// 파일 업로드, 목록, 다운로드
// =======================================

@CrossOrigin(origins = {"http://127.0.0.1:3000","http://localhost:3000"})
@RestController
@Slf4j
public class UpDownloadController {

    @Value("${root.path}")
    private String Root;

    @Value("${upload.path}")
    private String Upload;

    // 업로드 : 같은 이름(files)으로 보낸 여러 파일을 MultipartFile 배열로 받아 업로드 폴더에 저장
    @PostMapping(value="/upload",consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces=MediaType.APPLICATION_JSON_VALUE)
    public void upload(@RequestParam("files") MultipartFile[] files) throws IOException {
        log.info("POST /upload... file : "+files);
        String uploadPath = Root+ File.separator+Upload+File.separator;
        File dir = new File(uploadPath);
        if(!dir.exists())
            dir.mkdirs();
        for(MultipartFile file : files){
            // 파일 이름에 경로(../)가 섞여 있어도 이름 부분만 쓰도록 getName 으로 걸러냄
            File fileObj = new File(dir,new File(file.getOriginalFilename()).getName());
            file.transferTo(fileObj);   //파일업로드
        }

    }

    // 다운로드 : GET 요청이라 본문이 없으므로 consumes 를 지정하지 않음
    @GetMapping(value="/download",produces=MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public ResponseEntity<Resource>  download(@RequestParam("filePath") String filePath) throws IOException {
        log.info("POST /download...file : " + filePath);
        // 업로드 폴더 밖의 파일을 내려받지 못하게 경로를 검사함 (경로 조작 공격 방지)
        File target = new File(filePath).getCanonicalFile();
        File base = new File(Root + File.separator + Upload).getCanonicalFile();
        if(!target.toPath().startsWith(base.toPath())) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        // FileSystemResource : 파일 시스템의 특정 파일을 가리키는 Resource
        Resource resource = new FileSystemResource(target);
        //파일명 추출
        String filename = resource.getFilename();
        //헤더 정보 추가
        HttpHeaders headers = new HttpHeaders();
        // 헤더는 ISO-8859-1 로 보내야 해서 한글 파일 이름이 깨지지 않도록 UTF-8 바이트를 ISO-8859-1 문자열로 바꿔 넣음
        headers.add("Content-Disposition","attachment; filename="+new String(filename.getBytes("UTF-8"),"ISO-8859-1"));
        //리소스,파일정보가 포함된 헤더,상태정보를 전달
        return new ResponseEntity<Resource>(resource,headers,HttpStatus.OK);
    }


    // 업로드 폴더의 파일 목록 : 다운로드에 쓰도록 경로를 포함한 이름을 돌려줌
    @GetMapping("/upload/list")
    public ResponseEntity<List<String>> filelist(){
        log.info("GET /upload/list...");
        String uploadPath = Root+ File.separator+Upload+File.separator;
        File dir = new File(uploadPath);
        File[] fileList = dir.listFiles();
        for(File file : fileList)
            log.info(file.getName());

        if(fileList.length!=0) {
            List list = Arrays  .stream(fileList)
                                .map(el-> uploadPath + File.separator +  el.getName())
                                .collect(Collectors.toList());
            return new ResponseEntity(list, HttpStatus.OK);
        }
        return new ResponseEntity(null,HttpStatus.EXPECTATION_FAILED);
    }
}

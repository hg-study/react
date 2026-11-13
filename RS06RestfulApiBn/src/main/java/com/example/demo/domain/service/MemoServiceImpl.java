package com.example.demo.domain.service;


import com.example.demo.domain.dto.MemoDto;
import com.example.demo.domain.entity.Memo;
import com.example.demo.domain.repository.MemoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

import org.springframework.transaction.annotation.Transactional;

// =======================================
// 메모 서비스
// 메모 저장
// =======================================

// 서비스: 컨트롤러가 받은 DTO 를 엔티티로 바꿔 저장. @Transactional 로 저장 중 예외가 나면 rollback
@Service
@Slf4j
public class MemoServiceImpl {

    @Autowired
    private MemoRepository memoRepository;

    @Transactional(rollbackFor=Exception.class)
    public boolean addMemo(MemoDto dto) throws Exception{
        Memo memo = new Memo();
        memo.setText(dto.getText());
        memo.setRegdate(LocalDateTime.now());
        memo.setWriter(dto.getWriter());
        memoRepository.save(memo);
        return true;
    }



}

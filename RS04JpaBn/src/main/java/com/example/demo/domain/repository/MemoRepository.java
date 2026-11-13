package com.example.demo.domain.repository;


import com.example.demo.domain.entity.Memo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// =======================================
// 메모 Repository
// 메모 기본 CRUD
// =======================================

@Repository
// JpaRepository 를 상속하면 save, findById, findAll, delete 같은 기본 CRUD 가 구현 없이 제공됨
public interface MemoRepository extends JpaRepository<Memo,Long> {

}

package com.example.demo.Domain.Common.Repository;


import com.example.demo.Domain.Common.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// =======================================
// 사용자 Repository
// 기본 CRUD
// =======================================

// 사용자 기본 CRUD
@Repository
public interface UserRepository extends JpaRepository<User,String> {
    User findByUsername(String username);
}

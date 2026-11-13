package com.example.demo.Config.auth;

import com.example.demo.Domain.Common.Dtos.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

// =======================================
// 로그인 사용자 정보
// 폼 로그인과 소셜 로그인 공용
// =======================================

// UserDetails 와 OAuth2User 를 함께 구현해 어느 방식으로 로그인해도 같은 타입으로 꺼냄
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PrincipalDetails implements UserDetails, OAuth2User {

    private UserDTO userDTO;


    //---------------------------------
    //LOCAL
    //---------------------------------
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        Collection<GrantedAuthority> authorities = new ArrayList();

        String[] roles =userDTO.getRole().split(","); //"ROLE_USER,ROLE_ADMIN" ->["",""]
        for(String role : roles){
            authorities.add(new SimpleGrantedAuthority(role));
        }
        return authorities;
    }

    @Override
    public String getPassword() {
        return userDTO.getPassword();
    }

    @Override
    public String getUsername() {
        return userDTO.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    //---------------------------------
    //OAUTH2
    //---------------------------------
    Map<String,Object> attributes;

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public String getName() {
        return userDTO.getUsername();
    }

}

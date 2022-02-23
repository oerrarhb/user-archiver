package com.othmane.simpleapp.repository;

import com.othmane.simpleapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Long> {
}

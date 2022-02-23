package com.othmane.simpleapp;

import com.othmane.simpleapp.model.User;
import com.othmane.simpleapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SimpleappApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SimpleappApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        this.userRepository.save(new User("Othmane", "E", "eo@gmail.com"));
        this.userRepository.save(new User("Dary", "Dixon", "dd@gmail.com"));
        this.userRepository.save(new User("Jhon", "Whick", "jw@gmail.com"));
    }
}

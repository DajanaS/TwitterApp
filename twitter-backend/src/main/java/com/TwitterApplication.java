package com;

import com.service.StorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TwitterApplication {
    public static void main(String[] args) {
        SpringApplication.run(TwitterApplication.class, args);
    }

    @Bean
    CommandLineRunner init(StorageService storageService) { // , UserRepository userRepository) {
        return (args) -> {
            // User user = new User("User", "For", "Test", new Date(), "Purposes", "NameOfFile");
            // userRepository.save(user);
            storageService.deleteAll();
            storageService.init();
        };
    }
}

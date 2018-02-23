package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TwitterApplication {
    public static void main(String[] args) {
        SpringApplication.run(TwitterApplication.class, args);
    }

    /* For fast testing
    @Bean
    CommandLineRunner init(UserRepository userRepository) {
        return (args) -> {
            User user = new User("User", "For", "Test", new Date(), "Purposes", "NameOfFile");
            userRepository.save(user);
        };
    } */
}

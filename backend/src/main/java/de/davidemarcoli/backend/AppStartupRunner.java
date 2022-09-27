package de.davidemarcoli.backend;

import de.davidemarcoli.backend.jpa.User;
import de.davidemarcoli.backend.users.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

public class AppStartupRunner implements ApplicationRunner {

    private final UserServiceImpl userService;

    @Autowired
    public AppStartupRunner(UserServiceImpl userService) {
        this.userService = userService;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // if there aren't any users in the database, create a default user
        if (userService.getAllUsers().isEmpty()) {
            userService.saveUser(new User(null, "admin", "123456"));
        }
    }
}

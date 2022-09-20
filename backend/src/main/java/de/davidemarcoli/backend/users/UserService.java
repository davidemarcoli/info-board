package de.davidemarcoli.backend.users;

import de.davidemarcoli.backend.jpa.User;

import java.util.UUID;

public interface UserService {
    User saveUser(User user);
    User getUserById(UUID id);
    User getUserByUsername(String username);
    User updateUser(User user);
    void deleteUser(UUID id);
}

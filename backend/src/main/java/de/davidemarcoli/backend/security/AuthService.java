package de.davidemarcoli.backend.security;

import de.davidemarcoli.backend.exception.UsernameAlreadyExistsException;
import de.davidemarcoli.backend.jpa.User;
import de.davidemarcoli.backend.users.UserService;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AuthService {
    private final JWTManager jwtManager;
    private final UserService userService;

    public AuthService(JWTManager jwtManager, UserService userService) {
        this.jwtManager = jwtManager;
        this.userService = userService;
    }

    public Map<String, String> refreshToken(String authHeader) {
        String refreshToken = authHeader.substring("Bearer ".length());
        String username = jwtManager.verifyToken(refreshToken).getSubject();
        String accessToken = jwtManager.createAccessToken(username);
        refreshToken = jwtManager.createRefreshToken(username);
        return Map.of("access_token", accessToken, "refresh_token", refreshToken);
    }

    public User signUp(User user) throws UsernameAlreadyExistsException {
        if (userService.getUserByUsername(user.getUsername()) != null)
            throw new UsernameAlreadyExistsException();
        return userService.saveUser(user);
    }
}

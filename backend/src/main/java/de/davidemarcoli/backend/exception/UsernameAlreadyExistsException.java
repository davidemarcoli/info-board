package de.davidemarcoli.backend.exception;

public class UsernameAlreadyExistsException extends Exception {
    public UsernameAlreadyExistsException() {
        super("Username already exists");
    }
}

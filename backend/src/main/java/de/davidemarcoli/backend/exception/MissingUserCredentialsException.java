package de.davidemarcoli.backend.exception;

public class MissingUserCredentialsException extends Exception {
    public MissingUserCredentialsException() {
        super("Missing user credentials");
    }
}

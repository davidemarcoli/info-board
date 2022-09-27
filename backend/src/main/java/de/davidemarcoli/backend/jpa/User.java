package de.davidemarcoli.backend.jpa;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCrypt;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(schema = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class User {

    @Id
    private UUID id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    @JsonIgnore
    private String password;

    // encrypt password before storing it in the database
    @PrePersist
    public void setPassword() {
        this.password = BCrypt.hashpw(password, BCrypt.gensalt());
    }
}

package de.davidemarcoli.backend.generic;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CrudRepository<T, D> extends JpaRepository<T, D> {
}

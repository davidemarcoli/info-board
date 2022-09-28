package de.davidemarcoli.backend.generic;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CrudController<T, D> {
    ResponseEntity<T> create(T t);
    ResponseEntity<T> update(T t);
    ResponseEntity<Void> deleteById(D id);
    ResponseEntity<T> findById(D id);
    ResponseEntity<List<T>> findAll();
}

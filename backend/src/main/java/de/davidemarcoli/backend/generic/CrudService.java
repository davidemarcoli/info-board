package de.davidemarcoli.backend.generic;

import de.davidemarcoli.backend.models.Category;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CrudService<T, D> {
    T save(T t);
    T update(T t);
    void deleteById(D id);
    T findById(D id);

    Category findById(Integer id);

    List<T> findAll();
}

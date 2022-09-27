package de.davidemarcoli.backend.generic;

import java.util.List;

public interface CrudController<T, D> {
    T create(T t);
    T update(T t);
    T delete(T t);
    T findById(D id);
    List<T> findAll();
}

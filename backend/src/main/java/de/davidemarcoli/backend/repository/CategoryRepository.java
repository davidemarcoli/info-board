package de.davidemarcoli.backend.repository;

import de.davidemarcoli.backend.generic.CrudRepository;
import de.davidemarcoli.backend.models.Category;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer> {
    Optional<Category> findByName(String name);
}

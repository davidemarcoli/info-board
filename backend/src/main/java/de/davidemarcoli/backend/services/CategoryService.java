package de.davidemarcoli.backend.services;

import de.davidemarcoli.backend.exception.EntityAlreadyExistsException;
import de.davidemarcoli.backend.generic.CrudService;
import de.davidemarcoli.backend.models.Category;
import de.davidemarcoli.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class CategoryService implements CrudService<Category, Integer> {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category save(Category category) {
        if (categoryRepository.findByName(category.getName()).isPresent()) {
            throw new EntityAlreadyExistsException("Category " + category.getName() + " already exists");
        }
        return categoryRepository.save(category);
    }

    @Override
    public Category update(Category category) {
       if (categoryRepository.findById(category.getId()).isPresent()) {
           return categoryRepository.save(category);
       }
         return null;
    }

    @Override
    public void deleteById(Integer id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public Category findById(Integer id) {
        return categoryRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Category with id " + id + " not found"));
    }

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }
}

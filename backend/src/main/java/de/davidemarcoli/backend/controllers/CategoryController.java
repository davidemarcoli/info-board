package de.davidemarcoli.backend.controllers;

import de.davidemarcoli.backend.generic.CrudController;
import de.davidemarcoli.backend.models.Category;
import de.davidemarcoli.backend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController implements CrudController<Category, Integer> {

    @Autowired
    private CategoryService categoryService;


    @Override
    public Category create(Category category) {
        return null;
    }

    @Override
    public Category update(Category category) {
        return null;
    }

    @Override
    public Category delete(Category category) {
        return null;
    }

    @Override
    public Category findById(Integer id) {
        return null;
    }

    @Override
    public List<Category> findAll() {
        return null;
    }
}

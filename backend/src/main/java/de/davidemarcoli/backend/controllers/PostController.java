package de.davidemarcoli.backend.controllers;

import de.davidemarcoli.backend.generic.CrudController;
import de.davidemarcoli.backend.models.Post;
import de.davidemarcoli.backend.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController implements CrudController<Post, Integer> {

    @Autowired
    private PostService postService;

    @Override
    @PostMapping("/")
    public ResponseEntity<Post> create(Post post) {
        return ResponseEntity.ok(postService.save(post));
    }

    @Override
    @PutMapping("/{id}")
    public ResponseEntity<Post> update(Integer id, Post post) {
        return ResponseEntity.ok(postService.update(id, post));
    }

    @Override
    public ResponseEntity<Void> deleteById(Integer id) {
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Post> findById(Integer id) {
        return ResponseEntity.ok(postService.findById(id));
    }

    @Override
    public ResponseEntity<List<Post>> findAll() {
        return ResponseEntity.ok(postService.findAll());
    }
}

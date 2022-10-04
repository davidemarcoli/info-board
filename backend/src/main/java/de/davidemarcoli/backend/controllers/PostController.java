package de.davidemarcoli.backend.controllers;

import de.davidemarcoli.backend.generic.CrudController;
import de.davidemarcoli.backend.models.Post;
import de.davidemarcoli.backend.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController implements CrudController<Post, Integer> {

    @Autowired
    private PostService postService;

    @Override
    @PostMapping("/")
    public ResponseEntity<Post> create(@RequestBody Post post) {
        return ResponseEntity.ok(postService.save(post));
    }

    @Override
    @PutMapping("/{id}")
    public ResponseEntity<Post> update(Integer id, Post post) {
        return ResponseEntity.ok(postService.update(id, post));
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(Integer id) {
        return ResponseEntity.ok().build();
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Post> findById(Integer id) {
        return ResponseEntity.ok(postService.findById(id));
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<Post>> findAll() {
        return ResponseEntity.ok(postService.findAll());
    }
}

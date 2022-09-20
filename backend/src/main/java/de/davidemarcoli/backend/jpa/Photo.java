package de.davidemarcoli.backend.jpa;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "photos")
public class Photo {
    private String filename;
    private byte[] photo;
}

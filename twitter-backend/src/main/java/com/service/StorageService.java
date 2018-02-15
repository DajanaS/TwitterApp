package com.service;

import org.springframework.web.multipart.MultipartFile;

import org.springframework.core.io.Resource;

public interface StorageService {
    String store(MultipartFile file);

    Resource loadFile(String filename);

    void deleteAll();

    void init();
}

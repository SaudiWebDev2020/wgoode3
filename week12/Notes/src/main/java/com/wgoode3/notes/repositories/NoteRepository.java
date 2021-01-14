package com.wgoode3.notes.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wgoode3.notes.models.Note;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long> {}

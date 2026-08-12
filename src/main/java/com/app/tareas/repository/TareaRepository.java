package com.app.tareas.repository;

import com.app.tareas.model.Tarea;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepository extends MongoRepository<Tarea, String> {
}

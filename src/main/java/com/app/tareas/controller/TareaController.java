package com.app.tareas.controller;

import com.app.tareas.model.Tarea;
import com.app.tareas.service.TareaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tareas")
@CrossOrigin(origins = "*")
@Tag(name = "Tareas", description = "API REST para la gestión de Tareas CRUD")
public class TareaController {

    @Autowired
    private TareaService service;

    @GetMapping
    @Operation(summary = "Obtener todas las tareas")
    public List<Tarea> getTareas() { return service.obtenerTodas(); }

    @PostMapping
    @Operation(summary = "Crear una nueva tarea")
    public Tarea createTarea(@RequestBody Tarea tarea) { return service.guardar(tarea); }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar una tarea existente")
    public Tarea updateTarea(@PathVariable String id, @RequestBody Tarea tarea) { 
        return service.actualizar(id, tarea); 
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar una tarea por ID")
    public void deleteTarea(@PathVariable String id) { service.eliminar(id); }
}

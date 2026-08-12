package com.app.tareas.service;

import com.app.tareas.model.Tarea;
import com.app.tareas.repository.TareaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TareaService {
    
    @Autowired
    private TareaRepository repository;

    public List<Tarea> obtenerTodas() { return repository.findAll(); }
    public Tarea guardar(Tarea tarea) { return repository.save(tarea); }
    public Tarea actualizar(String id, Tarea tareaDetails) {
        Tarea tarea = repository.findById(id).orElseThrow();
        tarea.setTitulo(tareaDetails.getTitulo());
        tarea.setDescripcion(tareaDetails.getDescripcion());
        tarea.setCompletada(tareaDetails.isCompletada());
        return repository.save(tarea);
    }
    public void eliminar(String id) { repository.deleteById(id); }
}

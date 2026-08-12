package com.app.tareas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Document(collection = "tareas")
@Schema(description = "Entidad que representa una Tarea")
public class Tarea {
    @Id
    @Schema(description = "ID único generado por MongoDB")
    private String id;
    
    @Schema(description = "Título de la tarea", example = "Hacer proyecto de Nube")
    private String titulo;
    
    @Schema(description = "Descripción detallada", example = "Desplegar backend en Render")
    private String descripcion;
    
    @Schema(description = "Estado de completado", example = "false")
    private boolean completada;
}

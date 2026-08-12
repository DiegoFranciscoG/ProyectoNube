import React, { useState, useEffect } from 'react';
import { getTareas, createTarea, deleteTarea, updateTarea } from './services/api';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [form, setForm] = useState({ titulo: '', descripcion: '', completada: false });

  useEffect(() => { cargarTareas(); }, []);

  const cargarTareas = async () => {
    try {
      const res = await getTareas();
      setTareas(res.data);
    } catch (error) {
      console.error("Error al cargar tareas:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await updateTarea(form.id, form);
      } else {
        await createTarea(form);
      }
      setForm({ titulo: '', descripcion: '', completada: false });
      cargarTareas();
    } catch (error) {
      console.error("Error al guardar tarea:", error);
    }
  };

  const eliminar = async (id) => {
    try {
      await deleteTarea(id);
      cargarTareas();
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📚 Gestor de Tareas Autónomo</h1>
        <p>Proyecto Full-Stack (Spring Boot + MongoDB + React)</p>
      </header>
      
      <main className="app-main">
        <section className="form-section">
          <h2>{form.id ? '✏️ Editar Tarea' : '➕ Nueva Tarea'}</h2>
          <form onSubmit={handleSubmit} className="task-form">
            <div className="form-group">
              <label>Título:</label>
              <input type="text" placeholder="Ej. Preparar informe" value={form.titulo} 
                onChange={e => setForm({...form, titulo: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Descripción:</label>
              <input type="text" placeholder="Ej. Redactar conclusiones" value={form.descripcion} 
                onChange={e => setForm({...form, descripcion: e.target.value})} required />
            </div>
            {form.id && (
              <div className="form-group checkbox-group">
                <label>
                  <input type="checkbox" checked={form.completada} 
                    onChange={e => setForm({...form, completada: e.target.checked})} />
                  Completada
                </label>
              </div>
            )}
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {form.id ? 'Actualizar Tarea' : 'Crear Tarea'}
              </button>
              {form.id && (
                <button type="button" className="btn btn-secondary" onClick={() => setForm({ titulo: '', descripcion: '', completada: false })}>
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="list-section">
          <h2>Lista de Registros Actuales</h2>
          <div className="table-container">
            <table className="task-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tareas.length === 0 ? (
                  <tr><td colSpan="4" className="text-center">No hay tareas registradas.</td></tr>
                ) : (
                  tareas.map(t => (
                    <tr key={t.id}>
                      <td>{t.titulo}</td>
                      <td>{t.descripcion}</td>
                      <td>
                        <span className={`status-badge ${t.completada ? 'status-done' : 'status-pending'}`}>
                          {t.completada ? '✅ Completada' : '⏳ Pendiente'}
                        </span>
                      </td>
                      <td className="action-buttons">
                        <button className="btn btn-sm btn-edit" onClick={() => setForm(t)}>Editar</button>
                        <button className="btn btn-sm btn-delete" onClick={() => eliminar(t.id)}>Eliminar</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

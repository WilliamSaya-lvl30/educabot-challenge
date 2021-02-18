import React from 'react'
import { Tareas } from '../../componets/tareas/Tareas'

export default () => {
  const lectura = {
    progres: 0,
    nuevo: true,
    demorado: false,
    actividad:{
      tipo: 'LECTURA',
      tarea:'Cuentos para aprender ortografía'
    },
    fecha: new Date(),
    asignatura: 'Lengua',
    comentarios: true,
    completado: false
  }
  const pregunta = {
    progres: 0,
    nuevo: true,
    demorado: false,
    actividad:{
      tipo: 'ACTIVIDAD CON PREGUNTAS',
      tarea:'¿Qué es la potencia y la raiz cuadrada un número?'
    },
    fecha: new Date(),
    asignatura: 'Lengua',
    comentarios: true,
    completado: false
  }

  return (
    <Tareas
      {...lectura}
    />
  )
}

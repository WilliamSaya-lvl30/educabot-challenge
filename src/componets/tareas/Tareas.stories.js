import React from 'react'
import { Tareas } from './Tareas'

export default {
  title: 'Asignatura/tareas',
  component: Tareas,
}

const Template = (args) => <Tareas {...args} />

export const LecturaNueva = Template.bind({})
LecturaNueva.args = {
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

export const LecturaEnProgreso = Template.bind({})
LecturaEnProgreso.args = {
  progres: 25,
  nuevo: false,
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

export const LecturaDemorado = Template.bind({})
LecturaDemorado.args = {
  progres: 25,
  nuevo: false,
  demorado: true,
  actividad:{
    tipo: 'LECTURA',
    tarea:'Cuentos para aprender ortografía'
  },
  fecha: new Date(),
  asignatura: 'Lengua',
  comentarios: true,
  completado: false
}

export const LecturaCompletado = Template.bind({})
LecturaCompletado.args = {
  progres: 100,
  nuevo: false,
  demorado: false,
  actividad:{
    tipo: 'LECTURA',
    tarea:'Cuentos para aprender ortografía'
  },
  fecha: new Date(),
  asignatura: 'Lengua',
  comentarios: false,
  completado: true
}

export const PreguntasNueva = Template.bind({})
PreguntasNueva.args = {
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

export const PreguntasEnProgreso = Template.bind({})
PreguntasEnProgreso.args = {
  progres: 25,
  nuevo: false,
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

export const PreguntasDemorado = Template.bind({})
PreguntasDemorado.args = {
  progres: 25,
  nuevo: false,
  demorado: true,
  actividad:{
    tipo: 'ACTIVIDAD CON PREGUNTAS',
    tarea:'¿Qué es la potencia y la raiz cuadrada un número?'
  },      
  fecha: new Date(),
  asignatura: 'Lengua',
  comentarios: true,
  completado: false
}

export const PreguntasEnCorreccion = Template.bind({})
PreguntasEnCorreccion.args = {
  progres: 100,
  nuevo: false,
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

export const PreguntasCompletado = Template.bind({})
PreguntasCompletado.args = {
  progres: 100,
  nuevo: false,
  demorado: false,
  actividad:{
    tipo: 'ACTIVIDAD CON PREGUNTAS',
    tarea:'¿Qué es la potencia y la raiz cuadrada un número?'
  },
  fecha: new Date(),
  asignatura: 'Lengua',
  comentarios: false,
  completado: true
}
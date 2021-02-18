import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tareas.module.css'
import { Button } from '../button/Button'
import Book from '../icons/book/Book'
import Pencil from '../icons/pencil/Pencil'
import Calendar from '../icons/calendar/Calendar'
import Union from '../icons/union/Union'
import Progres from '../icons/progres/Progres'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

export const Tareas = ({ progres, nuevo, demorado, actividad, fecha, asignatura, comentarios, completado }) => {
  const entregaClass = demorado ? styles.enDemora : styles.enProgreso
  const tag = nuevo ? 'nuevo' : demorado ? 'demorado' : ''
  const isNew = tag === 'nuevo' ? styles.contenidoNuevo : ''
  const iscomplete = completado ? styles.contenidoCompledato : ''
  const isComent = comentarios ? styles.comentarios : ''
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const largeTex= actividad.tarea.length > 38 ? styles.largeTex : ''
  const fechaDeEntrega= `${fecha.getDate()} de ${meses[fecha.getMonth()]}`

  return (
    <div className={`${styles.tareas} ${isNew} ${iscomplete}`}>
      <div className={styles.contenido}>
        <div className={styles.info}>
          <div className={styles.actividad}>
            {
              actividad.tipo === 'LECTURA' ? 
              <Book />
              : 
              <Pencil />
            }
          </div>
          <div className={styles.infoTex}>
            <p>{actividad.tipo}</p>
            <p className={largeTex}>{actividad.tarea}</p>
          </div>
        </div>

        {
          tag && 
          <div className={styles.tag}>
            <div>
              {
                tag === 'nuevo' &&
                  (<div className={styles.nuevo}>
                    <p>¡NUEVA!</p>
                  </div>)
              }
              {
                tag === 'demorado' &&
                  (<div className={styles.demorado}>
                    <p>¡Estás demorad@!</p>
                  </div>)
              }
            </div>
          </div>
        }

        <div className={styles.entrega}>
          <div className={styles.icon}>
            <Calendar progres={progres} />
          </div>
          <div className={styles.entregaTex}>
            <p className={styles.texto}>Fecha de Entrega &nbsp;</p>
            <p className={`${styles.texto} ${entregaClass}`}>{fechaDeEntrega}</p>
          </div>
        </div>

        <div className={styles.progres}>
          {
            (progres !== 100) ? 
              (<>
                <div className={styles.icon}>
                  <Progres progres={progres} />
                </div>
                <p className={styles.texto}>
                  Progresos &nbsp;{progres ? <span>{`${progres}%`}</span> : <span>-</span>}
                </p>
              </>)
            : 
            (<>
              {
                !completado && 
                <>
                  <div className={styles.icon}>
                    <Union />
                  </div>
                  <div className={styles.completeTex}>
                    Esperando corrección
                  </div>
                </>
              }
            </>)
          }
          {
            completado && 
            <>
              <div className={styles.icon}>
                <CheckCircleIcon />
              </div>
              <div className={styles.completeTex}>
                Actividad Completada
              </div>
            </>
          }
        </div>

        <Button label='Continuar' completado={completado}/>
      </div>

      <div className={styles.footer}>
        <div>
          <div className={styles.asignatura}>
            <div className={styles.asignaturaTag}>
              <div className={styles.puntero} />
              <div className={styles.asignaturaTex}>{asignatura}</div>
            </div>
          </div>
          <div className={`${styles.iconMensaje} ${isComent}`}>
            <ChatBubbleIcon />
          </div>
        </div>
      </div>
      
    </div>
  )
}

Tareas.propTypes = {
  progres: PropTypes.number,
  nuevo: PropTypes.bool,
  demorado: PropTypes.bool,
  actividad: PropTypes.shape({
    tipo: PropTypes.string,
    actividad: PropTypes.string
  }),
  fecha: PropTypes.instanceOf(Date),
  asignatura: PropTypes.string,
  comentarios: PropTypes.bool,
  completado: PropTypes.bool
}

Tareas.defaultProps = {
  progres: 10,
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

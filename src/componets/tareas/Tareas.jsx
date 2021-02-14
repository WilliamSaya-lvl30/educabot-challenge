import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Tareas.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '../button/Button'

export const Tareas = () => {
    const [progres , setProgres] = useState(0)
return(
    <div className={styles.tareas}>
        <div className={styles.contenido}>
            <CircularProgress variant="determinate" value={10} />
        
            <Button label='Continuar'/>
        </div>
       
        <div className={styles.asignatura}>

        </div>
    </div>
)
}
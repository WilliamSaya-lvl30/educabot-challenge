import React from 'react';
import PropTypes from 'prop-types';

import styles from './App.module.css';
import HeaderContainer from '../headerContainer/HeaderContainer'
import AulaContainer from '../AulaContainer/AulaContainer'
import { Container } from '@material-ui/core';

export default ()=>{

    return (
        <div className={styles.App}>
            <HeaderContainer/>
            <Container maxWidth="xl" className={styles.container}>
                <AulaContainer/>
            </Container>  
        </div> 
    )
}




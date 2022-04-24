import styles from './Landing.module.css'
import React from 'react'
import { Link } from 'react-router-dom';

export function Landing(){
    return(
        <div className={styles.landing}>
            <div >
            <label className={styles.title}> IT Crowd Challenge </label>
            <div>
            <Link  className={styles.welcome} to={'/home'} >See the Project</Link>

            </div>
            </div>
        </div>
    )
}


import React from 'react'
import styles from './HeaderBar.module.css'

const HeaderBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <img src="#" alt="logo" />
                <div>Right Menu</div>
            </div>
        </div>
    )
}

export default HeaderBar

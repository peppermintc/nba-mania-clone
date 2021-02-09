import React from 'react'
import styles from './MenuBar.module.css'

const MenuBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div>Menu</div>
                <div>SearchInput</div>
            </div>
        </div>
    )
}

export default MenuBar

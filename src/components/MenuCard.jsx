import React from 'react'
import style from '../styles/menuCard.module.css'
function MenuCard({ title }) {
    return (
        <div className={style.menuCard}>
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" />
            <p>{title}</p>
        </div>
    )
}

export default MenuCard
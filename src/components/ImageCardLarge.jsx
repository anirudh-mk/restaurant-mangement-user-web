import { faDollarSign, faDotCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from '../styles/imageCardLarge.module.css'
import { Link } from 'react-router-dom'

function ImageCardLarge() {
    return (
        <Link to={'/restaurant/1/food/1'} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={style.imageCardLargeContainer}>
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className={style.headdingTopContainer}>
                    <p>Biriyani</p>
                    <div className={style.iconBackground}>
                        <FontAwesomeIcon icon={faStar} color='#FFD600' />
                        <p>2.4</p>
                    </div>
                </div>
                <div className={style.headdingBottomContainer}>
                    <div className={style.iconBackground}>
                        <FontAwesomeIcon icon={faDotCircle} size='sm' color='green' />
                        <p>Veg</p>
                    </div>
                    <div className={style.iconBackground}>
                        <FontAwesomeIcon icon={faDollarSign} />
                        <p>124</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ImageCardLarge

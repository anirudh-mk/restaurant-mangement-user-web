import { faDollarSign, faDotCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from '../styles/imageCard.module.css'
import { Link } from 'react-router-dom'
function ImageCard({ title, rating, price, is_veg }) {
    return (
        <Link to={'/restaurant/1/food/1'} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={style.imageCardLargeContainer}></div>
            <div className={style.imageCardContainer}>
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className={style.headdingTopContainer}>
                    <p>{title}</p>
                    <div className={style.iconBackground}>
                        <FontAwesomeIcon icon={faStar} color='#FFD600' />
                        <p>{rating}</p>
                    </div>
                </div>
                <div className={style.headdingBottomContainer}>
                    <div className={style.iconBackground}>
                        {
                            is_veg ? <FontAwesomeIcon icon={faDotCircle} size='sm' color='green' /> :
                                <FontAwesomeIcon icon={faDotCircle} size='sm' color='tomato' />
                        }

                        {
                            is_veg ? <p>Veg</p> : <p>NonVeg</p>
                        }
                    </div>
                    <div className={style.iconBackground}>
                        <FontAwesomeIcon icon={faDollarSign} />
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ImageCard
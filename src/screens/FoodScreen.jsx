import React, { useState } from 'react'
import style from '../styles/foodScreen.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faDotCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import ImageCard from '../components/ImageCard';
function FoodScreen() {

    const menuItems = ["juice", "chicken", "all", "beef", "veg", "non veg", "aapled"];
    const [showMore, setShowMore] = useState(true)

    return (
        <div className={style.screenContainer}>
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" />
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
            <div className={style.descriptionContainer}>
                <p style={{ overflow: showMore && 'hidden', textOverflow: showMore && 'ellipsis', whiteSpace: showMore && 'nowrap' }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi debitis veritatis commodi, quasi omnis perferendis reiciendis ab blanditiis a adipisci porro modi, magnam excepturi molestiae expedita nulla enim vero. Minima.
                </p>
            </div>
            <div className={style.more}>
                <p onClick={() => setShowMore(!showMore)}>{showMore ? 'Show more' : 'Show less'}</p>
            </div>
            <div className={style.ingridientsContainer}>
                {
                    menuItems.map((item) => <div className={style.ingridients}><p>{item}</p></div>)
                }
            </div>
            <h2>Popular</h2>
            <div className="horizontalScrollContainer">
                {menuItems.map((item, index) => (
                    <ImageCard key={index} title={item} />
                ))}
            </div>
        </div>
    )
}

export default FoodScreen
import React from 'react'

function MenuCard({ title }) {
    return (
        <div className="menuCard">
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" />
            <p>{title}</p>
        </div>
    )
}

export default MenuCard
import React, { useEffect, useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import MenuCard from '../components/MenuCard';
import ImageCard from '../components/ImageCard';
import ImageCardLarge from '../components/ImageCardLarge';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MenuScreen() {
    const [menuItems, setMenuItems] = useState([])
    const [isSticky, setIsSticky] = useState(false);
    const [searchText, setSearchText] = useState('')
    const [category, setCategory] = useState([])
    const { id } = useParams();

    console.log(searchText);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/restaurant/food-list/${id}/?search=${searchText}`)
            .then(function (response) {
                setMenuItems(response.data.response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }, [searchText])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/restaurant/food-category/${id}/`)
            .then(function (response) {
                setCategory(response.data.response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }, [searchText])

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('myHeader');
            if (window.scrollY > header.offsetTop) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="headdingContainer">
                <h1>Fruite Bae</h1>
                {/* <FontAwesomeIcon icon={faCartShopping} size='xl' color='#868686' /> */}
            </div>
            <div id="myHeader" className={`header ${isSticky ? 'sticky' : ''}`}>
                <div className='inputContainer'>
                    <input type="text" placeholder="Search..." onChange={(event) => setSearchText(event.target.value)} onClick={() => console.log('hello')} />
                </div>
                <div className="horizontalScrollContainer">
                    {
                        category.map((item) => (
                            <MenuCard key={item.id} title={item.title} onClick={() => setSearchText(item.category_id)} />
                        ))
                    }
                </div>
            </div>
            <div className='verticalScrollContainer'>
                <h2>Popular</h2>
                <div className="horizontalScrollContainer">
                    {menuItems.map((item) => (
                        <ImageCard key={item.id} title={item.title} rating={item.rating} price={item.price} is_veg={item.is_veg} />
                    ))}
                </div>
                <h2>Menu</h2>
                <div className='menuItems'>
                    {menuItems.map((item) => (
                        <ImageCardLarge key={item.id} title={item.title} rating={item.rating} price={item.price} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default MenuScreen;

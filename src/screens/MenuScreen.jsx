import React, { useEffect, useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import MenuCard from '../components/MenuCard';
import ImageCard from '../components/ImageCard';
import ImageCardLarge from '../components/ImageCardLarge';

function MenuScreen() {
    const menuItems = ["juice", "chicken", "all", "beef", "veg", "non veg", "aapled"];
    const [isSticky, setIsSticky] = useState(false);

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
                <FontAwesomeIcon icon={faCartShopping} size='xl' color='#868686' />
            </div>
            <div id="myHeader" className={`header ${isSticky ? 'sticky' : ''}`}>
                <div className='inputContainer'>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="horizontalScrollContainer">
                    {menuItems.map((item, index) => (
                        <MenuCard key={index} title={item} />
                    ))}
                </div>
            </div>
            <div className='verticalScrollContainer'>
                <h2>Popular</h2>
                <div className="horizontalScrollContainer">
                    {menuItems.map((item, index) => (
                        <ImageCard key={index} title={item} />
                    ))}
                </div>
                <h2>Menu</h2>
                <div className='menuItems'>
                    {menuItems.map((item, index) => (
                        <ImageCardLarge key={index} title={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default MenuScreen;

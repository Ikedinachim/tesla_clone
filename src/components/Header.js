import React, { useState } from 'react';
import Logo from '../UI/Logo';
import classes from './Header.module.css'
import { Menu, Close } from '@mui/icons-material';
import { useSelector } from 'react-redux';




const Header = () => {
    const cars = useSelector(state => state.car.cars)
    const[isDrawerOpen, openDrawer] = useState(false);
    const openSideDrawer = () =>{
        openDrawer(!isDrawerOpen);
    }
    return (
        <div className={classes.header}>
            <a href="">
                <Logo />
            </a>
            <div className={classes.menu}>
              {cars && cars.map((car,index) => {
                return     <a key={index} href="#">{car}</a>
              })}

            </div>
            <div className={classes.rightMenu}>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>

            </div>
            <Menu onClick={openSideDrawer } />
          { isDrawerOpen &&  <div className={ isDrawerOpen ? classes.burgerNav: classes.burgerNavClose}>
                <div className={classes.closeWrapper}>
                <Close onClick={openSideDrawer} className={classes.closeIcon}/>
                </div>
                {cars && cars.map((car,index) => {
                return    <li><a key={index} href="#">{car}</a></li>
              })}
                
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadstar</a></li>
                <li><a href="#">Semi</a></li>
                

            </div>}
            

        </div>
    );
};

export default Header;
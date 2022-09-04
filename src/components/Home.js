import React from 'react';
import classes from './Home.module.css'
import Section from './Section';
import modelS from '../images/model-s.jpg';
import modelY from '../images/model-y.jpg';
import model3 from '../images/model-3.jpg';
import modelX from '../images/model-x.jpg';
import solarPanelImage from '../images/solar-panel.jpg'
import solarRoofImage from '../images/solar-roof.jpg'
import accessoriesImage from '../images/accessories.jpg'
const Home = () => {
    return (
        <div className={classes.home}> 
            <Section 
            title= 'Model S' 
            description = 'Order Online for Touchless Delivery' 
            backgroundImg = {modelS}
            leftBtnText = 'Custom order'
            rightBtnText = 'Existing inventory' />
            <Section 
            title= 'Model Y' 
            description = 'Order Online for Touchless Delivery'
            backgroundImg = {modelY}
            leftBtnText = 'Custom order'
            rightBtnText = 'Existing inventory' />
           
            <Section 
            title= 'Model 3' 
            description = 'Order Online for Touchless Delivery'
            backgroundImg = {model3}
            leftBtnText = 'Custom order'
            rightBtnText = 'Existing inventory' />
            
            <Section 
            title= 'Model X' 
            description = 'Order Online for Touchless Delivery'
            backgroundImg = {modelX}
            leftBtnText = 'Custom order'
            rightBtnText = 'Existing inventory' />
            <Section
            title='Lowest Cost Solar Panels in America'
            description = 'Money-back guarantee'
            backgroundImg = {solarPanelImage}
            leftBtnText = 'Order now'
            rightBtnText = 'Learn more' />
               <Section
            title='Solar for New Roofs'
            description = 'Solar Roof Costs Less Than a New Roof Plus Solar panels'
            backgroundImg = {solarRoofImage}
            leftBtnText = 'Order now'
            rightBtnText = 'Learn more' />
              <Section
            title='Accessories'
            description = ''
            backgroundImg = {accessoriesImage}
            leftBtnText = 'Shop now'
            />
            
            
        </div>
    );
};

export default Home;
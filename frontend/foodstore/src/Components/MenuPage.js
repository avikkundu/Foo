import React from 'react'
import  '../Styles/MenuPage.css'
import FoodCard from './FoodCard.js'

class MenuPage extends React.Component{
    
    constructor()
    {
        super();
    }

    render(){
         
        return (
            <div className="menu-body">
                <div className='heading'>Menu<br/></div>
                <div className="food-cards">
                <FoodCard name="Margherita" description=" It features a thin crust topped with fresh tomato sauce, creamy mozzarella cheese, and fragrant basil leaves." />
                <FoodCard name="Burger" description="Topped with ingredients like lettuce, tomato, cheese, onions, pickles, and sauces. It's known for its juicy and savory flavor." />
                <FoodCard name="cake" description="Made from a mixture of flour, sugar, eggs, and butter, often flavored and topped with frosting, fruits, or cream. It's soft and moist." />
                <FoodCard name="French Fries" description="Thin, elongated pieces of potato that are deep-fried until golden and crispy on the outside, soft and fluffy on the inside. "/>
                </div>
                
            </div>
        )
    }
}

export default MenuPage;
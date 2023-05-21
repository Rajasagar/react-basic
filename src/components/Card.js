import './Card.css'
import React from "react";
function Card(props){
    const classes = 'card '+props.className

    return <div className={classes}>{props.children}</div>
}

export default Card;


// abover we create a card components and use this componets in the expenseitem.js and expense.js
// then we use card as <card> in both .js files and attributes and defines propertis it.
// create css file and use the code which is avaiable in the both css files so it will seaparte from there code 
// and remove code reusaility.
//card wrapper componets will be import in both the.js if use this componets./
// 
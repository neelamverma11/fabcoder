import { useEffect, useState, useCallback } from 'react';
function Drink(props) {
    return (
        <div>
            <div className="row">
                <img src={props.image} alt='Drink_image' />
            </div>
            <div className="row">
                <label>{props.name}</label>
            </div>

        </div>
    )
}

function DrinkList(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-5 col-*-offset-4">
                    <input type="text" id="search" />
                    <button type="button" className="fa fa-search" onClick={() => { props.drinkLoader() }}>Search</button>
                </div>
            </div>
            {props.myDrinks.length ?
                (<div className="row">
                    {props.myDrinks.map((drk, idx) => {
                        return <div className="col-sm-4"><Drink image={drk.strDrinkThumb} name={drk.strDrink}></Drink></div>
                    })}
                </div>)
                : (<div>Loading drinks...</div>)
            }
        </div>
    )
}
export { Drink, DrinkList };
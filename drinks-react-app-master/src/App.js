import logo from './logo.svg';
import { useEffect, useCallback, useState } from 'react';
import { Drink, DrinkList } from './drink.js';
import data from './data.js';
import './App.css';

function App() {
  let [myDrinks, setMyDrinks] = useState(data);

  // useEffect(() => {

  // }, []);

  const getDrinks = useCallback(async () => {
    let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then(response => response.json())
      .then(res => {
        setMyDrinks(res.drinks);
      });
  }, []);

  return (
    <div className="App">
      {/* <header className=""> */}
        <div className="App-header container-fluid">
          
          <DrinkList myDrinks={myDrinks} drinkLoader={getDrinks}></DrinkList>
        </div>

      
    </div>
  );
}

export default App;

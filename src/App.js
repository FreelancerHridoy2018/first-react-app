import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

 const products =  [
   {name: 'English', price: '$20'},
   {name: 'Bangla', price: '$10'},
   {name: 'Manth', price: '$25'},
   {name: 'Islam', price: '$27'},
   {name: 'Accounting', price: '$21'},
   {name: 'ICT', price: '$21'}
  ]

  return (
    <div className="App">
      <header className="App-header">
       <p>Hi I'm Starting  React Js </p>
       <Users></Users>

       <Counter></Counter>

{
   products.map( pd=> <Product product={pd}></Product>)
}


      
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count+1);
  return(
    <div>
      <h1>count : {count}</h1>
      <button>Decrease</button>
      <button onClick={handleIncrease}>increase</button>
    </div>
  )
}

function Users() {
  const [users, setUser] = useState([])
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])
  return(

    <div>
      <h2>Dynamic Users : {users.length} </h2> 
     <ul>
        {
        
        users.map(user => <li>{user.website}</li>)
        
        }
    </ul>
    </div>
  

  )
}

function Product(props) {
  const productStyle = {
    border : '2px solid gry',
    borderRadius : '5px',
    width : '300px',
    height : '300px',
    backgroundColor : 'blue',
    margin : '10px',
    color: 'red'

  }
  return (
    <div style ={productStyle}>
      <h1>{props.product.name}</h1>
      <h5>{props.product.price}</h5>
      <button>Bye Now</button>
    </div>
  )
}


export default App;

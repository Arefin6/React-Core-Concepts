import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const fiveDimond = [{name:"Masrafe Mortoza",title:"Captain Fantastic"},
{name:"Shakib Al Hasn",title:"Mr.Allrounder"},{name:"Mufiqur Rahim",title:"Mr.Dependable"}];
  return (
    <div className="App">
      <header className="App-header"> 
      <Counter></Counter>
       <Users></Users> 
        <p>I am React Dev.Earning $5k Per Month </p>
         {
           fiveDimond.map(players => <Person players={players}></Person>)
         }
        <Product name="Mobile" price="$200"></Product>
      </header>
    </div>
  );
}
function Users(){
  const [user,setUsers] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  })
  return(
  <h3>Dynamic Users:{user.length}</h3>
    
  )
}
function Person(props){
  const{name,title} = props.players;
   return(
     <div style={{border:'2px solid yellow', margin:'10px',width:'400px'}}>
      <h1>{name}</h1>
     <h3>{title}</h3>
     </div>
    
   )
}
function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    width:'200px',
    height:'200px',
    float:'left'
  }
  return(
    <div style={productStyle}>
    <h2>{props.name}</h2>
    <h3>{props.price}</h3>
    <button>Buy Now</button>
    </div>   
  );
}
function Counter(){
 const [count,setCount] = useState(0);
 const handleIncrese = ()=>{
   const newCount = count+1;
   setCount(newCount); 
 }; 
  return (
    <div>
    <h1>Count:{count}</h1>
    <button onClick={handleIncrese}>Increse</button>
    </div>
  );
}

export default App;

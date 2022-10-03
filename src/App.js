import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";





function App() {
  const [items,setItems] = React.useState([])
  const [cartItems,setCartItems] = React.useState([])
  const[cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(()=>{
    fetch('https://633a9c27471b8c39557099e3.mockapi.io/items').then(res =>{
      return res.json().then(json =>{
        setItems(json)
      });
    });
  },[])
  const onAddToCart = (obj) => {
    setCartItems((prev)=>[...prev,obj])
  }
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items = {cartItems} onCloseClick ={()=>setCartOpened(false)}/>}
      <Header onCartClick ={()=>setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All goods</h1>
          <div className="search-block ">
            <img width={14.25} height={14.25} src="/imgs/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
              <Card 
              title={item.title} 
              price = {item.price} 
              imageUrl = {item.imageUrl} 
              onPlus = {(obj)=>onAddToCart(obj)}
              onFavorite = {()=>(console.log('2'))}
              />
          ))}
          
         
          
        </div>

      </div>
    </div>
  );
}

export default App;

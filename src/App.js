import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios, {Axios}from "axios";




function App() {
  const [items,setItems] = React.useState([])
  const [cartItems,setCartItems] = React.useState([])
  const [searchValue,setSearchValue] = React.useState('')
  const[cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(()=>{
    axios.get('https://633a9c27471b8c39557099e3.mockapi.io/items').then(res=>{
      setItems(res.data)
    })
    axios.get('https://633a9c27471b8c39557099e3.mockapi.io/cart').then(res=>{
      setCartItems(res.data)
    })
  },[])
  const onAddToCart = (obj) => {
    axios.post('https://633a9c27471b8c39557099e3.mockapi.io/cart', obj);
    

    setCartItems((prev)=>[...prev,obj])
    
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://633a9c27471b8c39557099e3.mockapi.io/cart/${id}`);
    

    setCartItems((prev)=>prev.filter(item => item.id !== id))
  }
  
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items = {cartItems} onRemove = {onRemoveItem} onCloseClick ={()=>setCartOpened(false)}/>}
      <Header onCartClick ={()=>setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Search by: "${searchValue}"`:'All Sneakers'}</h1>
          <div className="search-block ">
            <img width={14.25} height={14.25} src="/imgs/search.svg" alt="Search" />
            <input  onChange={onChangeSearchInput}  value = {searchValue} placeholder="Search..." />
            {searchValue && <img  onClick={(()=>setSearchValue(''))} className="removeBtn cu-p clear " src="/imgs/btn-remove.svg" alt="Clear" />}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
              <Card 
              key={item.title}
              title={item.title} 
              price = {item.price} 
              imageUrl = {item.imageUrl} 
              onPlus = {(obj)=>onAddToCart(obj)}
              onFavorite = {(obj)=>(console.log('2'))}
              />
          ))}
          
         
          
        </div>

      </div>
    </div>
  );
}

export default App;

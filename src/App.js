import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const allSneakers = [{title:'Nike SB Charge Mid Canvas',
              price: 300,
              imageUrl: 'imgs/Sneakers/s1.jpg'},
             {title:'Nike Air Max 270',
              price: 400, 
              imageUrl: 'imgs/Sneakers/s2.jpg'},
             {title:'Nike Blazer Mid Suede',
              price: 350,
              imageUrl: 'imgs/Sneakers/s3.jpg'},
             {title:'Puma X Aka Boku Future Rider',
              price: 280,
              imageUrl: 'imgs/Sneakers/s4.jpg'},];


function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All goods</h1>
          <div className="search-block ">
            <img width={14.25} height={14.25} src="/imgs/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {allSneakers.map((obj) => (
              <Card 
              title={obj.title} 
              price = {obj.price} 
              imageUrl = {obj.imageUrl} 
              />
          ))}
          
         
          
        </div>

      </div>
    </div>
  );
}

export default App;

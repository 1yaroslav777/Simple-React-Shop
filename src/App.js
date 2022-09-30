import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const arr = [{name:'Nike SB Charge Mid Canvas',price: 300},
             {name:'Nike SB Charge Mid Canvas',price: 400,}];


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
          {arr.map((obj) => (
              <Card/>
          ))}
          



        </div>

      </div>
    </div>
  );
}

export default App;

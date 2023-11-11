import { useState } from "react"
import "./App.css"
import data from "./Data"
import Categories from "./components/Categories"
import Menu from "./components/Menu"

function App() {
  const [menuItem, setMenuItem] = useState(data);
  const allCategories = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
const filterItems = (category) =>{
  if(category === 'All'){
    setMenuItem(data);
  } else {
    const newItems = data.filter((item) => item.category === category)
    setMenuItem(newItems);
  }
};
  return (
    <div>
      <h2>Lend service</h2>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our instrument</h2>
            <div className="underline"></div>
          </div>
          <Categories allCategories={allCategories} filterItems={filterItems}/>
          <Menu items={menuItem} />
          <MyButton/>
          
        </section>
      </main>
    </div>
    
  );
}

export default App

function MyButton() {
  return 
  return <button>USE</button>
}

import Button from "./Button"
import Title from "./title"
import menu from "./data"
import Item from "./Item";
import { useState } from "react";
import Menu from "./Menu";

let categoryBtn = menu.map((btn) => {
  return btn.category
})

let categorySet = new Set(categoryBtn);
let categories = ['all', ...categorySet]


function App() {

  let [items, setItems] = useState(menu);
  let [category, setCategory] = useState(categories);

  let FilteredItems = (categoryItem) => {
    console.log(categoryItem);
    if (categoryItem === 'all') {
      setItems(menu)
      return
    }
    let newItems = menu.filter((item) => {
      return categoryItem === item.category
    })
    setItems(newItems)


  }



  return (
    <main className="bg-blue-300 min-h-[100vh] max-h-[auto] pb-5 flex items-center justify-center flex-col">
      <Title text='Our Menu' />
      <Button categories={category} FilteredItems={FilteredItems} />
      <Menu items={items} />
    </main>
  )
}

export default App

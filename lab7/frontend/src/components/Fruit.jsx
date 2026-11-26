const products = [
    {title: "Cabbage" , id: 1, isFruit: false},
     {title: "Apple" , id: 1, isFruit: true},
     {title: "Banana" , id: 1, isFruit: true},
     {title: "Potato" , id: 1, isFruit: false},
]

const ListItem = products.map({item} => <li><{item.table}/li>);

console.log(ListItem)

import React from 'react'

const Fruit = () => {
  return (
    <div>Fruit</div>
  )
}

export default Fruit
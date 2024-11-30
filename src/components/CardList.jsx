import React, { useState } from "react"; 
import Card from './Card'
import Search from './Search'
import Button from './Button'

const CardList = ({data}) => {


  const limit = 10;

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data);


  const getPaginatedProducts = () => {
    return products.slice(offset, offset + limit);
  }

  const filterTags = (tag) => {
    const filtered = data.filter(products => {
      if(!tag){
        return products
      }
      return products.tags.find(({ title }) => title === tag)
    })
    setOffset(0)
    setProducts(filtered)
  }
  
  
  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags}/>
      <div className="mt2 mb2">
        {getPaginatedProducts().map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">   
        <Button text="Previous" handleClick={() => setOffset(offset - limit)} />
        <Button text="Next" handleClick={() => setOffset(offset + limit)} />
      </div>
    </div>
  )
}

export default CardList;
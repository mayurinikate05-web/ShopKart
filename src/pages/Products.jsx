import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const Products = () => {
  const [products, setProducts] = useState([])
  const [sortOrder, setSortOrder] = useState("");
  const [ratingOrder, setRatingOrder] = useState("");
  const[sortBy,setSortBy]=useState("");

  const[currentPage,setCurrentPage]=useState(1);
  const[productsPerPage]=useState(4);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  const sortedProducts = [...products].sort((a, b) => {
    if(sortBy==='price'){
      if(sortOrder ==='lowToHigh'){
        return a.price-b.price;
      }
      if (sortOrder === 'highToLow'){
        return b.price-a.price;
      }
    }

    if(sortBy ==='rating'){
 if (ratingOrder === "lowToHigh") {
        return a.rating.rate - b.rating.rate;
      }

      if (ratingOrder === "highToLow") {
        return b.rating.rate - a.rating.rate;
      }
    }
    return 0;
  })
  
  const totalPages =Math.ceil(sortedProducts.length/ productsPerPage);
  const indexOfLastProduct = currentPage* productsPerPage;
  const indexOfFirstProduct=indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct,indexOfLastProduct);
  const previousPage =()=>{
    if(currentPage > 1){
      setCurrentPage(currentPage-1)
    }
  };
  const nextPage=()=>{
    if(currentPage<totalPages){
      setCurrentPage(currentPage+1);
    }
  }
  return (
    <div className='sorted-section'>
      <h3>Products</h3>
      <label>Sort by: </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      
      <label>Sort by Price:</label>
      <select value={sortOrder} onChange={(e) =>{ setSortOrder(e.target.value);
        setCurrentPage(1);
      }}>
        <option value="">Default</option>
        <option value="lowToHigh">Price:Low to High</option>
        <option value="highToLow">Price:High to Low</option>
      </select>
      <label>Sort by Rating:</label>
      <select
        value={ratingOrder}
        onChange={(e) => {setRatingOrder(e.target.value)
           setCurrentPage(1);
        }
      }
      >
        <option value="">Default</option>
        <option value="lowToHigh">Rating: Low to High</option>
        <option value="highToLow">Rating: High to Low</option>
      </select>
      <div className='products-container'>
        {currentProducts.map(prod => (
          <Product
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            category={prod.category}
            image={prod.image}
            rating={prod.rating.rate}
          />
        ))}
      </div>
      <div className='pagination'>
        <button onClick={previousPage}
        disabled={currentPage===1}
        >
          Previous
        </button>
        <span>
          Page{currentPage}of {totalPages}
        </span>
        <button onClick={nextPage}
        disabled={currentPage===totalPages || totalPages===0}>Next</button>
      </div>
    </div>
  )
}

export default Products

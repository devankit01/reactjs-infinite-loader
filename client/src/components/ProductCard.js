import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

function ProductCard() {
  const [prod, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [havedata, setHaveData] = useState(1);

  const getData = async () => {

    // API Call
    const res = await axios.get("http://localhost:5000/api/products");
    let dataSplice = (res.data).splice(0,5)
    setProds((products) => [...products, ...dataSplice]);
    setLoading(false);
  };
  const handleScroll = () => {
    console.log("Handle Scroll")
    setHaveData((havedata) => havedata + 1);
  };

  useEffect(() => {

    // Calling GetData Function
    getData();
  }, [havedata]);

  function truncate(str) {

    // For Design View Title Should be Short
    return str.length > 25 ? str.substring(0, 25) + "..." : str;
  }

  return (
    <div>
      <div className="cardContainer">
        <InfiniteScroll
          dataLength={havedata}
          next={handleScroll}
          hasMore={true}
       
        >
          {prod.map((val, id) => {
            return (
              <div className="card" key={id}>
                <div>
                  <div className="card__image">
                    <img src={val.image} alt={val.title} />
                  </div>
                  <h4 className="card__title">{truncate(val.title)}</h4>

                  <p className="card__price">
                    <b>$ {val.price}</b>
                  </p>
                  <h5 className="card__category">Category : {val.category}</h5>
                  <p className="card__rating"> {val.rating.rate} ⭐⭐⭐⭐⭐ </p>

                  <Link to="/cart">
                    <button className="card__btn"> Add to cart </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
        {loading && <h2 style={{textAlign: 'center'}}>Loading...</h2>}
      </div>


    </div>
  );
}

<div class="card" style="background-color:rgb(153, 29, 224);">
  <h2>First card</h2>
  <p>Some text</p>
</div>;

export default ProductCard;

import React from 'react'
import "./index.css"
import axios from "axios";

function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(function () {
      axios
        .get(
          "https://2d8ef3ed-fb0d-4212-b36a-303af5c87cdd.mock.pstmn.io/product"
        )
        .then(function (result) {
          const products = result.data.products;
          setProducts(products);
        })
        .catch(function (error) {
          console.error("에러 발생 : ", error);
        });
    }, []);
  
    return(
    <div>   
    <div id="header">
            <div id="header-area">
                <img src="images/icons/logo.jpg" alt="" />
            </div>
        </div>
        <div id="body">
            <div id="banner">
                <img src="images/banners/banner1.jpg" alt=""/>
            </div>
            <h1>Game List</h1>
            <div id="product-list">
                {products.map(function(product, index){
                return (
                <div className="product-card">
                <div>
                <img className="product-img" src={product.imageUrl} alt=""/>
                </div>
                <div className="product-contents">
                <span className="product-name">
                {product.name}
                </span>
                <span className="product-dev">Dev &nbsp;
                {product.Dev}
                </span>
                <span className="product-pub">Pub &nbsp;
                {product.Pub}
                </span>
                <span className="product-price">
                {product.price}&nbsp;KRW
                </span>
                <div className="product-seller">
                <img src="images/icons/avatar.png" alt="" className="product-avatar"/>
                <span>&nbsp;wasabi9812</span>
                </div>
                </div>
                </div>
                    );
                    })}
                
            </div>
        </div>
        <div id="footer"></div>
        </div>
        );
}
export default MainPage;
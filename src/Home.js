import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
          <div className="home__container">
                <img 
                    className="home__image"
                    alt="" 
                    src= "http://www.allininfosystems.com/wp-content/uploads/2020/02/banner.jpg" 

                />
                <div className="home__row">
                    <Product 
                        title="Redmi Note10 pro 12Gb/256Gb"
                        price="49,999"
                        rating={4}
                         image="https://425877-1336944-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/3/_/3_1_3.jpg"

                    />
                    <Product 
                        title="SAMSUNG GalaxyS21 Ultra 256GB/12GB"
                        price="1,05,999"
                        rating={4}
                        image="https://www.gizmochina.com/wp-content/uploads/2020/11/Samsung-Galaxy-S21-Ultra-5G-500x500.jpg"

                    />
                    <Product 
                        title="ViVO X60 Pro+ 256GB/12GB"
                        price="69,999"
                        rating={4}
                        image="https://gsmorigin.com/wp-content/uploads/2021/03/Vivo-X60-425x425.jpg"
                    />
                    <Product
                        title="APPLE iPhone 12Pro Max 512GB"
                        price="1,55,900"
                        rating={5}
                        image="https://eddy.com.sa/37096-large_default/iphone-12-pro-128gb-silver.jpg"
                     />
                    

                </div>
                <div className="home__row">
                <Product
                        title="APPLE Watch Series 6 GPS/40mm"
                        price="49,900"
                        rating={4}
                        image="https://www.alhaddadshop.com/images/thumbs/0016190_apple-watch-series-6-smart-watch-40-mm-blue_510.jpeg"
                 />
                <Product
                        title="GALAXY Watch 3 41mm Smartwatch"
                        price="25,990"
                        rating={5}
                        image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/440612-Product-0-I-637320740468249364_800x800.jpg"
                 />
                <Product
                        title="OnePlus Watch White Strap,Regular"
                        price="14,999"
                        rating={5}
                        image="https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/o/n/oneplus_watch-1.png"
                 />
                <Product
                        title="boAt Watch Storm Smartwatch"
                        price="6000"
                        rating={4}
                        image="https://i.gadgets360cdn.com/products/large/boat-watch-enigma-800x800-1607497537.jpg"
                 />

                </div>


            </div>
            
        </div>
    )
}

export default Home

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resName, cuisines } = props
    console.log(props);
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg" />
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h4>4.3</h4>
            <h4>38 minutes</h4>

        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisines="Biryani, North Indian, " ratings="4.4" />
                <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" ratings="4.3 " />
            </div>

        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)    
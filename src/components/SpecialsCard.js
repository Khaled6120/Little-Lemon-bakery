import React from 'react'
import "../components/styles/SpecialsCard.css"
import Dessert1 from "../components/assets/salad.jpg"
import Dessert2 from "../components/assets/bruschetta1.jpg"
import Dessert3 from "../components/assets/creme.jpg"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = () => {
   

    const specialMenus = [
        {
            image: Dessert1,
            title: "Tiramisu",
            price: "$10.99",
            description: "This classic Italian dessert is made with ladyfingers dipped in coffee and layered with a rich mascarpone cream.",
            order: "Order a delivery"
        },
        {
            image: Dessert2,
            title: "Cheesecake",
            price: "$7.99",
            description: "Our creamy cheesecake is topped with a sweet and tangy berry sauce.",
            order: "Order a delivery"
        },
        {
            image: Dessert3,
            title: "Chocolate Lava Cake",
            price: "$8.99",
            description: "This decadent dessert is made with a rich chocolate ganache that oozes out when you cut into it.",
            order: "Order a delivery"
        }
];

    const specialMenusItems = specialMenus.map(menu => {
            const image = menu.image;
            const title = menu.title;
            const price = menu.price;
            const description = menu.description;
            const order = menu.order;
            
            return (
                <div>
                    <div className="special-card-container">
                        <div className="image-container">
                                <img src={image} alt="Special dessert" />
                            </div>
                        <div className="special-card-text">
                            <div className="special-card-title">
                                <h3>{title}</h3>
                                <h3 className="price-tag">{price}</h3>
                            </div>
                            <p>{description}</p>
                            <NavLink to="#">
                                <h4>
                                    {order}
                                    { <MdDeliveryDining size={50} style={{ color: "#F4CE14", marginLeft: "10px",}} /> }
                                </h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {specialMenusItems}
      </div>
    </div>
  )
}

export default SpecialsCard

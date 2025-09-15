import React from "react";
import { useState } from "react";
import { assets } from "../../assets/assets";
import Product from "./Product";
import PropTypes from "prop-types";
import Btn from "./Btn";
const products = [
  {
    id: 1,
    title: "Black Rotary Phone",
    description: "Description 1",
    price: 33,
    img: assets.phoneOld,
  },
  {
    id: 2,
    title: "Gray Lantern",
    description: "Description 2",
    price: 44,
    img: assets.grayLantern,
  },
  {
    id: 3,
    title: "Chair and Vintage Metal Furniture",
    description: "Description 3",
    price: 55,
    img: assets.oldChair,
  },
  {
    id: 4,
    title: "Old Chevrolet 3100",
    description: "Description 4",
    price: 66,
    img: assets.chevrolet,
  },
  {
    id: 5,
    title: "Vintage Record Player",
    description: "Description 3",
    price: 55,
    img: assets.recordPlayer,
  },
  {
    id: 6,
    title: "Vintage TV",
    description: "Description 4",
    price: 66,
    img: assets.oldTv,
  },
];

const buttonData = [
  {
    name: "All",
    img2: "https://images.pexels.com/photos/32766647/pexels-photo-32766647.jpeg",
    onClick: () => console.log("All clicked"),
  },
  {
    name: "Cars",
    img2: assets.yellowCar,
    onClick: () => console.log("Cars clicked"),
  },
  {
    name: "Furniture",
    img2: assets.oldTv,
    onClick: () => console.log("Furniture clicked"),
  },
  {
    name: "Clothing",
    img2: assets.clothing,
    onClick: () => console.log("Clothing clicked"),
  },
  {
    name: "Random",
    img2: "https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg",
    onClick: () => console.log("Random clicked"),
  },
  {
    name: "Free",
    img2: "https://images.pexels.com/photos/7957755/pexels-photo-7957755.jpeg",
    onClick: () => console.log("Free clicked"),
  },
  {
    name: "Art",
    img2: assets.art,
    onClick: () => console.log("Art clicked"),
  },
  {
    name: "Books",
    img2: assets.books,
    onClick: () => console.log("Books clicked"),
  },
];


function Products({ sectionRef }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // Show 3 products per page
  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <div className="">
        <div className="flex flex-wrap gap-4 px-[3%] mb-6">
          {buttonData.map((btn, index) => (
            <Btn ref={sectionRef} 
              key={index}
              name={btn.name}
              img2={btn.img2}
              onClick={btn.onClick}
            />
          ))}
        </div>

        <div className="flex items-center text-black justify-center flex-wrap gap-4 mb-4">
          {paginatedProducts.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              img={product.img}
            />
          ))}
        </div>
      </div>
      <div className="flex bg-black justify-center  text-[20px] gap-8 mb-4">
        <button
          className="cursor-pointer"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setPage(page + 1)}
          disabled={page * itemsPerPage >= products.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

Products.propTypes = {
  sectionRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

export default React.memo(Products);

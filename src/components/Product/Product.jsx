 import {useState } from 'react';
export default function Product({title,description,price,img}) {
  const [num,setNum]=useState(0);
 const  addProduct =()=>
 {
   setNum(num+1);
   
 }

 const  removeProduct =()=>
 {
   setNum(num=>(num>0?num-1:0));
 }

  return (
    <div  className="px-[2.5%]">
      <div  className=" card bg-base-110 w-[350px] shadow-sm">
  <figure>
    <img className="h-[200px] w-full object-cover rounded-t-[20px]"
      src={img}
      alt="product" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="flex card-actions justify-between">
          <div className="mt-5 text-black text-[28px]">{price}$</div> 
          <div className="flex flex-col">    
        <button style={{  boxShadow: "rgba(0, 0, 0, 0.5) 0px -40px 36px -28px inset" }}   className=" h-[40px] hover:text-[white]  cursor-pointer p-2  font-sans font-semibold rounded-[30px] text-[white] bg-[#bd3a3a]  ">
          Buy Now
        </button>
        <div className='flex'> 
          <button className="btn btn-square" onClick={addProduct}>+</button>

            <div className="btn btn-square">{num}</div>
            <button className="btn btn-square" onClick={removeProduct}>-</button>
        </div>
        </div>
   
    </div>
  </div>
</div>
    </div>
  )
}

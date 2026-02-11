 
 
import { useState, useEffect } from "react";
export default function Register() {
const [searchedValue,setSearchedValue]=useState('');
const [filterd,setFilterd]=useState([]);
  useEffect(
    ()=>{
      fetch("https://namastedev.com/api/v1/listRestaurants")
.then((res)=>res.json())
.then((data)=>setFilterd(data))
.catch((error)=>console.error("error:",error))
    },[]
  )

  const filterdValue=(e)=>{
    filterd.filter(f=>f.name.toLowerCase().includes(searchedValue).toLowerCase())
 
  }

  return (
    <div className='flex text-center bg-red-200 mt-60  '>
    <input value={searchedValue} onChange={filterdValue} type='text' className="bg-amber-50 p-2 placeholder-amber-700" placeholder='search somthing...'/>  
   
    {
filterd.map((f,id)=>{
<div key={id}>{f}</div>
})
    }
   
    </div>

  )
}

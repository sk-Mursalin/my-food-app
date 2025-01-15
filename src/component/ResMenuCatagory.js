import MenuList from "./MenuList";
import { useState } from "react";

const ResMenuCatagory = (props) => {
    const { title, itemCards } = props?.data
    const[accorDian,setAccorDian] = useState(false)
    
    return (
        <div className="py-4 px-2 mt-3 bg-white cart-container">
            <div className="flex justify-between cursor-pointer" onClick={()=>{setAccorDian(!accorDian)}}>
                <h1 className="font-bold text-lg">{title} ({itemCards.length})</h1>
                <p>⬇</p>
            </div>
            <div>
                {itemCards.map((el) => { return  accorDian && <MenuList key={el?.card?.info?.id} data={el?.card?.info}  data2={el}/>})}
            </div>
        </div>
    )
}

export default ResMenuCatagory;


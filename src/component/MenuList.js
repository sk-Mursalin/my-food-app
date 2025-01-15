import { useDispatch } from "react-redux";
import { IMAGE_CDN_LINK } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const MenuList = (props) => {
    const { name, price,description, imageId } = props.data;
    const {info}= props.data2?.card;
    const dispatch = useDispatch();
    function addToCart(){
        dispatch(addItem(info))
    }
    return (
        <div>
            <div className="flex justify-between mt-8 cart-container">
                <div className="w-4/6 left-width">
                    <h1 className="font-bold text-lg  text-slate-800">{name}</h1>
                    <h1 className="font-bold text-lg">{price ? "₹" + price / 100 : null}</h1>
                    <p
                        className="text-slate-600 font-medium mt-5">{description && description.length > 70 ? description.slice(0, 70) : description}...
                    </p>
                </div>
                <div className="w-1/6  rounded-lg relative flex right-width">
                    <img className="rounded-lg max-w-full" src={IMAGE_CDN_LINK + imageId} />
                    <button className="absolute bottom-0 left-7 bg-white px-8 py-2 rounded-lg font-bold text-emerald-700 add-btn active:bg-slate-400 hover:bg-gray-300" onClick={()=>{addToCart()}}>ADD</button>
                </div>
            </div>
            <hr className="border border-slate-300 mt-5" />
        </div>
    )
}

export default MenuList;
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CDN_LINK } from "../utils/constant";
import { clearCart, removeOneItem } from "../utils/cartSlice";
const Cart = () => {
    const item = useSelector((store) => store.cart.items);
     const dispatch = useDispatch();
    function clearItem(){
        dispatch(clearCart());
    }
    function removeItem(item){
        dispatch(removeOneItem(item))
    }
    if (item.length == 0) return <h1 className="font-semibold text-2xl text-center mt-8">Cart is empty. add items to the Cart!</h1>

    return (

        <div className="max-w-4xl my-0 mx-auto mt-4 px-5 py-5 cart-container">
            <h1 className="font-bold text-lg text-center">Cart</h1>
            <div className="flex justify-center mt-2">
                <button className="bg-black text-white py-2 px-2 rounded-md" onClick={()=>{clearItem()}}>Clear Cart</button>
            </div>

            {item.map((el,idx) => {
                
                return  <div>
                    <div className="flex justify-between mt-8">
                        <div className="w-4/6 left-width">
                            <h1 className="font-bold text-lg  text-slate-800">{el.name}</h1>
                            <h1 className="font-bold text-lg">{el.price ? "₹" + el.price / 100 : null}</h1>
                            <p
                                className="text-slate-600 font-medium mt-5">{el.description && el.description.length > 70 ? el.description.slice(0, 70) : el.description}
                            </p>
                        </div>
                        <div className="w-1/6  rounded-lg right-width flex relative">
                            <img className="rounded-lg max-w-full" src={IMAGE_CDN_LINK + el.imageId} />
                            <button className="absolute bottom-0 left-3 bg-white px-8 py-2 rounded-lg font-bold text-emerald-700 remove-btn" onClick={()=>{removeItem(idx)
                                console.log(idx)
                            }}>remove</button>
                        </div>
                    </div>
                    <hr className="border border-slate-300 mt-5" />
                </div>

            })}

        </div>
    )
}

export default Cart;
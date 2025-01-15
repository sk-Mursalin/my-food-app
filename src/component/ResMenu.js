import useMenuApi from "../utils/useMenuApi";
import { useParams } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import ResMenuCatagory from "./ResMenuCatagory";
import MenuShimmer from "./MenuShimmer";

const ResMenu = () => {
    const { resId } = useParams();
    const headerData = useMenuApi(resId);
    if(headerData == null) return <MenuShimmer/>
    const menuData = headerData.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((el)=>{return el?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"});
    return (
        <div>
            <div className="bg-slate-950 py-4 px-4">
                <div className="max-w-4xl my-0 mx-auto">
                    <MenuHeader data={headerData} />
                </div>
            </div>
            <div className="max-w-4xl my-0 mx-auto bg-slate-200 pt-1 cart-container">
                {menuData.map((el)=>{return <ResMenuCatagory key={el?.card?.card?.title} data = {el?.card?.card}/>})}
            </div>
        </div>
    )
}

export default ResMenu;
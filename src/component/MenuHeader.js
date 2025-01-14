import { IMAGE_CDN_LINK } from "../utils/constant";


const MenuHeader = (props) => {
    const { name,cloudinaryImageId,cuisines,avgRating,sla,costForTwoMessage } = props?.data?.data?.cards?.[2]?.card?.card?.info
    return (
            <div className="flex gap-8 ">
                <div className="w-60 h-40 image">
                    <img className="w-full h-full border rounded-md" src={IMAGE_CDN_LINK + cloudinaryImageId} />
                </div>
                <div className="w-[500px] mt-4 content-width">
                    <h1 className="text-white text-4xl menu-header--text">{name.length>15?name.slice(0,15):name}...</h1>
                    <p className="text-slate-400">{cuisines[0]},{cuisines[1]}</p>
                    <ul className="flex gap-5 mt-3 align-middle sla">
                        <li className="text-white font-bold">{avgRating}</li>
                        <li className="text-white font-bold">{sla.slaString}</li>
                        <li className="text-white font-bold">{costForTwoMessage}</li>
                    </ul>
                </div>
            </div>
    )
}

export default MenuHeader;
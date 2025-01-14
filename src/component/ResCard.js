import { IMAGE_CDN_LINK } from "../utils/constant";

const ResCard = (props) => {
    const { aboutRes } = props;
    const { avgRating, costForTwo, name, sla, cuisines, cloudinaryImageId } = aboutRes.info;

    return (
        <div className="max-w-60 border py-2 px-2 rounded-md cursor-pointer bg-gray-200 hover:shadow-lg transition-all hover:bg-gray-100 card hover:scale-105">
            <div className="h-40">
                <img src={IMAGE_CDN_LINK + cloudinaryImageId} className="w-full h-full  rounded-lg" />
            </div>
            <div>
                <h1 className="font-bold text-lg hover:opacity-80 transition-all">{name.length > 12 ? name.slice(0, 12) : name}..</h1>
                <p className="">{cuisines.join(", ").length > 12 ? cuisines.join(", ").slice(0, 12) : cuisines.join(", ")}...</p>
                <div className="flex gap-2 mt-3 justify-between align-middle">
                    <p className="font-semibold text-sm bg-orange-500 pl-3 pr-3  rounded-md"> {avgRating}</p>
                    <p className="font-medium text-sm">{sla.lastMileTravelString}</p>
                    <p className="font-medium text-sm">{costForTwo}</p>
                </div>
            </div>
        </div>
    )
}

export default ResCard;



import ResCard from "./ResCard";
import useMainApiCall from "../utils/useMainApiCall";
import ShimmerUi from "./ShimmerUi";
import { useState } from "react";
import { Link } from "react-router-dom";


const Body = () => { 
    const [ApiAllData, setApiAllData,filterRes,setFilterRes] = useMainApiCall();
    console.log(ApiAllData);
    const [searchInput, setSearchInput] = useState("");
    return ApiAllData == null ? <ShimmerUi /> : (
        <div>
            <div className="max-w-6xl my-10 mx-auto px-5">
                <div className="flex gap-3 input-section">
                    <input type="text" placeholder="Search here.." value={searchInput} className="bg-gray-500 pr-6 py-2 pl-3 rounded-md text-white focus:outline-none"
                        onChange={(e) => { setSearchInput(e.target.value) }}
                    />
                    <button
                        className="px-3 py-1  bg-orange-600 text-white rounded-md cursor-pointer hover:opacity-80 transition-all"
                        onClick={() => {
                            const searchFilterRes = filterRes.filter((filterRes) => { return filterRes.info.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) })
                            setApiAllData(searchFilterRes);
                        }}
                    >Search</button>

                    <button
                        className="px-3 py-1  bg-amber-500 text-white rounded-md cursor-pointer hover:opacity-80 transition-all" onClick={() => {
                            const topRatedRes = ApiAllData.filter((el) => { return el.info?.avgRating > 4.3 });
                            console.log(topRatedRes);
                            setApiAllData(topRatedRes);
                        }}>top rated</button>
                </div>

                <div className="my-12 grid grid-cols-4 gap-y-4 gap-x-3 body">
                    {ApiAllData.map((resData) => {
                        return <Link key={resData.info?.id} to={"/res/"+ resData.info?.id}><ResCard aboutRes={resData}/></Link>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Body;
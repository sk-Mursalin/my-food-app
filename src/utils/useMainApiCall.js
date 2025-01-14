import { SWIGGY_API } from "./constant"
import { useEffect, useState } from "react"


const useMainApiCall = () => {
    const [ApiAllData, setApiAllData] = useState(null);
    const [filterRes, setFilterRes] = useState(null);

    useEffect( () => {
         swiggyApiData()
    }, []);

    const swiggyApiData = async () => {
        const response = await fetch(SWIGGY_API);
        const jsonData = await response.json();
        setApiAllData(jsonData.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRes(jsonData.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return [ApiAllData, setApiAllData, filterRes, setFilterRes];
}

export default useMainApiCall;
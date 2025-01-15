import { useEffect, useState } from "react"
import { MENU_API } from "./constant"

const useMenuApi = (resId)=>{
    const [menuApiData,setMenuApiData] = useState(null);
    useEffect(()=>{
        menuApiCall()
    },[]);

    async function menuApiCall(){
        const response = await  fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const data = await response.json();
        setMenuApiData(data);
    }
    return menuApiData;
}

export default useMenuApi;
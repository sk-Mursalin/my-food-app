import { useRouteError } from "react-router-dom"
const Error = ()=>{
    const {statusText} = useRouteError()
    return(
        <div>
            <h1 className="font-bold"> page {statusText}</h1>
        </div>
    )
}

export default Error


const ShimmerCard = ()=>{
    return(
        <div className="max-w-60 border py-2 px-3 rounded-md cursor-pointer bg-gray-100 hover:shadow-lg transition-all shimmer-card">
            <div className="h-40 bg-gray-200 rounded-md"></div>
            <div className="w-40 py-1 bg-slate-300 mt-2"></div>
            <div className="w-32 py-1 bg-slate-300 mt-2"></div>
            <div className="w-20 py-1 bg-slate-300 mt-2"></div>
        </div>
    )
}

export default ShimmerCard;
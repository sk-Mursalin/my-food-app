import ShimmerCard from "./ShimmerCard";

const ShimmerUi = () => {
    return (
        <div>
            <div className="max-w-6xl my-10 mx-auto px-5">
                <div className="flex">
                    <div className="w-56 py-5 bg-gray-200 rounded-md"></div>
                    <div className="w-20 py-1 ml-3 bg-gray-200 rounded-md"></div>
                    <div className="w-24 py-1 ml-3 bg-gray-200 rounded-md"></div>
                </div>
                <div className="my-12 grid grid-cols-4 gap-y-4 gap-x-3 shimmer">
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />

                </div>
            </div>
        </div>
    )
}

export default ShimmerUi;
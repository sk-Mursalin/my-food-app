import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="px-3">
            <div className="w-[300px] mx-auto mt-16 bg-gray-400 p-9 rounded-md">
                <form className="flex flex-col gap-5">
                    <input type="text" placeholder="Enter your email" className="border-2 border-gray-400 py-2 pl-2 rounded-md focus:outline-none focus:opacity-90" />
                    <input type="text" placeholder="Enter password" className="border-2 border-gray-400 py-2 pl-2 rounded-md focus:outline-none focus:opacity-90" />
                    <button className="border-2 border-gray-400 py-2 pl-2 rounded-md bg-emerald-700 text-white">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default LoginPage;
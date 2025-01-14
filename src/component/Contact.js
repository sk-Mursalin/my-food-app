import contact from "../assets/images/contact.png"
const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 mt-8">
            <div className="flex justify-between contact">
                <div className="w-[350px]">
                    <img className="max-w-full" src={contact}/>
                </div>
                <div className="w-[300px]">
                    <h1 className="font-semibold text-5xl text-center">Contact Us</h1>
                    <form className="mt-8 flex flex-col gap-4">
                        <input className="border-2 border-gray-400 py-2 pl-2 rounded-md" type="text" placeholder="Name" required/>
                        <input className="border-2 border-gray-400 py-2 pl-2 rounded-md" type="email" placeholder="Email" required/>
                        <textarea className="border-2 border-gray-400 py-2 pl-2 rounded-md resize-none" placeholder="Type your Message here" required></textarea>
                        <button className="bg-sky-600 self-center px-4 py-2 text-white rounded-md hover:bg-green-600 transition-all">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
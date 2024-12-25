"use client";

export default function Product(props) {
    console.log(props)
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <button onClick={()=>alert("hi")} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                Check price
            </button>
        </div>
    );
}

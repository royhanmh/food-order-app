import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron"

const API = () => {



    return(
        <>
            <Jumbotron/>
            <div className="container flex flex-col items-center justify-center mt-5">
                <div className="w-[80%]">
                    <div className="flex flex-col">
                        <label for="api1" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">GET ALL FOOD</label>
                        <input type="text" id="api1" className="self-center block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="http://localhost:3001/food" disabled/>
                    </div>
                </div>
                <div className="w-[80%] mt-5">
                    <div className="flex flex-col">
                        <label for="api2" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">GET DETAIL FOOD</label>
                        <input type="text" id="api2" className="self-center block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="http://localhost:3001/food/id" disabled/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default API;
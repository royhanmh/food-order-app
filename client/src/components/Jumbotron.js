const Jumbotron = () => {

    let textArr = window.location.href.split("/");
    let bannerText = (textArr[3] == "Api") ? "API Documentary" : "Shop"

    return(
        <>
            <div className="bg-shop_banner bg-cover w-full h-[300px] flex justify-center items-center">
                <h1 className="text-mono text-white text-[42px] bg-fixed">{bannerText}</h1>
            </div>
            <div className="lg:flex hidden justify-center mt-5">
                <div className="flex flex-col items-center justify-center p-5 cursor-pointer text-gray-500 hover:text-blue-300 mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <h1>Favorite</h1>
                </div>
                <div className="flex flex-col items-center justify-center p-5 cursor-pointer text-gray-500 hover:text-blue-300 mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h1>Shoppping Bag</h1>
                </div>
                <div className="flex flex-col items-center justify-center p-5 cursor-pointer text-gray-500 hover:text-blue-300">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h1>Track Order</h1>
                </div>
            </div>
        </>
    )
}

export default Jumbotron;
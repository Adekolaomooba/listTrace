import React from "react";

function Header() {

    let menus = [
        'HOME',
        'HOW IT WORKS',
        'EXPLORE',
        'REVIEW',
        'BLOG',
        'CONTACT'
    ]

    return(
        <div className=" w-[100%] h-20 bg-white flex fixed top-0 z-10 shadow-md " >
            <div className=" w-[50%] h-20 ">
                <h1 className=" inline-block ml-[37%] text-center  text-xl h-20 
                                mt-[24px] font-bold ">
                                List
                            <span className=" text-[#ff575d] ">
                                Race
                            </span>
                </h1>
            </div>
            <div className=" w-[50%] h-20 flex items-center text-slate-600 " >
                <div>
                {
                    menus.map(
                        function(menu) {
                            return(<p className=" inline-block mr-8 
                                                hover:text-[#ff575d] 
                                                hover:cursor-pointer ">
                                                {menu}
                                    </p>)
                        }
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default Header
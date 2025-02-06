import React from "react";
import heroIMG from '../assets/images/banner.jpg'

function HeroPanel(){

    let serviceBoxex = [
        {
            icon:'pi pi-building-columns', heading:'Restaurant', nofListing: '150 Listings' 
        },
        {
            icon:'pi pi-shopping-bag', heading:'Destinations', nofListing: '150 Listings' 
        },
        {
            icon:'pi pi-warehouse', heading:'Hotels', nofListing: '150 Listings' 
        },
        {
            icon:'pi pi-clone', heading:'Healthcaree', nofListing: '150 Listings' 
        },
        {
            icon:'pi pi-check-square', heading:'Automation', nofListing: '150 Listings' 
        }
    ]

    return(
        <div className="w-[100%] h-[85vh] bg-cover bg-gray-400 
                        bg-blend-multiply "
                        style={{ backgroundImage: `url(${heroIMG})` }} >
            
            <div className=" w-[70%] h-full  m-auto flex gap-10 flex-col 
                            items-center ">
                <h1 className=" block w-[70%] text-center text-[white] text-5xl 
                                uppercase font-bold leading-[70px] mt-[130px] ">
                    best place 
                </h1>
                <p className=" block w-full text-center text-[white] text-2xl ">
                    Find Best Place, Restaurant, Hotel, Real State and 
                    many more think in just One click
                </p>
                <div className="w-[95%] h-[70px]  flex justify-between mt-[50px] ">
                    <div className=" w-[83%] h-full  ">
                        <input type="text" className=" w-[50%] h-full rounded-l-md pl-[100px]  
                                     outline-none " placeholder="Ex: place, Restaurant, Food, Atomobile" />
                        <input type="text" className=" w-[50%] h-full rounded-r-md outline-none
                                    pl-[100px] " placeholder="Ex: London, Newyork, Rome" />
                    </div>
                    <div className=" w-[15%] h-full  ">
                        <button className=" text-white bg-[#ff575d] h-full
                                            rounded-md w-[100%] ">
                            Search 🔍
                        </button>

                    </div>
                    <p className=" text-[black] text-xl absolute ml-7 mt-5 ">
                        What?
                    </p>
                    <p className=" absolute  left-[860px] text-xl  mt-5 ">
                        Location
                    </p>

                </div>
                <div className=" w-[60%] h-[200px] absolute top-[680px]
                                flex justify-center gap-[20px] " >
                    {
                        serviceBoxex.map(
                            function(boxes){
                                return(
                                    <div className=" w-[18%] h-full bg-[white] shadow-md 
                                                    text-center flex gap-5 flex-col justify-center
                                                    rounded-md hover:bg-[#ff575d] hover:text-[white]
                                                    hover:cursor-pointer  ">
                                        <span className= { `  ${boxes.icon} text-4xl font-thin text-grey-600` } ></span> 
                                        <h1 className=" font-bold " >{boxes.heading}</h1> 
                                        <p className=" inline-block " >
                                            {boxes.nofListing}
                                        </p> 
                                    </div>
                                )
                            }
                        )
                    }
                </div>

            </div>

        </div>
    )
}
export default HeroPanel
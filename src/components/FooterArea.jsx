

const FooterArea = () => {
    return (
        <div className=" w-full ">
            <hr className=" w-[63%] m-auto " />
            <div className=" flex justify-between items-center gap-11 w-[63%] m-auto h-20 text-gray-500 ">
                <p className=" capitalize ">©copyright. designed and developed by <span className=" hover:cursor-pointer ">adekola</span></p>
                <div className=" flex gap-7  ">
                    <div className=" flex items-center gap-1 ">
                        <p className=" pi pi-phone hover:text-[#ff575d] "></p>
                        <p className="  txt-lg hover:text-[#ff575d]  "> +1 (222) 777 8888</p>
                    </div>
                    
                    <p className=" pi pi-facebook p-3 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white "></p>
                    <p className=" pi pi-twitter p-3 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white "></p>
                    <p className=" pi pi-linkedin p-3 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white "></p>
                    <p className=" pi pi-google p-3 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white "></p>
                </div>
            </div>
        </div>
    )
}

export default FooterArea


const SignUp = () => {
    return(
        <div className=" w-full h-[50vh] bg-gray-100 flex flex-col gap-6 justify-center items-center ">
            <h1 className=" uppercase text-2xl font-semibold ">do you want to add your business listing with us?</h1>
            <p className=" text-lg ">Listrace offer you to list your business with us and we very much able to promote your Business.</p>
            <div className=" flex justify-center w-full h-[60px] ">
                <input className=" w-[25%] shadow-md border-none p-6 outline-none  " type="text  " />
                <button className=" bg-[#ff575d] text-white px-5 rounded ">Creat Account</button>
            </div>
        </div>
    )
}

export default SignUp
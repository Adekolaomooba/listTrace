


function HowItWorks(){

    let howBoxes = [
        {
            icon: 'pi-lightbulb',
            heading: 'choose what to do',
            paragraph: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
            btnn: <button>Read More</button>
        },
        {
            icon: 'pi-car',
            heading: 'choose what to do',
            paragraph: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
            btnn: 'Read More'
        },
        {
            icon: 'pi-map-marker',
            heading: 'choose what to do',
            paragraph: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
            btnn: <button>Read More</button>
        },
    ]


    return(
        <div className=" w-[100%]  bg-white ">
            <div className=" flex flex-col items-center ">
                <h2 className=" mt-[200px] text-2xl  ">HOW IT WORKS</h2>
                <p className=" mt-[30px] ">Learn More about how our website works</p>
            </div>
            <div className=" flex gap-6 w-[100%] justify-center ">
                {
                    howBoxes.map(function(box) {
                        return(
                            <div className=" border w-[18%] flex gap-8 flex-col text-center mt-8 mb-[100px] items-center rounded-md 
                                            hover:bg-[#ff575d] hover:text-white group ">
                                <i className= {` pi ${box.icon} text-4xl p-6 bg-gray-100 rounded-[50%] inline-block w-fit m-auto mt-8 group-hover:text-[#ff575d] `}  ></i>
                                <h2 className=" capitalize font-semibold text-xl hover:cursor-pointer "> {box.heading} </h2>
                                <p> {box.paragraph} </p>
                                <button className=" border w-[40%] h-[40px] mb-8  group-hover:text-[#ff575d] group-hover:bg-white " > {box.btnn} </button>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default HowItWorks
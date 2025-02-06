
import imageOne from '../assets/images/e1.jpg'
import imageTwo from '../assets/images/e2.jpg'
import imageThree from '../assets/images/e3.jpg'
import imageFour from '../assets/images/e4.jpg'
import imageFive from '../assets/images/e5.jpg'
import imageSix from '../assets/images/e6.jpg'
import ProfilePic from '../assets/images/person.png'



function Explore(){

const exploreBoxes = [
    {
        image: imageOne,
        heading: 'tommy helfinger bar',
        star: 5.0,
        ratting: '10 ratings',
        formPrice: '5$-300$',
        category: 'resturent',
        profilePic: ProfilePic,
        aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
        available: false,
    },
    {
        image: imageTwo,
        heading: 'swim and dine resort',
        star: 4.5,
        ratting: '10 ratings',
        formPrice: '5$-300$',
        category: 'resturent',
        profilePic: ProfilePic,
        aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
        available: true,
    },
    {
        image: imageThree,
        heading: 'europe tour',
        star: 3.0,
        ratting: '10 ratings',
        formPrice: '5$-300$',
        category: 'resturent',
        profilePic: ProfilePic,
        aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
        available: false,
    },
    {
        image: imageFour,
        heading: 'banglow with swiming pool',
        star: 2.5,
        ratting: '10 ratings',
        formPrice: '5$-300$',
        category: 'resturent',
        profilePic: ProfilePic,
        aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
        available: false,
    },
    {
        image:imageFive ,
        heading: 'vintage car expo',
        star: 1.0,
        ratting: '10 ratings',
        formPrice: '5$-300$',
        category: 'resturent',
        profilePic: ProfilePic,
        aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
        available: true,
    },
    {
        image: imageSix,
        heading: 'thailand tour',
        star: 2.0,
        ratting: '10 ratings',
        formPrice: '5$-300$',
        category: 'resturent',
        profilePic: ProfilePic,
        aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
        available: false,
    }

]



    return(
        <div className=" w-full  bg-gray-100  pb-[80px] " >
            <div className=" flex flex-col items-center ">
                <h2 className=" mt-[100px] text-2xl  ">EXPLORE</h2>
                <p className=" mt-[30px] ">Explore New place, food, culture around the world and many more</p>
            </div>

            <div className=' flex justify-center gap-6 flex-wrap m-auto w-[57%] my-[100px] '>
                {
                    exploreBoxes.map(
                        function(eachExploreBox) {
                            return(
                                <div className=' w-[31%] bg-white  text-gray-500 text-sm leading-6 hover:shadow-2xl group '>
                                    <div className='w-full relative  '>
                                        <img className=' rounded-t  ' src={eachExploreBox.image} alt="" />
                                        <div className=' w-full h-[30px]  absolute bottom-3 left-0 flex justify-between hidden group-hover:flex  '>
                                            <p className=' bg-[#ff575d] rounded text-white px-3 ml-3 py-1 '>Best Rated</p>
                                            <div>
                                            <p className=' pi pi-bookmark bg-black p-2 text-white '></p>
                                            <p className=' pi pi-twitter bg-black p-2 mr-3 text-white '></p>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className=' capitalize mt-6 mb-2 mx-3 text-lg text-gray-950 '> {eachExploreBox.heading} </h2>
                                    <div className=' flex justify-start gap-3 mx-3 mb-4 '>
                                        <p className= {`${eachExploreBox.star>3 ? 'bg-green-600' : eachExploreBox.star > 2 ? 'bg-yellow-500' : 'bg-red-500' } text-white px-2 rounded`} > {eachExploreBox.star.toFixed(1) } </p>
                                        <p> {eachExploreBox.ratting } </p>
                                        <p> | </p>
                                        <p> Form <span className=' text-[red] '>{eachExploreBox.formPrice}</span> </p>
                                        <p> | </p>
                                        <p> {eachExploreBox.category} </p>
                                    </div>
                                    <div className=' flex justify-between mx-3 '>
                                        <img className="w-[40px] h-[40px] object-cover " src={eachExploreBox.profilePic} alt="Profile"/>
                                        <p className=' inline-block w-[80%]  '>{eachExploreBox.aboutPerson}</p>
                                        
                                        
                                    </div>
                                    <hr className=' mt-6 ' />
                                    <div className=' flex justify-between mx-3 my-6 '>
                                            <p className= {`${eachExploreBox.available ? 'text-green-600' : 'text-red-600'}`} > 
                                                            {eachExploreBox.available ? 'Open Now' : 'Closed Now'} 
                                            </p>
                                            <div className=' flex gap-8 '>
                                                <i className=' pi pi-map-marker '></i>
                                                <i className=' pi pi-upload '></i>
                                                <i className=' pi pi-heart '></i>

                                            </div>
                                    </div> 
                                </div>
                            )
                        }
                    )
                }
            </div>

        </div>
    )

}

export default Explore
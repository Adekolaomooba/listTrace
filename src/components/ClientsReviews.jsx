import React from "react"
import clientOne from '../assets/images/clientImages/c1.png'
import clientTwo from '../assets/images/clientImages/c2.png'
import clientThree from '../assets/images/clientImages/c3.png'
import clientFour from '../assets/images/clientImages/c4.png'

const ClientsRiview = () => {

    const clients = [
        {
            clientImg: clientOne,
            name: 'Moniru Islam',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        {
            clientImg: clientTwo,
            name: 'Moniru Islam',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        {
            clientImg: clientThree,
            name: 'Moniru Islam',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        {
            clientImg: clientFour,
            name: 'Moniru Islam',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        {
            clientImg: clientOne,
            name: 'Moniru Islam',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        {
            clientImg: clientOne,
            name: 'Moniru Islam',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        {
            clientImg: clientOne,
            name: 'Moniru Islam',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        {
            clientImg: clientOne,
            name: 'Moniru Islam',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        {
            clientImg: clientOne,
            name: 'Moniru Islam',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        
    ]


    const trafficBoast = [
        {
            figure: '90K+',
            cart: 'Listings'
        },
        {
            figure: '40K+',
            cart: 'Listings Categories'
        },
        {
            figure: '65K+',
            cart: 'Visitors'
        },
        {
            figure: '50K+',
            cart: 'Happy Clients'
        }
    ]

    return (
        <div className=" rvBg ">
            <div className=" flex flex-col items-center bg-white ">
                <h2 className=" mt-[150px] text-2xl uppercase ">clients reviews</h2>
                <p className=" mt-[30px] ">What our client say about us</p>
            </div>
            <div className=" w-full flex justify-center gap-4 py-[100px] bg-white overflow-x-auto ">
                {
                    clients.map(
                        (clientBox) => {
                            return (
                                <div className=" min-w-[300px] border rounded text-gray-400 hover:shadow-2xl  " >
                                    <div className=" flex gap-5 mt-9 mx-5 " >
                                        <img className=" w-[50px] h-[50px] " src={clientBox.clientImg} alt="" />
                                        <div>
                                            <h3 className=" text-gray-950 text-lg font-semibold cursor-default "> {clientBox.name} </h3>
                                            <p className=" cursor-default "> {clientBox.location} </p>
                                            <div>
                                                <span className=" pi pi-star-fill text-yellow-500 text-sm "></span>
                                                <span className=" pi pi-star-fill text-yellow-500 text-sm "></span>
                                                <span className=" pi pi-star-fill text-yellow-500 text-sm "></span>
                                                <span className=" pi pi-star-fill text-yellow-500 text-sm "></span>
                                                <span className=" pi pi-star-fill text-yellow-500 text-sm "></span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className=" mb-10 mx-5 cursor-default "> {clientBox.about} </p>
                                </div>
                            )
                        }
                    )
                }

            </div>
            <div className=" w-full h-[50vh] bg-[rgba(0,0,0,0)] border flex gap-40 items-center justify-center flex-wrap text-white  ">
                {
                    trafficBoast.map(
                        (trafficBox) => {
                            return(
                                <div className=" text-center ">
                                    <h1 className=" text-6xl "> {trafficBox.figure} </h1>
                                    <p className=" text-2xl "> {trafficBox.cart} </p>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
        
    )

}

export default ClientsRiview
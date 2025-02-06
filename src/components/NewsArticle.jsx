import blogImageOne from '../assets/images/newsGalery/b1.jpg'
import blogImageTwo from '../assets/images/newsGalery/b2.jpg'
import blogImageThree from '../assets/images/newsGalery/b3.jpg'

const NewsArticle = () => {

    let articleArray = [
        {
                image: blogImageOne,
                heading: 'How to find desired place more quickly',
                author: 'ADMIN',
                date: 'march 2018',
                heighlight: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
            },
            {
                image: blogImageTwo,
                heading: 'How to find desired place more quickly',
                author: 'ADMIN',
                date: 'march 2018',
                heighlight: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
            },
            {
                image: blogImageThree,
                heading: 'How to find desired place more quickly',
                author: 'ADMIN',
                date: 'march 2018',
                heighlight: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
            }
    ]

    return(
        <div>
            <div className=" flex flex-col items-center bg-white mb-[100px] ">
                <h2 className=" mt-[150px] text-2xl uppercase ">news and articles</h2>
                <p className=" mt-[30px] capitalize ">Always upto date with our latest News and Articles</p>
            </div>
            <div className=' flex gap-6 justify-center  w-full '>
                {
                    articleArray.map(
                        newsBox => 
                            <div className=' w-[18%] text-gray-800 border mb-[100px] hover:shadow-2xl group : '>
                                <img className=' w-full ' src={newsBox.image} alt="" />
                                <div className=' mx-8 group '>
                                    <h2 className=' font-semibold capitalize mt-5 hover:cursor-pointer group-hover:text-[#ff575d] '> {newsBox.heading} </h2>
                                    <div className=' flex gap-3 my-3 '>
                                        <p>Posted by <span className=' font-semibold hover:cursor-pointer '>{newsBox.author}</span> </p>
                                        <p>|</p>
                                        <p> {newsBox.date} </p>
                                    </div>
                                    <p className=' mb-8 '> {newsBox.heighlight} </p>
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
    )

}

export default NewsArticle
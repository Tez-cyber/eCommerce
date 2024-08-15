import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Img1 from '../assets/img-2.jpg'
import { sliderItems } from '../data';
import { useState } from 'react';
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {

    }
    return (
        <div className='relative w-full h-screen flex overflow-hidden'>
            <div
                onClick={() => handleClick("left")}
                className='absolute top-0 cursor-pointer opacity-70 bottom-0 m-auto left-[10px] w-[50px] h-[50px] bg-[#fff7f7] rounded-full flex items-center justify-center'>
                <ChevronLeftOutlinedIcon />
            </div>
            {/*==== Wrapper */}
            <div className="h-full flex translate-x-[0vw]">
                {
                    sliderItems.map(item => (
                        <div className={`flex items-center w-screen h-screen bg-[${item.bg}]`} key={item.id}>
                            <div className="flex-1 h-full">
                                <img className='h-[80%]' src={item.img} alt="" />
                            </div>
                            <div className="flex-1 p-12 uppercase">
                                <h1 className="text-7xl ">{item.title}</h1>
                                <p className="my-11 mx-0 text-xl font-semibold tracking-[3px]">{item.desc}</p>
                                <button className="uppercase p-3 border border-black cursor-pointer">shop now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div
                onClick={() => handleClick("right")}
                className='absolute top-0 cursor-pointer opacity-70 bottom-0 m-auto right-[10px] w-[50px] h-[50px] bg-[#fff7f7] rounded-full flex items-center justify-center'>
                <ChevronRightOutlinedIcon />
            </div>
        </div>
    )
}

export default Slider
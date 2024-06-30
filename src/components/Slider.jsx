import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Img1 from '../assets/img-2.jpg'
const Slider = () => {
  return (
    <div className='relative w-full h-screen flex'>
        <div className='absolute top-0 cursor-pointer opacity-70 bottom-0 m-auto left-[10px] w-[50px] h-[50px] bg-[#fff7f7] rounded-full flex items-center justify-center'>
            <ChevronLeftOutlinedIcon />
        </div>
        <div className="h-full">
            <div className="flex items-center w-screen h-screen">
                <div className="flex-1 h-full">
                    <img className='h-[80%]' src="https://i.pinimg.com/originals/4a/35/63/4a3563e983a31a2001a1bfa882e2961e.png" alt="" />
                </div>
                <div className="flex-1 p-12 uppercase">
                    <h1 className="text-7xl ">summer sale</h1>
                    <p className="my-11 mx-0 text-xl font-semibold tracking-[3px]">dont compromise on style! get flat 30% off for new arrivals</p>
                    <button className="uppercase p-3 border border-black cursor-pointer">shop now</button>
                </div>
            </div>
        </div>
        <div className='absolute top-0 cursor-pointer opacity-70 bottom-0 m-auto right-[10px] w-[50px] h-[50px] bg-[#fff7f7] rounded-full flex items-center justify-center'>
            <ChevronRightOutlinedIcon />
        </div>
    </div>
  )
}

export default Slider
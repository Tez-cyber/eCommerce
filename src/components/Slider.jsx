import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
const Slider = () => {
  return (
    <div className='relative w-full h-screen flex bg-orange-400'>
        <div className='absolute top-0 cursor-pointer opacity-70 bottom-0 m-auto left-[10px] w-[50px] h-[50px] bg-[#fff7f7] rounded-full flex items-center justify-center'>
            <ChevronLeftOutlinedIcon />
        </div>
        <div className='absolute top-0 cursor-pointer opacity-70 bottom-0 m-auto right-[10px] w-[50px] h-[50px] bg-[#fff7f7] rounded-full flex items-center justify-center'>
            <ChevronRightOutlinedIcon />
        </div>
    </div>
  )
}

export default Slider
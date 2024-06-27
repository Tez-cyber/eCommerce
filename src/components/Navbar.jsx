import React from 'react'
import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import Badge from '@mui/material/Badge';


const Navbar = () => {
    return (
        <div className='h-[60px]'>
            <div className="px-5 py-3 flex justify-between items-center ">
                {/* ===Left */}
                <div className="flex-1 flex items-center">
                    <span className='cursor-pointer text-sm uppercase'>en</span>
                    <div className='ml-5 p-1 border border-gray-200 flex items-center'>
                        <input className='' type="text" />
                        <Search />
                    </div>
                </div>
                {/* ===Center */}
                <div className="flex-1 text-center">
                    <h1 className='text-3xl font-bold'>tez.</h1>
                </div>
                {/* ===Right */}
                <div className="flex-1 flex items-center justify-end">
                    <div className="cursor-pointer text-sm ml-5 uppercase">register</div>
                    <div className="cursor-pointer text-sm ml-5 uppercase">sign in</div>
                    <div className="cursor-pointer text-sm ml-5 uppercase">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
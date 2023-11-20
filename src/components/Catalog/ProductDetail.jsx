import React from 'react'
import { PrimaryButton } from '../Button/Button'

const ProductDetail = () => {
    return (
        <div className=' rounded-md p-3 md:p-6 bg-base-200 grid gap-6   md:grid-cols-2 justify-center items-center'>
            <div className=" rounded-md overflow-hidden md:h-[450px] ">
            <img className='bg-cover' src="https://res.cloudinary.com/raiusl/image/upload/v1649700629/posts/fjf7wwppajbpi9xvqbpv.jpg" alt="" />
            </div>
            <div className="flex gap-6 flex-col"> 
                <div className="flex flex-col gap-2">
                    <p>Status: <span className='text-green-500'>This Product Shoding</span> </p>
                    <h2 className='text-3xl font-bold'>Radicchio</h2>
                    <h3>SKU:</h3>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className='text-xl font-bold'>$54.2</h1>
                    <div className="flex gap-2">
                        <div className="badge badge-secondary text-xs">In  Stock</div>
                        <span className='uppercase'>quantity:79</span>
                    </div>
                </div>
                <p>Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.</p>
                <div className="flex flex-col gap-2">
                    <span><span className='font-bold'>Category:</span>Fresh Vegetable</span>
                </div>
               
                <PrimaryButton name={"Edit Product"} />
            </div>

        </div>
    )
}

export default ProductDetail
import React from 'react'
import { PrimaryButton } from '../Button/Button'

const ProductInvoice = () => {
    return (
        <div className=' p-3 md:p-6 rounded-md flex flex-col gap-8 bg-base-200'>
            <div className="flex flex-wrap gap-6 justify-between items-center">

                <div className="flex flex-col gap-2">
                    <h3 className='text-xl uppercase'>INVOICE</h3>
                    <div className="flex gap-2">
                        <span className='text-sm uppercase'>status</span>
                        <div className="badge badge-success text-sm">Pending</div>
                    </div>
                </div>
                <div className="flex justify-center gap-2 flex-col xs:items-end">
                    <h2 className='text-xl'>TryingCode</h2>
                    <article className='text-xs xs:text-end'>
                        <p>
                            59 Station Rd, Purls Bridge, United Kingdom
                        </p>
                        <p>
                            019579034
                        </p>
                        <p>
                            exmple@gmail.com
                        </p>
                    </article>
                </div>
            </div>

            {/* details */}
            <div className="flex flex-wrap justify-between gap-6 md: items-center">
                <div className="flex flex-col gap-2">
                    <h3 className=' uppercase'>Date</h3>

                    <span className='text-sm uppercase'>Nov 20, 2023</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className=' uppercase'>invoice no</h3>

                    <span className='text-sm uppercase'>#103442</span>
                </div>
                <div className="flex items-start xs:items-end justify-center flex-col gap-2">
                    <h3 className=' uppercase'>invoice to</h3>
                    <article className='text-xs xs:text-end'>
                        <p>
                            john er
                        </p>
                        <p>

                            admin1@example.com 9632587410
                        </p>
                        <p>
                            1234
                        </p>
                        <p>
                            yty, yeryer, eryyeyr
                        </p>
                    </article>
                </div>
            </div>
            {/*  product view */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-base-300'>
                        <tr>
                            <th>SR</th>
                            <th>PRODUCT TITLE</th>
                            <th>QUANTITY</th>
                            <th>ITEM PRICE</th>
                            <th>AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>1</td>
                            <td>$30.78</td>
                            <td className='text-green-500' >$30.78</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            {/* card */}
            <div className="flex gap-6 p-6 bg-base-300 flex-wrap justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h3 className='uppercase'>PAYMENT METHOD</h3>

                    <span className='text-sm capitalize'>cash</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className=' uppercase'>SHIPPING COST</h3>

                    <span className='text-sm uppercase'>$23.0</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className='t uppercase'>DISCOUNT</h3>
                    <span className='text-sm uppercase'>$00.0</span>

                </div>
                <div className="flex flex-col gap-2">
                    <h3 className=' uppercase'>total AMOUNT</h3>
                    <span className='text-xl text-green-500 uppercase '>$90.0</span>

                </div>
                {/* btn grupw */}
            </div>
            <div className="flex flex-wrap justify-between items-center">
                <PrimaryButton name={"Download Invoice"} />
                <PrimaryButton name={"Print Invoice"} />
            </div>

        </div>
    )
}

export default ProductInvoice
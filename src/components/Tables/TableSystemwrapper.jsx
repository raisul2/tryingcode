import React from 'react'
import { BiLeftArrow, BiRightArrow} from 'react-icons/bi'
import ReactPaginate from 'react-paginate';

const TableSystemwrapper = ({ TableHead, TableBody }) => {
    return (
        <div className="mb-6 ">

            <div className="overflow-x-auto w-full  rounded-md  mb-6" >
                <table className="table bg-base-200  p-6 rounded-md " >
                    {/* head */}
                    <thead className='bg-base-200 px-6'>
                        {TableHead }
                    </thead>
                        <tbody>  
                        {TableBody }
                        </tbody>
                </table>
            </div>
            <div className='bg-base-200 p-1 rounded-b-md mb-6 flex justify-between flex-wrap sm:flex-row flex-col items-center'>
                <h4 className='textarea-sm'>SHOWING 1-8 OF 561</h4>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<BiRightArrow />}
                    // onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={10}
                    previousLabel={<BiLeftArrow />}
                    renderOnZeroPageCount={null}
                    className='join flex  justify-center items-center'
                    nextClassName='join-item btn btn-sm'
                    previousClassName='join-item btn btn-sm'
                    pageLinkClassName="join-item btn btn-sm"
                    activeClassName="btn-active"
                />
            </div>
        </div>
    )
}

export default TableSystemwrapper
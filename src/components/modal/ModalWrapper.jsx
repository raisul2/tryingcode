import React from 'react'

const ModalWrapper = ({ content, btn, cls, actionbtn }) => {
    return (
        <div className="">

            <button className=" btn bg-transparent btn-sm rounded-md btn-square" onClick={() => document.getElementById('my_modal_2').showModal()}>{btn}</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                        {content}
                   
                    <div className="modal-action gap-2">
                        {actionbtn && <button className="btn">{actionbtn}</button>}
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button></button>
                </form>
            </dialog>
        </div>
    )
}

export default ModalWrapper
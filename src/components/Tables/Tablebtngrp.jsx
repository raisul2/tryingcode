export const Tablebtngrp = ({ Iconone, IconTwo }) => {
    return (
        <div className="flex gap-2 ">

            <div className="btn bg-transparent btn-sm rounded-md btn-square">
                {Iconone}
            </div>
            {
                IconTwo &&
            <div className="btn bg-transparent btn-sm rounded-md btn-square">
                {IconTwo}
            </div>
            }
        </div>
    )
}

 
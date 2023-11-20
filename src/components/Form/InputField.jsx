import React from 'react'

const InputField = ({ data,cls }) => {
    const { type, placeholder, name, value, onChange, leftlabel, rightlabel } = data
    return (
        <div className="form-control w-full ">
            {

                (leftlabel || rightlabel) && <label className="label">
                    <span className="label-text  ">{leftlabel}</span>
                    <span className="label-text-alt">{rightlabel && rightlabel}</span>
                </label>
            }
            <input name={name && name} onChange={onChange && onchange} value={value && value} type={type && type} placeholder={placeholder && placeholder} className={`input input-bordered input-md  w-auto ${cls&&cls} `} />
        </div>
    )
}

export default InputField



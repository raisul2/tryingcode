import React from 'react'
import InputField from '../Form/InputField'
import { PrimaryButton } from '../Button/Button'

const Settings = () => {
  const inputdata = [
    {
      type: "number",
      placeholder: "5",
      name: "number",
      leftlabel: "Number of images per product",
      onchange: () => { },
    },
    {
      type: "text",
      placeholder: "shopzye",
      name: "text",
      leftlabel: "Shop name",

      onchange: () => { },
    },
    {
      type: "text",
      placeholder: "tryingcode",
      name: "text",
      leftlabel: "Company Name",

      onchange: () => { },
    },
    {
      type: "number",
      placeholder: "23442",
      name: "number",
      leftlabel: "Vat Number",

      onchange: () => { },
    },
    {
      type: "text",
      placeholder: "59 stagion ed,bangladesh",
      name: "text",
      leftlabel: "Address",

      onchange: () => { },
    },
    {
      type: "number",
      placeholder: "2342",
      name: "number",
      leftlabel: "Post Code",

      onchange: () => { },
    },
    {
      type: "number",
      placeholder: "019579034",
      name: "number",
      leftlabel: "Contact",

      onchange: () => { },
    },
    {
      type: "email",
      placeholder: "example@gmail.com",
      name: "email",
      leftlabel: "Email",

      onchange: () => { },
    },
    {
      type: "text",
      placeholder: "www.sdf.com",
      name: "text",
      leftlabel: "Web Site",

      onchange: () => { },
    },
  ]

  const options = [
    {
      leftlabel:"Default currency",
      name: "EURO",
      data: ["EURO", "Doler", "BDT", "TR", "Pound"]
    },
    {
      leftlabel:"Default time zone",
      name: "Europe/London(GMT+00:00)",
      data: ["Europe/London(GMT+00:00)", "Europe/London(GMT+00:00)", "Europe/London(GMT+00:00)"]
    },
    {
      leftlabel:"Default Date Format",
      name: "MM/FF/YYYY",
      data: [ "MM/FF/YYYY",  "DD/MM/YYYY", "YYYY/MM/DD"]
    },
    {
      leftlabel:"Receipt size (width)",
      name: "MM/FF/YYYY",
      data: [ "57mm",  "80mm", "100mm"]
    },
  
  ]

  return (
  <div className="">
    <h2 className='section_heading'>Setting</h2>
<div className="md:p-6  p-2 flex flex-col justify-end items-end bg-base-200 rounded-md  ">

    <div className=' grid w-full  gap-2 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
      {
        inputdata && inputdata.map((item, index) => (
          <InputField data={item} key={index} />
        ))
      }

      {
        options && (
          options.map((item, index) => (
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text  ">{item.leftlabel}</span>
              </label>

              <select className="select select-bordered w-full">
                <option disabled selected>{item.name}</option>
                {
                  item.data.map((data, index) => (
                    <option value="someOption">{data}</option>
                  ))
                }
              </select>
            </div>
          ))

        )
      }
    </div>
      <PrimaryButton cls={"mt-6  "} name={"Update"} />
    </div>
    </div>
  )
}

export default Settings
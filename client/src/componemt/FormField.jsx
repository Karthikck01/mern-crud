import React from 'react'

const FormField = ({ labelName, placeholder, inputType, value, handleChange, className }) => {
  return (
    <label className=" flex flex-col gap-1 mb-5 w-full" >
      {labelName && (
        <span className="lable text-2xl text-slate-200">{labelName}</span>
      )}
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className={`${className} bg-transparent border p-2 rounded-md w-full text-lg text-slate-500`}
        />
    </label>
  )
}

export default FormField
"use client"

import React from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import { GrClose, GrCloudUpload } from 'react-icons/gr'
import { Text } from '../components/InputFIeld';
import Button from '../components/Button'

const page = () => {
  const {register, watch, handleSubmit, formState:{errors}} = useForm()

  return (
    <main className="w-5/6 m-auto my-8">
      <div className="flex justify-between items-center my-4 mb-12 tracking-wide w-[90%] mx-auto">
        <GrClose />
        <p className='w-[65%] mx-auto font-semibold text-center'>
          Please upload a selection of artwork pictures that you would like to
          showcase on Deco art exchange
        </p>
        <p></p>
      </div>
      <div className="shadow-md p-10 px-14 rounded-xl">
        <div className="border-dashed border-[1.5px] border-blue-500 p-14 rounded-xl grid gap-5 text-center font-bold">
          <div className="p-3  bg-blue-50 rounded-lg m-auto w-max">
            <GrCloudUpload size={22} color="#285FF4" />
          </div>
          <p>
            Drag and your drop file or{" "}
            <button type="button" className="text-blue-500">
              Click to upload
            </button>
          </p>
        </div>

        <div className='mt-5'>
         <p>No file added</p>
          <p className='mt-5'>
             Supports: PNG, JPG files <br/>Maximum file size of 20mb
          </p>
        </div>
      </div>
      <div className='flex justify-between gap-10 my-4 mt-8'>

      <div className='w-full'>
        <label className='mb-4 font-semibold'>Project Name</label>
        <Text name="Title" register={register} error={errors} placeholder="Enter title of the project"/>
      </div>
      <div className='w-full'>
        <label className='mb-4 font-semibold'>Project Description</label>
        <Text name="Description" register={register} error={errors} placeholder="Enter project description"/>
      </div>
      </div>
      <div className='flex gap-10 items-center'>

      <Button title="Upload file" classname="bg-blue-500 text-white rounded-md tracking-normal"/>
      <Link href="/" className='text-black text-sm'>Cancel</Link>
      </div>
    </main>
  );
}

export default page
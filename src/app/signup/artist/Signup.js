"use client";

import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import {useRouter} from "next/navigation"
import { Text } from "@/app/components/InputFIeld";
import Link from "next/link";
import Button from "@/app/components/Button";

const fields = [
  {id:1, field:"Photography"},
  {id:2, field:"Abstract"},
  {id:3, field:"Painting"},
  {id:4, field:"Sculpture"},
  {id:5, field:"Materialism"},
  {id:6, field:"Surrealism"},

]

const signup = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useRouter()
  const search = useSearchParams();
  // console.log(search, SetSearch);
  const searchParams = search.get("stage");
  const submit = (data)  =>{
      console.log(data)
  }
 

  const onclick = (id) => {
    if(!id) navigate.push("/")
    navigate.push(`/signup/artist?stage=${id}`)
  };

  if (searchParams === "1")
    return (
      <section>
        <div className="relative flex w-auto justify-center text-center">
          <IoPersonCircle size={120} />
          <div className="absolute top-16 left-[55%] bg-white rounded-full shadow-md px-1 py-1">
            <BsPlus size={30} color="#285FF4" />
          </div>
        </div>
        <form className="grid gap-5">
          <Text
            // title="Email or Phone Number"
            placeholder="First Name"
            type="text"
            register={register}
            error={errors}
            name="fName"
          />
          <Text
            // title="Email or Phone Number"
            placeholder="Last Name"
            type="text"
            register={register}
            error={errors}
            name="lName"
          />
          <Link href={`/signup/artist?stage=2`}>
            <Button
              classname="bg-blue-400 w-full text-[#fff] rounded-full mt-5"
              title="Continue"
            />
          </Link>
        </form>
      </section>
    );

  if (searchParams === "2")
    return (
      <section>
        {/* <div className="relative flex w-auto justify-center text-center">
          <IoPersonCircle size={120} enableBackground={true} />
          <div className="absolute top-16 left-[55%] bg-white rounded-full shadow-md px-1 py-1">
            <BsPlus size={30} color="#285FF4" />
          </div>
        </div> */}
        <form className="grid gap-5 mt-8">
          <Text
            // title="Email or Phone Number"
            placeholder="Email Address"
            type="email"
            register={register}
            error={errors}
            name="email"
          />
          <Text
            // title="Email or Phone Number"
            placeholder="Phone Number"
            type="tel"
            register={register}
            error={errors}
            name="pNumber"
          />
          <Link href={`/signup/artist?stage=3`}>
            <Button
              classname="bg-blue-400 w-full text-[#fff] rounded-full mt-5"
              title="Continue"
            />
          </Link>
        </form>
      </section>
    );

  if (searchParams === "3")
    return (
      <section>
        {/* <div className="relative flex w-auto justify-center text-center">
          <IoPersonCircle size={120} enableBackground={true} />
          <div className="absolute top-16 left-[55%] bg-white rounded-full shadow-md px-1 py-1">
            <BsPlus size={30} color="#285FF4" />
          </div>
        </div> */}
        <form className="grid gap-5 mt-8" onSubmit={handleSubmit(submit)}>
          <Text
            // title="Email or Phone Number"
            placeholder="Location"
            type="text"
            register={register}
            error={errors}
            name="location"
          />

          <p className="text-xs text-[#605F5D] font-semibold ">Are You a professional full time artist?</p>
         <div className="flex gap-20">
          <Button title="Yes" classname="border-[#285FF4] border font-bold px-8" onclick={onclick} id={4}/> <Button title="No" classname="border-[#285FF4] border font-bold px-8 ml-5" onclick={onclick} id={4} />
         </div>

         
          
        </form>
      </section>
    );
    
  if (searchParams === "4") 
  return (
    <section>
      {/* <div className="relative flex w-auto justify-center text-center">
          <IoPersonCircle size={120} enableBackground={true} />
          <div className="absolute top-16 left-[55%] bg-white rounded-full shadow-md px-1 py-1">
            <BsPlus size={30} color="#285FF4" />
          </div>
        </div> */}
      <form className="grid gap-5 mt-8" onSubmit={handleSubmit(submit)}>
        
        <p className="text-xs  font-semibold ">
          How many years of experience do you have?
        </p>
        <input
          type="text"
          name="experience"
          className="border-b-[#285FF4] border-b-[1px] mb-6"
          {...register("experience", { required: true })}
        />

        <p className="text-xs text-[#605F5D] font-semibold ">
          Do You have an online portfolio?
        </p>
        <div className="flex gap-20">
          <Button
            title="Yes"
            classname="border-[#285FF4] border font-bold px-8"
            onclick={onclick}
            id={5}
          />{" "}
          <Button
            title="No"
            classname="border-[#285FF4] border font-bold px-8 ml-5"
            onclick={onclick}
            id={5}
          />
        </div>
      </form>
    </section>
  );

  if (searchParams === "5") return (
    <section>
      {/* <div className="relative flex w-auto justify-center text-center">
          <IoPersonCircle size={120} enableBackground={true} />
          <div className="absolute top-16 left-[55%] bg-white rounded-full shadow-md px-1 py-1">
            <BsPlus size={30} color="#285FF4" />
          </div>
        </div> */}
      <form className="grid gap-3 mt-8" onSubmit={handleSubmit(submit)}>
        <p className="text-xs  font-semibold ">
          if yes, please provide us a link to your website
        </p>
        <input
          type="text"
          name="experience"
          placeholder="https://"
          className="border-b-[#285FF4] border-b-[1px] mb-6"
          {...register("experience", { required: true })}
        />

        <p className="text-xs text-black font-semibold ">
          Do You have any social media platform?
        </p>
        <p className="text-[10px] text-[#605F5D] ">
          please provide us links to your social media platforms
        </p>
        <div className="flex gap-20 w-full">
          <div className="grid gap-2 w-full">

          <Text
            type="url"
            error={errors}
            register={register}
            name="twitterUrl"
            placeholder="Twitter Link"
            className="border border-[#285FF4]"
          />
          <Text
            type="url"
            error={errors}
            register={register}
            name="FacebookUrl"
            placeholder="Facebook Link"
            className="border border-[#285FF4]"
            />
          <Text
            type="url"
            error={errors}
            register={register}
            name="InstagramUrl"
            placeholder="Instagram Link"
            className="border border-[#285FF4]"
            />
            </div>
        </div>
        <Button title="Continue" classname="bg-[#285FF4] w-full text-white" onclick={onclick} id={6}/>
      </form>
    </section>
  );

  if (searchParams === "6") return (
    <section>
      {/* <div className="relative flex w-auto justify-center text-center">
          <IoPersonCircle size={120} enableBackground={true} />
          <div className="absolute top-16 left-[55%] bg-white rounded-full shadow-md px-1 py-1">
            <BsPlus size={30} color="#285FF4" />
          </div>
        </div> */}
      <p className="text-sm  font-regular ">
        <span className="text-[#285FF4]">Artistic experience</span> plays a
        major role in our selection process. Please provide us with your most
        completed (main solo or collective exhibitions, prizes, art fairs,
        etc...)
      </p>
      <form className="grid gap-5 mt-8" onSubmit={handleSubmit(submit)}>
        <div className="w-full">

        <p className="text-xs text-[#605F5D] font-semibold ">
          How many exhibition have you participated in?
        </p>
        <input
          type="text"
          name="experience"
          className="border-b-[#285FF4] border-b-[1px] mb-6 w-full"
          {...register("exhibition", { required: true })}
          />
          </div>

       
          <Button
            title="Continue"
            classname="bg-[#285FF4] border font-bold px-8 text-white"
            onclick={onclick}
            id={7}
          />{" "}
          
  
      </form>
    </section>
  );

  if (searchParams === "7") return (
    <div className="grid gap-3 w-full">
      <h1 className="font-bold">You can select multiple fields of your choice</h1>
      <div className="mt-5">
        <p className="font-bold">What are your most field of art?</p>
        <div className="gap-3 grid w-full my-5">
          {fields.map((data) => (
            <div
              key={data.id}
              className="w-full text-center grid border-[#285FF4] text-sm border-[1px] px-20 py-1 "
            >
              {data.field}
            </div>
          ))}
        </div>
      </div>
      <Button
        title="Submit"
        classname="bg-[#285FF4] border w-full px-8 text-white"
        onclick={onclick}
        id={8}
      />
    </div>
  );

  if (searchParams === "8") return (
    <section>
      {/* <div className="relative flex w-auto justify-center text-center">
          <IoPersonCircle size={120} enableBackground={true} />
          <div className="absolute top-16 left-[55%] bg-white rounded-full shadow-md px-1 py-1">
            <BsPlus size={30} color="#285FF4" />
          </div>
        </div> */}
      <form className="grid gap-5 mt-8" onSubmit={handleSubmit(submit)}>
        <div className="w-full grid">
          <p className="text-xs  font-semibold ">
            How many artwork have you sold in the past six months?
          </p>
          <input
            type="text"
            name="sold"
            placeholder="e.g 2"
            className="border-b-[#285FF4] border-b-[1px] mb-6 w-full"
            {...register("experience", { required: true })}
          />
        </div>
        <div className="w-full grid">
          <p className="text-xs  font-semibold ">
            How many artworks are produced on a monthly basis?
          </p>
          <input
            type="text"
            name="produced"
            placeholder="e.g 2"
            className="border-b-[#285FF4] text-sm border-b-[1px] mb-6 w-full"
            {...register("experience", { required: true })}
          />
        </div>
        <p className="text-xs font-semibold tracking-wider">
          I affirm that the information provided in this form is true, complete
          and accurate
        </p>
        <div className="flex gap-20">
          <Button
            title="Yes"
            classname="border-[#285FF4] text-sm border font-bold px-8"
            onclick={onclick}
            id="completed"
          />{" "}
          <Button
            title="No"
            classname="border-[#285FF4] border font-bold px-8 ml-5"
          
            
          />
        </div>
      </form>
    </section>
  );

  if (searchParams === "completed") return (
    <div className="grid gap-10 font-bold">
      <p>
        Thank you for submitting your application to DecoArt Exchange. We
        appreciate your interest and will carefully review your submission. Our
        team values your creativity and looks forward to the possibility of
        featuring your artwork within our vibrant community. Stay tuned for
        updates
      </p>
      <Button
        title="Submit"
        classname="bg-[#285FF4] border font-bold px-8 w-full text-white"
        onclick={onclick}
      />
    </div>
  );

};

export default signup;

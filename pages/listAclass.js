import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

import institutions from "../resources/institutions";
import {transformCollegeJSON} from "../helper/index"
import Nav from "../components/nav";


let options = []

for(let k in institutions){
  console.log("college:", institutions[k].k)

  options.push({
"value":institutions[k]['institution'],
"label":institutions[k]['institution']
})
}


console.log("options:",options)


const createAlisting =()=> {

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data, null));
  };
  
  const [values, setReactSelect] = useState({
    selectedOption: []
  });

  const handleMultiChange = selectedOption => {
    setValue("selectedCollege", selectedOption);
    setReactSelect({ selectedOption });
  };

  useEffect(() => {
    register({ name: "selectedCollege" });
  }, [register]);

  return (

  <>
   <Nav />
    <div className="antialiased text-gray-900">
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="mx-4 card bg-white max-w-md p-10 md:rounded-lg my-8 mx-auto">
        <div className="title">
            <h1 className="font-bold text-center">List a in-person class you're able to swap</h1>
        </div>

        <div className="options md:flex md:space-x-6 text-sm items-center text-gray-700 mt-4">
            <p className="w-1/2 mb-2 md:mb-0">What school do you attend?</p>
            <Select
            className="w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
            name="selectedCollege"
            placeholder="Select a college"
            value={values.selectedOption}
            options={options}
            onChange={handleMultiChange}
          />
        </div>    

            <div className="form mt-4">
                <div className="flex flex-col text-sm">
                    <label htmlFor="title" className="font-bold mb-2">What is your name?</label>
                    <input 
                      name="fullName"
                      ref={register}
                      className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
                      type="text" 
                      placeholder="Jane Doe" 
                      /> 
                </div>


                <div className="flex flex-col text-sm">
                    <label htmlFor="title" className="font-bold mb-2">What is your Email?</label>
                    <input 
                      name="email"
                      ref={register}
                      className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500" 
                      type="email" 
                      placeholder="janerose@jmail.com"
                    /> 
                </div>

                <div className="flex flex-col text-sm">
                    <label htmlFor="title" className="font-bold mb-2">What is your major?</label>
                    <input 
                      ref={register}
                      name="major"
                      className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500" 
                      type="text"
                      placeholder="History"
                    /> 
                </div>

                 <div className="flex flex-col text-sm">
                    <label htmlFor="title" className="font-bold mb-2">Name of the in-person class that you are willing to switch out of?</label>
                    <input 
                      ref={register}
                      name="classAvailableToBeSwtched"
                      className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
                      type="text" 
                      placeholder="Sociology 201" 
                     /> 
                </div>

               <div className="flex flex-col text-sm">
                    <label htmlFor="title" className="font-bold mb-2">What days/times does this class take place?</label>
                    <input 
                    ref={register}
                    name="dateTimeOfClass"
                    className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500" type="text" 
                    placeholder="Mon Wed Fri 8am" 
                    /> 
                </div>

            </div>

            <div className="submit">
                <button type="submit" className=" w-full bg-blue-600 shadow-lg text-white px-4 py-2 hover:bg-blue-700 mt-8 text-center font-semibold focus:outline-none ">Submit</button>
            </div>
            </div>
      </form>
    </div>
   </>
  );
}


export default createAlisting;

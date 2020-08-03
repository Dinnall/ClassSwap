import React from "react";
import Link from 'next/link'
import { redirectToEmail } from "../helper/index";

export default () => (
    <div className="w-full mx-auto justify-between mt-0 py-8">
      <nav>
        <div className="mx-auto px-6 py-2 flex justify-between items-center" >

          <Link href="/">
            <a className="font-bold text-2xl lg:text-4xl" href="#">
              <span className="text-yellow-500 font-extrabold">Class</span>
              <span className="text-purple-900 font-extrabold">Swap</span>
            </a>
          </Link>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Social Pulse</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex">
              <li>
              <Link href="/viewclasses">
                  <a className="px-4 font-bold hover:text-gray-800" href="#">View Classes</a>
                </Link>
              </li>
              <li>
                <Link href="/listAclass">
                  <a className="px-4 font-bold hover:text-gray-800" href="#">List a Class</a>
                </Link>
              </li>
              <li>
                <a className="px-2 hover:text-gray-700 text-white bg-purple-900 font-bold rounded-full py-4 px-10 shadow-sm "
                  href={redirectToEmail()}>
                  Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="text-gray-700 body-font">
        <div className=" mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="text-4xl lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Keeping international students dreams alive.
        </h1>
            <p className="mb-8 leading-relaxed">
        <br />
        Are you a domestic student who has a spot in an in-person class? 
        <br  />
        Would you be willing to give your spot to someone who needs it? 
        <br />
        </p>

          </div>
          <div className="lg:max-w-6xl lg:w-2/3">
            <img 
            className="" 
            src="https://github.com/Dinnall/imageHoster/blob/master/a%20crowd%20of%20people%20of%20different%20society%202.jpg?raw=true" 
            alt="" 
            width="" height=""
            />
          </div>
        </div>
      </section>

      <section className="sm:flex justify-center bg-purple-900 h-full" >
        <div className="container px-10 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Harness data in a meaningful way.
            <br />
            Understand where influence can be made.
          </h2>
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider" >
            Learn more
          </button>
        </div>
      </section>
    </div>
)
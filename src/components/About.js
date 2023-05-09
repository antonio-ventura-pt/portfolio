import React from "react";

function About(){
    return(
        <section id="about">
            <div className="relative w-full h-screen mx-auto bg-[#498C8A]">
                <div className="flex flex-row font-extrabold pt-20 pl-20 text-5xl gap-2">
                    <h1 className="text-white font-extrabold">About </h1>
                    <h1 className="text-cyan-400 font-thin">me</h1>
                </div>

                <p className="text-gray-300 pl-20 pt-5 pr-96 mr-96">
                    - I'm a passionate Computer Engineering student with a strong background in web and mobile
                    development. I have solid programming skills in languages like HTML, CSS, JavaScript, and React for
                    web development, as well as experience in mobile development using Android and Flutter. I'm seeking
                    opportunities to expand my knowledge and contribute to impactful projects in the field.</p>

                {/* After finishing the CV, uncomment this button and add the link to the CV
                <a href="" download>
                    <button className={"ml-60 py-2 px-6 text-[18px] bg-cyan-800 mt-6 cursor-pointer box-border border-b-2 rounded-2xl border-transparent hover:border-white transition duration-300 ease-in-out text-white"} type="submit">
                        Download CV
                    </button>
                </a>*/}

            </div>
        </section>
    )
}

export {About};
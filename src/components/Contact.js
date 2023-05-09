import React from "react";
import { handleSubmit } from "../server_side/handleSubmit";

function Contact() {
    return (
        <section id="contact">
            <div className="w-full h-screen mx-auto bg-black">
                <div className="flex flex-col pt-20 pl-20 pr-96 mr-96">
                    <div className="flex flex-row gap-2">
                        <h1 className="object-contain text-gray-200 text-[50px] font-sans font-bold">Contact</h1>
                        <h4 className="object-contain text-cyan-500 text-[50px] font-sans cursor-pointer font-thin">me</h4>
                    </div>
                        {/*create a form for someone to contact with the fields name, email, message*/}
                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="object-contain text-gray-100 text-[20px] font-sans">Name</label>
                        <input className="rounded-xl px-2.5" type="text" id="name" name="name" />

                        <label htmlFor="email" className="object-contain text-gray-100 text-[20px] font-sans">Email</label>
                        <input className="rounded-xl px-2.5" type="email" id="email" name="email" />

                        <label htmlFor="message" className="object-contain text-gray-100 text-[20px] font-sans">Message</label>
                        <textarea className="rounded-xl px-2.5" id="message" name="message" rows="2" />

                        <button className={"text-[18px] bg-cyan-800 mt-6 cursor-pointer box-border border-b-2 rounded-2xl border-transparent hover:border-white transition duration-300 ease-in-out"} type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export {Contact};
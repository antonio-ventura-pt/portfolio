import React from "react";
import {Canva} from "./Canva";

function Hero(){
    return(
        <section>
            <div className="w-full h-screen flex flex-col pt-36 bg-black">
                <div className="flex gap-2">
                    <h1 className="object-contain text-gray-200 text-[50px] font-extrabold pl-20">Hi, I'm</h1>
                    <h1 className="object-contain text-cyan-400 text-[50px] font-thin">António Ventura</h1>
                </div>

                <p className="text-gray-400 text-[25px] pl-20">
                    I Develop User Interfaces, Web Aplications and some games</p>

            </div>

            <Canva />

        </section>
    )
}

export {Hero};
import { Hero2 } from "./Hero2"
import { Hero3 } from "./Hero3"

export const Hero1 = () => {
    return (
        <>
            <div>
                <div className="text-white text-5xl mb-2.5">
                    <b>Build</b> 
                    <span className="italic opacity-85"> faster</span>
                    <b>, collaborate</b>
                    <span className="italic"> smarter</span>
                    <b>,</b>
                    <br />
                    <span className="opacity-85">and</span>
                    <span className="italic"> scale effortlessly <b>with CloudSync</b> </span>
                </div> 
                <div className="flex justify-center ">
                    <Hero2 />  
                </div>
                <div className="flex justify-center mt-8">
                    <Hero3 />  
                </div>
            </div>
        </>
    )
}
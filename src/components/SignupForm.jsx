import { useRef, useState } from "react"
import { useTheme } from "./ThemeContext";

export const SignupForm = () => {
    const emailRef = useRef();
    const [error, setError] = useState("");
    const { darkMode } = useTheme()
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        if(!email.includes("@")) {
            setError("Please enter a valid email address")
            return;
        }

        alert(`Email is submitted : ${email}`)
        // setError("")
        emailRef.current.value = ""
    }
    return (
        <>
            <form onSubmit={handleSubmit} className={`${darkMode ? `bg-white` : `bg-blue`} pace-y-2 bg-blue-400 p-4 rounded-2xl `}>
                <div>
                <input ref={emailRef} type="email" placeholder="enter your email" className={`border ml-5  p-2 rounded max-w-scren ${darkMode ? `text-white bg-black` :`text-black bg-white`}`}/>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex justify-center items-center">
                    <button type="submit" className="bg-blue-600  text-white px-4 py-2 rounded">Submit</button>
                </div>
            </form>
        </>
    )
}
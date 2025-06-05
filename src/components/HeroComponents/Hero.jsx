import { useEffect, useState } from "react";

export const Hero = () => {
    const taglines = [
        "Your files, your control — synced with the cloud ☁️",
        "Smart storage. Fast access. CloudSync.",
        "Collaboration made simple. Work smarter 💡",
        "Secure your data. Scale your business 🚀",
        "File sharing without the fuss.",
        "Built for speed. Designed for teams.",
    ];
    const [tagline, setTagline] = useState("")

    useEffect(() => {
        const randomIdx = Math.floor(Math.random() * taglines.length)
        setTagline(taglines[randomIdx])
    }, [])

    return (
        <div className="text-center text-white">
            <h1 className="text-4xl font-bold leading-tight">
                Build <span className="italic font-light">faster</span>, collaborate <b>smarter</b>,<br />
                and scale <i>effortlessly</i> <span className="italic font-bold">with CloudSync</span>
            </h1>

            {/* Random tagline */}
            <p className="mt-4 text-lg text-slate-100 font-medium italic">
                {tagline}
            </p>

            <div className="mt-6 flex justify-center gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md">
                🚀 Get Started for Free
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow-md">
                ▶️ Watch Demo
                </button>
            </div>
        </div>
    )
}
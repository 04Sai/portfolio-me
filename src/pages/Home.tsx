import { motion } from "framer-motion";
import { useCursorStore } from "../store/useCursorStore";
import { useThemeStore } from "../store/useThemeStore";
import { Link } from "react-router-dom";

const item = {
    initial: { y: "2rem", opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.2, 1, 0.4, 1] as const
        }
    },
};

export default function Home() {
    const set = useCursorStore((state) => state.setCursorType);
    const { theme } = useThemeStore();

    return (
        <motion.main
            className="pb-[10vh] overflow-y-scroll snap-y snap-mandatory"
            exit={{ opacity: 0, filter: "blur(1px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* about */}
            <motion.section
                className="relative w-screen pt-[17.5vh] pl-[10vw] flex flex-col lg:pt-[15vh] lg:pl-[15vw] lg:flex-row lg:items-center lg:gap-[10vw] snap-center"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <div className="w-[80vw] lg:w-[35vw] lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-between font-light leading-none">
                    <div>
                        <div className="text-[clamp(3rem,6.5vw,7rem)] md:text-[clamp(4rem,7vw,8rem)] font-light lg:font-thin">
                            <div className="h-auto overflow-hidden">
                                <motion.h1 
                                    className="flex gap-[clamp(0.1rem,0.2vw,0.2rem)]"
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    transition={{ 
                                        staggerChildren: 0.08,
                                        delayChildren: 0.7,
                                    }}
                                >
                                    <motion.span variants={item}>S</motion.span>
                                    <motion.span variants={item}>Y</motion.span>
                                    <motion.span variants={item}>M</motion.span>
                                    <motion.span variants={item}>O</motion.span>
                                    <motion.span variants={item}>N</motion.span>
                                    <motion.span variants={item}>D</motion.span>
                                </motion.h1>
                            </div>
                            {/* <div className="h-auto overflow-hidden">
                                <motion.h1 
                                    className="flex gap-[clamp(0.1rem,0.2vw,0.2rem)]"
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    transition={{ 
                                        staggerChildren: 0.08,
                                        delayChildren: 1,
                                    }}
                                >
                                    <motion.span variants={item}>B</motion.span>
                                    <motion.span variants={item}>R</motion.span>
                                    <motion.span variants={item}>A</motion.span>
                                    <motion.span variants={item}>N</motion.span>
                                    <motion.span variants={item}>D </motion.span>
                                    <motion.span variants={item}>O</motion.span>
                                </motion.h1>
                            </div> */}
                        </div>

                        <div className="text-[clamp(0.8rem,1.2vw,1.5rem)] pl-1 lg:pl-2">
                            Web Developer / Designer
                        </div>
                    </div>
                    <div className="pl-1 mt-[10vh] lg:pl-2 flex flex-col items-start justify-start text-[clamp(0.8rem,1.2vw,1.5rem)] leading-tight">
                        <p>For business inquiries, email me at</p>
                        <Email />
                    </div>
                </div>

                <div className="lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-end">
                    <div className="h-[10vh] lg:h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                        <h1>ABOUT ME</h1>
                    </div>

                    <div className="w-[80vw] lg:w-[35vw] h-[1px] bg-[#888888aa]"/>

                    <div className="w-[80vw] lg:w-[35vw] flex flex-col pt-[5vh] lg:pt-[clamp(1rem,7.5vh,3rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-1 leading-[clamp(1.1rem,3vh,1.4rem)]">
                        <p>I am a web developer and designer.</p>
                        <p>Currently studying Bachelor of Science in Information Technology at the Cavite State University - Imus Campus.</p>
                        <p>Other than designing websites, I enjoy reading comics and working out.</p>
                    </div>
                </div>
            </motion.section>

            {/* works */}
            <WorksSection />

            {/* skills */}
            <motion.section
                className="relative w-screen pt-[5vh] pl-[10vw] lg:pt-[clamp(2rem,5vh,5rem)] lg:pl-[15vw] flex flex-col snap-center"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >

                <div className="w-[80vw] lg:w-[75vw] flex flex-col items-start justify-start">
                    <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                        <h1>SKILLS</h1>
                    </div>

                    <div className="w-[80vw] lg:w-[75vw] h-[1px] bg-[#888888aa]"/>

                    <div className="mt-[5vh] w-[80vw] lg:w-[75vw] flex flex-col items-start justify-start gap-10 lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex flex-col w-[80vw] lg:w-[25vw] gap-3 font-light">
                            <div className="text-[clamp(1rem,1.5vw,2rem)] h-auto tracking-wide">
                                <h2>FRONTEND</h2>
                            </div>
                            <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                                <p className={`w-fit h-fit p-1 px-5 m-1 border rounded-full duration-500 ${theme === "dark" ? "border-[#fff4e4] hover:bg-[#fff4e4] hover:text-[#23211e]" : "border-[#23211e] hover:bg-[#23211e] hover:text-[#fff4e4]"}`}>TypeScript</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border rounded-full duration-500 ${theme === "dark" ? "border-[#fff4e4] hover:bg-[#fff4e4] hover:text-[#23211e]" : "border-[#23211e] hover:bg-[#23211e] hover:text-[#fff4e4]"}`}>JavaScript</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border rounded-full duration-500 ${theme === "dark" ? "border-[#fff4e4] hover:bg-[#fff4e4] hover:text-[#23211e]" : "border-[#23211e] hover:bg-[#23211e] hover:text-[#fff4e4]"}`}>React.js</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border rounded-full duration-500 ${theme === "dark" ? "border-[#fff4e4] hover:bg-[#fff4e4] hover:text-[#23211e]" : "border-[#23211e] hover:bg-[#23211e] hover:text-[#fff4e4]"}`}>Next.js</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border rounded-full duration-500 ${theme === "dark" ? "border-[#fff4e4] hover:bg-[#fff4e4] hover:text-[#23211e]" : "border-[#23211e] hover:bg-[#23211e] hover:text-[#fff4e4]"}`}>Tailwind CSS</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border rounded-full duration-500 ${theme === "dark" ? "border-[#fff4e4] hover:bg-[#fff4e4] hover:text-[#23211e]" : "border-[#23211e] hover:bg-[#23211e] hover:text-[#fff4e4]"}`}>React Native</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border rounded-full duration-500 ${theme === "dark" ? "border-[#fff4e4] hover:bg-[#fff4e4] hover:text-[#23211e]" : "border-[#23211e] hover:bg-[#23211e] hover:text-[#fff4e4]"}`}>GSAP</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[80vw] lg:w-[20vw] gap-3 font-light">
                            <div className="text-[clamp(1rem,1.5vw,2rem)] h-auto tracking-wide">
                                <h2>BACKEND</h2>
                            </div>
                            <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                                <p className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>TypeScript</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>Node.js</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>Apache</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>Nest.js</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>SQL</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[80vw] lg:w-[20vw] gap-3 font-light">
                            <div className="text-[clamp(1rem,1.5vw,2rem)] h-auto tracking-wide">
                                <h2>TOOLS</h2>
                            </div>
                            <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                                <p className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>Windows</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>VSCode</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>Cursor</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>Git</p>
                                <p className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>Figma</p>
                            </div>
                        </div>
                    </div>


                </div>
            </motion.section>
        </motion.main>
    )
}

function Email() {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <a
            href="mailto:symond042204@gmail.com"
            aria-label="Send an email to Sai"
            onMouseEnter={() => set("hover")}
            onMouseLeave={() => set("default")}
        >
            symond042204@gmail.com
        </a>
    )
}

function WorksSection() {
    const { theme } = useThemeStore();
    const set = useCursorStore((state) => state.setCursorType);

    return (
        <motion.section
            className="relative w-screen pt-[5vh] pl-[10vw] lg:pt-[clamp(5rem,15vh,10rem)] lg:pl-[15vw] flex flex-col snap-center"
            initial={{ opacity: 0, filter: "blur(1px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <div className="flex flex-col items-start justify-start">
                <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                    <h1>WORKS</h1>
                </div>

                <div className="w-[80vw] lg:w-[75vw] h-[1px] bg-[#888888aa]"/>

                <div className="mt-[5vh] w-[80vw] lg:w-[75vw] flex flex-col items-center justify-center">
                    <p className="text-[clamp(1.2rem,2vw,2.5rem)] font-light tracking-widest mb-8">COMING SOON</p>
                    
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <Link
                                key={i}
                                to={`/Works/${i}`}
                                className="group flex flex-col gap-2"
                                onMouseEnter={() => set("hover")}
                                onMouseLeave={() => set("default")}
                            >
                                <div className={`w-full aspect-[2/1] rounded-sm ${theme === "dark" ? "bg-[#35322b] group-hover:bg-[#fff4e4] group-hover:opacity-60" : "bg-[#d1c7b7] group-hover:bg-[#b8ad9e] group-hover:opacity-80"} animate-pulse transition-colors duration-300`} />
                                <div className="flex flex-col gap-2">
                                    <div className={`h-4 w-3/4 rounded ${theme === "dark" ? "bg-[#35322b]" : "bg-[#d1c7b7]"} animate-pulse`} />
                                    <div className={`h-3 w-1/2 rounded ${theme === "dark" ? "bg-[#23211e]" : "bg-[#b8ad9e]"} animate-pulse`} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

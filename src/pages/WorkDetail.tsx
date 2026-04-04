import { motion } from "framer-motion";
import { useParams, NavLink, Link } from "react-router-dom";
import { projects } from "../components/projects";
import Media from "../components/media";
import { useCursorStore } from "../store/useCursorStore";
import { useThemeStore } from "../store/useThemeStore";
import NotFound from "./NotFound";

export default function WorkDetail() {
    const set = useCursorStore((state) => state.setCursorType);
    const { theme } = useThemeStore();
    const { id } = useParams();
    const data = projects.find((p) => p.id === id);
    const navigableProjects = projects.filter((p) => p.title.trim().length > 0);
    const currentIndex = navigableProjects.findIndex((p) => p.id === id);
    const previousData = currentIndex > 0 ? navigableProjects[currentIndex - 1] : undefined;
    const nextData = currentIndex >= 0 && currentIndex < navigableProjects.length - 1
        ? navigableProjects[currentIndex + 1]
        : undefined;

    if (!data) {
        return <NotFound />;
    }

    const mediaItems = [
        { image: data.image1, bg: data.bg1, loading: "eager" as const },
        { image: data.image2, bg: data.bg2, loading: "eager" as const },
        { image: data.image3, bg: data.bg3, loading: undefined },
        { image: data.image4, bg: data.bg4, loading: "lazy" as const },
    ].filter((item) => Boolean(item.image));

    return (
        <motion.main
            className="relative w-screen min-h-screen flex flex-col pt-[30vh] sm:landscape:pt-[50vh] md:landscape:pt-[50vh] lg:pt-[40vh] pl-[10vw] pr-[10vw] lg:pl-[15vw] lg:pr-[5vw]"
            exit={{ opacity: 0, filter: "blur(1px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <NavLink to="/#projects">
                <motion.div
                    className="fixed top-[8vh] left-[5vw] lg:top-[5vh] lg:left-[15vw] text-[clamp(0.6rem,1vw,1.5rem)] md:text-[clamp(1rem,1.5vw,1.5rem)] font-light flex flex-row items-center gap-1 z-10"
                    initial={{ opacity: 0, filter: "blur(1px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    onMouseEnter={() => set("hover")}
                    onMouseLeave={() => set("default")}
                >
                    <span>
                        <svg width="clamp(0.6rem,1vw,1.5rem)" height="clamp(0.6rem,1vw,1.5rem)" viewBox="0 0 37 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.646447" y1="36.0018" x2="36.0018" y2="0.646455" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                            <line x1="0.353553" y1="35.6464" x2="35.7089" y2="71.0018" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                        </svg>
                    </span>
                    <span>BACK</span>
                </motion.div>
            </NavLink>

            <motion.div
                className="lg:hidden landscape:hidden fixed top-[10vh] right-[5vw] text-[clamp(0.6rem,1vw,1.5rem)] md:text-[clamp(1rem,1.5vw,1.5rem)] font-light flex flex-col items-end justify-start gap-1 z-10"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                onMouseEnter={() => set("hover")}
                onMouseLeave={() => set("default")}
            >
                {data?.github &&
                (
                    <a
                        href={data?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                        onMouseEnter={() => set("hover")}
                        onMouseLeave={() => set("default")}
                    >
                        GitHub
                        <span>
                            <svg width="clamp(0.6rem,1vw,1.5rem)" height="clamp(0.6rem,1vw,1.5rem)" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                <line x1="71.207" y1="50" x2="71.207" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                            </svg>
                        </span>
                    </a>
                )}

                {data?.demo &&
                (
                    <a
                        href={data?.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                        onMouseEnter={() => set("hover")}
                        onMouseLeave={() => set("default")}
                    >
                        Demo
                        <span>
                            <svg width="clamp(0.6rem,1vw,1.5rem)" height="clamp(0.6rem,1vw,1.5rem)" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                <line x1="71.207" y1="50" x2="71.207" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                            </svg>
                        </span>
                    </a>
                )}
            </motion.div>

            <motion.div
                className="fixed top-[5vh] left-[10vw] landscape:top-[10vh] lg:top-[15vh] lg:left-[15vw] w-[80vw] flex flex-col"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="flex flex-row items-end justify-between gap-4">
                    <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] md:text-[clamp(1.5rem,2.5vw,2.5rem)] font-light">
                        <h1>{data?.title}</h1>
                    </div>
                    
                    <div
                        className={`flex flex-row items-center justify-end gap-4 lg:gap-6 text-[clamp(0.85rem,1.25vw,1.5rem)] md:text-[clamp(1.1rem,1.8vw,2rem)] font-light mb-[clamp(0.2rem,1.2vh,0.8rem)]
                        `}>
                        {previousData && (
                            <Link
                                key={previousData.id}
                                to={`/projects/${previousData.id}`}
                                onMouseEnter={() => set("hover")}
                                onMouseLeave={() => set("default")}
                                className="inline-flex items-center gap-2"
                            >
                                <span>
                                    <svg width="clamp(0.9rem,1.2vw,1.6rem)" height="clamp(0.9rem,1.2vw,1.6rem)" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="101.795" y1="50.2071" x2="1.79534" y2="50.2071" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                        <line x1="36.5927" y1="85.2064" x2="1.23737" y2="49.851" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                        <line x1="36.5927" y1="15.2028" x2="1.23737" y2="50.5581" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                    </svg>
                                </span>
                                <span>{previousData.title}</span>
                            </Link>
                        )}

                        {nextData && (
                            <Link
                                key={nextData.id}
                                to={`/projects/${nextData.id}`}
                                onMouseEnter={() => set("hover")}
                                onMouseLeave={() => set("default")}
                                className="inline-flex items-center gap-2"
                            >
                                <span>{nextData.title}</span>
                                <span>
                                    <svg width="clamp(0.9rem,1.2vw,1.6rem)" height="clamp(0.9rem,1.2vw,1.6rem)" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                        <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                        <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                    </svg>
                                </span>
                            </Link>
                        )}
                    </div>
                </div>

                <div className="w-[80vw] h-px bg-[#888888aa]" />
            </motion.div>

            <motion.div
                className="flex flex-col min-h-[clamp(80rem,200vh,200rem)] landscape:min-h-[350vh] md:min-h-[200vh] lg:portrait:min-h-[180vh] lg:landscape:min-h-[clamp(20rem,370vh,30rem)] w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="w-full flex flex-col items-center justify-start gap-[10vh] lg:gap-[20vh] md:pb-[30vh] lg:pb-[40vh]">
                    {mediaItems.map((item, index) => (
                        <div
                            key={`${data.id}-media-${index}`}
                            className="relative w-[50vw] max-w-4xl aspect-video flex items-center justify-center bg-[#aaaaaa]"
                        >
                            {item.bg && (
                                <img
                                    loading={item.loading}
                                    alt="Background"
                                    src={item.bg}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                            <Media
                                src={item.image}
                                alt={data?.title}
                                className="z-10 w-full h-full object-contain p-[clamp(0.5rem,2vw,1.5rem)] md:p-10"
                                loading={item.loading}
                            />
                        </div>
                    ))}
                </div>

                <motion.div
                    className="h-[65vh] md:h-[60vh] flex flex-col landscape:flex-row md:flex-row items-start justify-between font-light mt-auto mb-[10vh] landscape:mb-[7.5vh] lg:mb-8 sm:landscape:gap-[3vw]"
                    initial={{ opacity: 0, filter: "blur(1px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className="w-[80vw] md:w-[40vw] lg:w-[35vw] flex flex-col gap-5 md:gap-8">
                        <div className="flex flex-col items-start justify-between gap-2">
                            <h2 className="text-[clamp(1rem,1.5vw,2rem)] md:text-[clamp(1.1rem,2vw,2rem)]">TOOLS</h2>
                            <div className="w-full text-[clamp(0.7rem,1vw,1rem)] landscape:text-[clamp(0.6rem,0.8vw,0.8rem)] lg:portrait:text-[clamp(0.7rem,1vw,1rem)] lg:landscape:text-[clamp(0.7rem,1vw,1rem)] flex flex-wrap gap-1 md:gap-2">
                                {data?.techs.map((val, i) => (
                                    <p key={i} className={`w-fit h-fit p-[0.15rem] px-[0.8rem] md:p-1 md:px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>{val}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row items-start justify-between">
                            <div className="flex flex-col items-start justify-between gap-2">
                                <h2 className="text-[clamp(1rem,1.5vw,2rem)] md:text-[clamp(1.1rem,2vw,2rem)]">DURATION</h2>
                                <p className="text-[clamp(0.8rem,1.5vw,1rem)] landscape:text-[clamp(0.7rem,1vw,1.2rem)] lg:portrait:text-[clamp(1rem,1.2vw,1.5rem)] lg:landscape:text-[clamp(1rem,1.2vw,1.5rem)]">{data?.duration}</p>
                            </div>

                            <div className="flex flex-col items-start justify-between gap-2">
                                <h2 className="text-[clamp(1rem,1.5vw,2rem)] md:text-[clamp(1.1rem,2vw,2rem)]">ROLES</h2>
                                <p className="text-[clamp(0.8rem,1.5vw,1rem)] landscape:text-[clamp(0.7rem,1vw,1.2rem)] lg:portrait:text-[clamp(1rem,1.2vw,1.5rem)] lg:landscape:text-[clamp(1rem,1.2vw,1.5rem)]">{data?.roles}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[80vw] md:w-[35vw] h-auto flex flex-col items-start justify-start gap-4 mt-8 md:mt-0">
                        <h2 className="text-[clamp(1rem,1.5vw,2rem)] md:text-[clamp(1.1rem,2vw,2rem)]">SUMMARY</h2>
                        <p className="text-[clamp(0.8rem,1.5vw,1rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)]">{data?.summary}</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.main>
    )
}

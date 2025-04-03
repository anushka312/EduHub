import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const About = () => {
    return (
        <div className="relative h-screen w-full">
            <div className="absolute top-0 left-0 w-full">
                <Navbar />
            </div>

            <div
                className="h-full flex flex-col justify-center items-center text-center overflow-auto"
                style={{ backgroundImage: "radial-gradient(circle, #9626E0, #C9A0EB)" }}
            >
                <p className="text-white font-bold text-4xl relative pb-4">
                    Kickstart your learning with{" "}
                    <span className="relative inline-block">
                        <motion.span
                            className="absolute left-0 bottom-0 w-full h-full bg-yellow-500 origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <span className="relative">EduHub</span>
                    </span>
                </p>
                <motion.p
                    className="text-white text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1.6 }}
                >
                    Explore, learn, and grow with us on a platform that’s redefining education for the future.
                </motion.p>
                <motion.button
                    className="mt-6 px-5 py-3 bg-black text-white font-semibold text-base rounded-xl shadow-lg hover:bg-white hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 3.6 }}
                >
                    Get Started
                </motion.button>

            </div>
            <div className="bg-black h-full">


            </div>
        </div>
    );
};

export default About;

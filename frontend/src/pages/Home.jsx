import React from 'react';
import bg from "/src/assets/bg.jpg?url";
import img1 from "/src/assets/img1.png?url";

const Home = () => {
    return (
        <div className='bg-center h-screen w-screen overflow-auto' style={{ backgroundImage: `url(${bg})` }}>

            <div className='text-[#A21EFA] font-bold text-7xl text-center pt-6'>
                <p>EduHub</p>
            </div>
            <div className="py-5 flex flex-col items-center text-center">
                <p className="text-white text-2xl font-extrabold mb-4">
                    Your Gateway to a Revolutionary Educational Experience
                </p>
                <img src={img1} alt="Educational Experience" className="w-96 h-auto rounded-lg shadow-lg" />
            </div>
            <div className='px-10 md:px-20 lg:px-32 xl:px-60 py-10'>
                <p className='text-white text-lg font-semibold text-justify leading-relaxed'>
                EduHub is revolutionizing the way certifications are issued and verified by leveraging the power of <span className='bg-yellow-300 text-black'>blockchain technology</span>. 
                Unlike traditional systems, EduHub ensures tamper-proof, secure, and instantly verifiable certificates, eliminating the risk of fraud and the hassle of manual verification. 
                Whether you're an educator, employer, or learner, our decentralized approach guarantees authenticity, accessibility, and trust. 
                Join us in shaping the future of <span className='bg-yellow-300 text-black'>digital credentials</span>—where transparency meets innovation! 
                </p>
            </div>

        </div>
    )
}

export default Home;
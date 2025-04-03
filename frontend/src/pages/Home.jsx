import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import bg from "/src/assets/bg.png?url";
import img1 from "/src/assets/img1.png?url";
import img2 from "/src/assets/img2.png?url";
import img3 from "/src/assets/img3.png?url";
import Navbar from './Navbar';

const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is EduHub?",
            answer: "At EduHub, we're transforming education with cutting-edge technology and decentralized solutions. Our platform offers a comprehensive suite of features designed to enhance learning, streamline content delivery, and provide a secure, transparent environment for both educators and learners."
        },
        {
            question: "How does this work?",
            answer: "Our Decentralized Certification Platform allows educators to issue digital certificates that are secure and tamper-proof. Certificates are stored on the blockchain, ensuring they are easily verifiable and accessible at any time. This eliminates the need for physical certificates and provides a more reliable method of credentialing."
        },
    ];

    const toggleFAQIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-center overflow-auto h-screen bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <Navbar />
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
                <p className='text-white text-lg font-semibold text-justify leading-relaxed mb-3'>
                    EduHub is revolutionizing the way certifications are issued and verified by leveraging the power of <span className='bg-yellow-300 text-black'>blockchain technology</span>.
                    Unlike traditional systems, EduHub ensures tamper-proof, secure, and instantly verifiable certificates, eliminating the risk of fraud and the hassle of manual verification.
                    Whether you're an educator, employer, or learner, our decentralized approach guarantees authenticity, accessibility, and trust.
                    Join us in shaping the future of <span className='bg-yellow-300 text-black'>digital credentials</span>—where transparency meets innovation!
                </p>
            </div>
            <div className='bg-[#EDE6F2] py-10'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                    <img src={img2} className='w-96 h-auto' />
                    <div className='text-center md:text-left'>
                        <p className='text-[#220c50] text-4xl font-bold'>Get Verified Easily</p>
                        <p className='text-[#5a537b] my-3 max-w-lg text-justify'>
                            Our platform simplifies the process of issuing and verifying certificates substantially,
                            ensuring authenticity and security through blockchain technology. With instant verification,
                            trust in education has never been easier.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-10 mt-10'>
                    <img src={img3} className='w-96 h-auto' />
                    <div className='text-center md:text-left'>
                        <p className='text-[#220c50] text-4xl font-bold'>Secured Credentials</p>
                        <p className='text-[#5a537b] my-3 max-w-lg text-justify'>
                            Ensure the integrity and authenticity of your certifications with tamper-proof,
                            verifiable credentials powered by blockchain technology. Say goodbye to fraud and
                            manual verification hassles—experience seamless, trust-driven certification.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-gradient-to-b from-[#D1BAE3] via-[#AC84D9] to-[#7D13CF] py-20 flex flex-col items-center'>
                <p className='text-[#001122] font-bold text-4xl tracking-wide pb-8'>FAQ</p>
                <div className='bg-white rounded-3xl shadow-lg p-6 w-[80%] max-w-4xl'>
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b">
                            <button
                                className="w-full font-semibold text-[#333] flex justify-between py-3 focus:outline-none"
                                onClick={() => toggleFAQIndex(index)}
                            >
                                <span className="text-lg">{openIndex === index ? "➖" : "➕"}</span>
                                <span className='text-left flex-1 mx-3 my-1'>{faq.question}</span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out 
                ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className="text-[#3c1a70] text-5 mt-2 mb-4 text-justify">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-white h-72 text-center'>
                    <p className='text-4xl font-bold  pt-20 pb-8'>Connect Today.</p>
                    <Button className='bg-black text-white rounded-xl shadow-lg'>Get Started</Button>
            </div>
        </div>
    );
};

export default Home;

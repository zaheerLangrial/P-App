"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ThankYou = () => {
  const [agree, setAgree] = useState<boolean>()


  const fetchAgree = async () => {
    try {
      const res = await axios.get('http://54.169.157.67:8000/v1/thankyou/')
      setAgree(res.data.agree)
    } catch (error) {
      console.log('error', error)
    }
  }


  useEffect(() => {
    fetchAgree()
  })


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-300 to-blue-500 text-white p-6">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md text-center animate-fade-in">
        {agree ? (
          <div>
            <h1 className="text-4xl font-bold mb-4 text-green-600 animate-bounce">
              Thank You So Much! 🎉
            </h1>
            <p className="text-lg">

              I’m extremely happy that you trusted me enough to agree to go on a date. Please don’t worry about anything; InshaAllah, I won’t give you any reason to complain. We can plan the rest on WhatsApp, like which restaurant to go to. Again, thank you so much! 💖
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-bold mb-4 text-red-600 animate-pulse">
              Thank You! 🌟
            </h1>
            <p className="text-lg">
              I’m very happy that you responded so kindly to my feelings and reached this point. Thank you so much. 🌟
            </p>
          </div>
        )}
      </div>

      <div className="mt-8">
        <Image
          src={agree ? "https://i.pinimg.com/originals/fd/d3/5e/fdd35e278f84fbff5d3ffbb197b174a8.gif" : "https://i.pinimg.com/originals/4c/ea/03/4cea031fa751e7658f5e0355def16f29.gif"}
          alt="Thank You Animation"
          width={256}  // Example width (adjust as needed)
          height={256} // Example height (adjust as needed)
          className="animate-scale-in rounded-3xl"
        />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-10%);
          }
          50% {
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        .animate-scale-in {
          animation: scale-in 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ThankYou;

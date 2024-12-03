"use client";

import Button from '@/components/Button';
import { SetArrayToStringArray } from '@/utils/Functions';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ReasonList = () => {
  const [currentReason, setCurrentReason] = useState(0);
  const [reasons, setReasons] = useState<string[]>([]);

  const handleNext = () => {
    if (currentReason < reasons.length - 1) {
      setCurrentReason((prev) => prev + 1);
    }
  };

  const Get_Reasons_list = async () => {
    try {
      const res = await axios.get('http://54.169.157.67:8000/v1/get_reason_list/');
      if (res.data) {
        setReasons(SetArrayToStringArray(res.data));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    Get_Reasons_list();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-500 to-purple-700 text-white relative">
      <div className="w-11/12 max-w-xl p-8 bg-white text-black rounded-lg shadow-lg text-center relative">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <h1 className="text-3xl font-bold mb-4">Reasons Why You&apos;re Special</h1>
        <p className="text-xl italic">{reasons[currentReason]}</p>
        <div className="mt-6 flex justify-center">
          {currentReason < reasons.length - 1 ? (
            <button
              onClick={handleNext}
              className="bg-purple-700 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-purple-600 transition"
            >
              Next
            </button>
          ) : (
            <p className="text-lg font-semibold text-green-600">
              That&apos;s why you are amazing! 💖
            </p>
          )}
        </div>
      </div>

      {currentReason === reasons.length - 1 && (
        <div className="mt-12 text-center">
          <p className="text-xl mb-4 font-semibold">
          I hope you&apos;ve enjoyed this so far.
          </p>
          <Button
            path='/interested' text='Please proceed to the next step' // Update with actual next page URL
            // className="bg-white text-pink-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-100 transition"
          />
        </div>
      )}

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="heart-animation"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 3}s`,
              fontSize: `${0.8 + Math.random() * 1.5}rem`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <style jsx>{`
        .heart-animation {
          position: absolute;
          bottom: 0;
          animation: floatUp 5s infinite ease-in-out;
          opacity: 0.6;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ReasonList;

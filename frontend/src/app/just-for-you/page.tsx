"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For navigation
// import { Get_FavName_and_msgs } from '@/utils/Functions';
import axios from "axios"
import { FvNameAndMsgsType } from '@/utils/types';

export default function JustForYou() {
  const [reveal, setReveal] = useState(false);
  const router = useRouter();
  const [favNameAndMsgs, setFavNameAndMsgs] = useState<null | FvNameAndMsgsType>()

  useEffect(() => {
    if (reveal) {
      const audio = new Audio('/path-to-your-music.mp3'); // Add your music file in public folder
      audio.play();
    }
  }, [reveal]);




  const Get_FavName_and_msgs = async () => {
    try {
      const res = await axios.get('http://54.169.157.67:8000/v1/get_fav_name_msgs/')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setFavNameAndMsgs(res?.data as any)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    Get_FavName_and_msgs()
  }, [])


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-500 to-purple-700 text-white relative">
      <h1 className="text-4xl font-extrabold mb-6 animate-bounce">Just for You!</h1>
      <p className="text-xl mb-4 text-center">
        A special message for someone truly amazing.
      </p>

      {!reveal ? (
        <button
          className="bg-white text-pink-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-100"
          onClick={() => setReveal(true)}
        >
          Tap to Reveal
        </button>
      ) : (
        <div className="text-center">
          <p className="text-2xl italic mb-4">
            {favNameAndMsgs?.first_msg}
          </p>
          <p className="text-2xl italic mb-4">
            {favNameAndMsgs?.sec_msg}
          </p>
          <p className="text-sm mb-8">— {favNameAndMsgs?.first_name}</p>

          <div className="flex space-x-4">
            <button
              onClick={() => router.push('/reason-list')}
              className="bg-purple-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-800"
            >
              Next
            </button>
            <button
              onClick={() => router.push('/not-interested')}
              className="bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-600"
            >
              Not Interested
            </button>
          </div>
        </div>
      )}

      {/* Floating Heart Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="heart-animation"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              fontSize: `${1 + Math.random() * 2}rem`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <style jsx>{`
        .heart-animation {
          position: absolute;
          bottom: 0px;
          animation: floatUp 5s infinite ease-in-out;
          opacity: 0.7;
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
}

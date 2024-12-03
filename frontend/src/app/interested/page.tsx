"use client";

import { IPQuestions } from '@/utils/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Interested = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [reason, setReason] = useState("");
    const [aboutMe, setAboutMe] = useState<string>("Loading");
    const [questions, setQuestions] = useState<IPQuestions[]>([]);
    const router = useRouter();

    const fetchAbout = async () => {
        try {
            const res = await axios.get('http://54.169.157.67:8000/v1/about_me/');
            setAboutMe(res?.data?.message);
        } catch (error) {
            console.log('error', error);
        }
    };

    const fetchQuestions = async () => {
        try {
            const res = await axios.get('http://54.169.157.67:8000/v1/get_questions/');
            setQuestions(res?.data);
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleAnswer = async (id: number, answer: boolean) => {
        try {
            const res = await axios.post('http://54.169.157.67:8000/v1/update_question/', { id: id, ques_ans: answer });
            console.log(res.data?.message);
            fetchQuestions();
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://54.169.157.67:8000/v1/add_and_update_confirm_entry/', {
                date,
                time,
                reason,
            });
            console.log(res.data.message);
            // message.success(res.data.message);
            router.push('/thankyou');  // Replace '/next-page' with your actual route
        } catch (error) {
            console.log('error', error);
            // message.error(error?.response?.data?.message || 'Something went wrong!');
        }
    };


    useEffect(() => {
        fetchAbout();
    }, []);

    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-500 to-purple-700 text-white relative">
            <div className="w-11/12 max-w-lg bg-white text-black p-8 rounded-lg shadow-lg animate-fade-in">
                <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
                <p className="text-lg italic mb-6">{aboutMe}</p>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Questions for You</h2>
                    <div className="space-y-6">
                        {questions?.map((q) => (
                            <div key={q?.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                                <p className="text-lg">{q?.question_text}</p>
                                <div className="space-x-4">
                                    <button
                                        onClick={() => handleAnswer(q?.id, true)}
                                        className={`px-4 py-2 rounded-lg font-semibold ${q?.question_ans ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
                                            }`}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => handleAnswer(q?.id, false)}
                                        className={`px-4 py-2 rounded-lg font-semibold ${q?.question_ans === false ? 'bg-red-600 text-white' : 'bg-red-200 text-red-800'
                                            }`}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {questions[3]?.question_ans && (
                    <div className="mt-8 bg-blue-100 p-6 rounded-lg shadow-md animate-slide-in">
                        <h3 className="text-xl font-bold mb-4">Set a Date and Time</h3>
                        <label className="block mb-2">
                            Select Date:
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="block w-full mt-1 p-2 rounded-md border"
                                min={new Date().toISOString().split('T')[0]}
                            />
                        </label>
                        <label className="block mb-2">
                            Select Time:
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="block w-full mt-1 p-2 rounded-md border"
                            />
                        </label>
                    </div>
                )}

                {questions[3]?.question_ans === false && (
                    <div className="mt-8 bg-yellow-100 p-6 rounded-lg shadow-md animate-slide-in">
                        <h3 className="text-xl font-bold mb-4">Why Not?</h3>
                        <label className="block mb-2">
                            Share your reason:
                            <textarea
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="block w-full mt-1 p-2 rounded-md border"
                                rows={3}
                            // required={true}
                            ></textarea>
                        </label>
                    </div>
                )}

                <div className="mt-8 flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="bg-purple-700 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-purple-600 transition"
                    >
                        Submit and Proceed
                    </button>
                </div>
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

                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-in-out;
                }

                .animate-slide-in {
                    animation: slide-in 0.8s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Interested;

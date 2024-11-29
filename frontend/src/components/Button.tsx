'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { IPbutton } from '@/utils/types';

const Button = ({ path, text }: IPbutton) => {
    const router = useRouter()
    return (
        <button onClick={() => router.push(path)} className="bg-white text-purple-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-100">
            {text}
        </button>
    )
}

export default Button
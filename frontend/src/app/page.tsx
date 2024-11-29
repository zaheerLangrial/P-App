import Button from '@/components/Button';
import Head from 'next/head';


export default function Home() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
    <Head>
      <title>Special Homepage</title>
    </Head>
    <div className="text-center text-white p-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to Something Special!</h1>
      <p className="text-lg mb-8">
        Get ready for a journey filled with surprises. Click the button to continue.
      </p>
      <Button path="/just-for-you" text='Continue' />
    </div>
  </div>
  );
}

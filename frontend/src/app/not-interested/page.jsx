import Link from "next/link";

export default function NotInterested() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">Oops...</h1>
      <p className="text-xl mb-6 text-center">
        Sorry if I crossed a line! Just know, it was all in good spirit. Forget this ever happened! 😊
      </p>
      <Link
        href="/"
        className="bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-500"
      >
        Back to Home
      </Link>
    </div>
  );
}

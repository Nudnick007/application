'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FormEvent } from 'react';

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const amount = formData.get('amount');
    const userKey = formData.get('userKey'); 

    if (!name || !amount || !userKey) {
      console.error('Name, amount, and userKey are required');
      return;
    }

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, amount, userKey }),
    });

    if (response.ok) {
      router.push('/chart');
    } else {
      console.error('Failed to submit data');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">Submit Amount & Name</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="mb-4 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            className="mb-4 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="userKey"
            placeholder="Enter Your Key"
            className="mb-4 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300 w-full">
            Submit
          </button>
        </form>

        <Link href="about" className="block text-center mt-4 text-blue-500 hover:underline">
          Go to About Page
        </Link>
      </div>
    </div>
  );
}
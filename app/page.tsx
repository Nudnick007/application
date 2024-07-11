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
    const userKey = formData.get('userKey'); // Get the user-provided key

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="mb-2 p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          className="mb-2 p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="text"
          name="userKey"
          placeholder="Enter Your Key"
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-4">
          Submit
        </button>
      </form>

      <Link href="about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go to About Page
      </Link>
    </div>
  );
}
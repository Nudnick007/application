import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-sky-500 text-3xl mb-4">Hello World!</p>
      <Link href="about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Go to About Page
      </Link>
    </div>
  );
}
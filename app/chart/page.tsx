// pages/chart.tsx
'use client';
// pages/chart.tsx
import { Doughnut } from 'react-chartjs-2';
import Link from 'next/link';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-4xl font-bold p-4 rounded shadow-md mb-8 w-full text-center">
        Finances
      </header>
      <div className="w-1/3 mb-8">
        <Doughnut data={data} />
      </div>
      <Link href="about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
        Go to About Page
      </Link>
    </div>
  );
}


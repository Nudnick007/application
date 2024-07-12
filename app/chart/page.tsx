'use client';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import Link from 'next/link';

export default function ChartPage() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();

      const combinedData = data.reduce((acc, item) => {
        const existing = acc.find(i => i.name === item.name);
        if (existing) {
          existing.amount += parseFloat(item.amount);
        } else {
          acc.push({ name: item.name, amount: parseFloat(item.amount) });
        }
        return acc;
      }, []);

      const labels = combinedData.map(item => item.name);
      const amounts = combinedData.map(item => item.amount);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Amounts',
            data: amounts,
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
      });
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-500">Finances</h1>
        <div className="w-full">
          <Doughnut data={chartData} />
        </div>
        <Link href="about" className="block text-center mt-4 text-blue-500 hover:underline">
          Go to About Page
        </Link>
      </div>
    </div>
  );
}

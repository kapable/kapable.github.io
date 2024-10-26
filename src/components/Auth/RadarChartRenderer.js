import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

const RadarChartRenderer = ({ mbtiScores }) => {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  const mbtiFeatures = ['E', 'S', 'T', 'J', 'I', 'N', 'F', 'P'];
  const chartData = {
    labels: mbtiFeatures,
    datasets: [
      {
        label: 'MBTI Scores',
        data: mbtiFeatures.map((feature) => mbtiScores[feature]),
        backgroundColor: 'rgba(230, 33, 130, 0.2)',
        borderColor: '#e62182',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: Math.max(...Object.values(mbtiScores)),
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  //   const chartOptions = {
  //     radar: {
  //       axes: {
  //         angle: 'feature',
  //         value: 'score',
  //       },
  //       alignment: 'center',
  //     },
  //     data: {
  //       groupMapsTo: 'product',
  //     },
  //     legend: {
  //       //   alignment: 'center',
  //       enabled: false,
  //     },
  //     height: '20rem',
  //     toolbar: false,
  //     color: {
  //       scale: { MBTI: '#e52182' },
  //     },
  //     amimations: false,
  //   };

  return (
    <div>
      <Radar
        style={{ maxWidth: '30rem', maxHeight: '30rem', margin: '0 auto' }}
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default RadarChartRenderer;

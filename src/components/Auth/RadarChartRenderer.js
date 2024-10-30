import React, { useEffect, useState } from 'react';
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
import { getMBTIHashtags } from '../../tools/auth';

const RadarChartRenderer = ({ mbtiScores, MBTIType }) => {
  const [typeHashtags, setTypeHashtags] = useState([]);
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

  useEffect(() => {
    const hashtagGetter = async () => {
      const Hashtags = await getMBTIHashtags(MBTIType);
      setTypeHashtags(Hashtags);
    };
    hashtagGetter();
  }, [MBTIType]);

  return (
    <div>
      <Radar
        style={{ maxWidth: '30rem', maxHeight: '30rem', margin: '0 auto' }}
        data={chartData}
        options={chartOptions}
      />
      <div>
        {typeHashtags.map((hashtag, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              padding: '0.5rem',
              margin: '0.25rem',
              backgroundColor: '#e62182',
              color: '#fff',
              borderRadius: '1rem',
              fontSize: '0.7rem',
            }}
          >
            #{hashtag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RadarChartRenderer;

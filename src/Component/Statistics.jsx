import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const studentMarks = [
    { id: 1, exam: "A one", mark: 60 },
    { id: 2, exam: "A Two", mark: 60 },
    { id: 3, exam: "A Three", mark: 58 },
    { id: 4, exam: "A Four", mark: 60 },
    { id: 5, exam: "A Five", mark: 60 },
    { id: 6, exam: "A Six", mark: 58 },
    { id: 7, exam: "A Seven", mark: 58 },
    { id: 8, exam: "A Eight", mark: 58 },
  ];

const Statistics = () => {
    
      
    return (
        <div className='mt-32 mx-auto flex justify-center'>
        
           <AreaChart
            width={1000}
            height={400}
            data={studentMarks}
           >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="exam" />
            <YAxis />
            <Tooltip />
           <Area dataKey="mark"></Area>
           </AreaChart>
           
        </div>
    );
};

export default Statistics;
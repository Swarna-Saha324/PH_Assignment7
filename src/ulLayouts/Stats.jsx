import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useFriend } from '../context/FriendContext'; 

const Stas = () => {
    const { timelineEntries } = useFriend(); 

    
    const getChartData = () => {
        const counts = {
            Text: 0,
            Call: 0,
            Video: 0
        };

        
        timelineEntries.forEach(entry => {
            if (counts.hasOwnProperty(entry.type)) {
                counts[entry.type]++;
            }
        });

        
        return [
            { name: 'Text', value: counts.Text },
            { name: 'Call', value: counts.Call },
            { name: 'Video', value: counts.Video },
        ].filter(item => item.value > 0); 
    };

    const chartData = getChartData();

    
    const COLORS = ['#8b5cf6', '#1e3a3a', '#22c55e']; 

    return (
        <div className="max-w-4xl mx-auto p-10 bg-[#f9fafb] min-h-screen">
            <h2 className="text-3xl font-bold mb-8 text-[#1a2b3c]">Friendship Analytics</h2>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-gray-500 font-bold text-sm mb-6">By Interaction Type</h3>
                
                <div className="h-[350px] w-full flex flex-col justify-center items-center">
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={COLORS[index % COLORS.length]} 
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend 
                                    verticalAlign="bottom" 
                                    align="center" 
                                    iconType="circle"
                                    wrapperStyle={{ paddingTop: '20px' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="text-gray-400 italic">No interaction data available to show.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Stas;
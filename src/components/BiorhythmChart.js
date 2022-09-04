import dayjs from "dayjs";
import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis } from "recharts";

const data = [
    {date: '2022-08-30', physical: 0.99, emotional: 0.50, intellectual: -0.25},
    {date: '2022-08-30', physical: 0.44, emotional: 0.44, intellectual: -0.20},
    {date: '2022-08-30', physical: 0.33, emotional: 0.40, intellectual: -0.15}
];


function BiorhythmChart() {
    return (
        <ResponsiveContainer width="100%" height={100}>
            <LineChart date={data}>
                <XAxis dataKey={date}/>
                    <Line dataKey="physical"/>
                    <Line dataKey="emotional"/>
                    <Line dataKey="intellectual"/>
            </LineChart>
        </ResponsiveContainer>
    );
}
export default BiorhythmChart;
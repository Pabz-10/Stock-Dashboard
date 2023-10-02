import React, { useState } from "react";
import { mockHistroicalData } from "../constants/mock";
import { convertUnixTimestampToDate } from "../helpers/date-helper";
import Card from "./Card";
import {
	Area,
	AreaChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { data } from "autoprefixer";
import ChartFilter from "./ChartFilter";
import { chartConfig } from "../constants/config";

const Chart = () => {
	const [date, setDate] = useState(mockHistroicalData);
	const [filter, setFilter] = useState("1W");

	const formatData = () => {
		return date.c.map((item, index) => {
			return {
				value: item.toFixed(2),
				// item with 2 decimal places
				date: convertUnixTimestampToDate(date.t[index]),
			};
		});
	};
	return (
		<Card>
			<ul className="flex absolute top-2 right-2 z-40">
				{Object.keys(chartConfig).map((item) => {
					return (
						<li key={item}>
							<ChartFilter
								text={item}
								active={filter === item}
								onClick={() => setFilter(item)}
							/>
						</li>
					);
				})}
			</ul>
			<ResponsiveContainer>
				<AreaChart data={formatData(data)}>
					<defs>
						<linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
							<stop
								offset="5%"
								stopColor="rgb(199 210 254)"
								stopOpacity={0.8}
							/>
							<stop offset="95%" stopColor="rgb(199 210 254)" stopOpacity={0} />
						</linearGradient>
					</defs>
					<Area
						type="monotone"
						dataKey="value"
						stroke="#312e81"
						fillOpacity={1}
						strokeWidth={0.5}
						fill="url(#chartColor)"
					/>
					<Tooltip />
					<XAxis dataKey={"date"} />
					<YAxis domain={["dataMin", "dataMax"]} />
				</AreaChart>
			</ResponsiveContainer>
		</Card>
	);
};

export default Chart;

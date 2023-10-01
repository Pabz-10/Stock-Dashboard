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
			<ResponsiveContainer>
				<AreaChart data={formatData(data)}>
					<Area
						type="monotone"
						dataKey="value"
						stroke="#312e81"
						fillOpacity={1}
						strokeWidth={0.5}
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

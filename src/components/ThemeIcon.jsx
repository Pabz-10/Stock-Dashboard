import { MoonIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeIcon = () => {
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	return (
		<button
			className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 top-10 xl:top-10 shadow-lg ${
				darkMode ? "shadow-gray-800" : null
			}`}
			onClick={toggleDarkMode}
		>
			<MoonIcon
				className={`h-8 w-8 cursor-pointer stroke-1 fill-none ${
					darkMode
						? "fill-yellow-400 stroke-yellow-400"
						: "fill-none  stroke-neutral-400"
				}`}
			/>
		</button>
	);
};

export default ThemeIcon;

import { useState } from "react";

export function useCarousel({ initialValue, maxValue }) {
	const [selectedIndex, setSelectedIndex] = useState(initialValue);

	function increaseIndexHandler() {
		if (selectedIndex >= maxValue) return;

		setSelectedIndex((prevIndex) => prevIndex + 1);
	}

	function decreaseIndexHandler() {
		if (selectedIndex <= initialValue) return;

		setSelectedIndex((prevIndex) => prevIndex - 1);
	}

	return { selectedIndex, increaseIndexHandler, decreaseIndexHandler };
}

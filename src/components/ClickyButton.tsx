import React from "react";
import { useState } from "react";

export function ClickyButton() {
	const [count, setCount] = useState(0);

	return (
		<button type="button" onClick={() => setCount(count + 1)}>Clicked {count} times</button>
	);
}

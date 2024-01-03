import React from "react";

interface AppProps {
	children?: React.ReactNode;
}
export function Html({ children }: AppProps) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="/styles.css" />
				<title>BUN Livesport.cz</title>
			</head>
			<body>
				<div id="root">{children}</div>
			</body>
		</html>
	);
}

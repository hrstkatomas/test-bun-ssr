import React, { useState } from "react";
import { SortByLeaguesContext } from "./context/sortByLeaguesContext.ts";
import { LiveTable } from "./components/LiveTable.tsx";
import { SortByLeagueButton } from "./components/SortByLeagueButton.tsx";
import { ClientOnly } from "./components/ClientOnly.tsx";

export function App() {
	const [sortByLeagues, setSortByLeagues] = useState(false);

	return (
		<SortByLeaguesContext.Provider value={sortByLeagues}>
			<SortByLeagueButton onClick={() => setSortByLeagues((state) => !state)} />
			<ClientOnly fallback={<div>Loading live table...</div>}>
				{() => <LiveTable />}
			</ClientOnly>
		</SortByLeaguesContext.Provider>
	);
}

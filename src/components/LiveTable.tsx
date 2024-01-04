import React from "react";
import {leagues} from "../fetch/data/leagues.ts";
import {EventsProvider} from "./EventsProvider.tsx";
import {EventRowType} from "./EventRow.tsx";
import {useSortByLeaguesContext} from "../context/sortByLeaguesContext.ts";
import {League, LeagueType} from "./League.tsx";

/** from global scope */
declare let props: typeof leagues;

function sortEvents(
	data: typeof leagues,
	sortByLeagues: boolean,
): { league: LeagueType; events: EventRowType[] }[] {
	if (sortByLeagues) {
		return data.leagues.map((league) => ({
			league,
			events: data.events.filter(({ leagueId }) => leagueId === league.id),
		}));
	}

	// ELSE sort by time
	const sortedEventsByTime = [...data.events].sort(
		(a, b) =>
			new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
	);

	const leagues: Map<string, EventRowType[]> = new Map();
	for (const event of sortedEventsByTime) {
		const leagueKey = `${event.leagueId}-${event.startTime}`;
		if (!leagues.has(leagueKey)) leagues.set(leagueKey, []);
		leagues.get(leagueKey)?.push(event);
	}

	return [...leagues.entries()].map(([leagueKey, events]) => {
		const [leagueId, startTime] = leagueKey.split("-");
		const league = data.leagues.find(({ id }) => id === Number(leagueId));
		if (!league) throw new Error(`League with id ${leagueId} not found`);
		return { league, events };
	});
}

export function LiveTable() {
	const sortByLeagues = useSortByLeaguesContext();

	return (
		<EventsProvider events={props.events}>
			{sortEvents(props, sortByLeagues).map(({league, events}) => <League key={['league', league.id, 'events', ...events.map(({id}) => id)].join('-')} {...league} events={events} />)}
		</EventsProvider>
	);
}

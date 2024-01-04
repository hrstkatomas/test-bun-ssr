import React from "react";
import {MyGamesIcon} from "./MyGamesIcon.tsx";

export type EventRowType = {
	id: number;
	home: string;
	away: string;
	startTime: string;
	leagueId: number;
};

export function EventRow({ id, home, away, startTime }: EventRowType) {
	return (
		<div className="flex flex-row">
			<div className="w-1/12 text-center">
				<MyGamesIcon id={id} />
			</div>
			<div className="w-1/12 text-center">
                {new Date(startTime).toLocaleTimeString("cs").replace(/:00$/, "")}
			</div>
			<h3 className="w-5/12">
				<strong>{home}</strong> - <strong>{away}</strong>
			</h3>
			<div className="w-5/12">
				0 - 0
			</div>
		</div>
	);
}

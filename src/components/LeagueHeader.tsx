import React from "react";
import {LeagueType} from "./League.tsx";

type LeagueHeaderProps = LeagueType

export const LeagueHeader = ({ id, name, round, season }: LeagueHeaderProps) => {
	return (
		<h2 className="text-lg font-bold mb-4 border-b-[1px] pb-2 border-gray-200 flex flex-row gap-x-2 items-center">
            <button
                type={"button"}
                className={"hover:opacity-75"}
                onClick={() => alert(`TODO: add all events of league ${id} to my games`)}
            >
                ⭐
            </button>
			{name} - Round {round} ({season})
            <button
                type={"button"}
                className={"hover:opacity-75"}
                onClick={() => alert(`TODO: add league ${id} to my leagues`)}
            >
                📌
            </button>
		</h2>
	);
};

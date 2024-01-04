import {EventRowType} from "./EventRow.tsx";
import {LeagueHeader} from "./LeagueHeader.tsx";
import {EventOutPortal} from "./EventOutPortal.tsx";
import React from "react";

export type LeagueType = {
    id: number;
    name: string;
    round: number;
    season: string;
};

interface LeagueProps extends LeagueType {
    events: EventRowType[];
}

export const League = ({ events, ...league }: LeagueProps) => {
    return (
        <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
            <LeagueHeader {...league} />
            <div className="flex flex-col gap-y-2">
                {events.map((event) => (
                    <EventOutPortal key={event.id} eventId={event.id} />
                ))}
            </div>
        </div>
    );
};

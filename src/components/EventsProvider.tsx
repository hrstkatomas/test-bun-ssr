import {EventRow, EventRowType} from "./EventRow.tsx";
import React, {ReactNode, useMemo} from "react";
import {HtmlPortalNode} from "react-reverse-portal/src";
import * as portals from "react-reverse-portal";
import {EventsPortalsContext} from "../context/eventsPortalsContext.ts";

interface EventsPoralRendererProps {
    events: EventRowType[];
    children: ReactNode;
}

export const EventsProvider = ({events, children}: EventsPoralRendererProps) => {
    const portalMap = useMemo(
        () =>
            new Map<number, HtmlPortalNode<typeof EventRow>>(
                events.map((event) => {
                    return [event.id, portals.createHtmlPortalNode<typeof EventRow>()];
                }),
            ),
        [events],
    );

    return (
        <>
            {events.map((event) => {
                const portalNode = portalMap.get(event.id);
                if (!portalNode) throw new Error("portalNode is null");

                return (
                    <portals.InPortal key={event.id} node={portalNode}>
                        <EventRow {...event} />
                    </portals.InPortal>
                )
            })}

            <EventsPortalsContext.Provider value={portalMap}>
                {children}
            </EventsPortalsContext.Provider>
        </>
    );
};

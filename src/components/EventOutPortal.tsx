import React from "react";
import * as portals from "react-reverse-portal";
import { useEventsPortalsContext } from "../context/eventsPortalsContext.ts";

export const EventOutPortal = ({ eventId }: { eventId: number }) => {
	const portalNode = useEventsPortalsContext().get(eventId);
	if (!portalNode) throw new Error("EventOutPortal: portalNode is null");
	return <portals.OutPortal node={portalNode} />;
};

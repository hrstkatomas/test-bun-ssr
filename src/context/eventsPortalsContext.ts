import { createContext, useContext } from "react";
import { HtmlPortalNode } from "react-reverse-portal/src";
import { EventRow } from "../components/EventRow.tsx";

export const EventsPortalsContext = createContext<null | Map<
	number,
	HtmlPortalNode<typeof EventRow>
>>(null);

export const useEventsPortalsContext = (): Map<
	number,
	HtmlPortalNode<typeof EventRow>
> => {
	const eventsPortalsContext = useContext(EventsPortalsContext);
	if (eventsPortalsContext === null)
		throw new Error(
			"useEventsPortalsContext must be used within a EventsPortalsProvider",
		);
	return eventsPortalsContext;
};

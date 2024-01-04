import {leagues} from "./data/leagues.ts";

export function getLeagues(): Promise<typeof leagues> {
    return  new Promise((resolve) => {
        setTimeout(() => resolve(leagues), 100)
    });
}
import React from "react";
import { renderToReadableStream } from "react-dom/server";
import { App } from "./src/App.tsx";
import { Html } from "./src/Html.tsx";
import {getLeagues} from "./src/fetch/getLeagues.ts";
import {Props} from "./src/components/Props.tsx";

const webServer = Bun.serve({
	port: process.env.WEB_SERVER_PORT,
	async fetch(req) {
		const url = new URL(req.url);
		switch (url.pathname) {
			// homepage
			case "/": {
				const stream = await renderToReadableStream(
					<Html>
						<App />
						<Props data={await getLeagues()} />
					</Html>,
					{
						bootstrapScripts: ["hydrate.js"],
					},
				);
				return new Response(stream, {
					headers: { "Content-Type": "text/html" },
				});
			}

			// .js assets
			case "/hydrate.js":
				return new Response(
					Bun.file(`${import.meta.dir}/public/dist/hydrate.js`),
				);

			// .css assets
			case "/output.css":
				return new Response(Bun.file(`${import.meta.dir}/public/dist/output.css`));

			default:
				return new Response("404!", { status: 404 });
		}
	},
});

console.log(`Web server listening on localhost:${webServer.port}`);

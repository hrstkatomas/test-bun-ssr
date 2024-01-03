/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";

const domNode = document.getElementById("root");
if (!domNode) throw new Error("No root element found");
hydrateRoot(domNode, <App />);

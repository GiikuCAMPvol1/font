import { atom } from "jotai";
import type ReconnectingWebSocket from "reconnecting-websocket";
const socketAtom = atom<ReconnectingWebSocket | undefined>(undefined);

export { socketAtom };

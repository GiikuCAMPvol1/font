import { atom } from "jotai";
import { WebsocketClient } from "@/utils/WebsocketClient";
const socketAtom = atom<WebsocketClient | undefined>(undefined);

export { socketAtom };

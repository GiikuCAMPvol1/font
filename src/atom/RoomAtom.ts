import { atom } from "jotai";
import { Room, User } from "@/@types/Room";
const userListAtom = atom<User[]>([]);
const roomMetadataAtom = atom<Room | undefined>(undefined);

export { userListAtom, roomMetadataAtom };

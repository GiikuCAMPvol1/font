import { atom } from "jotai";
import { User } from "@/@types/User";
const userListAtom = atom<User[]>([]);

export { userListAtom };

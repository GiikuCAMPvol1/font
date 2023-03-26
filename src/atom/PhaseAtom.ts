import { atom } from "jotai";
import { PhaseItem } from "@/@types/Phase";

const phaseAtom = atom<PhaseItem | undefined>(undefined);

export { phaseAtom };

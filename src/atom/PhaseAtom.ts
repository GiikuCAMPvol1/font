import { atom } from "jotai";
import { PhaseItem } from "@/@types/Phase";

const phaseAtom = atom<PhaseItem | undefined>(undefined);

const phaseDataAtom = atom<string>("");

export { phaseAtom, phaseDataAtom };

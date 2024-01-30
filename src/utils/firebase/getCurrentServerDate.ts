import { Timestamp } from "firebase/firestore";

export const getCurrentServerDate = () => Timestamp.now().toDate()
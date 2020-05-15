import { firestore } from "./firebaseConfig";

export const responseRef = firestore.collection("responses");

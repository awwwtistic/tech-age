import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let adminDB: ReturnType<typeof getFirestore> | undefined;

export const getAdminDB = () => {
  if (!adminDB) {
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    if (!serviceAccountKey) {
      throw new Error(
        "Missing environment variable: FIREBASE_SERVICE_ACCOUNT_KEY"
      );
    }
    if (!getApps().length) {
      initializeApp({ credential: cert(JSON.parse(serviceAccountKey)) });
    }
    adminDB = getFirestore();
  }
  return adminDB;
};

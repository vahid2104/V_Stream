import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

async function createUserProfileIfMissing(
  uid: string,
  name: string | null,
  email: string | null,
  photoURL: string | null
) {
  const userRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) return;

  await setDoc(userRef, {
    uid,
    name,
    email,
    photoURL,
    createdAt: serverTimestamp(),
  });
}

export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(userCredential.user, {
    displayName: name,
  });

  await createUserProfileIfMissing(
    userCredential.user.uid,
    name,
    userCredential.user.email,
    userCredential.user.photoURL
  );

  return userCredential.user;
}

export async function loginUser(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();

  const userCredential = await signInWithPopup(auth, provider);

  await createUserProfileIfMissing(
    userCredential.user.uid,
    userCredential.user.displayName,
    userCredential.user.email,
    userCredential.user.photoURL
  );

  return userCredential.user;
}

export async function logoutUser() {
  await signOut(auth);
}
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAp91rHZCuditAMUgKRff5ezTe8cA3q26k",
  authDomain: "storefront-445bf.firebaseapp.com",
  databaseURL: "https://storefront-445bf-default-rtdb.firebaseio.com",
  projectId: "storefront-445bf",
  storageBucket: "storefront-445bf.appspot.com",
  messagingSenderId: "803238398469",
  appId: "1:803238398469:web:74c847274b8b0eb22f6a6c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
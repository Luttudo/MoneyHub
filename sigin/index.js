import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseApp = initializeApp({

    apiKey: "AIzaSyAva5fyh1j5_SnLZVYu3F1EnW7lh4YPSTo",
  
    authDomain: "moneyhub-f2246.firebaseapp.com",
  
    projectId: "moneyhub-f2246",
  
    storageBucket: "moneyhub-f2246.appspot.com",
  
    messagingSenderId: "611591284009",
  
    appId: "1:611591284009:web:cb7829aa12bba14b41c338",
  
    measurementId: "G-FD8648FGE2"
  
  });

const auth = getAuth(firebaseApp);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth for Authentication
import { getDatabase ,ref,set} from "firebase/database"; // Import getDatabase for Realtime Database
import { getAnalytics } from "firebase/analytics"; // Import Analytics if required
import { getStorage } from "firebase/storage"; // Import getStorage for Storage usage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6T-HGe8YTs3GVbZ3CVzcYUX9PIzC_9nw",
  authDomain: "report-nscet-a6e4c.firebaseapp.com",
  projectId: "report-nscet-a6e4c",
  databaseURL:"https://report-nscet-a6e4c-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "report-nscet-a6e4c.appspot.com",
  messagingSenderId: "575514796068",
  appId: "1:575514796068:web:25474904896846386078b1",
  measurementId: "G-23JBJG522Z",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app); 
const auth = getAuth(app); 
const storage = getStorage(app); 

const addStudent = () => {
  try {
    // Reference to the location where data should be added (students in CSE department)
    const studentRef = ref(db, 'nscet/CSE/Students/First');

    // Using `set` to add data to that reference
    set(studentRef, {
      name: 'Jeevithaa R',
      achievements: '',
      events: ''
    });
    
    console.log('Student added successfully');
  } catch (error) {
    console.error('Error adding student: ', error);
  }
};

// Call the function
addStudent();
// Call the function

export { db, auth, storage, analytics,addStudent };

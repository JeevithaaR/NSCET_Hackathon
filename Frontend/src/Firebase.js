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
const addStudent = (name,regno,pass,year,address,email,phone) => {
    const studentRef = ref(db, `nscet/CSE/Students/${year}/${regno}`);

    set(studentRef, {
      name: name,
      email:email,
      year:year,
      phone:phone,
      address:address,
      password:pass,
      achievements: '',
      events: ''
    });
  }

  // const addMultipleStudents = () => {
//     addStudent('Jeevithaa R','921021104015','11052004','Fourth','Rathna Nagar, Theni','rajeevithaa.2004@gmail.com','9842161601');
//     addStudent('Uma Arasi.K','921021104052','29082003','Fourth','Sowdambika street, Thirumalapuram,Bodinayakanur','Umaarasi.k@gmail.com','8667285900');
//     addStudent('Gowsalya N','921021104012','27052001','Fourth','Forest road, Theni','gowsalya@gmail.com','9384179769');
//     addStudent('Krishna Jothi S','921021104020','12112003','Fourth','Boodhipuram,Theni','krishnajothi@gmail.com','7845086599');
//     addStudent('Sri Hari Preetha M','921021104048','16112003','Fourth','Near Aundipatti Bus Stand,Aundipatti','sriharipreetha@gmail.com','7373436067');
//     addStudent('Priya Sharma','921022104015','12012004','Second','21, MG Road, Coimbatore','priya.sharma@gmail.com','9123456789');
// addStudent('Karthik Raj','921022104016','10102004','Second','45, Park Avenue, Madurai','karthik.raj@gmail.com','9345678910');
// addStudent('Meera Nair','921022104017','08032005','Second','98, Sunrise Street, Trichy','meera.nair@gmail.com','9001234567');
// addStudent('Sandeep Kumar','921022104018','24062004','Second','50, Hill Road, Salem','sandeep.kumar@gmail.com','9098765432');
// addStudent('Anjali Menon','921022104019','30072004','Second','67, Temple Street, Cochin','anjali.menon@gmail.com','9887654321');
// addStudent('Rohit Kumar','921023104020','15082005','Third','15, Lake View Road, Chennai','rohit.kumar@gmail.com','9876543210');
// addStudent('Divya Patel','921023104021','25052005','Third','120, Green Valley, Bangalore','divya.patel@gmail.com','9765432109');
// addStudent('Vikas Reddy','921023104022','14072005','Third','11, Cross Street, Hyderabad','vikas.reddy@gmail.com','9845123476');
// addStudent('Sneha Singh','921023104023','20032006','Third','89, Riverside Road, Pune','sneha.singh@gmail.com','9087654321');
// addStudent('Arjun Verma','921023104024','01102006','Third','100, Palace Road, Mumbai','arjun.verma@gmail.com','9678123456');

//   };
  
 
  // addMultipleStudents();

export { db, auth, storage, analytics,addStudent };

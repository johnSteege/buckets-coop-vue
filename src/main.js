import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {VueFire} from 'vuefire'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwVOTQdigJe446DKvTTaSuQ--ChWtlVYU",
  authDomain: "coop-buckets.firebaseapp.com",
  databaseURL: "https://coop-buckets-default-rtdb.firebaseio.com",
  projectId: "coop-buckets",
  storageBucket: "coop-buckets.appspot.com",
  messagingSenderId: "677776379916",
  appId: "1:677776379916:web:f58445ba6ecf6017eb1e29"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

const app = createApp(App)
app.use(VueFire, {
  firebaseApp,
  modules: [
  ],
})
app.mount('#app')


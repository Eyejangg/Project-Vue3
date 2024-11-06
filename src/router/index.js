import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Homepage.vue'; // นำเข้า Homepage
import CurrencyConverter from '../components/CurrencyConverter.vue'; // นำเข้า CurrencyConverter
import BMI from '../components/BMI.vue';
import ExerciseForHealth from '../components/ExerciseForHealth.vue'; // Corrected path

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // 
  },
  {
    path: '/currency-converter', // ส่วนของการตั้งชื่อ ในหน้าของ AppNavbar 
    name: 'CurrencyConverter',
    component: CurrencyConverter, //  currency file
  },
  {
    path: '/bmi', // path เรียกใช้งานบน navbar
    name: 'BMI', // 
    component: BMI, // Bmi file
  },
  {
    path: '/exercise',
    name: 'ExerciseForHealth',
    component: ExerciseForHealth // exercise file
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

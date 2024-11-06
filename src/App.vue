<template>
  <div id="app">
    <AppNavbar /> <!-- ใช้ AppNavbar สำหรับการนำทาง -->
    <router-view /> <!-- แสดงคอมโพเนนต์ตามเส้นทาง -->
    <AppFooter /> <!-- เพิ่ม AppFooter ที่ด้านล่าง -->
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'; // นำเข้า AppNavbar
import AppFooter from './components/AppFooter.vue'; // นำเข้า AppFooter
import './tailwind.css';
import './assets/navbar.css'; // Import your custom CSS


export default {
  components: {
    AppNavbar, // นำเข้า AppNavbar
    AppFooter  // นำเข้า AppFooter
  }
};
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; /* ทำให้เนื้อหาไม่ซ้อนกับ Navbar */
}


</style>

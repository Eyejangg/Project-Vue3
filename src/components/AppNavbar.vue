<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <h1>ValueFit</h1>
    </div>
    <ul class="navbar-menu">
      <li><router-link to="/">หน้าแรก</router-link></li>
      <li><router-link to="/currency-converter">เครื่องแปลงสกุลเงิน</router-link></li>
      <!-- ลิงก์ไปยัง CurrencyConverter -->
      <li><router-link to="/Bmi">โปรแกรมคำนวนค่าดัชนีมวลกาย - BMI</router-link></li>
      <li><router-link to="/exercise">การออกกำลังกายเพื่อสุขภาพ </router-link></li> 
    </ul>
  </nav>
</template>

<script>
import '@/assets/navbar.css'; // นำเข้า CSS ที่นี่

export default {
  name: 'AppNavbar',
};
</script>




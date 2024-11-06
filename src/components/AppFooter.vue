<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>เกี่ยวกับเรา</h4>
        <p>เราเป็นเว็บไซต์ที่ให้ข้อมูลเกี่ยวกับอัตราแลกเปลี่ยน ราคาทองคำ ข่าว การเงินต่างๆ และรวมไปถึงการรักษาสุขภาพ</p>
      </div>
      <div class="footer-section">
        <h4>ลิงก์ที่มีประโยชน์</h4>
        <ul>
          <li><a href="#link1">ข่าวเศรษฐกิจ</a></li>
          <li><a href="#link2">ติดต่อเรา</a></li>
          <li><a href="#link3">คำถามที่พบบ่อย</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>ติดตามเรา</h4>
        <p>
          <a href="#facebook">Facebook</a> |
          <a href="#twitter">Twitter</a> |
          <a href="#instagram">Instagram</a>
        </p>
      </div>
      <div class="footer-section">
        <h4>ติดต่อ</h4>
        <p>โทรศัพท์: 061-108-0011</p>
        <p>อีเมล: 664259024@webmail.npru.ac.th</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 ValueFit สงวนลิขสิทธิ์</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter', // เปลี่ยนชื่อคอมโพเนนต์เป็นชื่อที่มีหลายคำ
};
</script>

<style scoped>
.app-footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: left;
  width: 100%; /* ทำให้ footer กว้างเต็มพื้นที่ */
  position: relative; /* ทำให้ footer ปรากฏอยู่ที่ตำแหน่งปกติ */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  margin: 10px;
  min-width: 200px; /* ปรับความกว้างขั้นต่ำของ footer section */
}

.footer-section h4 {
  margin-bottom: 10px;
}

.footer-section p,
.footer-section ul,
.footer-section a {
  color: #ddd;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #444;
  padding-top: 10px;
}

.footer-section a:hover {
  color: #fff;
}
</style>

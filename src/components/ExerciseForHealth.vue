<template>
  <div class="exercise-container max-w-3xl mx-auto p-5 bg-white shadow-md rounded-lg">
    <h1 class="text-3xl font-bold text-center mb-5">การออกกำลังกายเพื่อสุขภาพ</h1>

    <section class="exercise-info mb-6 p-4 border border-gray-300 rounded-lg bg-gray-100">
      <h3 class="text-xl font-semibold mb-2">ประโยชน์ของการออกกำลังกาย</h3>
      <p class="mb-2">การออกกำลังกายมีประโยชน์มากมายต่อร่างกายและจิตใจ เช่น:</p>
      <ul class="list-disc list-inside pl-5">
        <li>ช่วยลดน้ำหนักและรักษาน้ำหนักให้เหมาะสม</li>
        <li>เพิ่มความแข็งแรงของกล้ามเนื้อและกระดูก</li>
        <li>ช่วยเพิ่มความยืดหยุ่นของร่างกาย</li>
        <li>ส่งเสริมสุขภาพจิตและลดความเครียด</li>
      </ul>
    </section>

    <section class="exercise-tips mb-6 p-4 border border-gray-300 rounded-lg bg-gray-100">
      <h3 class="text-xl font-semibold mb-2">เคล็ดลับการออกกำลังกาย</h3>
      <p class="mb-2">การออกกำลังกายอย่างสม่ำเสมอและมีความหลากหลายจะช่วยให้คุณมีสุขภาพดีขึ้น:</p>
      <ul class="list-disc list-inside pl-5">
        <li>ตั้งเป้าหมายที่ชัดเจนในการออกกำลังกาย</li>
        <li>เลือกกิจกรรมที่คุณชอบเพื่อให้การออกกำลังกายสนุกยิ่งขึ้น</li>
        <li>เริ่มจากการออกกำลังกายที่ใช้เวลาไม่นานและเพิ่มขึ้นเรื่อย ๆ</li>
        <li>หมั่นตรวจสุขภาพและปรึกษาแพทย์หากมีข้อกังวลเกี่ยวกับสุขภาพ</li>
      </ul>
    </section>

    <div class="message-box mb-6 p-4 border border-gray-300 rounded-lg bg-gray-100">
      <h3 class="text-xl font-semibold mb-2">สุขภาพดีเราต้องดูแลตนเอง</h3>
      <p>
        นอกจากอาหาร อากาศบริสุทธิ์ และจิตใจสบายไม่เครียดแล้ว การออกกำลังให้สุขภาพดีนับเป็นสิ่งจำเป็นอย่างยิ่ง แต่มักจะมีข้อแก้ตัวบ่อยๆว่า ไม่มีเวลา ไม่มีสถานที่ ความจริงแล้วไม่ต้องใช้เวลามากมายเพียงแค่วันละ 30 นาที อย่างน้อยสัปดาห์ละ 3 ครั้ง ก็พอ จะเกิดผลดีต่อหัวใจและปอด และก็ไม่ต้องใช้พื้นที่มากมายหรือเครื่องมือราคาแพงอะไร มีเพียงพื้นที่ในการเดินก็พอแล้ว...
      </p>
    </div>

    <div class="exercise-box mb-6 p-4 border border-gray-300 rounded-lg bg-gray-100">
      <h3 class="text-xl font-semibold mb-2">มารู้จักการออกกำลังกายที่ดี</h3>
      <p>Aerobic exercise คือ การออกกำลังกายที่ไม่รุนแรงอย่างต่อเนื่อง...</p>
    </div>

    <div class="benefits-box mb-6 p-4 border border-gray-300 rounded-lg bg-gray-100">
      <h3 class="text-xl font-semibold mb-2">ผลดีของการออกกำลังกาย</h3>
      <ul class="list-disc list-inside pl-5">
        <li>การออกกำลังจะทำให้รูปร่างดูดี</li>
        <li>ป้องกันโรคหัวใจ</li>
        <li>ความดันโลหิตลดลง</li>
        <li>ป้องกันโรคอ้วน</li>
        <li>ป้องกันโรคกระดูกพรุน</li>
        <li>ป้องกันและรักษาโรคเบาหวาน</li>
        <li>เพิ่มภูมิต้านทานโรค</li>
        <li>ช่วยให้นอนหลับสบายและหลับสนิท</li>
      </ul>
    </div>

    <div class="sources-box mb-6 p-4 border border-gray-300 rounded-lg bg-gray-100">
      <h3 class="text-xl font-semibold mb-2">ขอขอบคุณแหล่งที่มา</h3>
      <ul class="list-disc list-inside pl-5">
        <li>
          <a href="https://www.hpc11.go.th/sasook11_raipoong/index.php/blog/6" target="_blank" class="text-teal-600 hover:underline">https://www.hpc11.go.th/sasook11_raipoong/index.php/blog/6</a>
        </li>
        <li>Standfield PS. Nutrition and Diet Therapy. 2nd edition London: Jones and Bartlett Publishers, Inc., 1992.</li>
      </ul>
    </div>

    <img src="@/assets/HealExcer.jpg" alt="Exercise for health" class="exercise-image rounded-lg shadow-lg" />
  </div>
</template>

<script>
export default {
  name: 'ExerciseForHealth',
  data() {
    return {};
  },
};
</script>

<style scoped>
.exercise-container {
  background-color: #ffffff; /* แสดงพื้นหลังสีขาว */
}

/* สไตล์เพิ่มเติมสำหรับการแสดงผล */
.exercise-image {
  width: 100%;
  height: auto;
}
</style>

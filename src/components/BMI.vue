<template>
  <div class="bmi-container max-w-lg mx-auto p-5 bg-white shadow-md rounded-lg">
    <h1 class="text-3xl font-bold text-center mb-5">คำนวณค่าดัชนีมวลกาย (BMI)</h1>

    <div class="input-group mb-4">
      <label for="weight" class="block mb-2">น้ำหนัก (กิโลกรัม):</label>
      <input
        type="number"
        v-model="weight"
        placeholder="ระบุน้ำหนัก"
        class="border border-gray-300 rounded-md p-2 w-full"
      />
    </div>

    <div class="input-group mb-4">
      <label for="height" class="block mb-2">ส่วนสูง (เซนติเมตร):</label>
      <input
        type="number"
        v-model="height"
        placeholder="ระบุส่วนสูง"
        class="border border-gray-300 rounded-md p-2 w-full"
      />
    </div>

    <button 
      @click="calculateBMI" 
      class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
    >
      คำนวณ
    </button>

    <div v-if="bmiResult" class="result mt-5 text-center">
      <h2 class="text-2xl font-semibold">ค่าดัชนีมวลกายของคุณคือ: {{ bmiResult }}</h2>
      <p class="mt-2 text-gray-600">{{ bmiMessage }}</p>
      <p class="mt-2 text-gray-500">คำอธิบาย: ค่าดัชนีมวลกาย (BMI) คือการประเมินว่าคุณมีน้ำหนักที่เหมาะสมหรือไม่ โดยการใช้สูตรคำนวณจากน้ำหนักและส่วนสูงของคุณ</p>
    </div>

    <section class="info mt-5 p-4 bg-gray-100 border border-gray-300 rounded-lg">
      <h3 class="text-xl font-semibold mb-2">ข้อมูลเกี่ยวกับ BMI</h3>
      <p>ดัชนีมวลกาย (BMI) เป็นวิธีการที่ใช้ในการประเมินว่าร่างกายมีน้ำหนักที่เหมาะสมหรือไม่ โดยการคำนวณจากน้ำหนัก (กิโลกรัม) และส่วนสูง (เมตร) ของบุคคล</p>
      <p><strong>BMI = น้ำหนัก (kg) / (ส่วนสูง (m) x ส่วนสูง (m))</strong></p>
      <p>ค่า BMI สามารถแบ่งออกเป็นระดับต่าง ๆ เพื่อช่วยในการประเมินสุขภาพของบุคคลได้แก่:</p>
      <ul class="list-disc list-inside ml-5">
        <li>ต่ำกว่า 18.5: น้ำหนักน้อยกว่ามาตรฐาน</li>
        <li>18.5 - 24.9: น้ำหนักปกติ</li>
        <li>25 - 29.9: น้ำหนักเกินมาตรฐาน</li>
        <li>30 ขึ้นไป: ภาวะโรคอ้วน</li>
      </ul>
      <p>การรู้จักค่า BMI ของคุณสามารถช่วยให้คุณเข้าใจสถานะสุขภาพของตัวเองและสร้างแรงจูงใจในการปรับปรุงวิถีชีวิตและสุขภาพโดยรวม</p>
    </section>

    <!-- เพิ่มรูปภาพในส่วนนี้ -->
    <div class="bmi-image mt-5">
      <img src="@/assets/Bmichart.jpg" alt="BMI Chart" class="mx-auto" />
    </div>
  </div>
</template>

<script>
import '@/assets/BMI.css'; // นำเข้าไฟล์ CSS ที่แยกออกมา

export default {
  data() {
    return {
      weight: null,
      height: null,
      bmiResult: null,
      bmiMessage: '',
    };
  },
  methods: {
    calculateBMI() {
      if (this.weight && this.height) {
        const heightInMeters = this.height / 100;
        const bmi = (this.weight / (heightInMeters * heightInMeters)).toFixed(2);
        this.bmiResult = bmi;
        this.getBMIMessage(bmi);
      } else {
        alert("กรุณาระบุน้ำหนักและส่วนสูง");
      }
    },
    getBMIMessage(bmi) {
      if (bmi < 18.5) {
        this.bmiMessage = "น้ำหนักน้อยกว่ามาตรฐาน";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        this.bmiMessage = "น้ำหนักปกติ";
      } else if (bmi >= 25 && bmi < 29.9) {
        this.bmiMessage = "น้ำหนักเกินมาตรฐาน";
      } else {
        this.bmiMessage = "ภาวะโรคอ้วน";
      }
    },
  },
};
</script>

<style scoped>
.bmi-container {
  background-color: #ffffff; /* แสดงพื้นหลังสีขาว */
}

/* สไตล์เพิ่มเติมสำหรับการแสดงผล */
.result {
  background-color: #f7fafc; /* สีพื้นหลังสำหรับผลลัพธ์ */
}
</style>

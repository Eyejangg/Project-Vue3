<template>
  <div class="container mx-auto p-5">
    <h1 class="text-3xl font-bold text-center mb-5">เครื่องแปลงสกุลเงิน</h1>

    <div class="conversion-section bg-white shadow-md rounded-lg p-6 mb-5 max-w-md mx-auto">
      <div class="input-group mb-4">
        <label for="amount" class="block mb-2">จำนวน :</label>
        <input
          type="number"
          v-model="amount"
          placeholder="Enter amount"
          @input="convertCurrency"
          class="border border-gray-300 rounded-md p-2 w-full"
        />
        <select
          v-model="fromCurrency"
          @change="convertCurrency"
          class="mt-2 border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="USD">USD - ดอลลาร์สหรัฐ</option>
          <option value="THB">THB - ไทย</option>
          <option value="EUR">EUR - ยูโร</option>
          <option value="GBP">GBP - ปอนด์สเตอร์ลิง</option>
          <option value="JPY">JPY - เยน [ญี่ปุ่น]</option>
          <option value="AUD">AUD - ดอลลาร์ออสเตรเลีย</option>
          <option value="CAD">CAD - ดอลลาร์แคนาดา</option>
          <option value="CHF">CHF - ฟรังก์สวิส</option>
          <option value="CNY">CNY - หยวนจีน</option>
          <option value="NZD">NZD - ดอลลาร์นิวซีแลนด์</option>
        </select>
      </div>

      <div
        class="swap cursor-pointer text-center text-xl mb-4"
        @click="swapCurrencies"
      >
        ⇄
      </div>

      <div class="input-group">
        <label for="toCurrency" class="block mb-2">สลับ:</label>
        <input
          type="text"
          :value="convertedAmount"
          disabled
          class="border border-gray-300 rounded-md p-2 w-full"
        />
        <select
          v-model="toCurrency"
          @change="convertCurrency"
          class="mt-2 border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="THB">THB - ไทย</option>
          <option value="USD">USD - ดอลลาร์สหรัฐ</option>
          <option value="EUR">EUR - ยูโร [สหภาพยุโรป]</option>
          <option value="GBP">GBP - ปอนด์สเตอร์ลิง [สหราชอาณาจักร]</option>
          <option value="JPY">JPY - เยน [ญี่ปุ่น]</option>
          <option value="AUD">AUD - ดอลลาร์ออสเตรเลีย</option>
          <option value="CAD">CAD - ดอลลาร์แคนาดา</option>
          <option value="CHF">CHF - ฟรังก์สวิส [สวิตเซอร์แลนด์]</option>
          <option value="CNY">CNY - หยวนจีน [จีน]</option>
          <option value="NZD">NZD - ดอลลาร์นิวซีแลนด์</option>
        </select>
      </div>
    </div>

    <div v-if="error" class="error text-red-600 font-bold mb-4">
      <p>ไม่สามารถดึงข้อมูลจาก API ได้ โปรดลองอีกครั้ง.</p>
    </div>

    <div v-if="result" class="result text-green-600 font-bold mb-4">
      <h3>ผลลัพธ์: {{ result }} {{ toCurrency }}</h3>
    </div>

    <section class="info bg-gray-100 border border-gray-300 rounded-lg p-4 max-w-md mx-auto">
      <h3 class="text-xl font-semibold mb-2">ข้อมูลเกี่ยวกับการแปลงสกุลเงิน</h3>
      <p>
        เครื่องแปลงสกุลเงินนี้ช่วยให้คุณสามารถแปลงจำนวนเงินจากสกุลเงินหนึ่งไปยังอีกสกุลเงินหนึ่งได้อย่างง่ายดาย 
        โดยใช้ข้อมูลอัตราแลกเปลี่ยนล่าสุด
      </p>
      <p>
        เพียงระบุจำนวนเงินและเลือกสกุลเงินต้นทาง และสกุลเงินปลายทาง
        แล้วกดที่ปุ่มแปลงเพื่อดูผลลัพธ์.
      </p>
      <p>
        หมายเหตุ: อัตราแลกเปลี่ยนที่แสดงอาจมีการเปลี่ยนแปลงตามตลาด 
        ควรตรวจสอบอัตราแลกเปลี่ยนล่าสุดก่อนการทำธุรกรรมทางการเงินจริง.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 10,
      fromCurrency: 'USD',
      toCurrency: 'THB',
      result: null,
      error: false,
    };
  },
  computed: {
    convertedAmount() {
      return this.result ? this.result.toLocaleString() : '';
    }
  },
  methods: {
    async convertCurrency() {
      if (this.amount && this.fromCurrency && this.toCurrency) {
        const url = `https://api.exchangerate-api.com/v4/latest/${this.fromCurrency}`;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          const rate = data.rates[this.toCurrency];
          this.result = (this.amount * rate).toFixed(2);
          this.error = false;
        } catch (error) {
          console.error('Error:', error);
          this.error = true;
        }
      }
    },
    swapCurrencies() {
      const temp = this.fromCurrency;
      this.fromCurrency = this.toCurrency;
      this.toCurrency = temp;
      this.convertCurrency();
    }
  },
  mounted() {
    this.convertCurrency();
  }
};
</script>

<style scoped>
/* สไตล์เพิ่มเติมสำหรับการแสดงข้อผิดพลาด */
.error {
  margin-top: 10px;
}

/* สไตล์สำหรับข้อมูลเพิ่มเติม */
.info {
  margin-top: 20px;
}
</style>

<template>
  <div class="homepage p-5">
   

    <div class="news-main relative mb-5">
      <img :src="newsItems[0].image" alt="main news image" class="main-news-image w-full h-60 object-cover rounded-lg shadow-lg" />
      <div class="main-news-content absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
        <h2 class="text-xl font-bold">{{ newsItems[0].title }}</h2>
        <p class="text-sm">{{ newsItems[0].description }}</p>
        <a :href="newsItems[0].link" target="_blank" class="text-blue-300 hover:underline">อ่านเพิ่มเติม</a>
      </div>
    </div>

   
    <div class="news-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="news-item bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col" v-for="news in newsItems.slice(1)" :key="news.id">
        <img :src="news.image" alt="news image" class="news-image w-full h-48 object-cover rounded" />
        <h3 class="text-lg font-semibold mt-2">{{ news.title }}</h3>
        <p class="text-sm mb-2">{{ news.description }}</p>
        <a :href="news.link" target="_blank" class="text-blue-600 hover:underline">อ่านเพิ่มเติม</a>
      </div>
    </div>

    
    <div class="featured-news mt-5">
      <h2 class="text-2xl font-bold mb-4">ข่าวเด่นใน 7 วัน</h2>
      <div class="featured-news-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="featured-news-item bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col" v-for="news in featuredNews" :key="news.id">
          <img :src="news.image" alt="featured news image" class="featured-news-image w-full h-48 object-cover rounded" />
          <h3 class="text-lg font-semibold mt-2">{{ news.title }}</h3>
          <p class="text-sm mb-2">{{ news.description }}</p>
          <a :href="news.link" target="_blank" class="text-blue-600 hover:underline">อ่านเพิ่มเติม</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomePage',
  data() {
    return {
      newsItems: [
        { id: 1, title: 'ค่าเงินบาทวันนี้', description: 'เปิดตลาดอ่อน ค่าที่ 33.52 บาท บทวิเคราะห์ล่าสุด', link: 'https://www.prachachat.net/finance/news-1678446', image: require('@/assets/image1.png') },
        { id: 2, title: 'ราคาทองวันนี้', description: 'ขยับขึ้น 50 บาท ราคาทองรูปพรรณ 43,800 บาท', link: 'https://www.prachachat.net/finance/news-1678454', image: require('@/assets/image2.png') },
        { id: 3, title: 'การออมเงิน ใครๆก็ทำได้', description: 'รวมเทคนิคการสร้าง เงินออมให้พร้อมงอกเงย 3', link: 'https://www.prachachat.net/finance/news-1678037', image: require('@/assets/image3.png') },
        { id: 4, title: 'อิสราเอลสังหารหัวหน้าการเงินฮิซบอลเลาะห์', description: 'อิสราเอลเดินหน้าทำลายฐานที่มั่นทางการเงินของอิซบอลเลาะห์อย่างต่อเนื่อง', link: 'https://www.prachachat.net/world-news/news-1678444', image: require('@/assets/image4.png') },
        { id: 5, title: 'แจกเงิน 10,000 บาท', description: 'แจกเงิน 10,000 บาท เตรียมโอนซ้ำวันแรก 21.ตค 5', link: 'https://www.prachachat.net/finance/news-1678000', image: require('@/assets/image5.png') },
        { id: 5, title: 'แจกเงิน 10,000 บาท', description: 'แจกเงิน 10,000 บาท เตรียมโอนซ้ำวันแรก 21.ตค 5', link: 'https://www.prachachat.net/finance/news-1678000', image: require('@/assets/image5.png') },
        { id: 5, title: 'แจกเงิน 10,000 บาท', description: 'แจกเงิน 10,000 บาท เตรียมโอนซ้ำวันแรก 21.ตค 5', link: 'https://www.prachachat.net/finance/news-1678000', image: require('@/assets/image5.png') },
      ],
      featuredNews: [
        { id: 6, title: 'อิสราเอลสังหารหัวหน้าการเงินฮิซบอลเลาะห์', description: 'อิสราเอลเดินหน้าทำลายฐานที่มั่นทางการเงินของอิซบอลเลาะห์อย่างต่อเนื่อง', link: 'https://www.prachachat.net/world-news/news-1678444', image: require('@/assets/image4.png') },
        { id: 7, title: 'ไทยพาณิชย์ ปรับลดอัตราดอกเบี้ยเงินกู้ยกแผง', description: 'ธนาคารไทยพาณิชย์แจ้งว่า ปรับลดอัตราดอกเบี้ยเงินกู้สูงสุด 0.25% ต่อปี', link: 'https://www.prachachat.net/finance/news-1678260', image: require('@/assets/scb.png') },
        { id: 8, title: 'ธ.ก.ส ปรับลดอัตราดอกเบี้ยเงินกู้', description: 'ธ.ก.ส ปรับลดอัตราดอกเบี้ยเงินกู้สูงสุด 0.25%', link: 'https://www.prachachat.net/finance/news-1678331', image: require('@/assets/TKS.png') },
        { id: 9, title: 'TTB ปรับลดอัตราดอกเบี้ยเงินกู้ยกแผง', description: 'TTB ปรับบลดอัตราดอกเบี้ยเงินกู้สูงสุด 0.25%', link: 'https://www.prachachat.net/finance/news-1678398', image: require('@/assets/TTB.png') },
      ]
    };
  }
};
</script>

<style scoped>
.homepage {
  padding: 20px; 
  background-color: #f9f9f9; 
}

.news-item,
.featured-news-item {
  display: flex;
  flex-direction: column; 
}

.news-image,
.featured-news-image {
  transition: transform 0.2s; 
}

.news-image:hover,
.featured-news-image:hover {
  transform: scale(1.05); 
}
</style>

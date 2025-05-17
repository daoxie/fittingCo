<!-- src/views/ContactView.vue -->
<template>
  <div> <!-- Root element -->

    <!-- Breadcrumb Section Begin (Jika halaman contact Anda juga memiliki breadcrumb) -->
    <!-- Jika tidak ada breadcrumb spesifik untuk contact, Anda bisa menghapus bagian ini -->
    <!-- atau membuatnya dinamis -->
    <section class="breadcrumb-blog set-bg" data-setbg="/img/breadcrumb-bg.jpg"> <!-- Ganti dengan gambar breadcrumb yang sesuai -->
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Our Contacts</h2>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Map Begin -->
    <div class="map">
      <!-- PERHATIAN: iframe bisa memiliki masalah reaktivitas dengan Vue.
           Jika peta tidak sering berubah, ini mungkin tidak masalah.
           Untuk peta yang lebih dinamis atau terintegrasi, pertimbangkan library Vue untuk peta (misalnya, vue2-google-maps atau vue-google-maps untuk Vue 3).
           Namun, untuk konversi langsung, kita biarkan dulu.
      -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29400864.32981977!2d94.35331969740638!3d25.903268063002987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sid!4v1746981123061!5m2!1sen!2sid"
        width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- Map End -->

    <!-- Contact Section Begin -->
    <section class="contact spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="contact__text">
              <div class="section-title">
                <span>Information</span>
                <h2>Our Office</h2>
                <!-- <p>Deskripsi singkat jika ada.</p> -->
              </div>
              <ul>
                <li v-for="(office, index) in offices" :key="index">
                  <h4>{{ office.type }}</h4>
                  <h4>{{ office.location }}</h4>
                  <p v-html="office.address"></p> <!-- Menggunakan v-html untuk <br /> -->
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="contact__form">
              <form @submit.prevent="submitContactForm">
                <div class="section-title">
                  <h2>Contact Us</h2>
                  <!-- <p>Deskripsi singkat jika ada.</p> -->
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <input type="text" v-model="contactForm.name" placeholder="Name" required />
                  </div>
                  <div class="col-lg-6">
                    <input type="email" v-model="contactForm.email" placeholder="Email" required />
                  </div>
                  <div class="col-lg-12">
                    <textarea v-model="contactForm.message" placeholder="Message" required></textarea>
                    <button type="submit" class="site-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Section End -->

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Data untuk kantor (bisa dari API nantinya)
const offices = ref([
  { type: 'Head Office', location: 'Jepang', address: 'Jalan Kartini <br />08xxxxxxxx' },
  { type: 'Branch Office', location: 'Indonesia', address: 'Jalan Awikoen Madya<br />08xxxxxxxxx' },
  { type: 'Branch Office', location: 'Amerika Serikat', address: 'Jalan Kartini <br />08xxxxxxxx' },
]);

// Data untuk form kontak
const contactForm = ref({
  name: '',
  email: '',
  message: '',
});

// Fungsi untuk submit form kontak
function submitContactForm() {
  console.log('Contact form submitted:', contactForm.value);
  // Di sini Anda akan menambahkan logika untuk mengirim data form
  // misalnya, menggunakan fetch atau axios ke API backend.
  alert('Message sent (simulated)! Check console for data.');
  // Reset form setelah submit (opsional)
  contactForm.value.name = '';
  contactForm.value.email = '';
  contactForm.value.message = '';
}

onMounted(() => {
  // Inisialisasi plugin jQuery jika ada yang spesifik untuk halaman Contact
  // Misalnya, validasi form custom (jika template menggunakannya) atau efek lainnya.
  // Script main.js template (yang di public/js/main.js) seharusnya sudah menangani
  // inisialisasi umum.
  if (window.$) {
    // Untuk .set-bg pada breadcrumb jika digunakan
    window.$('.set-bg').each(function () {
      var bg = window.$(this).data('setbg');
      if (bg) {
        window.$(this).css('background-image', 'url(' + bg + ')');
      }
    });

    // Jika ada nice-select pada form atau elemen lain di halaman ini
    // if (window.$.fn.niceSelect) {
    //   window.$('select').niceSelect(); // Sesuaikan selector jika perlu
    // }
  }
});
</script>

<style scoped>
/* CSS spesifik untuk halaman Contact jika ada. Umumnya style global sudah cukup. */
.spad {
  padding-top: 100px;
  padding-bottom: 100px;
}
.map iframe { /* Pastikan iframe responsif jika belum dihandle CSS global */
    width: 100%;
}
</style>
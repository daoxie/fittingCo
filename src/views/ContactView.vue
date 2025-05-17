<!-- src/views/ContactView.vue -->
<template>
  <div>
    <section class="breadcrumb-blog set-bg" data-setbg="/img/breadcrumb-bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Our Contacts</h2>
                </div>
            </div>
        </div>
    </section>

    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29400864.32981977!2d94.35331969740638!3d25.903268063002987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sid!4v1746981123061!5m2!1sen!2sid"
        width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <section class="contact spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="contact__text">
              <div class="section-title">
                <span>Information</span>
                <h2>Our Office</h2>
              </div>
              <ul>
                <li v-for="(office, index) in offices" :key="index">
                  <h4>{{ office.type }}</h4>
                  <h4>{{ office.location }}</h4>
                  <p v-html="office.address"></p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="contact__form">
              <form @submit.prevent="submitContactForm">
                <div class="section-title">
                  <h2>Contact Us</h2>
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const offices = ref([
  { type: 'Head Office', location: 'Jepang', address: 'Jalan Kartini <br />08xxxxxxxx' },
  { type: 'Branch Office', location: 'Indonesia', address: 'Jalan Awikoen Madya<br />08xxxxxxxxx' },
  { type: 'Branch Office', location: 'Amerika Serikat', address: 'Jalan Kartini <br />08xxxxxxxx' },
]);

const contactForm = ref({
  name: '',
  email: '',
  message: '',
});

function submitContactForm() {
  console.log('Contact form submitted:', contactForm.value);
  alert('Message sent (simulated)! Check console for data.');
  contactForm.value.name = '';
  contactForm.value.email = '';
  contactForm.value.message = '';
}

onMounted(() => {
  if (window.$ && typeof window.$.fn.jquery === 'string') {
    window.$('.set-bg').each(function () {
      var bg = window.$(this).data('setbg');
      if (bg) {
        window.$(this).css('background-image', 'url(' + bg + ')');
      }
    });
  }
});
</script>

<style scoped>
.spad {
  padding-top: 100px;
  padding-bottom: 100px;
}
.map iframe {
    width: 100%;
}

/* Styling untuk breadcrumb jika belum ada di CSS global atau ingin spesifik */
.breadcrumb-blog {
    height: 250px; /* Sesuaikan tinggi breadcrumb */
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center center;
}
.breadcrumb-blog h2 {
    color: #ffffff;
    font-size: 48px; /* Sesuaikan ukuran font judul breadcrumb */
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Tambahkan shadow agar lebih terbaca */
}
.contact__text ul li {
    list-style: none;
    margin-bottom: 25px;
}
.contact__text ul li h4 {
    color: #111111;
    font-weight: 700;
    margin-bottom: 5px;
}
.contact__text ul li p {
    margin-bottom: 0;
    line-height: 1.8; /* Sesuaikan line-height untuk alamat */
}
.contact__form input,
.contact__form textarea {
    width: 100%;
    height: 50px;
    border: 1px solid #e1e1e1;
    margin-bottom: 20px;
    font-size: 15px;
    color: #b2b2b2;
    padding-left: 20px;
    border-radius: 5px;
}
.contact__form input::placeholder,
.contact__form textarea::placeholder {
    color: #b2b2b2;
}
.contact__form textarea {
    height: 150px;
    resize: none; /* Mencegah user mengubah ukuran textarea */
    padding-top: 15px;
}
.contact__form .site-btn {
    /* Asumsikan site-btn sudah memiliki style global */
    border-radius: 5px;
}
</style>
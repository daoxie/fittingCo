<!-- src/views/AboutView.vue -->
<template>
  <div>
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb__text">
              <h4>About Us</h4>
              <div class="breadcrumb__links">
                <router-link to="/">Home</router-link>
                <span>About Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- About Section Begin -->
    <section class="about spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="about__pic">
                        <img src="/img/about/about-us.jpg" alt="About Us"/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6" v-for="(item, index) in aboutItems" :key="index">
                    <div class="about__item">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section End -->

    <!-- Testimonial Section Begin -->
    <section class="testimonial">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 p-0">
                    <div class="testimonial__text">
                        <span class="icon_quotations"></span>
                        <p>“{{ testimonialData.quote }}”</p>
                        <div class="testimonial__author">
                            <div class="testimonial__author__pic">
                                <img :src="testimonialData.authorImg" alt="Author"/>
                            </div>
                            <div class="testimonial__author__text">
                                <h5>{{ testimonialData.authorName }}</h5>
                                <p>{{ testimonialData.authorRole }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="testimonial__pic set-bg" :data-setbg="testimonialData.bgImg"></div>
                </div>
            </div>
        </div>
    </section>
    <!-- Testimonial Section End -->

    <!-- Counter Section Begin -->
    <section class="counter spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6" v-for="(item, i) in counterData" :key="'counter-'+i">
                    <div class="counter__item">
                        <div class="counter__item__number">
                            <h2 class="cn_num">{{ item.number }}</h2>
                            <strong v-if="item.suffix">{{ item.suffix }}</strong>
                        </div>
                        <span v-html="item.label"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Counter Section End -->

    <!-- Team Section Begin -->
    <section class="team spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Team</span>
                        <h2>Meet Our Team</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                 <div class="col-lg-3 col-md-6 col-sm-6" v-for="(member, i) in teamData" :key="'team-'+i">
                    <div class="team__item">
                        <img :src="member.img" :alt="member.name"/>
                        <h4>{{ member.name }}</h4>
                       <h5>{{ member.role }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Team Section End -->

    <!-- Client Section Begin -->
    <section class="clients spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Partner</span>
                        <h2>Happy Clients</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                 <div class="col-lg-3 col-md-4 col-sm-4 col-6" v-for="(client, i) in clientData" :key="'client-'+i">
                    <a :href="client.link || '#'" class="client__item"><img :src="client.logo" alt="Client"/></a>
                </div>
            </div>
        </div>
    </section>
    <!-- Client Section End -->

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const aboutItems = ref([
  { title: 'Kenapa Harus Fitting.co ?', text: 'Fitting co sangat peduli anda' },
  { title: 'Kenapa Harus Fitting.co ?', text: 'Fitting co sangat peduli anda' },
  { title: 'Kenapa Harus Fitting.co ?', text: 'Fitting co sangat peduli anda' }
]);

const testimonialData = ref({
  quote: "Website ini keren banget anjr gua sebagai pemilik toko terbantu banget menjual brand brand gua thanks fitting co ilove u.",
  authorImg: "/img/about/udin.jpeg",
  authorName: "Muhammad Fakhrudin",
  authorRole: "Founder of udinese",
  bgImg: "/img/about/testimonial-pic.jpg"
});

const counterData = ref([
    { number: 102, label: "Our <br />Clients" },
    { number: 30, label: "Total <br />Categories" },
    { number: 102, label: "In <br />Country" },
    { number: 98, suffix: "%", label: "Happy <br />Customer" }
]);

const teamData = ref([
    { name: "Muhammad Bimo Adyatma Broto", role: "CEO", img: "/img/about/bimo.jpeg" },
    { name: "Muhamamad Sahblul Khoir", role: "Manager", img: "/img/about/abi.jpeg" },
    { name: "Naufal Alam Haidar", role: "Office Boy", img: "/img/about/nopal.jpg" }
]);

const clientData = ref(
    Array(8).fill(null).map(() => ({ logo: "/img/clients/logo.png", link: "#" }))
);

onMounted(() => {
  if (window.$) {
    window.$('.set-bg').each(function () {
        var bg = window.$(this).data('setbg');
        if (bg) {
            window.$(this).css('background-image', 'url(' + bg + ')');
        }
    });

    // Counter Up Initialization (jika menggunakan plugin jquery.counterup.min.js)
    // Pastikan plugin ini dimuat di public/index.html dan .cn_num ada di template.
    if (window.$.fn.counterUp) { // Ganti .fn.counterUp dengan fungsi sebenarnya dari plugin jika berbeda
        window.$('.cn_num').counterUp({
            delay: 10,
            time: 1200
        });
    }
  }
});
</script>

<style scoped>
.spad {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
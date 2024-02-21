<script>
import AppButton from "./AppButton.vue";
import AppCard from "./AppCard.vue";
import AppSlider from "./AppSlider.vue";
import AppNews from "./AppNews.vue";

import { store } from "../store/store.js";

export default {
  data() {
    return {
      store,
      mainContent: {
        firstLessonButton: {
          text: "request a callback",
          href: "#",
          type: "primary",
        },
        courseInformation: {
          text: "course information",
          href: "#",
          type: "primary",
        },
        moreAboutUs: {
          text: "more about us",
          href: "#",
          type: "primary",
        },
        moreBlog: {
          text: "more from the blog",
          href: "#",
          type: "primary",
        },
        subscribe: {
          text: "subscribe",
          href: "#",
          type: "primary",
        },
      },
    };
  },
  components: { AppButton, AppCard, AppSlider, AppNews },

  methods: {
    getUrl(path) {
      return new URL(path, import.meta.url).href;
    },
  },
};
</script>

<template>
  <main>
    <!-- first lesson section -->
    <section class="first-lesson">
      <!-- section container -->
      <div class="container">
        <div class="row">
          <div class="col-6">
            <!-- section title -->
            <h3 class="section-title">Get Behind The Wheel</h3>
            <!-- section subtitle -->
            <p class="txt-big">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              qui, modi distinctio repellat unde eius doloribus error hic illo,
              perferendis veritatis? Assumenda exercitationem aspernatur,
              eveniet nobis nemo iure laboriosam voluptatibus.
            </p>
            <!-- section paragraph -->
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              at quis aliquid totam harum? Dolor nobis aperiam laboriosam
              repellendus, eum ipsum sint quo doloremque dicta deleniti error
              iste, modi distinctio!
            </p>
          </div>

          <div class="col-6">
            <div class="card-custom form">
              <!-- title-card -->
              <h4>First Lesson Free</h4>
              <!-- title paragraph -->
              <p>
                When you make a block booking with us your first lesson is
                included free
              </p>

              <!-- name input -->
              <input
                type="text"
                name="name"
                id="user-name"
                placeholder="Your Name*"
                required
              />
              <!-- email input -->
              <input
                type="email"
                name="email"
                id="user-email"
                placeholder="Email*"
                required
              />
              <!-- phone number input -->
              <input
                type="text"
                name="number"
                id="user-phone"
                placeholder="Telephone"
              />
              <!-- location input -->
              <input
                type="txt"
                name="location"
                id="user-location"
                placeholder="Location"
              />

              <!-- button -->
              <AppButton :button="mainContent.firstLessonButton" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="start-now">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <h2>Start Learning to Drive Today</h2>
            <h3>Give us a call to schedule your first driving lesson</h3>
          </div>
          <div class="col-4">
            <div>
              <font-awesome-icon icon="fa-solid fa-phone-flip" class="me-3" />
              1-800-555-555
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- courses section -->
    <section class="courses">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <div class="card-custom course">
              <div class="card-content">
                <figure>
                  <img src="../assets/img/new-corner.jpg" alt="" />
                </figure>
                <h3 class="section-title">Courses</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  magni delectus, voluptatum eum placeat vitae soluta corrupti,
                  mollitia pariatur rerum praesentium ad iste modi earum
                  similique ipsa. Nihil, deserunt inventore.
                </p>
                <!-- button -->
                <AppButton :button="mainContent.courseInformation" />
              </div>
            </div>
          </div>

          <div class="col-7">
            <AppCard v-for="card in store.mainCard.courseCards" :card="card" />
          </div>
        </div>
      </div>
    </section>
    <svg
      class="fusion-big-triangle-candy"
      xmlns="http://www.w3.org/2000/svg"
      id="triangle1"
      version="1.1"
      width="100%"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M-1 -1 L50 99 L101 -1 Z"></path>
      <defs>
        <linearGradient id="Gradient1">
          <stop class="stop1" offset="0%" />
          <stop class="stop2" offset="50%" />
        </linearGradient>
      </defs>
    </svg>

    <!-- rating -->
    <section class="rating">
      <div class="container">
        <div class="row gx-3">
          <div class="col-4" v-for="card in store.mainCard.ratingCards">
            <AppCard :card="card" />
          </div>
        </div>
      </div>
    </section>

    <!-- your instructors -->
    <section class="instructors">
      <div class="container">
        <h2 class="section-title">Your instructors</h2>
        <div class="row">
          <div class="col-9">
            <p class="txt-big">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              nulla ullam fugit officia consequatur aut molestias, perferendis,
              accusamus obcaecati sit beatae autem cumque vel maiores porro,
              tempora quisquam soluta nesciunt.
            </p>
          </div>
          <div class="col-3 text-center">
            <AppButton :button="mainContent.moreAboutUs" />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-4" v-for="card in store.mainCard.instructorsCards">
            <AppCard :card="card" />
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h2 class="section-title">Testimonials</h2>
      <p>Here's what our happy drivers had to say about our services</p>
      <AppSlider />
    </section>

    <section class="latest-news">
      <div class="section-wrapper">
        <div class="container">
          <h2 class="section-title text-center">Latest News</h2>
          <div class="row mb-5">
            <div class="col-6" v-for="news in store.mainCard.mainNews">
              <AppNews :news="news" />
            </div>
          </div>
          <AppButton :button="mainContent.moreBlog" />
        </div>
        <img
          :src="
            getUrl('../assets/img/latest news/latestnews-bottom-1200x105.png')
          "
          alt=""
        />
      </div>
    </section>

    <section class="newsletter">
      <div class="container text-center">
        <h2 class="section-title">Sign up to our Newsletter</h2>
        <div class="row justify-content-center">
          <div class="col-7 d-flex flex-column">
            <input type="email" id="" />
            <AppButton :button="mainContent.subscribe" />
            <p class="mt-5">
              (We do not share your data with anybody, and only use it for its
              intended purpose)
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

main {
  background-color: #fff;

  p {
    margin-bottom: 2rem;
    color: $txt-color;
  }

  .section-title {
    color: $title-txt-color;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  .card-custom {
    position: absolute;
    top: -35px;
    border-radius: 10px;
    background-color: $secondary-color;
    box-shadow: $card-box-shadow;
  }
  .txt-big {
    font-size: 1.5rem;
  }

  input {
    margin-bottom: 2rem;
    width: 100%;
    padding: 1rem 0.5rem;
    border: 1px solid $input-color;
    border-radius: 5px;
    color: $input-color;
    background-color: $input-bg;
  }
  // first lesson sessione
  .first-lesson {
    padding: 100px 0 150px 0;
    position: relative;

    .form {
      margin-left: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3rem 2rem;

      h4 {
        color: $primary-color;
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      p {
        margin-bottom: 2rem;
      }
    }
  }
}
// start now section
.start-now {
  background-image: url(../assets/img/backgrounds/horizontal-cta-background.jpg);
  background-size: cover;
  color: $secondary-color;
  .container {
    padding: 50px 0 100px 0;
    font-weight: bold;

    h2 {
      font-size: 2.5rem;
    }

    .col-4 {
      text-align: right;
      font-size: 2rem;
      font-weight: normal;
      @include center-vertically;
      justify-content: center;
    }
  }
}

// courses section
.courses {
  padding: 100px 0 100px 0;
  position: relative;
  background-image: url("../assets/img/backgrounds/promise-background.jpg");
  background-size: cover;
  background-position: bottom;

  .col-7 {
    display: flex;
    justify-content: space-between;
  }
  .course {
    width: 475px;

    .card-content {
      position: relative;
      text-align: center;
      padding: 3rem 2rem;

      p {
        padding: 0 2rem;
      }

      figure {
        position: absolute;
        top: 0;
        left: 0;
        width: 75px;
        border-top-left-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }
    }
  }
}
#triangle1 {
  fill: url(#Gradient1);
}
.stop1 {
  stop-color: #e4e9ea;
}
.stop2 {
  stop-color: #e6eaed;
}

.rating {
  position: relative;
  top: -120px;
  display: flex;
  justify-content: center;
}

.instructors {
  margin-bottom: -100px;
}
.testimonials {
  background-image: url("../assets/img/backgrounds/testimonial-background.jpg");
  background-size: cover;
  background-position: center;
  min-height: 800px;
  @include center-vertically;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 1.5rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .carousel-container {
    width: 100%;

    .slide-container {
      height: 100%;
    }
  }
}

.latest-news {
  display: flex;
  justify-content: center;
  background-image: url("../assets/img/backgrounds/latestnews-background.jpg");
  background-size: cover;
  background-position: center;

  .section-wrapper {
    position: relative;
    top: -50px;
    .container {
      @include center-vertically;
      flex-direction: column;
      padding: 3rem 3rem 1rem 3rem;
      background-color: $secondary-color;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      box-shadow: 0px -8px 0px 0px $latest-news-shadow;
    }
  }
}

.newsletter {
  padding: 75px 0;
  background-image: url("../assets/img/backgrounds/newsletter_background.jpg");
  background-size: cover;
  min-height: 300px;

  .section-title {
    font-size: 2rem;
  }

  p {
    margin-bottom: 0;
    color: $txt-color;
  }
}
</style>

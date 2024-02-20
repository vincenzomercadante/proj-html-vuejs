<script>
import AppButton from "./AppButton.vue";

export default {
  data() {
    return {
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
        courseInformation: {
          text: "learn more",
          href: "#",
          type: "secondary",
        },
        moreAboutUs: {
          text: "learn more",
          href: "#",
          type: "secondary",
        },
        moreAboutUs: {
          text: "more from the blog",
          href: "#",
          type: "primary",
        },
        moreAboutUs: {
          text: "subscribe",
          href: "#",
          type: "primary",
        },
      },
    };
  },
  components: { AppButton },
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
            <div class="form-card">
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
  }

  // first lesson sessione
  .first-lesson {
    padding: 100px 0 150px 0;
    position: relative;

    .txt-big {
      font-size: 1.5rem;
    }

    .form-card {
      margin-left: 70px;
      padding: 3rem 2rem;
      position: absolute;
      top: -50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      background-color: $secondary-color;
      box-shadow: 0px 50px 40px -2px #ececec;

      h4 {
        color: $primary-color;
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      p {
        margin-bottom: 2rem;
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
    }
  }
  // start now section
  .start-now {
    background-image: url(../assets/img/backgrounds/horizontal-cta-background.jpg);
    background-size: cover;
    color: $secondary-color;
    .container {
      padding: 50px 0;
      font-weight: bold;

      h2 {
        font-size: 2.5rem;
      }

      .col-4 {
        text-align: right;
        font-size: 2rem;
        font-weight: normal;
        @include center-vertically;
        justify-content: flex-end;
      }
    }
  }
}
</style>

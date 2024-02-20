import { reactive } from "vue";

export const store = reactive({
  mainCard: {
    courseCards: [
      {
        type: "small-card",
        argument: "course",
        img: "../assets/img/course-intensive-200x200.jpg",
        title: "Pass Plus",
        button: { text: "learn more", href: "#", type: "secondary" },
      },
      {
        type: "small-card",
        argument: "course",
        img: "../assets/img/courses-passplus-200x200.jpg",
        title: "Intensive Course",
        button: { text: "learn more", href: "#", type: "secondary" },
      },
      {
        type: "small-card",
        argument: "course",
        img: "../assets/img/courses-instructor-200x200.jpg",
        title: "Instructors",
        button: { text: "learn more", href: "#", type: "secondary" },
      },
    ],

    ratingCards: [
      {
        type: "normal-card",
        argument: "rate",
        rate: 95,
        title: "PASS RATE",
      },
      {
        type: "normal-card",
        argument: "rate",
        rate: 100,
        title: "REFERRAL RATE",
      },
      {
        type: "normal-card",
        argument: "rate",
        rate: 0,
        title: "ACCIDENT RATE",
      },
    ],

    instructorsCards: [
      {
        type: "normal-card",
        argument: "instructor",
        img: "../assets/img/instructors/instructor-mikehart-400x254.jpg",
        socials: [
          "fa-brands fa-facebook-f",
          "fa-brands fa-x-twitter",
          "fa-brands fa-instagram",
        ],
        title: "Mike Hart",
        text: "lorem ipsum dolor sit amet, consectetur adiscipling elit.",
      },
      {
        type: "normal-card",
        argument: "instructor",
        img: "../assets/img/instructors/instructor-johnsmith-400x254.jpg",
        socials: [
          "fa-brands fa-facebook-f",
          "fa-brands fa-x-twitter",
          "fa-brands fa-instagram",
        ],
        title: "John Smith",
        text: "lorem ipsum dolor sit amet, consectetur adiscipling elit.",
      },
      {
        type: "normal-card",
        argument: "instructor",
        img: "../assets/img/instructors/instructor-angelahart-400x254.jpg",
        socials: [
          "fa-brands fa-facebook-f",
          "fa-brands fa-x-twitter",
          "fa-brands fa-instagram",
        ],
        title: "Angela",
        text: "lorem ipsum dolor sit amet, consectetur adiscipling elit.",
      },
    ],
  },
});

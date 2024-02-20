import { createApp } from "vue";
import App from "./App.vue";

// import bootstrap
import * as bootstrap from "bootstrap";

// ? import fontawesome

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPhoneFlip,
  faHouseChimney,
  faLink,
  faChevronUp,
  faCircle as fasCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCircleRight,
  faCopyright,
  faCircle as farCircle,
} from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faPhoneFlip,
  faHouseChimney,
  faLink,
  faChevronUp,
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faEnvelope,
  faCircleRight,
  faCopyright,
  fasCircle,
  farCircle
);

const app = createApp(App);

// add icons component in app
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

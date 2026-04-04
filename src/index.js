
import MainPage from "./pages/main-page.js";
import MenuPage from "./pages/menu-page.js";
import "./styles/main.css";

const app = document.querySelector("#content");

const navbar = document.querySelector("nav");

const pages = {
  "home" : MainPage,
  "menu" : MenuPage,
  // "contact" : ContactPage,
}

navbar.addEventListener("click", (event) => {
  const target = event.target;

  if(target.tagName !== "BUTTON") return;
  app.innerHTML = "";
  // Call the page and pass it the app container;
  pages[target.id](app);
})

MainPage(app);

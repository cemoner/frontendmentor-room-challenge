let p1 =
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
let h1 = "Discover innovative ways to decorate";

let p2 =
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";

let h2 = "We are available all across the globe";

let p3 =
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";

let h3 = "Manufactured with the best materials";

let img1 = "/frontendmentor/images/desktop-image-hero-1.jpg";
let img2 = "/frontendmentor/images/desktop-image-hero-2.jpg";
let img3 = "/frontendmentor/images/desktop-image-hero-3.jpg";

let images = [img1, img2, img3];
let paragraphs = [p1, p2, p3];
let headers = [h1, h2, h3];

let h2_tag = document.querySelector("h2");
let p1_tag = document.querySelector(".paragraph-one");
let img = document.querySelector(".top");
let btn_left = document.querySelector(".btn-left");
let btn_right = document.querySelector(".btn-right");
let section = document.querySelector(".animation-wrapper");

console.log(img);
let counter = 0;
function swit(direction, animation, imgAnimation) {
  counter = (counter + 3 + direction) % 3;
  // image and section animation
  section.classList.toggle("section-fade-" + animation);
  // ---------------
  img.classList.toggle("section-fade-" + imgAnimation);
  setTimeout(() => {
    p1_tag.innerHTML = paragraphs[counter];
    h2_tag.innerHTML = headers[counter];
    img.src = images[counter];
    section.classList.toggle("section-switch-" + animation);
    section.classList.toggle("section-fade-" + animation);

    img.classList.toggle("section-switch-" + imgAnimation);
    img.classList.toggle("section-fade-" + imgAnimation);
  }, 151);
  setTimeout(() => {
    section.classList.toggle("section-switch-" + animation);
    img.classList.toggle("section-switch-" + imgAnimation);
  }, 301);
}

btn_left.addEventListener("click", () => swit(-1, "backward", "forward"));
btn_right.addEventListener("click", () => swit(1, "forward", "backward"));

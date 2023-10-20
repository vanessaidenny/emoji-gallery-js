// Define page main heading
const $mainHeading = document.getElementById("main-heading");
$mainHeading.innerHTML = "Emoji Gallery";

// Add emojis list
const $section = document.getElementById("section-gallery");
const emojis = [
  "8986",
  "8987",
  "9200",
  "9748",
  "9749",
  "9889",
  "9924",
  "9970",
  "9971",
  "9973",
  "9978",
  "9981",
  "10024",
  "10160",
  "11088",
];
const emojiList = [];

let itemIndex = 1;
for (const emoji of emojis) {
  emojiList.push(`
        <p class="item${itemIndex++}">
            <span>&#${emoji};</span><br>
            <code>${emoji}</code>
        </p>
    `);
}
$section.innerHTML = emojiList.join("");
$section.classList.add("grid");

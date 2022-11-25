// handle id
const atags = [...document.querySelectorAll('a[id^="user-content"]')];

for (let atag of atags) {
  let parent = atag.parentElement;
  parent.id = atag.getAttribute("href").substring(1);
}

// add in print button
let h1 = document.querySelector("#online-help");
if (h1) {
  h1.innerHTML += `  <button class="my-btn" onclick="window.print();return false;">
      <i class="fas fa-print"></i> Print
    </button>`;

  h1.classList.add("my-btn-flex");
}

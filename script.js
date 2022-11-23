const fromText = document.querySelector(".from-text"),
  toText = document.querySelector(".to-text"),
  exchangeIcon = document.querySelector(".exchange"),
  selectTag = document.querySelectorAll("select"),
  icons = document.querySelectorAll(".row i"),
  translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) => {
  for (let country_code in countries) {
    let selected;
    if (id == 0 && country_code == "en-GB") {
      selected = "selected";
    } else if (id == 1 && country_code == "el-GR") {
      selected == "selected";
    }
    let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});

exchangeIcon.addEventListener("click", () => {
  let tempText = fromText.value,
    tempLang = selectTag[0].value;
  fromText.value = toText.value;
  toText.value = tempText.value;

  selectTag[0].value = selectTag[1].value;
  selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
  if (!fromText.value) {
    toText.value = "";
  }
});

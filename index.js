let fileInput = document.getElementById("imageUpload");
let numberOfFiles = document.getElementById("fileNumber");
let imageContainer = document.getElementById("images");

function preview() {
  imageContainer.innerHTML = "";
  numberOfFiles.textContent = `${fileInput.files.length} image(s) Selected`;

  for (i of fileInput.files) {
    let reader = new FileReader();
    let figure = document.createElement("figure");
    let caption = document.createElement("caption");

    caption.innerText = i.name;
    figure.appendChild(caption);
    reader.onload = () => {
      let img = document.createElement("img");
      img.setAttribute("src", reader.result);
      figure.insertBefore(img, caption);
    };
    images.appendChild(figure);
    reader.readAsDataURL(i);
  }
}

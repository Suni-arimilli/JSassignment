document.addEventListener("DOMContentLoaded", function() {
  const accButtons = document.querySelectorAll(".accButton");
  accButtons.forEach(accButton => {
      accButton.addEventListener("click", function() {
          this.classList.toggle("active");
          const content = this.nextElementSibling;
          content.style.display = content.style.display === "block" ? "none" : "block";
      });
  });
});
// Function to toggle between home images
function toggleHomeImage() {
    const homeImage = document.getElementById("home-image");
    if (homeImage.src.includes("attractions-splice-spp")) {
      homeImage.src = "https://cdn.britannica.com/11/94611-050-8A500304/Sule-pagoda-centre-Myanmar-Yangon.jpg";
    } else {
      homeImage.src = "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/ea/bd/71.jpg";
    }
  }

  // Function to check if a required field is filled
  function checkRequiredField() {
    const requiredField = document.getElementById("required-field");
    const requiredFieldError = document.getElementById("required-field-error");
    if (requiredField.value == 'hello') {
      requiredFieldError.style.display = "none";
    } else {
      requiredFieldError.style.display = "block";
    }
  }

  function change1() {
    document.getElementById("content1").textContent = "Good Morning Again!";

  }

  function change2() {
    document.getElementById("content2").textContent = "Im Fine!";

  }
  


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}



// ფილტრი

const container = document.getElementById("container");
const ulResult = document.getElementById("result");
const inputElement = document.getElementById("filterinput");
const listUsers = [];

function trimText(text) {
  return text.trim();
}

function getUsersWithImages() {
  fetch("https://reqres.in/api/users?page=1", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((responseData) => {
      responseData.data.forEach((item) => {
        let li = document.createElement("li");

        let firstName = trimText(item.first_name);
        let lastName = trimText(item.last_name);

        li.innerText = `${firstName} ${lastName}`;

        let img = document.createElement("img");
        img.src = item.avatar;
        img.alt = `${firstName} ${lastName} Avatar`;
        img.classList.add("user-avatar");

        li.appendChild(img);
        listUsers.push(li);
      });

      if (listUsers.length === 0) {
        
      }
    })
    .catch((error) => console.log(error));
}

function filterDataUsers(searchItem) {
  ulResult.innerHTML = ""; 

  listUsers.forEach((item) => {
    let trimmedText = trimText(item.innerText.toLowerCase());
    if (trimmedText.includes(searchItem.toLowerCase())) {
      ulResult.appendChild(item);
      item.classList.remove("hideList");
    } else {
      item.classList.add("hideList");
    }
  });

  if (listUsers.every((item) => item.classList.contains("hideList"))) {
    
  }
}

inputElement.addEventListener("input", function (event) {
  const searchValue = event.target.value.trim();
  filterDataUsers(searchValue);

  
  if (searchValue !== "") {
    container.appendChild(ulResult);
  } else {
    ulResult.innerHTML = "";
  }
});

getUsersWithImages();



// აცორდიონ 


 document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');

      header.addEventListener('click', function () {
        item.classList.toggle('active');

        const content = item.querySelector('.accordion-content');
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  });

  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });





  function toggleMenu() {
    const navList = document.querySelector('.navlist ul');
    navList.classList.toggle('show');
  }
  // Add this JavaScript code
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

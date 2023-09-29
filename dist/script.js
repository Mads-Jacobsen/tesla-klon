// Sidemenu


function openNav() {
  document.getElementById("side-menu").style.width = "311px";
  document.getElementsByTagName("body").style.filter = "blur(5px)";
}

function closeNav() {
  document.getElementById("side-menu").style.width = "0";
}

// Navbar effekt

const overlay = document.querySelector('header #main-nav .overlay');
const nav_list = document.querySelectorAll('header #main-nav ul li');

nav_list.forEach(list_item=> {
  list_item.addEventListener('mouseover', ()=>{
    overlay.classList.add('aktiv')
    let position = list_item.getBoundingClientRect();
    overlay.style.left = position.x+'px';
    overlay.style.top = position.y+'px';
    overlay.style.height = position.height+'px';
    overlay.style.width = position.width+'px';
  });
  list_item.addEventListener('mouseout', ()=>{
    overlay.classList.remove('aktiv')
  })
})

/* Burger menu */

function openBurger() {
  document.getElementById("mobile-menu").style.display = "block";
  document.getElementById('bouncing-arrow').style.display = "none";
}

function closeBurger() {
  document.getElementById("mobile-menu").style.display = "none";
  document.getElementById('bouncing-arrow').style.display = "inline-block";
}

/* Dropdown biler */

function openBiler() {
  const dropDown = document.getElementById("dropdown-biler")
  if(dropDown.style.display === 'none') {
    dropDown.style.display = 'block'
  } else {
    dropDown.style.display = 'none'
    }
  }

  function openEnergi() {
    const dropDown = document.getElementById("dropdown-energi")
    if(dropDown.style.display === 'none') {
      dropDown.style.display = 'block'
    } else {
      dropDown.style.display = 'none'
      }
    }
  function openOpladning() {
    const dropDown = document.getElementById("dropdown-opladning")
    if(dropDown.style.display === 'none') {
      dropDown.style.display = 'block'
    } else {
      dropDown.style.display = 'none'
      }
    }
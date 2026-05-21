// src/components/sidebar/sidebar.js

async function loadSidebar(activePage){

  const sidebarContainer = document.getElementById("sidebar-container");

  if(!sidebarContainer) return;

  try{

    const response = await fetch("../../components/sidebar/sidebar.html");

    const html = await response.text();

    sidebarContainer.innerHTML = html;

    activateMenu(activePage);

  }catch(error){

    console.error("Erro ao carregar sidebar:", error);

  }

}

function activateMenu(activePage){

  const menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach(link => {

    link.classList.remove("active");

    if(link.dataset.page === activePage){

      link.classList.add("active");

    }

  });

}
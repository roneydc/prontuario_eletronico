// =========================================================
// DASHBOARD.JS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  initializeDashboard();

});

// =========================================================
// INITIALIZE
// =========================================================

function initializeDashboard(){

  loadDashboardData();

  initializeButtons();

  initializeForm();

}

// =========================================================
// LOAD DATA
// =========================================================

function loadDashboardData(){

  console.log("Dashboard carregado com sucesso.");

  updateCards();

  loadRecentPatients();

  loadRecentActivities();

}

// =========================================================
// UPDATE CARDS
// =========================================================

function updateCards(){

  const totalPacientes = document.getElementById("total-pacientes");

  const totalAtendimentos = document.getElementById("total-atendimentos");

  const totalProntuarios = document.getElementById("total-prontuarios");

  const totalEvolucoes = document.getElementById("total-evolucoes");

  if(totalPacientes){

    totalPacientes.textContent = "184";

  }

  if(totalAtendimentos){

    totalAtendimentos.textContent = "67";

  }

  if(totalProntuarios){

    totalProntuarios.textContent = "172";

  }

  if(totalEvolucoes){

    totalEvolucoes.textContent = "438";

  }

}

// =========================================================
// BUTTONS
// =========================================================

function initializeButtons(){

  const newPatientButton = document.querySelector(".btn");

  if(newPatientButton){

    newPatientButton.addEventListener("click", () => {

      alert("Abrir modal de novo paciente.");

    });

  }

}

// =========================================================
// FORM
// =========================================================

function initializeForm(){

  const form = document.getElementById("evolution-form");

  if(!form) return;

  form.addEventListener("submit", handleEvolutionSubmit);

}

// =========================================================
// HANDLE FORM
// =========================================================

function handleEvolutionSubmit(event){

  event.preventDefault();

  const patient = document.getElementById("patient").value;

  const appointmentType = document.getElementById("appointment-type").value;

  const notes = document.getElementById("notes").value;

  if(patient === "Selecionar paciente"){

    alert("Selecione um paciente.");

    return;

  }

  if(notes.trim() === ""){

    alert("Digite as anotações clínicas.");

    return;

  }

  const evolutionData = {

    patient,
    appointmentType,
    notes,
    createdAt: new Date()

  };

  console.log("Nova evolução:", evolutionData);

  alert("Evolução clínica salva com sucesso.");

  form.reset();

}

// =========================================================
// RECENT PATIENTS
// =========================================================

function loadRecentPatients(){

  const patientsTable = document.getElementById("patients-table");

  if(!patientsTable) return;

  console.log("Tabela de pacientes carregada.");

}

// =========================================================
// RECENT ACTIVITIES
// =========================================================

function loadRecentActivities(){

  console.log("Atividades recentes carregadas.");

}

// =========================================================
// UTILITIES
// =========================================================

function formatDate(date){

  return new Intl.DateTimeFormat("pt-BR").format(date);

}

// =========================================================
// FUTURE SUPABASE INTEGRATION
// =========================================================

// async function getPatients(){
//
//   const { data, error } = await supabase
//     .from("pacientes")
//     .select("*");
//
//   if(error){
//
//     console.error(error);
//
//     return;
//
//   }
//
//   return data;
//
// }
// =========================================================
// PRONTUARIOS.JS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  initializeMedicalRecords();

});

// =========================================================
// INITIALIZE
// =========================================================

function initializeMedicalRecords(){

  loadMedicalRecords();

  initializeSearch();

  initializeButtons();

  initializeEvolutionList();

}

// =========================================================
// LOAD MEDICAL RECORDS
// =========================================================

function loadMedicalRecords(){

  console.log("Prontuários carregados.");

  const records = [

    {
      id: "P001",
      patient: "Maria Oliveira",
      diagnosis: "Lombalgia",
      evolutions: 14,
      status: "Ativo"
    },

    {
      id: "P002",
      patient: "João Henrique",
      diagnosis: "Tendinite",
      evolutions: 9,
      status: "Ativo"
    },

    {
      id: "P003",
      patient: "Ana Costa",
      diagnosis: "Pós-operatório",
      evolutions: 22,
      status: "Inativo"
    }

  ];

  console.table(records);

}

// =========================================================
// SEARCH
// =========================================================

function initializeSearch(){

  const searchInput = document.querySelector(".search-box input");

  if(!searchInput) return;

  searchInput.addEventListener("input", handleSearch);

}

// =========================================================
// HANDLE SEARCH
// =========================================================

function handleSearch(event){

  const value = event.target.value.toLowerCase();

  const cards = document.querySelectorAll(".record-card");

  cards.forEach(card => {

    const patientName = card
      .querySelector(".patient-data h3")
      .textContent
      .toLowerCase();

    const diagnosis = card
      .querySelectorAll(".record-info strong")[1]
      .textContent
      .toLowerCase();

    const match =
      patientName.includes(value) ||
      diagnosis.includes(value);

    card.style.display = match ? "" : "none";

  });

}

// =========================================================
// BUTTONS
// =========================================================

function initializeButtons(){

  initializeNewRecordButton();

  initializeViewButtons();

  initializeEditButtons();

}

// =========================================================
// NEW RECORD
// =========================================================

function initializeNewRecordButton(){

  const button = document.querySelector(".btn");

  if(!button) return;

  button.addEventListener("click", () => {

    alert("Abrir criação de novo prontuário.");

  });

}

// =========================================================
// VIEW BUTTONS
// =========================================================

function initializeViewButtons(){

  const buttons = document.querySelectorAll(".view");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const card = button.closest(".record-card");

      const patientName = card
        .querySelector(".patient-data h3")
        .textContent;

      alert(`Visualizando prontuário de ${patientName}`);

    });

  });

}

// =========================================================
// EDIT BUTTONS
// =========================================================

function initializeEditButtons(){

  const buttons = document.querySelectorAll(".edit");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const card = button.closest(".record-card");

      const patientName = card
        .querySelector(".patient-data h3")
        .textContent;

      alert(`Editando prontuário de ${patientName}`);

    });

  });

}

// =========================================================
// EVOLUTION LIST
// =========================================================

function initializeEvolutionList(){

  const evolutionItems = document.querySelectorAll(".evolution-item");

  evolutionItems.forEach(item => {

    item.addEventListener("click", () => {

      const patientName = item
        .querySelector("h4")
        .textContent;

      alert(`Abrir evolução clínica de ${patientName}`);

    });

  });

}

// =========================================================
// UTILITIES
// =========================================================

function formatDate(date){

  return new Intl.DateTimeFormat("pt-BR").format(date);

}

function generateRecordId(){

  return `P${Math.floor(Math.random() * 1000)}`;

}

// =========================================================
// LOCAL STORAGE
// =========================================================

function saveRecordsToLocalStorage(data){

  localStorage.setItem(

    "medflow_records",
    JSON.stringify(data)

  );

}

function loadRecordsFromLocalStorage(){

  const data = localStorage.getItem("medflow_records");

  if(!data) return [];

  return JSON.parse(data);

}

// =========================================================
// FUTURE SUPABASE INTEGRATION
// =========================================================

// async function getMedicalRecords(){
//
//   const { data, error } = await supabase
//     .from("prontuarios")
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

// async function createMedicalRecord(recordData){
//
//   const { error } = await supabase
//     .from("prontuarios")
//     .insert([recordData]);
//
//   if(error){
//
//     console.error(error);
//
//     return;
//
//   }
//
// }

// =========================================================
// FUTURE FEATURES
// =========================================================

// addEvolution()
//
// updateMedicalRecord()
//
// deleteMedicalRecord()
//
// uploadExam()
//
// exportMedicalRecordPDF()
//
// printMedicalRecord()
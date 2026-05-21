// =========================================================
// ATENDIMENTOS.JS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  initializeAttendances();

});

// =========================================================
// INITIALIZE
// =========================================================

function initializeAttendances(){

  loadAttendances();

  initializeFilters();

  initializeButtons();

  updateSummaryCards();

}

// =========================================================
// LOAD ATTENDANCES
// =========================================================

function loadAttendances(){

  console.log("Atendimentos carregados.");

  const attendances = [

    {
      id: "A001",
      patient: "Maria Oliveira",
      type: "Avaliação Inicial",
      date: "20/05/2026",
      professional: "Dr(a). Responsável",
      status: "Concluído"
    },

    {
      id: "A002",
      patient: "João Henrique",
      type: "Retorno",
      date: "18/05/2026",
      professional: "Dr(a). Responsável",
      status: "Pendente"
    },

    {
      id: "A003",
      patient: "Ana Costa",
      type: "Consulta",
      date: "16/05/2026",
      professional: "Dr(a). Responsável",
      status: "Cancelado"
    }

  ];

  console.table(attendances);

}

// =========================================================
// FILTERS
// =========================================================

function initializeFilters(){

  const filters = document.querySelectorAll("select");

  filters.forEach(filter => {

    filter.addEventListener("change", handleFilters);

  });

}

// =========================================================
// HANDLE FILTERS
// =========================================================

function handleFilters(){

  const patientFilter = document.querySelectorAll("select")[0].value;

  const typeFilter = document.querySelectorAll("select")[1].value;

  const statusFilter = document.querySelectorAll("select")[2].value;

  console.log("Filtros aplicados:");

  console.log("Paciente:", patientFilter);

  console.log("Tipo:", typeFilter);

  console.log("Status:", statusFilter);

  // FUTURAMENTE:
  // atualizar tabela dinamicamente

}

// =========================================================
// BUTTONS
// =========================================================

function initializeButtons(){

  initializeNewAttendanceButton();

  initializeViewButtons();

  initializeEditButtons();

}

// =========================================================
// NEW ATTENDANCE
// =========================================================

function initializeNewAttendanceButton(){

  const button = document.querySelector(".btn");

  if(!button) return;

  button.addEventListener("click", () => {

    alert("Abrir modal de novo atendimento.");

  });

}

// =========================================================
// VIEW BUTTONS
// =========================================================

function initializeViewButtons(){

  const buttons = document.querySelectorAll(".view");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const row = button.closest("tr");

      const patientName = row.querySelector("strong").textContent;

      alert(`Visualizar atendimento de ${patientName}`);

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

      const row = button.closest("tr");

      const patientName = row.querySelector("strong").textContent;

      alert(`Editar atendimento de ${patientName}`);

    });

  });

}

// =========================================================
// SUMMARY CARDS
// =========================================================

function updateSummaryCards(){

  console.log("Cards de resumo atualizados.");

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

// async function getAttendances(){
//
//   const { data, error } = await supabase
//     .from("atendimentos")
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

// =========================================================
// FUTURE CRUD
// =========================================================

// createAttendance()
//
// updateAttendance()
//
// deleteAttendance()
//
// searchAttendance()
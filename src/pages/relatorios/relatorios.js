// =========================================================
// RELATORIOS.JS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  initializeReports();

});

// =========================================================
// INITIALIZE
// =========================================================

function initializeReports(){

  loadReports();

  initializeFilters();

  initializeButtons();

  initializeDownloadButtons();

  updateSummaryCards();

}

// =========================================================
// LOAD REPORTS
// =========================================================

function loadReports(){

  console.log("Relatórios carregados.");

  const reports = [

    {
      id: "R001",
      type: "Relatório Clínico",
      patient: "Maria Oliveira",
      format: "PDF",
      status: "Concluído"
    },

    {
      id: "R002",
      type: "Relatório de Atendimentos",
      patient: "João Henrique",
      format: "XLSX",
      status: "Concluído"
    },

    {
      id: "R003",
      type: "Relatório Financeiro",
      patient: "Ana Costa",
      format: "PDF",
      status: "Processando"
    }

  ];

  console.table(reports);

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

  const periodFilter = document.querySelectorAll("select")[1].value;

  const typeFilter = document.querySelectorAll("select")[2].value;

  console.log("Filtros aplicados:");

  console.log("Paciente:", patientFilter);

  console.log("Período:", periodFilter);

  console.log("Tipo:", typeFilter);

  // FUTURAMENTE:
  // atualizar relatórios dinamicamente

}

// =========================================================
// BUTTONS
// =========================================================

function initializeButtons(){

  initializeGenerateReportButton();

  initializeViewButtons();

}

// =========================================================
// GENERATE REPORT
// =========================================================

function initializeGenerateReportButton(){

  const button = document.querySelector(".btn");

  if(!button) return;

  button.addEventListener("click", () => {

    alert("Gerar novo relatório.");

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

      const reportName = row.children[0].textContent;

      alert(`Visualizando ${reportName}`);

    });

  });

}

// =========================================================
// DOWNLOAD BUTTONS
// =========================================================

function initializeDownloadButtons(){

  const exportButtons = document.querySelectorAll(

    ".download, .download-btn"

  );

  exportButtons.forEach(button => {

    button.addEventListener("click", handleDownload);

  });

}

// =========================================================
// HANDLE DOWNLOAD
// =========================================================

function handleDownload(event){

  const button = event.target;

  const reportCard = button.closest(".report-card");

  const tableRow = button.closest("tr");

  if(reportCard){

    const reportTitle = reportCard
      .querySelector("h3")
      .textContent;

    alert(`Exportando ${reportTitle}`);

  }

  if(tableRow){

    const reportTitle = tableRow.children[0].textContent;

    alert(`Download iniciado: ${reportTitle}`);

  }

  console.log("Download iniciado.");

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

function generateReportId(){

  return `R${Math.floor(Math.random() * 1000)}`;

}

// =========================================================
// LOCAL STORAGE
// =========================================================

function saveReportsToLocalStorage(data){

  localStorage.setItem(

    "medflow_reports",
    JSON.stringify(data)

  );

}

function loadReportsFromLocalStorage(){

  const data = localStorage.getItem("medflow_reports");

  if(!data) return [];

  return JSON.parse(data);

}

// =========================================================
// FUTURE PDF EXPORT
// =========================================================

// async function exportPDF(reportData){
//
//   console.log("Exportando PDF...");
//
// }

// =========================================================
// FUTURE XLSX EXPORT
// =========================================================

// async function exportXLSX(reportData){
//
//   console.log("Exportando XLSX...");
//
// }

// =========================================================
// FUTURE SUPABASE INTEGRATION
// =========================================================

// async function getReports(){
//
//   const { data, error } = await supabase
//     .from("relatorios")
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

// async function createReport(reportData){
//
//   const { error } = await supabase
//     .from("relatorios")
//     .insert([reportData]);
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

// exportClinicalReport()
//
// exportFinancialReport()
//
// exportAttendanceReport()
//
// printReport()
//
// sendReportByEmail()
//
// scheduleAutomaticReports()
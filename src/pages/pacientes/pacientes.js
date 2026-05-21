// =========================================================
// CONFIGURACOES.JS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  initializeSettings();

});

// =========================================================
// INITIALIZE
// =========================================================

function initializeSettings(){

  loadSettings();

  initializeSaveButton();

  initializeSwitches();

  initializeInputs();

}

// =========================================================
// LOAD SETTINGS
// =========================================================

function loadSettings(){

  console.log("Configurações carregadas.");

  // FUTURAMENTE:
  // carregar dados do Supabase

}

// =========================================================
// SAVE BUTTON
// =========================================================

function initializeSaveButton(){

  const saveButton = document.querySelector(".btn");

  if(!saveButton) return;

  saveButton.addEventListener("click", saveSettings);

}

// =========================================================
// SAVE SETTINGS
// =========================================================

function saveSettings(){

  const professionalName = document.querySelectorAll("input")[0].value;

  const specialty = document.querySelectorAll("input")[1].value;

  const phone = document.querySelectorAll("input")[2].value;

  const email = document.querySelectorAll("input")[3].value;

  const clinicName = document.querySelectorAll("input")[4].value;

  const cnpj = document.querySelectorAll("input")[5].value;

  const address = document.querySelectorAll("input")[6].value;

  const notes = document.querySelector("textarea").value;

  const darkMode = document.querySelectorAll(".switch input")[0].checked;

  const autoBackup = document.querySelectorAll(".switch input")[1].checked;

  const notifications = document.querySelectorAll(".switch input")[2].checked;

  const settingsData = {

    professionalName,
    specialty,
    phone,
    email,

    clinicName,
    cnpj,
    address,
    notes,

    darkMode,
    autoBackup,
    notifications

  };

  console.log("Configurações salvas:");

  console.table(settingsData);

  alert("Configurações salvas com sucesso.");

  saveToLocalStorage(settingsData);

}

// =========================================================
// SWITCHES
// =========================================================

function initializeSwitches(){

  const switches = document.querySelectorAll(".switch input");

  switches.forEach((switchElement, index) => {

    switchElement.addEventListener("change", () => {

      handleSwitchChange(index, switchElement.checked);

    });

  });

}

// =========================================================
// HANDLE SWITCH
// =========================================================

function handleSwitchChange(index, checked){

  const switchNames = [

    "Modo Escuro",
    "Backup Automático",
    "Notificações"

  ];

  console.log(`${switchNames[index]}: ${checked}`);

  // FUTURAMENTE:
  // aplicar dark mode real

}

// =========================================================
// INPUTS
// =========================================================

function initializeInputs(){

  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {

    input.addEventListener("focus", () => {

      input.style.borderColor = "#2563eb";

    });

  });

}

// =========================================================
// LOCAL STORAGE
// =========================================================

function saveToLocalStorage(data){

  localStorage.setItem(

    "medflow_settings",
    JSON.stringify(data)

  );

}

// =========================================================
// LOAD LOCAL STORAGE
// =========================================================

function loadFromLocalStorage(){

  const data = localStorage.getItem("medflow_settings");

  if(!data) return null;

  return JSON.parse(data);

}

// =========================================================
// RESTORE SETTINGS
// =========================================================

function restoreSettings(){

  const settings = loadFromLocalStorage();

  if(!settings) return;

  console.log("Restaurando configurações...");

  // FUTURAMENTE:
  // preencher formulário automaticamente

}

// =========================================================
// UTILITIES
// =========================================================

function validateEmail(email){

  return email.includes("@");

}

// =========================================================
// FUTURE SUPABASE INTEGRATION
// =========================================================

// async function saveSettingsSupabase(data){
//
//   const { error } = await supabase
//     .from("configuracoes")
//     .insert([data]);
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

// darkMode()
//
// exportBackup()
//
// importBackup()
//
// updateClinicLogo()
//
// uploadProfilePhoto()
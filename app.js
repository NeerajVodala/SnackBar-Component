const baselineBtn = document.querySelector(".baseline-btn");
const leadingBtn = document.querySelector(".leading-btn");
const stackedBtn = document.querySelector(".stacked-btn");
const baselineContainer = document.querySelector(".baseline-container");
const leadingContainer = document.querySelector(".leading-container");
const stackedContainer = document.querySelector(".stacked-container");

baselineBtn.addEventListener("click", ()=>{
    leadingContainer.style.display = "none";
    stackedContainer.style.display = "none";
    baselineContainer.style.display = "flex";
});

leadingBtn.addEventListener("click", ()=>{
    leadingContainer.style.display = "flex";
    stackedContainer.style.display = "none";
    baselineContainer.style.display = "none";
});

stackedBtn.addEventListener("click", ()=>{
    leadingContainer.style.display = "none";
    stackedContainer.style.display = "flex";
    baselineContainer.style.display = "none";
});
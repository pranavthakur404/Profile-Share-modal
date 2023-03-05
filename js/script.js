const shareBtn = document.querySelector("#share-btn");
const modalContainer = document.querySelector("#modal-container");
const modalBox = document.querySelector("#modal-box");
const closeBtn = document.querySelector("#closeBtn");
shareBtn.addEventListener('click',()=>{
    modalContainer.style.transform = "scale(1)";
    modalBox.style.transform = "scale(1)";
})
closeBtn.addEventListener('click',()=>{
    modalBox.style.transform = "scale(0)";
    modalContainer.style.transform = 'scale(0)';
})
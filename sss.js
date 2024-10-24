const wrapper = document.querySelector(".wrapper");
const question = document.querySelectorAll(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const newBtn = document.querySelector(".new-btn");

yesBtn.addEventListener("click", () => {
  question[0].innerHTML = "Yayy! Cuối cùng An cũng đồng ý rồi àa";
  question[1].innerHTML = "Nhi iuu An quãiii luôn💗 ";
  img.src =
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTI1dzM1d2V0dndyeDRna3lvdHpmOTZybnoyMnloNDB5aTY1aXF0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1iPs3m08LLith1QVGc/giphy.webp";

  // Ẩn nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Hiển thị nút mới
  newBtn.style.display = "block";

  // Thực hiện chuyển hướng đến đường dẫn Facebook
  newBtn.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/shorts/VFaP5QgePqk";
  });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

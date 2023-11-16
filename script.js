"use strict";
/*
//gọi một bộ chọn tham chiếu tới html hoặc từ css
console.log(document.querySelector('.message').textContent);
//them nội dung vào

console.log(
  (document.querySelector('.message').textContent = 'Correct Number !')
);
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
//đặt đối số cho hàm intput rỗng  trong html
console.log((document.querySelector('.guess').value = 23)); // thêm giá trị vào hàm input
console.log(document.querySelector('.guess').valeu); // value là giá trị của hàm input*/
// xử lý click
const secretNumber = "ở một mình";
let score = 3;
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = String(document.querySelector(".guess").value);

  console.log(guess, typeof guess);
  //triển khai logic /đoán k cho số
  if (!guess) {
    document.querySelector(".message").textContent =
      "Bạn chưa nhập câu trả lời";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct!";
  } else if (guess !== "muti") {
    if (score > 1) {
      document.querySelector(".message").textContent = "cho cơ hội!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Trang không yêu Nhật Anh";
      document.querySelector(".score").textContent = 0;
    }
  }
});

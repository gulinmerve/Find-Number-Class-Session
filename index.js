/* 
1) Arkaplanda random bir sayı tutulacak ✅
2) Kullanıcıdan sayı alınacak ✅
3) Alınan sayı kontrol edilecek
    3.1 Sayı tahmini sayıdan büyükse "sayı büyük"
    3.2 Sayı tahmini sayıdan küçükse "sayı küçük"
    3.3 Sayı eşitse oyunu bitir
**/
let guess_count = 0;
const random_number = Math.floor(Math.random() * 100 + 1);
console.log(random_number);
document.querySelector("#check_it").addEventListener("click", checkNumber);

function checkNumber() {
  guess_count++;
  // Input elementine tekrar tekrar daha rahat erişim sağlamak için
  let userInputElement = document.querySelector("#nr_game");
  let answerLabelElement = document.querySelector("#answer");
  document.querySelector(
    "#count_it"
  ).innerText = `Guess count is: ${guess_count}`;

  if (userInputElement.value == random_number) {
    alert("You are the winner!");
  } else if (userInputElement.value > random_number) {
    answerLabelElement.innerText = "Try a smaller number!";
  } else if (userInputElement.value < random_number) {
    answerLabelElement.innerText = "Try a higher number!";
  } else if (isNaN(userInputElement.value)) {
    answerLabelElement.innerText = "It's not a number!";
  }  else if (userInputElement.value == "") {
    answerLabelElement.innerText = "Enter a Number";
  }
}

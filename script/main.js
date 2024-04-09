const textarea = document.querySelector("#textarea");
const submit = document.querySelector("#submit");
const showcase = document.querySelector("#showcase");
const current_name = document.querySelector("#current_name");
const draw = document.querySelector("#draw");
const frist = document.querySelector("#frist");
const second = document.querySelector("#second");
const third = document.querySelector("#third");

let player = [];
let position = 1;

submit.addEventListener("click", () => {
  if (textarea.value !== "") {
    let textarea_value = textarea.value.split(", ");
    textarea_value.map((val, index) => {
      player.push(val);
      let li = document.createElement("li");
      li.innerHTML = " " + val;
      li.classList.add("list-group-item", "fs-5");
      showcase.appendChild(li);
      textarea.value = "";
    });
  } else {
    alert("Please Provide a value.");
  }
});

// This function is copid form "https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2"
function randomize(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
  }
  return arr;
}

draw.addEventListener("click", () => {
  if (position < 4) {
    let sorted_player = randomize(player);
    // let random_index = Math.floor(Math.random() * sorted_player.length);

    let random_index = sorted_player.length - 1;
    let temp = 0;

    let interval = setInterval(() => {
      current_name.innerHTML = player[temp];
      temp++;
      if (random_index < temp) {
        // There I'm clearing Interval Function
        clearInterval(interval);

        // There I'm set the position of player
        switch (position) {
          case 1:
            frist.innerHTML = player[random_index];
            position++;
            break;
          case 2:
            second.innerHTML = player[random_index];
            position++;
            break;
          case 3:
            third.innerHTML = player[random_index];
            position++;
            break;
          default:
            break;
        }

        // There I'm clearing current index of pleyer array
        player = player.filter((single_player) => {
          return single_player !== player[random_index];
        });

        // There I'm
      }
    }, 100);
  } else {
    alert("The Raffle Draw has been finished.");
  }
});

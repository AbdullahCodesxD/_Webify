const characterChanger = function () {
  // ALL the elements
  const changingSpan = document
    .querySelector(".main__heading")
    ?.querySelector("span");
  if (!changingSpan) return;
  const spanAttr =
    changingSpan.dataset.arr.split(",");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Time in seconds for the counter;
  const spanCounterTime = 2;
  let spanCounter = -1;
  let interval = null;

  setInterval(function () {
    let iteration = 0;
    clearInterval(interval);
    spanCounter >= spanAttr.length - 1
      ? (spanCounter = 0)
      : spanCounter++;

    interval = setInterval(() => {
      changingSpan.innerText = spanAttr[
        spanCounter
      ]
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            // console.log(spanAttr[spanCounter][index]);
            return spanAttr[spanCounter][index];
            // return event.target.dataset.value[index];
          }

          return letters[
            Math.floor(Math.random() * 26)
          ];
        })
        .join("");

      if (
        iteration >= spanAttr[spanCounter].length
      ) {
        clearInterval(interval);
      }
      // console.log(data);

      iteration += 1 / 3;
    }, 30);
  }, 1000 * spanCounterTime);
};
characterChanger();
export default characterChanger;

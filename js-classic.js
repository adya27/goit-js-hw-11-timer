const targetDate = new Date("Jan 27, 2021");
const id = "id-1";
const bodyItem = document.querySelector("body");
console.log("bodyItem", bodyItem);

function getTime(date) {
  const time = date - Date.now();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  bodyItem.innerHTML = `<div class="timer" id="${id}">
          <div class="field">
            <span class="value" data-value="days">
              ${days}
            </span>
            <span class="label">Days</span>
          </div>

          <div class="field">
            <span class="value" data-value="hours">
              ${hours}
            </span>
            <span class="label">Hours</span>
          </div>

          <div class="field">
            <span class="value" data-value="mins">
              ${mins}
            </span>
            <span class="label">Minutes</span>
          </div>

          <div class="field">
            <span class="value" data-value="secs">
              ${secs}
            </span>
            <span class="label">Seconds</span>
          </div>
        </div>`;

  // console.log(`days:${days} hours:${hours} mins:${mins} secs:${secs}`);
}

setInterval(() => getTime(targetDate), 1000);
function pad(value) {
  return String(value).padStart(2, "0");
}

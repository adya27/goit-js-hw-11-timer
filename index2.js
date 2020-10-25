const refs = {
  body: document.querySelector("body"),
};

class CountdownTimer {
  consructor({ selector, targetDate }) {
    this.id = selector;
    this.date = targetDate;
    this.init();
  }
  // console.log("CountdownTimer -> consructor -> this.date", this.date);

  init() {
    setInterval(() => {
      this.time = Date.now() - this.date;
      this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
      this.secs = Math.floor((this.time % (1000 * 60)) / 1000);
    }, 1000);
  }
}

function createMarkur({ id, days, hours, mins, secs }) {
  refs.body.insertAdjacentHTML(
    "beforeend",
    `<div class="timer" id="${id}">
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
        </div>`
  );
}

let ii = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});

console.log(ii);
// console.log(new Date("Jul 17, 2021"));
let obh = {
  id: "10",
  days: 10,
  hours: 20,
  mins: 20,
  secs: 10,
};

createMarkur({
  id: "10",
  days: 20,
  hours: 20,
  mins: 20,
  secs: 10,
});

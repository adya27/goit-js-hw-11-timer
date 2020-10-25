const refs = {
  body: document.querySelector("body"),
};

class CountdownTimer {
  consructor({ selector, targetDate }) {
    this.id = selector;
    this.date = targetDate;
    console.log("CountdownTimer -> consructor -> this.date", this.date);

    setInterval(() => {
      this.time = Date.now() - this.date;
      this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
      this.secs = Math.floor((this.time % (1000 * 60)) / 1000);

      let string = `<div class="timer" id="${this.id}">
          <div class="field">
            <span class="value" data-value="days">
              "${this.days}"
            </span>
            <span class="label">Days</span>
          </div>

          <div class="field">
            <span class="value" data-value="hours">
              ${this.hours}
            </span>
            <span class="label">Hours</span>
          </div>

          <div class="field">
            <span class="value" data-value="mins">
              ${this.mins}
            </span>
            <span class="label">Minutes</span>
          </div>

          <div class="field">
            <span class="value" data-value="secs">
              ${this.secs}
            </span>
            <span class="label">Seconds</span>
          </div>
        </div>`;

      refs.body.insertAdjacentHTML("beforeend", string);
    }, 1000);
  }
}

let ii = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});

console.log(ii);

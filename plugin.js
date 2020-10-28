class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.targetDate = targetDate;
    this.id = selector;
    this.idName = selector.slice(1);
    this.bodyItem = document.querySelector("body");

    this.init();
  }
  init() {
    const timeComponents = this.getTime(this.targetDate);

    this.makesMarkup(timeComponents);
    this._refs = this.makesRefs(this.id);
    setInterval(() => this.insertDate(this.targetDate), 1000);
  }

  makesRefs(root) {
    const refs = {};
    refs.daysItem = document.querySelector(`${root} [data-value="days"]`);
    refs.hoursItem = document.querySelector(`${root} [data-value="hours"]`);
    refs.minsItem = document.querySelector(`${root} [data-value="mins"]`);
    refs.secsItem = document.querySelector(`${root} [data-value="secs"]`);

    return refs;
  }

  makesMarkup({ days, hours, mins, secs }) {
    this.bodyItem.insertAdjacentHTML(
      "beforeend",
      `<div class="timer" id=${this.idName}>
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

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTime(date) {
    const time = date - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  insertDate(date) {
    const currentTime = this.getTime(date);

    this._refs.daysItem.textContent = currentTime.days;
    this._refs.hoursItem.textContent = currentTime.hours;
    this._refs.minsItem.textContent = currentTime.mins;
    this._refs.secsItem.textContent = currentTime.secs;
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2021"),
});

new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jan 27, 2021"),
});

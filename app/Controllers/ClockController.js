import { setText } from "../Utils/Writer.js";


function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let session = "AM";
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }
  hour = (hour < 10) ? hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  let time = hour + ":" + minute + ' ' + session;
  setText('clock', time)
  setTimeout(function () { currentTime() }, 1000);
}
export class ClockController {
  constructor() {
    currentTime()
  }
}
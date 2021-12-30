import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    setTimeout(() => {
      const divEmojis = document.getElementById('emojis');
      divEmojis.textContent = '';
      const setParagraph = document.createElement('paragraph');
      setParagraph.textContent = this.emojis;
      divEmojis.appendChild(setParagraph);
    })
  }

  addBananas() {
    this.emojis = this.emojis.map((monkey => monkey + this.banana));
  }

}

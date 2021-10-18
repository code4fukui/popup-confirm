import { create } from "https://js.sabae.cc/stdcomp.js";

class PopupConfirm extends HTMLElement {
  constructor(s, callback, opts) { // opts.opposite -> キャンセル OK
    super();
    const txt = s || this.innerHTML;
    this.innerHTML = "";
    const c = create("div", this, "base");
    create("div", c, "message").textContent = txt;
    const btns = create("div", c, "btns");
    const btn = create("button");
    btn.textContent = "OK";
    const btnno = create("button");
    btnno.textContent = "キャンセル";
    if (opts?.opposite) {
      btns.appendChild(btnno);
      btns.appendChild(btn);
    } else {
      btns.appendChild(btn);
      btns.appendChild(btnno);
    }
    const close = (b) => {
      this.parentElement.removeChild(this);
      callback(b);
      window.removeEventListener("keydown", listener);
    };
    btn.onclick = () => close(true);
    btnno.onclick = () => close(false);
    this.onclick = (e) => {
      if (e.target == this) {
        close(false);
      }
    }
    const listener = (e) => {
      if (e.key == "Enter") {
        close(true);
      } else if (e.key == "Escape") {
        close(false);
      }
      e.preventDefault();
    };
    window.addEventListener("keydown", listener);
  }
  static show(s, opposite = false) {
    return new Promise((resolve) => {
      document.body.appendChild(new PopupConfirm(s, resolve, { opposite }));
    });
  }
}

customElements.define("popup-confirm", PopupConfirm);

export { PopupConfirm };

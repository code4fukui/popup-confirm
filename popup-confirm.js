import { create } from "https://js.sabae.cc/stdcomp.js";

class PopupConfirm extends HTMLElement {
  constructor(s, callback, opts) { // opts.opposite -> キャンセル OK、opts.focusCancel -> キャンセルにフォーカス
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
        const res = btn.classList.contains("focus");
        close(res);
      } else if (e.key == "Escape") {
        close(false);
      } else if (e.key == "Tab") {
        btn.classList.toggle("focus");
        btnno.classList.toggle("focus");
      }
      e.preventDefault();
    };
    window.addEventListener("keydown", listener);
    if (opts.focusCancel) {
      btnno.classList.add("focus");
    } else {
      btn.classList.add("focus");
    }
  }
  static show(s, opt = false) {
    if (typeof opt == "boolean") {
      opt = { opposite: opt };
    }
    return new Promise((resolve) => {
      document.body.appendChild(new PopupConfirm(s, resolve, opt));
    });
  }
}

customElements.define("popup-confirm", PopupConfirm);

export { PopupConfirm };

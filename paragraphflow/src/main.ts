import "./style.css";

const wrap = document.querySelector(".text_wrap")!;

const textSpliter = (texts: HTMLElement) => {
  const splitSpan = (t: string) => {
    const _t = "<span>" + t.trim().split("").join("</span><span>") + "</span>";
    return _t;
  };

  const textSplits = (text: HTMLElement, fs = 15, lh = 1.5) => {
    const textp = text.querySelectorAll("p");
    let index = textp.length;
    const tr = text.getBoundingClientRect();
    const splits: HTMLElement[] = [];

    textp.forEach((t, i) => {
      const r = t.getBoundingClientRect();
      // console.log(r.left, t);
      if (r.left + r.width > tr.left && r.left < tr.left) {
        index = i;
        const h = fs * lh;
        const diff = r.left + r.width - tr.left;
        const l = Math.floor(diff / h);

        t.innerHTML = splitSpan(t.textContent!);

        const spans = t.querySelectorAll("span");
        let count = 0;
        let max = 0;
        let spanst = "";
        let prev = "";
        spans.forEach((s) => {
          const b = s.getBoundingClientRect();

          if (max != b.left && count <= l) {
            max = b.left;
            ++count;
          }

          if (count > l) {
            spanst += s.textContent;

            s.remove();
          } else {
            prev += s.textContent;
          }
        });
        t.textContent = prev;
        if (spanst !== "") {
          const p = document.createElement("p");
          p.classList.add(...Array.from(t.classList));
          p.textContent = spanst;
          if (prev !== "") p.classList.add("no-indent");

          splits.push(p);
        }
      } else if (index > i && r.left < tr.left) {
        index = i;
        splits.push(t);
      }

      if (index < i) {
        splits.push(t);
        t.remove();
      }
    });

    if (splits.length === 0) return null;

    const dom = document.createElement("div");
    dom.classList.add("text");

    splits.forEach((t) => {
      dom.appendChild(t);
    });

    wrap.appendChild(dom);

    return dom;
  };

  const r = (text: HTMLElement) => {
    const dom = textSplits(text);
    if (dom) r(dom);
    else console.log("done");
  };

  r(texts);
};

const init = () => {
  const t = document.querySelector(".text")!;
  // textSpliter(t);
  let prevWidth = 0;
  let timer = 0;
  const onResize = () => {
    wrap.innerHTML = "";
    const change = t.cloneNode(true) as HTMLElement;
    wrap.appendChild(change);

    textSpliter(change);
  };

  onResize();

  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (window.innerWidth !== prevWidth) {
        prevWidth = window.innerWidth;
        onResize();
      }
    }, 100);
  });
};

init();

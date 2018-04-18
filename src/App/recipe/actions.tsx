interface IActionA {
  type: "a";
  a: string;
}

interface IActionB {
  type: "b";
  b: string;
}

type Action = IActionA | IActionB;

function reducer(action: Action) {
  switch (action.type) {
    case "a":
      return window.console.info("action a: ", action.a);
    case "b":
      return window.console.info("action b: ", action.b);
  }
}

var global_data = [];
var loaded = false;
function hide_loader() {
  var _0x489f3e = function () {
    var _0x2fc399 = true;
    return function (_0x29ff91, _0x4da646) {
      var _0x4b525a = _0x2fc399 ? function () {
        if (_0x4da646) {
          var _0x4faa8f = _0x4da646.apply(_0x29ff91, arguments);
          _0x4da646 = null;
          return _0x4faa8f;
        }
      } : function () {};
      _0x2fc399 = false;
      return _0x4b525a;
    };
  }();
  var _0x12c806 = _0x489f3e(this, function () {
    return _0x12c806.toString().search("(((.+)+)+)+$").toString().constructor(_0x12c806).search("(((.+)+)+)+$");
  });
  _0x12c806();
  var _0x2a65d2 = function () {
    var _0x3107a2 = true;
    return function (_0x59dee7, _0x2cc508) {
      var _0x272bbd = _0x3107a2 ? function () {
        if (_0x2cc508) {
          var _0x35709d = _0x2cc508.apply(_0x59dee7, arguments);
          _0x2cc508 = null;
          return _0x35709d;
        }
      } : function () {};
      _0x3107a2 = false;
      return _0x272bbd;
    };
  }();
  (function () {
    _0x2a65d2(this, function () {
      var _0x3c2555 = new RegExp("function *\\( *\\)");
      var _0x7b604e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      var _0x2c74ea = _0x144042("init");
      if (!_0x3c2555.test(_0x2c74ea + "chain") || !_0x7b604e.test(_0x2c74ea + "input")) {
        _0x2c74ea("0");
      } else {
        _0x144042();
      }
    })();
  })();
  var _0x2203b9 = function () {
    var _0xac4911 = true;
    return function (_0x347476, _0x2a2e60) {
      var _0x58e2f2 = _0xac4911 ? function () {
        if (_0x2a2e60) {
          var _0x556fc6 = _0x2a2e60.apply(_0x347476, arguments);
          _0x2a2e60 = null;
          return _0x556fc6;
        }
      } : function () {};
      _0xac4911 = false;
      return _0x58e2f2;
    };
  }();
  var _0x12440b = _0x2203b9(this, function () {
    var _0x42e7e2;
    try {
      var _0x45c94a = Function("return (function() {}.constructor(\"return this\")( ));");
      _0x42e7e2 = _0x45c94a();
    } catch (_0x1eaf7c) {
      _0x42e7e2 = window;
    }
    var _0x15a8a8 = _0x42e7e2.console = _0x42e7e2.console || {};
    var _0x302043 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (var _0xc83238 = 0; _0xc83238 < _0x302043.length; _0xc83238++) {
      var _0xe78eea = _0x2203b9.constructor.prototype.bind(_0x2203b9);
      var _0x184321 = _0x302043[_0xc83238];
      var _0x344bc6 = _0x15a8a8[_0x184321] || _0xe78eea;
      _0xe78eea.__proto__ = _0x2203b9.bind(_0x2203b9);
      _0xe78eea.toString = _0x344bc6.toString.bind(_0x344bc6);
      _0x15a8a8[_0x184321] = _0xe78eea;
    }
  });
  _0x12440b();
  var _0x5d6ff7 = setInterval(function () {
    if (loaded) {
      clearInterval(_0x5d6ff7);
      document.body.classList.remove("overflow-hidden");
      document.getElementById("loader").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
      }, 700);
    }
  }, 500);
}
function show_loader() {
  document.body.classList.add("overflow-hidden");
  document.getElementById("loader").style.display = "flex";
  document.getElementById("loader").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "1";
  }, 700);
  setTimeout(() => {
    hide_loader();
  }, 1400);
  setTimeout(() => {
    hide_form();
  }, 1e3);
}
function submit() {
  var _0x5a95de = document.getElementById("name").value;
  var _0x21a612 = document.getElementById("website").value;
  var _0xf5d0e3 = document.getElementById("image").value;
  var _0x9d37b = document.getElementById("description").value;
  if (_0x5a95de && _0x21a612 && _0x9d37b) {
    document.getElementById("name").value = "";
    document.getElementById("website").value = "";
    document.getElementById("image").value = "";
    document.getElementById("description").value = "";
    show_loader();
    fetch("https://docs.google.com/forms/d/e/1J1K5s7A22q4IA_jkKLAfiBPTIrbDhfyQbAyrSpiiDSY/formResponse?entry.586184519=" + _0x5a95de + "&entry.1969343617=" + _0x21a612 + "&entry.1953334112=" + _0xf5d0e3 + "&entry.282016152=" + _0x9d37b);
  }
}
function show_form() {
  var _0x41c93b = document.getElementsByClassName("front");
  for (i = 0; i < _0x41c93b.length; i++) {
    _0x41c93b[i].classList.add("hidden");
  }
  document.getElementById("form").classList.remove("hidden");
}
(function () {
  var _0x43a8a8 = function () {
    var _0x8b604d;
    try {
      _0x8b604d = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x31fc31) {
      _0x8b604d = window;
    }
    return _0x8b604d;
  };
  var _0x37ea47 = _0x43a8a8();
  _0x37ea47.setInterval(_0x144042, 4e3);
})();
function hide_form() {
  document.getElementById("form").classList.add("hidden");
  var _0x497a1b = document.getElementsByClassName("front");
  for (i = 0; i < _0x497a1b.length; i++) {
    _0x497a1b[i].classList.remove("hidden");
  }
}
function filter(_0x22c731) {
  const _0xd2ccc9 = document.getElementsByClassName("opts");
  for (i = 1; i < _0xd2ccc9.length; i++) {
    _0xd2ccc9[i].classList.remove("bg-[#cfcfcf]", "text-black");
    _0xd2ccc9[i].classList.add("bg-transparent", "text-[#787878]");
  }
  _0x22c731 = _0x22c731.toLowerCase();
  document.getElementById("cards").innerHTML = "";
  var _0x37ab21 = 0;
  for (i = global_data.length - 1; i >= 0; i--) {
    if (global_data[i].Name.toLowerCase().includes(_0x22c731) || global_data[i].Description.toLowerCase().includes(_0x22c731)) {
      add_card(global_data[i].Name, global_data[i].Description, global_data[i].Category, global_data[i].Thumb, global_data[i].URL);
      _0x37ab21 += 1;
    }
  }
  if (_0x37ab21 == 0) {
    var _0x51a920 = document.createElement("span");
    _0x51a920.classList.add("text-[#9a9a9a]", "py-32");
    _0x51a920.innerHTML = "No Results Found";
    document.getElementById("cards").appendChild(_0x51a920);
  }
}
function add_card(_0x2e0aa6, _0x5770e8, _0x2c52cd, _0x18874c, _0x2a198d) {
  var _0x745c0e = document.createElement("a");
  _0x745c0e.classList.add("border-1", "w-72", "py-4", "px-4", "rounded-lg", "card-hover", "duration-300", "translate-y-16", "opacity-0", "flex", "flex-col", "justify-between");
  var _0x2f9969 = document.createElement("img");
  _0x2f9969.src = window.location.pathname + _0x18874c;
  _0x2f9969.classList.add("rounded-lg");
  _0x745c0e.appendChild(_0x2f9969);
  var _0x59f8dd = document.createElement("span");
  _0x59f8dd.innerHTML = _0x2e0aa6;
  _0x59f8dd.classList.add("montserrat", "text-[#cfcfcf]", "font-bold", "text-xl", "flex", "justify-center", "mt-4");
  _0x745c0e.appendChild(_0x59f8dd);
  var _0x58ebc6 = document.createElement("p");
  _0x58ebc6.innerHTML = _0x5770e8;
  _0x58ebc6.classList.add("text-[#454545]", "mt-1", "mb-4", "text-center", "inter", "font-medium", "text-sm");
  _0x745c0e.appendChild(_0x58ebc6);
  var _0x531e28 = document.createElement("div");
  _0x531e28.classList.add("flex", "justify-end", "gap-2");
  var _0x59f8dd = document.createElement("span");
  _0x59f8dd.innerHTML = _0x2c52cd;
  _0x59f8dd.classList.add("text-[#9a9a9a]", "border-1", "px-4", "py-1", "rounded-md", "text-xs", "inter");
  _0x531e28.appendChild(_0x59f8dd);
  _0x745c0e.appendChild(_0x531e28);
  _0x745c0e.href = _0x2a198d;
  _0x745c0e.target = "_blank";
  document.getElementById("cards").appendChild(_0x745c0e);
  setTimeout(() => {
    _0x745c0e.classList.remove("translate-y-16", "opacity-0");
  }, 100);
}
function change(_0x47a5e6) {
  document.getElementById("search").value = "";
  const _0x4b2ad4 = document.getElementsByClassName("opts");
  for (i = 0; i < _0x4b2ad4.length; i++) {
    if (_0x47a5e6 === _0x4b2ad4[i].innerHTML) {
      _0x4b2ad4[i].classList.remove("bg-[#cfcfcf]", "text-black");
      _0x4b2ad4[i].classList.remove("bg-transparent", "text-[#787878]");
      _0x4b2ad4[i].classList.add("bg-[#cfcfcf]", "text-black");
    } else {
      _0x4b2ad4[i].classList.remove("bg-[#cfcfcf]", "text-black");
      _0x4b2ad4[i].classList.add("bg-transparent", "text-[#787878]");
    }
  }
  document.getElementById("cards").innerHTML = "";
  if (_0x47a5e6.split(" ")[0] === "All") {
    for (i = global_data.length - 1; i >= 0; i--) {
      add_card(global_data[i].Name, global_data[i].Description, global_data[i].Category, global_data[i].Thumb, global_data[i].URL);
    }
  } else {
    for (i = global_data.length - 1; i >= 0; i--) {
      if (_0x47a5e6.split(" ")[0] === global_data[i].Category) {
        add_card(global_data[i].Name, global_data[i].Description, global_data[i].Category, global_data[i].Thumb, global_data[i].URL);
      }
    }
  }
}
window.onload = async function load_all() {
  const _0x2257bf = await fetch(window.location.pathname + "data.json");
  const _0x1ebd52 = await _0x2257bf.json();
  global_data = _0x1ebd52;
  const _0x3dae59 = document.getElementById("category");
  var _0x1dff75 = [];
  _0x1ebd52.forEach(_0x54b8ee => {
    if (!_0x1dff75.includes(_0x54b8ee.Category)) {
      _0x1dff75.push(_0x54b8ee.Category);
    }
  });
  for (i = 0; i < _0x1dff75.length; i++) {
    var _0x3877a4 = document.createElement("span");
    _0x3877a4.innerHTML = _0x1dff75[i];
    _0x3877a4.onclick = function () {
      change(this.innerHTML);
    };
    _0x3877a4.classList.add("opts", "bg-transparent", "border-1", "cursor-pointer", "text-[#787878]", "duration-300", "text-sm", "inter", "px-2", "py-1", "rounded");
    _0x3dae59.appendChild(_0x3877a4);
  }
  const _0x5c863f = document.getElementsByClassName("opts");
  var _0x1dff75 = [];
  _0x1ebd52.forEach(_0x5baea6 => {
    _0x1dff75.push(_0x5baea6.Category);
  });
  for (i = 0; i < _0x5c863f.length; i++) {
    var _0x14c702 = _0x5c863f[i].innerHTML;
    var _0x5f4ff2 = 0;
    for (j = 0; j < _0x1dff75.length; j++) {
      if (_0x14c702 === _0x1dff75[j]) {
        _0x5f4ff2 += 1;
      }
    }
    _0x5c863f[i].innerHTML = _0x5c863f[i].innerHTML + " (" + _0x5f4ff2 + ")";
  }
  _0x5c863f[0].innerHTML = "All (" + _0x1dff75.length + ")";
  for (i = _0x1ebd52.length - 1; i >= 0; i--) {
    add_card(_0x1ebd52[i].Name, _0x1ebd52[i].Description, _0x1ebd52[i].Category, _0x1ebd52[i].Thumb, _0x1ebd52[i].URL);
  }
  setTimeout(() => {
    loaded = true;
  }, 700);
};
document.fonts.ready.then(() => hide_loader());
function _0x144042(_0x4c85f4) {
  function _0x1eac38(_0x514cf8) {
    if (typeof _0x514cf8 === "string") {
      return function (_0x3bf868) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (("" + _0x514cf8 / _0x514cf8).length !== 1 || _0x514cf8 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x1eac38(++_0x514cf8);
  }
  try {
    if (_0x4c85f4) {
      return _0x1eac38;
    } else {
      _0x1eac38(0);
    }
  } catch (_0x551e80) {}
}

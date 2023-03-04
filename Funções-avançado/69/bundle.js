"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// A função DECLARADA com a palavra Function tem uma variavel propria
// essa variavel "arguments" armazena todos os parametros, mesmo que eles não sejam requeridos. Como no caso do exemplo abaixo.
function funcao() {
  var total = 0;
  var _iterator = _createForOfIteratorHelper(arguments),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      argumento = _step.value;
      total += argumento;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 4);
var conta = function conta(operador, acumulador) {
  for (var _len = arguments.length, numeros = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    numeros[_key - 2] = arguments[_key];
  }
  //vai receber um operador um acumlador e todo o resto sera numeros. O REST SEMPRE DEVERA SER O ULTIMO

  for (var _i = 0, _numeros = numeros; _i < _numeros.length; _i++) {
    var numero = _numeros[_i];
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}; // é obrigatorio o ponto e virgula caso a função seja declarada em uma variavel
conta("*", 1, 20, 32, 453, 54);

import React, { useState } from 'react';
import './App.css';

function App() {
  const [expr, setExpr] = useState('');

  function add(char) {
    // Prevent two operators/dots in a row
    if (/[-+*/.]$/.test(expr) && /[-+*/.]/.test(char)) return;
    setExpr((s) => (s === '0' ? String(char) : s + char));
  }

  function clearAll() {
    setExpr('');
  }

  function backspace() {
    setExpr((s) => s.slice(0, -1));
  }

  function evaluate() {
    try {
      // Allow only digits, operators, parentheses and dot
      const safe = expr.replace(/[^0-9+\-*/(). ]/g, '');
      // eslint-disable-next-line no-new-func
      const res = Function(`"use strict"; return (${safe || '0'})`)();
      setExpr(String(res));
    } catch (e) {
      setExpr('Erro');
      setTimeout(() => setExpr(''), 900);
    }
  }

  return (
    <div className="app-root">
      <div className="calculator">
        <div className="display" data-testid="display">{expr || '0'}</div>
        <div className="buttons">
          <button className="clear" onClick={clearAll}>C</button>
          <button onClick={() => add('(')}>(</button>
          <button onClick={() => add(')')}>)</button>
          <button className="op" onClick={() => add('/')}>/</button>

          <button onClick={() => add('7')}>7</button>
          <button onClick={() => add('8')}>8</button>
          <button onClick={() => add('9')}>9</button>
          <button className="op" onClick={() => add('*')}>*</button>

          <button onClick={() => add('4')}>4</button>
          <button onClick={() => add('5')}>5</button>
          <button onClick={() => add('6')}>6</button>
          <button className="op" onClick={() => add('-')}>-</button>

          <button onClick={() => add('1')}>1</button>
          <button onClick={() => add('2')}>2</button>
          <button onClick={() => add('3')}>3</button>
          <button className="op" onClick={() => add('+')}>+</button>

          <button onClick={() => add('0')}>0</button>
          <button onClick={() => add('.')}>.</button>
          <button className="equal" onClick={evaluate}>=</button>
          <button onClick={backspace}>⌫</button>
        </div>
      </div>
    </div>
  );
}

export default App;

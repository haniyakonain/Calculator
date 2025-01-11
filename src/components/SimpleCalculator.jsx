import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const SimpleCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateResult = () => {
    if (!num1 || !num2) {
      setError('Please enter both numbers');
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let calculatedResult;

    switch (operator) {
      case '+':
        calculatedResult = number1 + number2;
        break;
      case '-':
        calculatedResult = number1 - number2;
        break;
      case '*':
        calculatedResult = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          setError('Cannot divide by zero');
          return;
        }
        calculatedResult = number1 / number2;
        break;
      default:
        setError('Invalid operator');
        return;
    }

    setResult(calculatedResult);
    setError('');
  };

  const clearCalculator = () => {
    setNum1('');
    setNum2('');
    setOperator('+');
    setResult(null);
    setError('');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4 md:p-0">
      <div className="w-full md:w-96 bg-white rounded-2xl shadow-lg overflow-hidden border border-white-100">
        {/* Header Section */}
        <div className="p-4 md:p-6 bg-gradient-to-r from-blue-500 to-purple-500">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
            <Calculator className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
            Calculator
          </h2>
        </div>

        {/* Main Content */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white-700 mb-2">
                First Number
              </label>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-white-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-white-800 placeholder-white-400"
                placeholder="Enter first number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white-700 mb-2">
                Second Number
              </label>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-white-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-white-800 placeholder-white-400"
                placeholder="Enter second number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white-700 mb-2">
                Operation
              </label>
              <select
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-white-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-white-800 bg-white"
              >
                <option value="+">Addition (+)</option>
                <option value="-">Subtraction (-)</option>
                <option value="*">Multiplication (×)</option>
                <option value="/">Division (÷)</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={calculateResult}
              className="py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-sm"
            >
              Calculate
            </button>
            <button
              onClick={clearCalculator}
              className="py-3 px-4 bg-white-100 text-white-700 rounded-lg font-semibold hover:bg-white-200 transition-all duration-200"
            >
              Clear
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Result Display */}
          {result !== null && (
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white-800">
                  {result}
                </span>
                <span className="text-sm text-white-600">
                  {num1} {operator} {num2} = {result}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculator;

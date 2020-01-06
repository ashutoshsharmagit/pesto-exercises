function booleanExpressionEvaluator(str) {
    return Function(`'use strict'; return (${str})`)()
  }
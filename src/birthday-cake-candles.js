function birthdayCakeCandles(candles) {
  const tallest = Math.max(...candles);
  return candles.filter((candle) => candle === tallest).length;
}

console.log(birthdayCakeCandles([3, 2, 1, 3])); // 2

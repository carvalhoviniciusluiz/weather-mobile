function useTemperatureCalc(temp: string, unit: 'f' | 'c' = 'c', toFixed = 0) {
  if (unit.toLowerCase() === 'f') {
    return ((Number(temp) * 9) / 5 + 32).toFixed(toFixed) + ' ' + unit.toUpperCase();
  }
  return parseFloat(temp).toFixed(toFixed) + ' ' + unit.toUpperCase();
}

export default useTemperatureCalc;

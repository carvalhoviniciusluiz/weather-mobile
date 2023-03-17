import { Text } from "react-native";
import useTemperatureCalc from "../../../hooks/use-temperature-calc";

type TemperatureProps = {
  temperature: string;
}

function Temperature({ temperature }: TemperatureProps) {
  const output = useTemperatureCalc(temperature);
  return <Text>{output}°</Text>;
}

export default Temperature;

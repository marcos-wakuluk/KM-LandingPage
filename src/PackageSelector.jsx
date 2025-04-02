import { useState } from "react";
import PropTypes from "prop-types";
import { Radio, Group, Stack, Text } from "@mantine/core";
import classes from "./PackageSelector.module.css";
import { PlansPrices } from "./utils/Constants";

const data = [
  { name: `3 Meses $${PlansPrices.aumentoMasa[3]}`, value: "3" },
  { name: `6 Meses $${PlansPrices.aumentoMasa[6]}`, value: "6", description: "Ahorras un 8.51%" },
];

const PackageSelector = ({ onSelect }) => {
  const [value, setValue] = useState("");

  const handleValueChange = (newValue) => {
    setValue(newValue);
    onSelect(newValue);
  };

  const cards = data.map((item) => (
    <Radio.Card
      className={`${classes.root} ${!item.selected ? "border-2 border-gray-300" : "border-2 border-gray-300"}`}
      radius="md"
      value={item.value}
      key={item.value}
    >
      <Group align="center" className="p-2">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <Radio.Group value={value} onChange={handleValueChange} label="Selecciona la cantidad de meses" className="mt-5">
      <Stack pt="md" gap="xs">
        {cards}
      </Stack>
    </Radio.Group>
  );
};
PackageSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default PackageSelector;

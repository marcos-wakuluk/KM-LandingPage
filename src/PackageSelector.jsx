import { useState } from "react";
import { Radio, Group, Stack, Text } from "@mantine/core";
import classes from "./PackageSelector.module.css";

const data = [
  { name: "1 Mes", value: "1", description: "Ahorras un 25%." },
  { name: "3 Meses", value: "3", description: "Ahorras un 25%" },
  { name: "6 Meses", value: "6", description: "Ahorras un 25%" },
];

const PackageSelector = ({ onSelect }) => {
  const [value, setValue] = useState(data[0].value);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    onSelect(newValue);
  };

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} radius="md" value={item.value} key={item.value}>
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
    <>
      <Radio.Group value={value} onChange={handleValueChange} label="Selecciona la cantidad de meses">
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Radio.Group>
    </>
  );
};

export default PackageSelector;

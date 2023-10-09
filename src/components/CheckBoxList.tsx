import { Checkbox, CheckboxGroup, Grid } from "@chakra-ui/react";

interface Props {
  checkedValues: string[];
  onChange: (values: string[]) => void;
}

const CheckBoxList = ({ checkedValues, onChange }: Props) => {
  const allergies = [
    "Dairy",
    "Egg",
    "Gluten",
    "Grain",
    "Peanut",
    "Seafood",
    "Sesame",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut",
    "Wheat",
  ];

  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={5}>
      <CheckboxGroup value={checkedValues} onChange={onChange}>
        {allergies.map((allergy) => (
          <Checkbox key={allergy} value={allergy}>
            {allergy}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Grid>
  );
};

export default CheckBoxList;

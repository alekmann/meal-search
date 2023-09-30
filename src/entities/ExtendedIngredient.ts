export default interface ExtendedIngredient {
  id: number;
  original: string;
  measures: {
    metric: {
      amount: number;
      unitShort: string;
    };
  };
}

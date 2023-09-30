import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { axiosInstance } from "./services/api-client";
import chickenParmesan from "./assets/chickenParmesan.jpg";
import spaghettiCarbonara from "./assets/spaghettiCarbonara.jpg";

const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

const mockExtendedIngredients = [
  {
    id: 101,
    original: "2 eggs",
    measures: {
      metric: {
        amount: 2,
        unitShort: "pcs",
      },
    },
  },
  {
    id: 102,
    original: "100g pancetta",
    measures: {
      metric: {
        amount: 100,
        unitShort: "g",
      },
    },
  },
  // ... more ingredients as required
];

// Mock for /recipes/complexSearch
mock.onGet("/recipes/complexSearch").reply(200, {
  results: [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: spaghettiCarbonara,
      imageType: "jpg",
    },
    {
      id: 2,
      title: "Chicken Parmesan",
      image: chickenParmesan,
      imageType: "jpg",
    },
  ],
});

mock.onGet(/\/recipes\/\d+\/information/).reply((config) => {
  const id = parseInt(config.url?.split("/")[2] || "0");

  // Find the recipe detail that matches the given id
  const recipeDetail = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: spaghettiCarbonara,
      instructions:
        "Do excepteur in laborum nostrud cupidatat aliquip quis magna. Ad laborum occaecat sunt labore labore tempor. Dolor occaecat ut do eu. Anim tempor ex veniam ad exercitation laborum enim. Officia in eu est deserunt voluptate velit do commodo ex sit deserunt aliquip minim exercitation.",
      readyInMinutes: 30,
      servings: 2,
      extendedIngredients: mockExtendedIngredients,
    },
    {
      id: 2,
      title: "Chicken Parmesan",
      image: chickenParmesan,
      instructions: "",
      readyInMinutes: 40,
      servings: 4,
      extendedIngredients: [mockExtendedIngredients[0]],
    },
  ].find((recipe) => recipe.id === id);

  return recipeDetail ? [200, recipeDetail] : [404];
});

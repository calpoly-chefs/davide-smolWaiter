import React from "react";

export default function Recipes() {
  let recipes = [
    {
      id: 1,
      title: "Chocolate Chip Caramel Cookie Bars",
      source: "manual",
      rating: 4,
      difficulty: 5,
      time: 45,
      prepTime: 25,
      diffTime: 22,
      ingredients: [
        {
          id: 3,
          quantity: 1,
          units: "cup (2 sticks, 8 ounces)",
          ingredient: "butter, softened",
          recipe: 1,
          annotations: [
            { date: "May 4, 2019", text: "best anno" },
            { date: "Feb 1, 2019", text: "something else" }
          ]
        },
        {
          id: 9,
          quantity: 1,
          units: "cup (7.5 ounces)",
          ingredient: "light brown sugar",
          recipe: 1,
          annotations: []
        },
        {
          id: 14,
          quantity: 1.5,
          units: "cups (7.5 ounces)",
          ingredient: "all-purpose flour",
          recipe: 1,
          annotations: []
        },
        {
          id: 15,
          quantity: 1.5,
          units: "cups (5.25 ounces)",
          ingredient: "old-fashioned oats",
          recipe: 1,
          annotations: []
        },
        {
          id: 16,
          quantity: 1 / 2,
          units: "tablespoon",
          ingredient: "salt",
          recipe: 1,
          annotations: []
        },
        {
          id: 17,
          quantity: 1,
          units: "teaspoon",
          ingredient: "baking soda",
          recipe: 1,
          annotations: []
        },
        {
          id: 18,
          quantity: 1,
          units: "cup",
          ingredient: "caramel sauce",
          recipe: 1,
          annotations: []
        },
        {
          id: 19,
          quantity: 1,
          units: "cup (6 ounces)",
          ingredient: "semisweet, bittersweet chocolate chips",
          recipe: 1,
          annotations: []
        }
      ],
      steps: [
        {
          id: 6,
          stepNum: 1,
          step:
            "Preheat the oven to 350 degrees F. Line a 9X13-inch aluminum baking pan with foil (helps with cleanup) and lightly grease with cooking spray.",
          recipe: 1,
          annotations: []
        },
        {
          id: 7,
          stepNum: 2,
          step:
            "In a large bowl with an electric handheld mixer or in the bowl of an electric stand mixer fitted with the paddle attachment, mix together the softened butter and brown sugar until well-mixed. Add the flour, oats, salt and baking soda and mix until combined.",
          recipe: 1,
          annotations: []
        },
        {
          id: 8,
          stepNum: 3,
          step:
            "Press about 2/3 of the mixture into the bottom of the prepared pan. Bake for 10-11 minutes until lightly golden and puffy.",
          recipe: 1,
          annotations: []
        },
        {
          id: 20,
          stepNum: 4,
          step:
            "Pour the caramel sauce evenly over the top. Sprinkle the chocolate chips over the caramel. Finish by crumbling the remaining cookie mixture on top.",
          recipe: 1,
          annotations: []
        },
        {
          id: 21,
          stepNum: 5,
          step:
            "Bake for another 12-13 minutes until the edges are golden and the caramel is bubbling.",
          recipe: 1,
          annotations: []
        },
        {
          id: 21,
          stepNum: 6,
          step:
            "Remove from the oven and let cool completely in the pan before cutting into squares.",
          recipe: 1,
          annotations: []
        }
      ],
      public: true
    },
    {
      id: 4,
      title: "Chicken",
      source: "manual",
      rating: 0,
      difficulty: 5,
      time: 45,
      ingredients: [
        {
          id: 5,
          quantity: 3,
          units: "cups",
          ingredient: "third test",
          recipe: 4,
          annotations: []
        }
      ],
      public: false
    },
    {
      id: 5,
      title: "French Macarons with White Chocolate Ganache",
      source: "manual",
      rating: 0,
      difficulty: 5,
      time: 100,
      ingredients: [
        {
          id: 9,
          quantity: 150,
          units: "grams",
          ingredient: "powdered sugar",
          recipe: 5,
          annotations: []
        },
        {
          id: 10,
          quantity: 150,
          units: "grams",
          ingredient: "almond meal",
          recipe: 5,
          annotations: []
        },
        {
          id: 11,
          quantity: 110,
          units: "grams",
          ingredient: "egg whites",
          recipe: 5,
          annotations: []
        },
        {
          id: 12,
          quantity: 40,
          units: "grams",
          ingredient: "filtered water",
          recipe: 5,
          annotations: []
        },
        {
          id: 13,
          quantity: 150,
          units: "grams",
          ingredient: "granulated sugar",
          recipe: 5,
          annotations: []
        }
      ],
      public: false
    }
  ];
  return recipes;
}

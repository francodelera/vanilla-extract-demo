import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "src/sprinkles.css";

export const button = recipe({
  base: {
    borderRadius: "unset",
  },

  variants: {
    backgroundColor: {
      neutral: sprinkles({ backgroundColor: "slateWhite" }),
      brand: sprinkles({ backgroundColor: "blue" }),
      accent: sprinkles({ backgroundColor: "pink" }),
    },
    size: {
      small: sprinkles({ padding: "small" }),
      medium: sprinkles({ padding: "medium" }),
      large: sprinkles({ padding: "large" }),
    },
    rounded: {
      true: { borderRadius: 999 },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        backgroundColor: "neutral",
        size: "large",
      },
      style: {
        backgroundColor: "orange",
      },
    },
  ],

  defaultVariants: {
    backgroundColor: "accent",
    size: "medium",
  },
});

// Get the type
export type ButtonVariants = RecipeVariants<typeof button>;

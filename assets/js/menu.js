/* ===== DATA: edit dishes here. "video" = link to your tutorial video ===== */
const DISHES = [
  {
    id: "banh-mi",
    name: "Banh Mi",
    hl: true,
    img: "assets/images/menu/banh-mi.png",
    min: 15,
    level: "Easy",
    taste: "Mild",
    energy: "Balanced",
    kcal: 320,
    pro: 15,
    starch: 45,
    bg: "#E6F4E8",
    col: ["#D9A25B", "#7BAE5A", "#E4572E"],
    dietTags: [],
    filters: [],
    ing: [
      "1 crusty baguette",
      "2 tbsp pâté or mayonnaise",
      "100 g roast pork, chicken or 1 fried egg",
      "Pickled carrot and daikon",
      "Cucumber slices",
      "Fresh cilantro",
      "Sliced chili (optional)",
      "1 tsp soy or Maggi sauce",
    ],
    steps: [
      "Warm the baguette in a 180°C oven or pan for 2 minutes until the crust crackles.",
      "Slice it lengthwise and spread pâté or mayonnaise on both sides.",
      "Layer the meat or egg, then pickles and cucumber.",
      "Add cilantro and chili, then drizzle the sauce.",
      "Close, press lightly and eat right away while the bread is warm.",
    ],
    tip: "Buy pickles ready-made or quick-pickle carrot and daikon with sugar, vinegar and salt the night before.",
    video: "how to make banh mi sandwich",
  },
  {
    id: "Creamy Rice Porridge",
    name: "Creamy Rice Porridge",
    img: "assets/images/menu/creamy rice porridge.png",
    min: 15,
    level: "Easy",
    taste: "Mild",
    energy: "Light",
    kcal: 280,
    pro: 12,
    starch: 45,
    bg: "#EDE4F5",
    col: ["#F2E7C9", "#E8D9A8", "#7BAE5A"],
    dietTags: ["Gentle"],
    filters: ["light"],
    ing: [
      "1 cup cooked rice",
      "2 cups chicken stock",
      "80 g cooked chicken, shredded",
      "3 slices ginger",
      "1 scallion, chopped",
      "Fried shallots",
      "1 tsp fish sauce",
      "Black pepper",
    ],
    steps: [
      "Bring the stock to a simmer with the ginger.",
      "Add the rice and cook 10 minutes, stirring, until thick and creamy.",
      "Stir in the chicken and fish sauce, then heat 2 minutes.",
      "Ladle into a bowl and top with scallion, shallots and pepper.",
    ],
    tip: "Use day-old rice for the creamiest texture. Add a splash of water if it gets too thick.",
    video: "how to make chicken rice porridge",
  },
  {
    id: "Fluffy Egg Omelette",
    name: "Fluffy Egg Omelette",
    min: 6,
    img: "assets/images/menu/fluffy-egg-omelette.png",
    level: "Easy",
    taste: "Mild",
    energy: "High Protein",
    kcal: 450,
    pro: 30,
    starch: 52,
    bg: "#FFE9CC",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: ["Vegetarian", "High protein"],
    filters: ["quick", "veg"],
    ing: [
      "3 eggs",
      "1 tbsp milk",
      "Pinch of salt",
      "1 tsp butter",
      "Half a tomato, diced",
      "Ketchup and fresh herbs",
    ],
    steps: [
      "Whisk the eggs with milk and salt until completely smooth.",
      "Melt the butter in a nonstick pan over medium-low heat.",
      "Pour in the eggs and stir gently for 20 seconds, then let them set.",
      "Add the tomato, fold the omelette in half and slide onto a plate.",
      "Top with ketchup and herbs.",
    ],
    tip: "Low heat is the secret. High heat makes it rubbery instead of fluffy.",
    video: "how to make fluffy omelette",
  },
  {
    id: "baozi",
    name: "Baozi",
    min: 60,
    img: "assets/images/menu/baozi.png",
    level: "Medium",
    taste: "Mild",
    energy: "Gentle",
    kcal: 300,
    pro: 10,
    starch: 40,
    bg: "#DDEBFA",
    col: ["#F3E3C3", "#D9A25B", "#E4572E"],
    dietTags: ["Gentle"],
    filters: [],
    ing: [
      "300 g flour",
      "1 tsp instant yeast",
      "1 tbsp sugar",
      "170 ml warm water",
      "200 g minced pork",
      "2 scallions, chopped",
      "1 tbsp soy sauce",
      "1 tsp sesame oil and grated ginger",
    ],
    steps: [
      "Mix flour, yeast, sugar and water, then knead 8 minutes until smooth.",
      "Cover and rise 30 minutes until doubled.",
      "Mix pork, scallion, soy, sesame oil and ginger for the filling.",
      "Roll the dough into circles, add filling and pleat closed.",
      "Rest 10 minutes, then steam over boiling water for 12 minutes.",
    ],
    tip: "Place each bun on a square of baking paper so it never sticks to the steamer.",
    video: "how to make baozi steamed buns",
  },
  {
    id: "pho",
    name: "Hearty Chicken Pho",
    hl: true,
    min: 30,
    img: "assets/images/menu/hearty-chicken-pho.png",
    level: "Medium",
    taste: "Savory",
    energy: "Balanced",
    kcal: 420,
    pro: 28,
    starch: 50,
    bg: "#F8EBDD",
    col: ["#C9A66B", "#7BAE5A", "#E4572E"],
    dietTags: ["High protein"],
    filters: [],
    ing: [
      "1.2 L chicken stock",
      "1 onion and a 3 cm piece of ginger",
      "2 star anise and 1 cinnamon stick",
      "1 tbsp fish sauce",
      "150 g rice noodles",
      "150 g chicken breast",
      "Basil, bean sprouts, lime and chili",
    ],
    steps: [
      "Char the onion and ginger over a flame or in a dry pan until blackened.",
      "Simmer the stock with the charred aromatics and spices for 15 minutes.",
      "Poach the chicken in the broth for 12 minutes, then slice it.",
      "Cook the noodles as directed and place them in a bowl.",
      "Top with chicken, ladle in the hot broth and add herbs, lime and chili.",
    ],
    tip: "Skim foam off the broth while it simmers for a clearer, cleaner soup.",
    video: "how to make chicken pho",
  },
  {
    id: "fried-rice",
    name: "Golden Fried Rice",
    hl: true,
    min: 15,
    img: "assets/images/menu/golden-fried-rice.png",
    level: "Easy",
    taste: "Savory",
    energy: "",
    kcal: 480,
    pro: 18,
    starch: 65,
    bg: "#FFF2CC",
    col: ["#E9C46A", "#7BAE5A", "#F5A623"],
    dietTags: [],
    filters: [],
    ing: [
      "1.5 cups day-old cooked rice",
      "2 eggs",
      "1 tbsp oil",
      "2 cloves garlic, minced",
      "1 scallion, sliced",
      "1 tbsp soy sauce",
      "Peas and diced carrot",
      "A few drops of fish sauce",
    ],
    steps: [
      "Heat the oil in a wide pan on high heat and fry the garlic for 10 seconds.",
      "Add the vegetables and stir for 1 minute.",
      "Add the rice, breaking up clumps, and stir-fry 3 minutes.",
      "Push the rice aside, scramble one egg, then mix it through.",
      "Season with soy and fish sauce, then top with a fried egg and scallion.",
    ],
    tip: "Cold, dry rice fries up golden and separate. Fresh rice turns mushy.",
    video: "how to make egg fried rice",
  },
  {
    id: "Sunny-Side Egg Toast",
    name: "Sunny-Side Egg Toast",
    min: 8,
    img: "assets/images/menu/sunny-side-egg-toast.png",
    level: "Easy",
    taste: "Savory",
    energy: "Balanced",
    kcal: 380,
    pro: 16,
    starch: 40,
    bg: "#FFF4D6",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: ["Vegetarian"],
    filters: ["quick"],
    ing: [
      "2 slices of bread",
      "2 eggs",
      "1 tsp butter",
      "Salt and black pepper",
      "Chopped chives (optional)",
    ],
    steps: [
      "Toast the bread until golden.",
      "Melt the butter in a pan over medium heat.",
      "Crack in the eggs and cook until the whites are set but the yolks are still runny.",
      "Season with salt and pepper, then serve on the toast.",
      "Finish with chopped chives if desired.",
    ],
    tip: "Cover the pan briefly to set the egg whites without overcooking the yolks.",
    video: "how to make sunny side egg toast",
  },
  {
    id: "Crunchy Yogurt Bowl",
    name: "Crunchy Yogurt Bowl",
    hl: true,
    min: 5,
    img: "assets/images/menu/crunchy-yogurt-bowl.png",
    level: "Easy",
    taste: "Sweet",
    energy: "",
    kcal: 280,
    pro: 9,
    starch: 35,
    bg: "#FCE8EF",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: ["Vegetarian"],
    filters: ["quick"],
    ing: [
      "200 g plain or Greek yogurt",
      "1 tsp honey",
      "A handful of mixed berries",
      "3 tbsp granola",
      "1 tbsp nuts or seeds",
      "Banana slices (optional)",
    ],
    steps: [
      "Spoon the yogurt into a bowl and smooth the top.",
      "Drizzle with honey.",
      "Arrange the berries and banana on top.",
      "Add the granola and nuts just before eating so they stay crunchy.",
    ],
    tip: "Keep granola in a separate container if you pack this for work, and add it right before you eat.",
    video: "how to make yogurt granola bowl",
  },
  {
    id: "Classic-morning-burger",
    name: "Classic Morning Burger",
    isNew: true,
    min: 15,
    img: "assets/images/menu/classic-morning-burger.png",
    level: "Easy",
    taste: "Savory",
    energy: "Hearty + kcal",
    kcal: 280,
    pro: 9,
    starch: 35,
    bg: "#E8F2E5",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: [],
    filters: [],
    ing: [
      "1 burger bun",
      "1 vegetarian burger patty",
      "1 egg",
      "1 slice of cheese",
      "Lettuce and tomato",
      "1 tbsp mayonnaise or your favorite sauce",
    ],
    steps: [
      "Toast the burger bun until lightly golden.",
      "Cook the vegetarian patty according to the package instructions.",
      "Fry the egg to your preference and melt the cheese over the patty.",
      "Spread sauce on the bun, then layer the lettuce, tomato, patty and egg.",
      "Close the burger and serve while warm.",
    ],
    tip: "Toast the cut sides of the bun in the same pan for extra flavor.",
    video: "how to make a vegetarian breakfast burger",
  },
  {
    id: "Spicy Hue Beef Noodles",
    name: "Spicy Hue Beef Noodles",
    hl: true,
    min: 30,
    img: "assets/images/menu/spicy-hue-beef-noodles.png",
    level: "Pro",
    taste: "Savory",
    energy: "Hearty + kcal",
    kcal: 550,
    pro: 35,
    starch: 55,
    bg: "#F9E4E1",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: ["High protein"],
    filters: [],
    ing: [
      "150 g round rice noodles",
      "100 g thinly sliced beef",
      "600 ml beef stock",
      "1 stalk lemongrass, bruised",
      "1 shallot, chopped",
      "1 tbsp chili satay or chili oil",
      "1 tbsp fish sauce and 1 tsp sugar",
      "1 tsp shrimp paste, diluted in 2 tbsp water (optional)",
      "Shredded cabbage, bean sprouts, herbs, lime, extra chili",
    ],
    steps: [
      "Fry the shallot and chili satay in a pot for 1 minute until fragrant.",
      "Add the stock, lemongrass, fish sauce, sugar and the diluted shrimp paste. Simmer 15 minutes, then strain.",
      "Cook the noodles as directed on the pack, rinse and place in a bowl.",
      "Lay the thin beef slices on the noodles.",
      "Bring the broth back to a rolling boil and pour it over the beef so it cooks through in about 1 minute.",
      "Top with cabbage, bean sprouts, herbs, a squeeze of lime and extra chili.",
    ],
    tip: "Shrimp paste is very strong. Dilute it first and strain the broth for a cleaner, rounder flavor.",
    video: "how to make bun bo hue quick",
  },
  {
    id: "Mandu",
    name: "Mandu",
    min: 15,
    img: "assets/images/menu/mandu.png",
    level: "Medium",
    taste: "Savory",
    energy: "Balanced",
    kcal: 360,
    pro: 20,
    starch: 38,
    bg: "#EAE8F7",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: ["High protein"],
    filters: [],
    ing: [
      "8 round dumpling wrappers (store-bought)",
      "100 g minced pork",
      "40 g firm tofu, mashed and squeezed dry",
      "2 tbsp chopped kimchi or cabbage",
      "1 scallion, chopped",
      "1 tsp soy sauce and 1/2 tsp sesame oil",
      "1 tbsp oil and 60 ml water for cooking",
      "Dipping sauce: 1 tbsp soy sauce plus 1 tsp vinegar",
    ],
    steps: [
      "Mix the pork, tofu, kimchi, scallion, soy sauce and sesame oil until sticky.",
      "Place 1 heaped tablespoon of filling in the center of each wrapper. Wet the edge with water, fold in half and press tightly to seal.",
      "Heat the oil in a nonstick pan and fry the dumplings flat side down for 2 minutes until golden.",
      "Add the water, cover and steam for 5 minutes until the water has evaporated and the pork is cooked through.",
      "Serve hot with the dipping sauce.",
    ],
    tip: "Squeeze the kimchi and tofu dry before mixing. Extra liquid makes the filling watery and the wrappers tear.",
    video: "how to make korean mandu dumplings",
  },
  {
    id: "Savory Stir-Fried Noodles",
    name: "Savory Stir-Fried Noodles",
    min: 12,
    img: "assets/images/menu/savory-stir-fried-noodles.png",
    level: "easy",
    taste: "Spicy",
    energy: "Light",
    kcal: 450,
    pro: 20,
    starch: 60,
    bg: "#E1F1EC",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: ["High protein"],
    filters: ["light", "spicy"],
    ing: [
      "100 g egg noodles",
      "80 g chicken, pork or shrimp, thinly sliced",
      "1 egg",
      "1 handful of cabbage, carrot or leafy greens",
      "2 cloves garlic, minced",
      "1 tbsp oil",
      "1 tbsp soy sauce and 1 tbsp oyster sauce",
      "1 tsp chili sauce",
      "1 scallion, sliced",
    ],
    steps: [
      "Boil the noodles 2 minutes less than the pack says, drain well and toss with a little oil.",
      "Heat the oil in a wok over high heat. Fry the garlic for 10 seconds, then add the meat and cook 2 minutes until cooked through.",
      "Add the vegetables and stir-fry for 1 minute.",
      "Push everything aside, scramble the egg, then mix it in.",
      "Add the noodles, soy sauce, oyster sauce and chili sauce. Toss 2 minutes, then top with scallion.",
    ],
    tip: "Drain the noodles very well. Wet noodles steam in the pan instead of getting those lightly charred edges.",
    video: "how to make easy stir fried noodles",
  },
  {
    id: "Golden Quang Noodles",
    name: "Golden Quang Noodles",
    hl: true,
    min: 30,
    img: "assets/images/menu/golden-quang-noodles.png",
    level: "Pro",
    taste: "Fresh",
    energy: "Hearty + kcal",
    kcal: 490,
    pro: 26,
    starch: 55,
    bg: "#FFF0C9",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: ["High protein"],
    filters: [],
    ing: [
      "150 g wide rice noodles",
      "120 g pork, chicken or shrimp",
      "1 tsp turmeric",
      "2 shallots and 2 cloves garlic, minced",
      "300 ml stock",
      "1 tbsp fish sauce and 1 tsp sugar",
      "1 tbsp oil",
      "Lettuce, herbs, lime, chili",
      "1 tbsp crushed roasted peanuts and 1 rice cracker, crumbled",
    ],
    steps: [
      "Marinate the meat with turmeric, half the garlic, fish sauce and sugar for 10 minutes.",
      "Fry the shallots and remaining garlic in oil until golden, add the meat and cook 4 minutes.",
      "Pour in the stock and simmer 8 minutes until it reduces to a small amount of thick sauce.",
      "Cook the noodles as directed and place them over a bed of lettuce and herbs in a bowl.",
      "Spoon the meat and just a few ladles of sauce over the noodles.",
      "Top with peanuts, crumbled rice cracker, lime and chili.",
    ],
    tip: "Mi Quang is served with very little broth. Use just enough sauce to coat the noodles, not a soup.",
    video: "how to make mi quang noodles",
  },
  {
    id: "Cute Rice Triangles",
    name: "Cute Rice Triangles",
    min: 10,
    img: "assets/images/menu/cute-rice-triangles.png",
    level: "Easy",
    taste: "Mild",
    energy: "Balanced",
    kcal: 340,
    pro: 12,
    starch: 55,
    bg: "#E4F1F6",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: [],
    filters: [],
    ing: [
      "1 cup warm cooked short-grain rice (makes 2 triangles)",
      "1/4 tsp salt",
      "2 tbsp filling: tuna mayo, salted salmon or pickled plum",
      "1 sheet nori, cut into strips",
      "A small bowl of water",
    ],
    steps: [
      "Wet your hands with water and rub in a pinch of salt.",
      "Take half the rice and flatten it in your palm.",
      "Press the filling into the center and cover it with the rice.",
      "Cup your hands and press into a triangle, rotating three times to shape the corners.",
      "Wrap a strip of nori around the base. Repeat with the rest of the rice.",
    ],
    tip: "Use warm rice and wet hands so it holds together. Add the nori just before eating so it stays crisp.",
    video: "how to make onigiri rice triangles",
  },
  {
    id: "Fluffy Morning Pancakes",
    name: "Fluffy Morning Pancakes",
    min: 8,
    img: "assets/images/menu/fluffy-moring-pancakes.png",
    level: "Easy",
    taste: "Sweet",
    energy: "",
    kcal: 410,
    pro: 10,
    starch: 60,
    bg: "#FFE9D6",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: ["Gentle"],
    filters: ["quick"],
    ing: [
      "1/2 cup (60 g) flour",
      "1/2 tbsp sugar",
      "1/2 tsp baking powder and a pinch of salt",
      "1 small egg",
      "90 ml milk",
      "1/2 tbsp melted butter, plus a little for the pan",
      "Berries and maple syrup to serve",
    ],
    steps: [
      "Whisk the flour, sugar, baking powder and salt in a bowl.",
      "In another bowl whisk the egg, milk and melted butter.",
      "Pour the wet mix into the dry and stir only until just combined. A few lumps are fine.",
      "Heat a nonstick pan over medium-low heat and grease lightly. Pour in small rounds of batter.",
      "Cook about 2 minutes until bubbles form and the edges set, flip and cook 1 to 2 minutes more.",
      "Stack and top with berries and syrup.",
    ],
    tip: "Do not overmix. A lumpy batter makes fluffy pancakes, a smooth one makes tough ones.",
    video: "how to make fluffy pancakes",
  },
  {
    id: "Rich Beef Pho",
    name: "Rich Beef Pho",
    min: 30,
    img: "assets/images/menu/rich-beef-pho.png",
    level: "Pro",
    taste: "Savory",
    energy: "High Protein",
    kcal: 450,
    pro: 30,
    starch: 52,
    bg: "#F3E7D5",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: ["High protein"],
    filters: [],
    ing: [
      "150 g flat rice noodles",
      "100 g thinly sliced raw beef (sirloin)",
      "600 ml good beef stock",
      "1 onion, halved, and a 3 cm piece of ginger",
      "2 star anise and 1 cinnamon stick",
      "1 tbsp fish sauce and 1 tsp sugar",
      "Basil, bean sprouts, lime, chili",
      "Hoisin and chili sauce (optional)",
    ],
    steps: [
      "Char the onion and ginger over a flame or in a dry pan for 5 minutes until blackened in spots.",
      "Simmer the stock with the charred onion and ginger, star anise, cinnamon, fish sauce and sugar for 15 minutes. Strain.",
      "Cook the noodles as directed, drain and place in a bowl.",
      "Lay the raw beef slices over the noodles.",
      "Bring the broth to a rolling boil and pour it over so the beef cooks through in about 1 minute.",
      "Top with basil, bean sprouts, lime and chili.",
    ],
    tip: "The broth must be at a rolling boil when you pour it, otherwise the beef will not cook through.",
    video: "how to make beef pho quick",
  },
  {
    id: "Crispy Golden Samosas",
    name: "Crispy Golden Samosas",
    isNew: true,
    min: 20,
    img: "assets/images/menu/cricrispy-golden-samosas.png",
    level: "Medium",
    taste: "Spicy",
    energy: "Balanced",
    kcal: 390,
    pro: 12,
    starch: 45,
    bg: "#FFF0CC",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: ["Vegetarian"],
    filters: ["spicy"],
    ing: [
      "4 spring roll or tortilla wrappers, each cut into 2 strips",
      "1 medium potato, diced small",
      "3 tbsp peas",
      "1/2 tsp cumin, 1/2 tsp curry powder, 1/4 tsp chili powder",
      "1 tsp oil, plus oil for brushing",
      "Salt",
      "Seal paste: 1 tbsp flour mixed with 2 tbsp water",
      "Chutney or ketchup to serve",
    ],
    steps: [
      "Microwave the diced potato for 5 minutes (or boil) until soft.",
      "Warm the oil in a pan, add the spices for 30 seconds, then add the potato and peas. Mash lightly, season with salt and let cool 2 minutes.",
      "Put 1 tablespoon of filling at one end of a wrapper strip. Fold it over diagonally again and again into a triangle. Seal the end with flour paste.",
      "Brush with oil and air-fry at 190°C for 8 minutes, or bake at 200°C for 12 minutes, turning once.",
      "Serve hot with chutney.",
    ],
    tip: "Do not overfill and seal the edges well, otherwise the filling leaks out while cooking.",
    video: "how to make easy crispy samosas",
  },
  {
    id: "Sandwich",
    name: "Sandwich",
    min: 10,
    img: "assets/images/menu/sandwich.png",
    level: "Easy",
    taste: "Mild",
    energy: "Balanced",
    kcal: 320,
    pro: 14,
    starch: 35,
    bg: "#E8F0F7",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: [],
    filters: [],
    ing: [
      "2 slices bread",
      "1 egg",
      "1 slice cheese",
      "2 slices ham or cooked chicken",
      "1 lettuce leaf and 2 tomato slices",
      "1 tsp mayonnaise",
      "1 tsp butter",
    ],
    steps: [
      "Fry the egg in the butter for 2 minutes and season lightly.",
      "Toast the bread for 2 minutes until golden.",
      "Spread mayonnaise on both slices.",
      "Put the cheese on the warm egg so it melts, then layer on the ham, lettuce and tomato.",
      "Close the sandwich, press lightly and cut diagonally.",
    ],
    tip: "Pat the tomato dry and put the lettuce against the bread. It keeps the sandwich from getting soggy.",
    video: "how to make breakfast egg sandwich",
  },
  {
    id: "Morning Spaghetti Twist",
    name: "Morning Spaghetti Twist",
    min: 15,
    img: "assets/images/menu/morning-spaghetti-twist.png",
    level: "Easy",
    taste: "Spicy",
    energy: "Hearty + kcal",
    kcal: 430,
    pro: 18,
    starch: 58,
    bg: "#F8E2DD",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: [],
    filters: ["spicy"],
    ing: [
      "100 g spaghetti",
      "1 tbsp olive oil",
      "2 cloves garlic, sliced",
      "1/2 tsp chili flakes",
      "3 tbsp tomato sauce or passata",
      "1 egg",
      "2 tbsp grated parmesan",
      "Salt, and basil or parsley to finish",
    ],
    steps: [
      "Boil the spaghetti in salted water for 1 minute less than the pack says. Save half a cup of the pasta water.",
      "Warm the olive oil, add the garlic and chili flakes for 30 seconds (do not let the garlic brown), then add the tomato sauce and simmer 3 minutes.",
      "Toss the spaghetti in the sauce with a splash of pasta water for 1 minute until glossy.",
      "Fry the egg until the edges are crisp and the yolk is still soft.",
      "Plate the pasta, top with the egg, parmesan and herbs.",
    ],
    tip: "A splash of starchy pasta water helps the sauce cling to the spaghetti.",
    video: "how to make spaghetti with fried egg",
  },
  {
    id: "Cheerful Breakfast Tacos",
    name: "Cheerful Breakfast Tacos",
    min: 20,
    img: "assets/images/menu/cheerful-breakfast-tacos.png",
    level: "Medium",
    taste: "Spicy",
    energy: "Balanced",
    kcal: 370,
    pro: 16,
    starch: 40,
    bg: "#E6F1D9",
    col: ["#F7D774", "#E4572E", "#7BAE5A"],
    dietTags: [],
    filters: ["spicy"],
    ing: [
      "3 small tortillas",
      "2 eggs",
      "60 g cooked sausage or chorizo, or black beans",
      "1/4 avocado, sliced",
      "1 small tomato, diced",
      "1/4 red onion, thinly sliced",
      "Cilantro and 1 tbsp lime juice",
      "Grated cheese and salsa or hot sauce",
    ],
    steps: [
      "Make a quick pico de gallo: mix the tomato, onion, cilantro, lime juice and a pinch of salt.",
      "Brown the sausage for 5 minutes (or warm the beans).",
      "Scramble the eggs over low heat for about 2 minutes until soft.",
      "Warm the tortillas in a dry pan for 20 seconds on each side.",
      "Fill with eggs, sausage, avocado, pico and cheese, then finish with salsa.",
    ],
    tip: "Wrap the warm tortillas in a clean damp towel so they stay soft and do not crack when folded.",
    video: "how to make breakfast tacos",
  },
];

const $ = (s) => document.querySelector(s),
  grid = $("#grid");
const plate = (c) =>
  `<svg viewBox="0 0 200 120" style="--a:${c[0]};--b:${c[1]};--c:${c[2]}" aria-hidden="true"><use href="#plate"/></svg>`;
const dietTags = (d) =>
  d.dietTags?.length
    ? `<div class="diet-tags"><strong>🥗 Diet</strong>${d.dietTags
        .map((tag) => {
          const icon =
            { Vegetarian: "🌿", Gentle: "💚", "High protein": "💪" }[tag] ||
            "🥗";
          return `<span class="tag diet-label">${icon} ${tag}</span>`;
        })
        .join("")}</div>`
    : "";
const filterKeys = (d) => [
  ...d.filters,
  ...((d.dietTags || []).includes("Vegetarian") ? ["veg"] : []),
];
const tags = (d) =>
  [
    `<span class="tag time">⏱ ${d.min} min</span>`,
    `<span class="tag level">${d.level === "Easy" ? "●" : d.level === "Pro" ? "●●●" : "●●"} ${d.level}</span>`,
    `<span class="tag taste">${d.taste}</span>`,
    d.energy
      ? `<span class="tag ${d.energy === "High Protein" || d.energy === "Gentle" ? "diet" : "kcal"}">${d.energy}</span>`
      : "",
  ].join("");

const HEART =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
const panel = (d) => {
  /* To use your own video, replace the URL below with the direct link, e.g. https://www.youtube.com/watch?v=XXXX */
  const url =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(d.video);
  return `<div class="pin"><div class="nut"><div><b>${d.kcal}</b>kcal</div><div><b>${d.pro} g</b>protein</div><div><b>${d.starch} g</b>starch</div></div>
  <h3>Ingredients</h3><div class="ing">${d.ing.map((i) => `<label><input type="checkbox"><span>${i}</span></label>`).join("")}</div>
  <h3>How to make it</h3><ol class="steps">${d.steps.map((s) => `<li><span>${s}</span></li>`).join("")}</ol>
  <p class="tip"><b>Tip:</b> ${d.tip}</p>
  <div class="video"><div class="play">▶</div><div><b>Video tutorial</b>Watch it made step by step.</div><a href="${url}" target="_blank" rel="noopener">Watch video</a></div></div>`;
};
grid.innerHTML = DISHES.map(
  (
    d,
  ) => `<li class="item" data-id="${d.id}" data-f="${[...new Set(filterKeys(d))].join(" ")}"><button class="fav" aria-pressed="false" aria-label="Save ${d.name} to favorites">${HEART}</button><button class="card" aria-expanded="false" aria-controls="p-${d.id}">
 <span class="thumb" style="--bg:${d.bg}">${d.img ? `<img src="${d.img}" alt="${d.name}" loading="lazy">` : plate(d.col)}</span></span></span>
 <span class="cbody">${d.hl ? '<span class="tag hl">★ Must-try</span>' : ""}${d.isNew ? '<span class="tag new">✨ New</span>' : ""}<span class="name">${d.name}</span><span class="tags">${tags(d)}</span>${dietTags(d)}
 <span class="facts"><span>${d.kcal} kcal</span><span>${d.pro}g protein</span><span>${d.starch}g starch</span></span><span class="more">View recipe ↓</span></span></button>
 <div class="panel" id="p-${d.id}"><div>${panel(d)}</div></div></li>`,
).join("");

grid.addEventListener("click", (e) => {
  const b = e.target.closest(".card");
  if (!b) return;
  const item = b.closest(".item"),
    open = item.classList.toggle("open");
  b.setAttribute("aria-expanded", open);
  b.querySelector(".more").textContent = open
    ? "Hide recipe ↑"
    : "View recipe ↓";
});

/* ===== Favorites: saved in this browser (localStorage) ===== */
const KEY = "breakfast-favs";
let favs = new Set(),
  cur = "all";
try {
  favs = new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
} catch (e) {}
const save = () => {
  try {
    localStorage.setItem(KEY, JSON.stringify([...favs]));
  } catch (e) {}
};
const chips = document.querySelectorAll(".chip");
function sync() {
  let n = 0;
  grid.querySelectorAll(".item").forEach((li) => {
    const on = favs.has(li.dataset.id);
    li.querySelector(".fav").setAttribute("aria-pressed", on);
    const show =
      cur === "all" ||
      (cur === "fav" ? on : li.dataset.f.split(" ").includes(cur));
    li.hidden = !show;
    if (show) n++;
  });
  $("#favCount").textContent = favs.size;
  $("#empty").textContent =
    cur === "fav"
      ? "No saved dishes yet. Tap the heart on any dish to save it."
      : "No dishes match this filter yet.";
  $("#empty").style.display = n ? "none" : "block";
}
chips.forEach((c) =>
  c.addEventListener("click", () => {
    cur = c.dataset.f;
    chips.forEach((x) => x.setAttribute("aria-pressed", x === c));
    sync();
  }),
);
grid.addEventListener("click", (e) => {
  const f = e.target.closest(".fav");
  if (!f) return;
  const id = f.closest(".item").dataset.id;
  favs.has(id) ? favs.delete(id) : favs.add(id);
  save();
  sync();
});
sync();

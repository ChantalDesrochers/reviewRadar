

{

  status: {
      code: "0",
      msg: "OK",
      credits: "1",
      remaining_credits: "19997"
  },
  model: "general_en",
  score_tag: "P",
  agreement: "DISAGREEMENT",
  subjectivity: "SUBJECTIVE",
  confidence: "86",
  irony: "NONIRONIC",
  sentence_list: [
      {
          text: "Great service, high prices, slightly above average food.",
          inip: "0",
          endp: "55",
          bop: "y",
          confidence: "91",
          score_tag: "NEU",
          agreement: "DISAGREEMENT",
          segment_list: [1 item],
          sentimented_entity_list: [],
          sentimented_concept_list: [4 items]
      },
      {
          text: "I had the steak and eggs, and the steak was a little over cooked for my liking (medium well).",
          inip: "57",
          endp: "149",
          bop: "n",
          confidence: "98",
          score_tag: "P",
          agreement: "AGREEMENT",
          segment_list: [
              {
                  text: "I had the steak and eggs",
                  segment_type: "secondary",
                  inip: "57",
                  endp: "80",
                  confidence: "100",
                  score_tag: "NONE",
                  agreement: "AGREEMENT",
                  polarity_term_list: [],
                  sentimented_concept_list: [2 items]
              },
              {
                  text: "the steak was a little over cooked for my liking (medium well)",
                  segment_type: "main",
                  inip: "87",
                  endp: "148",
                  confidence: "98",
                  score_tag: "P",
                  agreement: "AGREEMENT",
                  polarity_term_list: [1 item],
                  sentimented_concept_list: [2 items]
              }
          ],
          sentimented_entity_list: [],
          sentimented_concept_list: [
              {
                  form: "hobby",
                  id: "40fe5b6f4f",
                  type: "Top",
                  score_tag: "NONE"
              },
              {
                  form: "medium",
                  id: "8571b0f310",
                  type: "Top>OtherEntity>Vocation",
                  score_tag: "NONE"
              },
              {
                  form: "egg",
                  id: "8867ce7eaa",
                  type: "Top>Product>Food",
                  score_tag: "NONE"
              },
              {
                  form: "steak",
                  id: "dd20ed8da2",
                  type: "Top>Product>Food>Meat",
                  score_tag: "P"
              }
          ]
      },
      {
          text: "The eggs were ok but nothing special;",
          inip: "151",
          endp: "187",
          bop: "n",
          confidence: "100",
          score_tag: "NONE",
          agreement: "AGREEMENT",
          segment_list: [
              {
                  text: "The eggs were ok but nothing special",
                  segment_type: "main",
                  inip: "151",
                  endp: "186",
                  confidence: "100",
                  score_tag: "NONE",
                  agreement: "AGREEMENT",
                  polarity_term_list: [],
                  sentimented_concept_list: [
                      {
                          form: "special",
                          id: "50eb1ae4a1",
                          variant: "special",
                          inip: "180",
                          endp: "186",
                          type: "Top>Product>CulturalProduct>Broadcast",
                          score_tag: "NONE"
                      },
                      {
                          form: "egg",
                          id: "8867ce7eaa",
                          variant: "eggs",
                          inip: "155",
                          endp: "158",
                          type: "Top>Product>Food",
                          score_tag: "NONE"
                      }
                  ]
              }
          ],
          sentimented_entity_list: [],
          sentimented_concept_list: [
              {
                  form: "special",
                  id: "50eb1ae4a1",
                  type: "Top>Product>CulturalProduct>Broadcast",
                  score_tag: "NONE"
              },
              {
                  form: "egg",
                  id: "8867ce7eaa",
                  type: "Top>Product>Food",
                  score_tag: "NONE"
              }
          ]
      },
      {
          text: "however, the avocado that came with it was really good.",
          inip: "189",
          endp: "243",
          bop: "n",
          confidence: "98",
          score_tag: "P+",
          agreement: "AGREEMENT",
          segment_list: [
              {
                  text: "however, the avocado that came with it was really good",
                  segment_type: "main",
                  inip: "189",
                  endp: "242",
                  confidence: "98",
                  score_tag: "P+",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "(really) good",
                          inip: "239",
                          endp: "242",
                          confidence: "98",
                          score_tag: "P+",
                          sentimented_concept_list: [
                              {
                                  form: "avocado",
                                  id: "d78df52f6f",
                                  variant: "avocado",
                                  inip: "202",
                                  endp: "208",
                                  type: "Top>Product>Food>FruitOrVegetable",
                                  score_tag: "P+"
                              }
                          ]
                      }
                  ]
              }
          ],
          sentimented_entity_list: [],
          sentimented_concept_list: [
              {
                  form: "avocado",
                  id: "d78df52f6f",
                  type: "Top>Product>Food>FruitOrVegetable",
                  score_tag: "P+"
              }
          ]
      },
      {
          text: "The black beans that came with it were cold;",
          inip: "245",
          endp: "288",
          bop: "n",
          confidence: "100",
          score_tag: "N",
          agreement: "AGREEMENT",
          segment_list: [
              {
                  text: "The black beans that came with it were cold",
                  segment_type: "main",
                  inip: "245",
                  endp: "287",
                  confidence: "100",
                  score_tag: "N",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "cold@A",
                          inip: "284",
                          endp: "287",
                          confidence: "100",
                          score_tag: "N",
                          sentimented_concept_list: [
                              {
                                  form: "haricot bean",
                                  id: "3ad48f52ff",
                                  variant: "beans",
                                  inip: "255",
                                  endp: "259",
                                  type: "Top>LivingThing>Flora",
                                  score_tag: "N"
                              },
                              {
                                  form: "bean",
                                  id: "50e400d30f",
                                  variant: "beans",
                                  inip: "255",
                                  endp: "259",
                                  type: "Top>LivingThing>Flora",
                                  score_tag: "N"
                              },
                              {
                                  form: "bean",
                                  id: "df43a5e0ed",
                                  variant: "beans",
                                  inip: "255",
                                  endp: "259",
                                  type: "Top>Product>Food>Legume",
                                  score_tag: "N"
                              }
                          ]
                      }
                  ]
              }
          ],
          sentimented_entity_list: [],
          sentimented_concept_list: [
              {
                  form: "haricot bean",
                  id: "3ad48f52ff",
                  type: "Top>LivingThing>Flora",
                  score_tag: "N"
              },
              {
                  form: "bean",
                  id: "50e400d30f",
                  type: "Top>LivingThing>Flora",
                  score_tag: "N"
              },
              {
                  form: "bean",
                  id: "df43a5e0ed",
                  type: "Top>Product>Food>Legume",
                  score_tag: "N"
              }
          ]
      },
      {
          text: "clearly by design, but it surprised me and was a put off.\n\nMy wife had the avocado toast, after they told us they had just run out of the protein pancakes.",
          inip: "290",
          endp: "446",
          bop: "n",
          confidence: "94",
          score_tag: "NEU",
          agreement: "DISAGREEMENT",
          segment_list: [
              {
                  text: "clearly by design",
                  segment_type: "main",
                  inip: "290",
                  endp: "306",
                  confidence: "100",
                  score_tag: "P",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "design@V",
                          inip: "301",
                          endp: "306",
                          confidence: "100",
                          score_tag: "P"
                      }
                  ]
              },
              {
                  text: "it surprised me",
                  segment_type: "secondary",
                  inip: "313",
                  endp: "327",
                  confidence: "100",
                  score_tag: "NONE",
                  agreement: "AGREEMENT",
                  polarity_term_list: []
              },
              {
                  text: "was a put off",
                  segment_type: "secondary",
                  inip: "333",
                  endp: "345",
                  confidence: "100",
                  score_tag: "NONE",
                  agreement: "AGREEMENT",
                  polarity_term_list: []
              },
              {
                  text: "\n\nMy wife had the avocado toast, after they told us they just had run out of the protein pancakes",
                  segment_type: "main",
                  inip: "347",
                  endp: "445",
                  confidence: "100",
                  score_tag: "N",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "run out of",
                          inip: "415",
                          endp: "424",
                          confidence: "100",
                          score_tag: "N",
                          sentimented_concept_list: [
                              {
                                  form: "husband",
                                  id: "6a17861b62",
                                  variant: "wife",
                                  inip: "354",
                                  endp: "357",
                                  type: "Top>Person",
                                  score_tag: "N"
                              },
                              {
                                  form: "avocado",
                                  id: "d78df52f6f",
                                  variant: "avocado",
                                  inip: "367",
                                  endp: "373",
                                  type: "Top>Product>Food>FruitOrVegetable",
                                  score_tag: "N"
                              },
                              {
                                  form: "toast",
                                  id: "f85b48fe29",
                                  variant: "toast",
                                  inip: "375",
                                  endp: "379",
                                  type: "Top>Product>Food>CookedPlate",
                                  score_tag: "N"
                              },
                              {
                                  form: "pancake",
                                  id: "b14fbc9dc6",
                                  variant: "pancakes",
                                  inip: "438",
                                  endp: "445",
                                  type: "Top>Product>Food>CookedPlate",
                                  score_tag: "N"
                              }
                          ]
                      }
                  ]
              }
          ],
          sentimented_entity_list: [],
          sentimented_concept_list: [
              {
                  form: "husband",
                  id: "6a17861b62",
                  type: "Top>Person",
                  score_tag: "N"
              },
              {
                  form: "pancake",
                  id: "b14fbc9dc6",
                  type: "Top>Product>Food>CookedPlate",
                  score_tag: "N"
              },
              {
                  form: "avocado",
                  id: "d78df52f6f",
                  type: "Top>Product>Food>FruitOrVegetable",
                  score_tag: "N"
              },
              {
                  form: "toast",
                  id: "f85b48fe29",
                  type: "Top>Product>Food>CookedPlate",
                  score_tag: "N"
              }
          ]
      },
      {
          text: "She liked the toast but said it wasn't anything to write home about.\n\nWe also got some bacon to split, which was reasonably priced at $3 for three strips, but the bacon strips were pretty thin.",
          inip: "448",
          endp: "642",
          bop: "n",
          confidence: "100",
          score_tag: "P",
          agreement: "AGREEMENT",
          segment_list: [
              {
                  text: "She liked the toast",
                  segment_type: "main",
                  inip: "448",
                  endp: "466",
                  confidence: "100",
                  score_tag: "P",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "like@V",
                          inip: "452",
                          endp: "456",
                          confidence: "100",
                          score_tag: "P",
                          sentimented_concept_list: [
                              {
                                  form: "toast",
                                  id: "f85b48fe29",
                                  variant: "toast",
                                  inip: "462",
                                  endp: "466",
                                  type: "Top>Product>Food>CookedPlate",
                                  score_tag: "P"
                              }
                          ]
                      }
                  ]
              },
              {
                  text: "said it wasn't anything to write home about",
                  segment_type: "main",
                  inip: "472",
                  endp: "514",
                  confidence: "100",
                  score_tag: "NONE",
                  agreement: "AGREEMENT",
                  polarity_term_list: [],
                  sentimented_concept_list: [
                      {
                          form: "home",
                          id: "144b5c0ed4",
                          variant: "home",
                          inip: "505",
                          endp: "508",
                          type: "Top>Location>Facility",
                          score_tag: "NONE"
                      }
                  ]
              },
              {
                  text: "\n\nWe also got some bacon to split, which reasonably was priced at $3 for three strips",
                  segment_type: "main",
                  inip: "516",
                  endp: "602",
                  confidence: "100",
                  score_tag: "P",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "reasonably",
                          inip: "563",
                          endp: "572",
                          confidence: "100",
                          score_tag: "P",
                          sentimented_concept_list: [
                              {
                                  form: "bacon",
                                  id: "8bbdb7a2ae",
                                  variant: "bacon",
                                  inip: "537",
                                  endp: "541",
                                  type: "Top>Product>Food>Meat",
                                  score_tag: "P"
                              }
                          ]
                      }
                  ],
                  sentimented_concept_list: [
                      {
                          form: "$",
                          id: "^__9145003407816029121",
                          variant: "$",
                          inip: "584",
                          endp: "584",
                          type: "Top>Unit>Currency",
                          score_tag: "NONE"
                      }
                  ]
              },
              {
                  text: "the bacon strips were pretty thin",
                  segment_type: "main",
                  inip: "609",
                  endp: "641",
                  confidence: "100",
                  score_tag: "P",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "pretty@A",
                          inip: "631",
                          endp: "636",
                          confidence: "100",
                          score_tag: "P",
                          sentimented_concept_list: [
                              {
                                  form: "bacon",
                                  id: "8bbdb7a2ae",
                                  variant: "bacon",
                                  inip: "613",
                                  endp: "617",
                                  type: "Top>Product>Food>Meat",
                                  score_tag: "P"
                              }
                          ]
                      }
                  ]
              }
          ],
          sentimented_entity_list: [],
          sentimented_concept_list: [
              {
                  form: "home",
                  id: "144b5c0ed4",
                  type: "Top>Location>Facility",
                  score_tag: "NONE"
              },
              {
                  form: "bacon",
                  id: "8bbdb7a2ae",
                  type: "Top>Product>Food>Meat",
                  score_tag: "P"
              },
              {
                  form: "$",
                  id: "^__9145003407816029121",
                  type: "Top>Unit>Currency",
                  score_tag: "NONE"
              },
              {
                  form: "toast",
                  id: "f85b48fe29",
                  type: "Top>Product>Food>CookedPlate",
                  score_tag: "P"
              }
          ]
      },
      {
          text: "There just wasn't a lot to it.",
          inip: "644",
          endp: "673",
          bop: "n",
          confidence: "100",
          score_tag: "NONE",
          agreement: "AGREEMENT",
          segment_list: [],
          sentimented_entity_list: [],
          sentimented_concept_list: []
      },
      {
          text: "The bone broth was scalding hot, and didn't have a ton of flavor, but it was nice and warming with the near zero degree (Fahrenheit) temperatures outside.\n\nWe grabbed some small desserts that they had;",
          inip: "675",
          endp: "877",
          bop: "n",
          confidence: "100",
          score_tag: "P",
          agreement: "AGREEMENT",
          segment_list: [
              {
                  text: "The bone broth was scalding hot",
                  segment_type: "secondary",
                  inip: "675",
                  endp: "705",
                  confidence: "100",
                  score_tag: "NONE",
                  agreement: "AGREEMENT",
                  polarity_term_list: [],
                  sentimented_concept_list: [
                      {
                          form: "soup",
                          id: "5ff62dbed8",
                          variant: "broth",
                          inip: "684",
                          endp: "688",
                          type: "Top>Product>Food>CookedPlate",
                          score_tag: "NONE"
                      },
                      {
                          form: "bone",
                          id: "6b3f1a85db",
                          variant: "bone",
                          inip: "679",
                          endp: "682",
                          type: "Top>LivingThing>BodyPart",
                          score_tag: "NONE"
                      }
                  ]
              },
              {
                  text: "didn't have a ton of flavor",
                  segment_type: "main",
                  inip: "712",
                  endp: "738",
                  confidence: "100",
                  score_tag: "NONE",
                  agreement: "AGREEMENT",
                  polarity_term_list: [],
                  sentimented_concept_list: [
                      {
                          form: "ton",
                          id: "9748805737",
                          variant: "ton",
                          inip: "726",
                          endp: "728",
                          type: "Top>Unit>WeightUnit",
                          score_tag: "NONE"
                      }
                  ]
              },
              {
                  text: "it was nice",
                  segment_type: "main",
                  inip: "745",
                  endp: "755",
                  confidence: "100",
                  score_tag: "P",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "nice",
                          inip: "752",
                          endp: "755",
                          confidence: "100",
                          score_tag: "P"
                      }
                  ]
              },
              {
                  text: "warming with the near zero degree (Fahrenheit) temperatures outside.\n\nWe grabbed some small desserts that they had",
                  segment_type: "main",
                  inip: "761",
                  endp: "876",
                  confidence: "100",
                  score_tag: "P",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "warm",
                          inip: "761",
                          endp: "767",
                          confidence: "100",
                          score_tag: "P",
                          sentimented_concept_list: [
                              {
                                  form: "dessert",
                                  id: "0e15bbd941",
                                  variant: "desserts",
                                  inip: "855",
                                  endp: "862",
                                  type: "Top>Product>Food",
                                  score_tag: "P"
                              }
                          ]
                      }
                  ],
                  sentimented_entity_list: [
                      {
                          form: "Fahrenheit",
                          id: "e7ea056040",
                          variant: "Fahrenheit",
                          inip: "796",
                          endp: "805",
                          type: "Top>Person>LastName",
                          score_tag: "NONE"
                      }
                  ],
                  sentimented_concept_list: [
                      {
                          form: "temperature",
                          id: "4f38a5e551",
                          variant: "temperatures",
                          inip: "808",
                          endp: "819",
                          type: "Top>Unit>TemperatureUnit",
                          score_tag: "NONE"
                      }
                  ],
                  segment_list: [
                      {
                          text: "warming with the near zero degree (Fahrenheit) temperatures outside",
                          segment_type: "secondary",
                          inip: "761",
                          endp: "827",
                          confidence: "100",
                          score_tag: "P",
                          agreement: "AGREEMENT",
                          polarity_term_list: [
                              {
                                  text: "warm",
                                  inip: "761",
                                  endp: "767",
                                  confidence: "100",
                                  score_tag: "P"
                              }
                          ],
                          sentimented_entity_list: [
                              {
                                  form: "Fahrenheit",
                                  id: "e7ea056040",
                                  variant: "Fahrenheit",
                                  inip: "796",
                                  endp: "805",
                                  type: "Top>Person>LastName",
                                  score_tag: "NONE"
                              }
                          ],
                          sentimented_concept_list: [
                              {
                                  form: "temperature",
                                  id: "4f38a5e551",
                                  variant: "temperatures",
                                  inip: "808",
                                  endp: "819",
                                  type: "Top>Unit>TemperatureUnit",
                                  score_tag: "NONE"
                              }
                          ]
                      }
                  ]
              }
          ],
          sentimented_entity_list: [
              {
                  form: "Fahrenheit",
                  id: "e7ea056040",
                  type: "Top>Person>LastName",
                  score_tag: "NONE"
              }
          ],
          sentimented_concept_list: [
              {
                  form: "dessert",
                  id: "0e15bbd941",
                  type: "Top>Product>Food",
                  score_tag: "P"
              },
              {
                  form: "temperature",
                  id: "4f38a5e551",
                  type: "Top>Unit>TemperatureUnit",
                  score_tag: "NONE"
              },
              {
                  form: "soup",
                  id: "5ff62dbed8",
                  type: "Top>Product>Food>CookedPlate",
                  score_tag: "NONE"
              },
              {
                  form: "bone",
                  id: "6b3f1a85db",
                  type: "Top>LivingThing>BodyPart",
                  score_tag: "NONE"
              },
              {
                  form: "ton",
                  id: "9748805737",
                  type: "Top>Unit>WeightUnit",
                  score_tag: "NONE"
              }
          ]
      },
      {
          text: "my wife had the collagen chocolate pudding which my wife loved.",
          inip: "879",
          endp: "941",
          bop: "n",
          confidence: "100",
          score_tag: "P+",
          agreement: "AGREEMENT",
          segment_list: [
              {
                  text: "my wife had the collagen chocolate pudding which my wife loved",
                  segment_type: "main",
                  inip: "879",
                  endp: "940",
                  confidence: "100",
                  score_tag: "P+",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "love@V",
                          inip: "936",
                          endp: "940",
                          confidence: "100",
                          score_tag: "P+",
                          sentimented_concept_list: [
                              {
                                  form: "husband",
                                  id: "6a17861b62",
                                  variant: "wife",
                                  inip: "882",
                                  endp: "885",
                                  type: "Top>Person",
                                  score_tag: "P+"
                              },
                              {
                                  form: "chocolate",
                                  id: "6f1fcb5c4b",
                                  variant: "chocolate",
                                  inip: "904",
                                  endp: "912",
                                  type: "Top>Product>Food>CookedPlate",
                                  score_tag: "P+"
                              },
                              {
                                  form: "pudding",
                                  id: "d11f107f01",
                                  variant: "pudding",
                                  inip: "914",
                                  endp: "920",
                                  type: "Top>Product>Food>CookedPlate",
                                  score_tag: "P+"
                              }
                          ]
                      }
                  ]
              }
          ],
          sentimented_entity_list: [],
          sentimented_concept_list: [
              {
                  form: "husband",
                  id: "6a17861b62",
                  type: "Top>Person",
                  score_tag: "P+"
              },
              {
                  form: "chocolate",
                  id: "6f1fcb5c4b",
                  type: "Top>Product>Food>CookedPlate",
                  score_tag: "P+"
              },
              {
                  form: "pudding",
                  id: "d11f107f01",
                  type: "Top>Product>Food>CookedPlate",
                  score_tag: "P+"
              }
          ]
      },
      {
          text: "I had the raw chocolate chip cookie dough;",
          inip: "943",
          endp: "984",
          bop: "n",
          confidence: "100",
          score_tag: "NONE",
          agreement: "AGREEMENT",
          segment_list: [
              {
                  text: "I had the raw chocolate chip cookie dough",
                  segment_type: "secondary",
                  inip: "943",
                  endp: "983",
                  confidence: "100",
                  score_tag: "NONE",
                  agreement: "AGREEMENT",
                  polarity_term_list: [],
                  sentimented_concept_list: [
                      {
                          form: "cookie",
                          id: "013fc458f2",
                          variant: "cookie",
                          inip: "972",
                          endp: "977",
                          type: "Top",
                          score_tag: "NONE"
                      },
                      {
                          form: "biscuit",
                          id: "4a94287f03",
                          variant: "cookie",
                          inip: "972",
                          endp: "977",
                          type: "Top>Product>Food>CookedPlate",
                          score_tag: "NONE"
                      },
                      {
                          form: "chocolate",
                          id: "6f1fcb5c4b",
                          variant: "chocolate",
                          inip: "957",
                          endp: "965",
                          type: "Top>Product>Food>CookedPlate",
                          score_tag: "NONE"
                      },
                      {
                          form: "chip",
                          id: "ee9305a575",
                          variant: "chip",
                          inip: "967",
                          endp: "970",
                          type: "Top>Product",
                          score_tag: "NONE"
                      }
                  ]
              }
          ],
          sentimented_entity_list: [],
          sentimented_concept_list: [
              {
                  form: "cookie",
                  id: "013fc458f2",
                  type: "Top",
                  score_tag: "NONE"
              },
              {
                  form: "biscuit",
                  id: "4a94287f03",
                  type: "Top>Product>Food>CookedPlate",
                  score_tag: "NONE"
              },
              {
                  form: "chocolate",
                  id: "6f1fcb5c4b",
                  type: "Top>Product>Food>CookedPlate",
                  score_tag: "NONE"
              },
              {
                  form: "chip",
                  id: "ee9305a575",
                  type: "Top>Product",
                  score_tag: "NONE"
              }
          ]
      },
      {
          text: "it was very dense but the taste was really good.\n\nStaff was really nice and friendly, and it was great to find some healthy options while traveling.",
          inip: "986",
          endp: "1135",
          bop: "n",
          confidence: "92",
          score_tag: "P",
          agreement: "DISAGREEMENT",
          segment_list: [
              {
                  text: "it was very dense",
                  segment_type: "main",
                  inip: "986",
                  endp: "1002",
                  confidence: "98",
                  score_tag: "N+",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "(very) dense",
                          inip: "998",
                          endp: "1002",
                          confidence: "98",
                          score_tag: "N+"
                      }
                  ]
              },
              {
                  text: "the taste was really good",
                  segment_type: "main",
                  inip: "1008",
                  endp: "1032",
                  confidence: "98",
                  score_tag: "P+",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "(really) good",
                          inip: "1029",
                          endp: "1032",
                          confidence: "98",
                          score_tag: "P+"
                      }
                  ]
              },
              {
                  text: "\n\nStaff was really nice",
                  segment_type: "main",
                  inip: "1034",
                  endp: "1058",
                  confidence: "98",
                  score_tag: "P+",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "(really) nice",
                          inip: "1055",
                          endp: "1058",
                          confidence: "98",
                          score_tag: "P+"
                      }
                  ]
              },
              {
                  text: "friendly, and it was great to find some healthy options",
                  segment_type: "main",
                  inip: "1064",
                  endp: "1118",
                  confidence: "100",
                  score_tag: "P+",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "friendly",
                          inip: "1064",
                          endp: "1071",
                          confidence: "100",
                          score_tag: "P",
                          sentimented_concept_list: [
                              {
                                  form: "friendly",
                                  id: "7b0868ee2d",
                                  variant: "friendly",
                                  inip: "1064",
                                  endp: "1071",
                                  type: "Top",
                                  score_tag: "P"
                              }
                          ]
                      },
                      {
                          text: "great",
                          inip: "1085",
                          endp: "1089",
                          confidence: "100",
                          score_tag: "P+",
                          sentimented_concept_list: [
                              {
                                  form: "friendly",
                                  id: "7b0868ee2d",
                                  variant: "friendly",
                                  inip: "1064",
                                  endp: "1071",
                                  type: "Top",
                                  score_tag: "P+"
                              }
                          ]
                      },
                      {
                          text: "healthy",
                          inip: "1104",
                          endp: "1110",
                          confidence: "100",
                          score_tag: "P+",
                          sentimented_concept_list: [
                              {
                                  form: "friendly",
                                  id: "7b0868ee2d",
                                  variant: "friendly",
                                  inip: "1064",
                                  endp: "1071",
                                  type: "Top",
                                  score_tag: "P+"
                              }
                          ]
                      }
                  ]
              },
              {
                  text: "traveling",
                  segment_type: "secondary",
                  inip: "1126",
                  endp: "1134",
                  confidence: "100",
                  score_tag: "NONE",
                  agreement: "AGREEMENT",
                  polarity_term_list: []
              }
          ],
          sentimented_entity_list: [],
          sentimented_concept_list: [
              {
                  form: "friendly",
                  id: "7b0868ee2d",
                  type: "Top",
                  score_tag: "P+"
              }
          ]
      },
      {
          text: "I can't give it the highest marks, but we will probably be back just to keep having healthy options on our trip.",
          inip: "1137",
          endp: "1248",
          bop: "n",
          confidence: "86",
          score_tag: "P",
          agreement: "DISAGREEMENT",
          segment_list: [
              {
                  text: "I can't give it the highest marks",
                  segment_type: "main",
                  inip: "1137",
                  endp: "1169",
                  confidence: "92",
                  score_tag: "N",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "(can't give) high mark",
                          inip: "1157",
                          endp: "1169",
                          confidence: "92",
                          score_tag: "N",
                          sentimented_concept_list: [
                              {
                                  form: "mark",
                                  id: "3da7400028",
                                  variant: "marks",
                                  inip: "1165",
                                  endp: "1169",
                                  type: "Top>Unit>Currency",
                                  score_tag: "N"
                              },
                              {
                                  form: "mark",
                                  id: "62986b6216",
                                  variant: "marks",
                                  inip: "1165",
                                  endp: "1169",
                                  type: "Top>Unit>Currency",
                                  score_tag: "N"
                              },
                              {
                                  form: "Bosnia and Herzegovina convertible mark",
                                  id: "e51cb85b8a",
                                  variant: "marks",
                                  inip: "1165",
                                  endp: "1169",
                                  type: "Top>Unit>Currency",
                                  score_tag: "N"
                              }
                          ]
                      }
                  ]
              },
              {
                  text: "we probably will be back just to keep having healthy options on our trip",
                  segment_type: "main",
                  inip: "1176",
                  endp: "1247",
                  confidence: "100",
                  score_tag: "P+",
                  agreement: "AGREEMENT",
                  polarity_term_list: [
                      {
                          text: "healthy",
                          inip: "1221",
                          endp: "1227",
                          confidence: "100",
                          score_tag: "P+"
                      }
                  ],
                  sentimented_concept_list: [
                      {
                          form: "trip",
                          id: "24c24a6fcd",
                          variant: "trip",
                          inip: "1244",
                          endp: "1247",
                          type: "Top",
                          score_tag: "NONE"
                      }
                  ]
              }
          ],
          sentimented_entity_list: [],
          sentimented_concept_list: [
              {
                  form: "trip",
                  id: "24c24a6fcd",
                  type: "Top",
                  score_tag: "NONE"
              },
              {
                  form: "mark",
                  id: "3da7400028",
                  type: "Top>Unit>Currency",
                  score_tag: "NEU"
              },
              {
                  form: "mark",
                  id: "62986b6216",
                  type: "Top>Unit>Currency",
                  score_tag: "NEU"
              },
              {
                  form: "Bosnia and Herzegovina convertible mark",
                  id: "e51cb85b8a",
                  type: "Top>Unit>Currency",
                  score_tag: "NEU"
              }
          ]
      }
  ],
  sentimented_entity_list: [
      {
          form: "Fahrenheit",
          id: "e7ea056040",
          type: "Top>Person>LastName",
          score_tag: "NONE"
      }
  ],
  sentimented_concept_list: [
      {
          form: "cookie",
          id: "013fc458f2",
          type: "Top",
          score_tag: "NONE"
      },
      {
          form: "dessert",
          id: "0e15bbd941",
          type: "Top>Product>Food",
          score_tag: "P"
      },
      {
          form: "home",
          id: "144b5c0ed4",
          type: "Top>Location>Facility",
          score_tag: "NONE"
      },
      {
          form: "high",
          id: "20b86b5130",
          type: "Top",
          score_tag: "N"
      },
      {
          form: "trip",
          id: "24c24a6fcd",
          type: "Top",
          score_tag: "NONE"
      },
      {
          form: "haricot bean",
          id: "3ad48f52ff",
          type: "Top>LivingThing>Flora",
          score_tag: "N"
      },
      {
          form: "mark",
          id: "3da7400028",
          type: "Top>Unit>Currency",
          score_tag: "NEU"
      },
      {
          form: "hobby",
          id: "40fe5b6f4f",
          type: "Top",
          score_tag: "NONE"
      },
      {
          form: "biscuit",
          id: "4a94287f03",
          type: "Top>Product>Food>CookedPlate",
          score_tag: "NONE"
      },
      {
          form: "temperature",
          id: "4f38a5e551",
          type: "Top>Unit>TemperatureUnit",
          score_tag: "NONE"
      },
      {
          form: "bean",
          id: "50e400d30f",
          type: "Top>LivingThing>Flora",
          score_tag: "N"
      },
      {
          form: "special",
          id: "50eb1ae4a1",
          type: "Top>Product>CulturalProduct>Broadcast",
          score_tag: "NONE"
      },
      {
          form: "soup",
          id: "5ff62dbed8",
          type: "Top>Product>Food>CookedPlate",
          score_tag: "NONE"
      },
      {
          form: "mark",
          id: "62986b6216",
          type: "Top>Unit>Currency",
          score_tag: "NEU"
      },
      {
          form: "husband",
          id: "6a17861b62",
          type: "Top>Person",
          score_tag: "P"
      },
      {
          form: "bone",
          id: "6b3f1a85db",
          type: "Top>LivingThing>BodyPart",
          score_tag: "NONE"
      },
      {
          form: "chocolate",
          id: "6f1fcb5c4b",
          type: "Top>Product>Food>CookedPlate",
          score_tag: "P+"
      },
      {
          form: "food",
          id: "771eeaec8b",
          type: "Top>Product>Food",
          score_tag: "NEU"
      },
      {
          form: "friendly",
          id: "7b0868ee2d",
          type: "Top",
          score_tag: "P+"
      },
      {
          form: "medium",
          id: "8571b0f310",
          type: "Top>OtherEntity>Vocation",
          score_tag: "NONE"
      },
      {
          form: "egg",
          id: "8867ce7eaa",
          type: "Top>Product>Food",
          score_tag: "NONE"
      },
      {
          form: "bacon",
          id: "8bbdb7a2ae",
          type: "Top>Product>Food>Meat",
          score_tag: "P"
      },
      {
          form: "ton",
          id: "9748805737",
          type: "Top>Unit>WeightUnit",
          score_tag: "NONE"
      },
      {
          form: "$",
          id: "^__9145003407816029121",
          type: "Top>Unit>Currency",
          score_tag: "NONE"
      },
      {
          form: "service",
          id: "a391139963",
          type: "Top>Product>ProfessionalService",
          score_tag: "P"
      },
      {
          form: "pancake",
          id: "b14fbc9dc6",
          type: "Top>Product>Food>CookedPlate",
          score_tag: "N"
      },
      {
          form: "average",
          id: "ca8c5188a3",
          type: "Top",
          score_tag: "NEU"
      },
      {
          form: "pudding",
          id: "d11f107f01",
          type: "Top>Product>Food>CookedPlate",
          score_tag: "P+"
      },
      {
          form: "avocado",
          id: "d78df52f6f",
          type: "Top>Product>Food>FruitOrVegetable",
          score_tag: "P"
      },
      {
          form: "steak",
          id: "dd20ed8da2",
          type: "Top>Product>Food>Meat",
          score_tag: "P"
      },
      {
          form: "bean",
          id: "df43a5e0ed",
          type: "Top>Product>Food>Legume",
          score_tag: "N"
      },
      {
          form: "Bosnia and Herzegovina convertible mark",
          id: "e51cb85b8a",
          type: "Top>Unit>Currency",
          score_tag: "NEU"
      },
      {
          form: "chip",
          id: "ee9305a575",
          type: "Top>Product",
          score_tag: "NONE"
      },
      {
          form: "toast",
          id: "f85b48fe29",
          type: "Top>Product>Food>CookedPlate",
          score_tag: "NEU"
      }
  ]

}



Great service, high prices, slightly above average food. I had the steak and eggs, and the steak was a little over cooked for my liking (medium well). The eggs were ok but nothing special; however, the avocado that came with it was really good. The black beans that came with it were cold; clearly by design, but it surprised me and was a put off.\n\nMy wife had the avocado toast, after they told us they had just run out of the protein pancakes. She liked the toast but said it wasn't anything to write home about.\n\nWe also got some bacon to split, which was reasonably priced at $3 for three strips, but the bacon strips were pretty thin. There just wasn't a lot to it. The bone broth was scalding hot, and didn't have a ton of flavor, but it was nice and warming with the near zero degree (Fahrenheit) temperatures outside.\n\nWe grabbed some small desserts that they had; my wife had the collagen chocolate pudding which my wife loved. I had the raw chocolate chip cookie dough; it was very dense but the taste was really good.\n\nStaff was really nice and friendly, and it was great to find some healthy options while traveling. I can't give it the highest marks, but we will probably be back just to keep having healthy options on our trip.

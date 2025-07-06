const menuData = {
    // Category: Appetizer
    "Appetizer": [
      { 
        "name": "Combination of three small appetizers", 
        "image": "/images/comboAppetizer.jpg", 
        "description": "Hummus, olovieh, stuffed grage leaves or kashko bademjan.", 
        "price": "$11.99" 
      },
      { 
        "name": "Hummus", 
        "image": "/images/hummus.jpg", 
        "description": "A dip made of garbanzo beans, tahini sauce (sesame seed paste), olive oil, garlic, and lemon juice served with pita bread.", 
        "price": "$7.99" 
      },
      // { 
      //   "name": "Stuffed Grape Leaves", 
      //   "image": "/images/dolmeh.jpg", 
      //   "description": "Grape leaves stuffed with rice, chopped onions, dill weed, olive oil, mint, and spices.", 
      //   "price": "$7.99"
      // },
      { 
        "name": "Tahdig", 
        "image": "/images/tahdig.jpg", 
        "description": "Crispy and crunchy crust of rice.", 
        "price": "On its own ...... $5.99 <br> Tahdig plus a choice of stew ...... $12.99"
      },
      { 
        "name": "Kashko Bademjan", 
        "image": "/images/kashko.jpg", 
        "description": "Sautéed eggplant mixed with onion, garlic, and whey (kashk), served with pita bread.", 
        "price": "$9.99"
      },
      { 
        "name": "Masto Khiar", 
        "image": "/images/khiar.jpg", 
        "description": "Homemade yogurt with chopped cucumber and mint.", 
        "price": "Small (8oz) ...... $5.00 <br> Large (16oz) ...... $7.00"
      },
      { 
        "name": "Masto Moosir", 
        "image": "/images/moosir.jpg", 
        "description": "Homemade yogurt with shallots.", 
        "price": "Small (8oz) ...... $7.00 <br> Large (16oz) ...... $9.00"
      },
      { 
        "name": "Olovieh", 
        "image": "/images/olovieh.jpg", 
        "description": "Persian chicken and potato salad mixed with eggs, sweet peas, and pickles served with pita bread.", 
        "price": "$10.00"
      },
      { 
        "name": "Naan Panir Sabzi", 
        "image": "/images/sabzi.jpg", 
        "description": "A delightful mix of top-grade Bulgarian feta cheese, walnuts, parsley, radishes, and scallions served with pita bread.", 
        "price": "Small ...... $7.00 <br> Large ...... $10.00"
      }
    ],

    // Category: Soup and Salad
    "Soup and Salad": [
      { 
        "name": "Ash Reshteh", 
        "image": "/images/ash.jpg", 
        "description": "Traditional persian vegetable and noodle soup with a cilantro base and chickpeas, lentils, and kidney beans.",
        "price": "Small ...... $5.00 <br> Large ...... $8.00"
      },
      { 
        "name": "Shirazi Salad", 
        "image": "/images/shirazi.jpg", 
        "description": "Diced tomatoes, onions, cucumbers, and parsley with our special dressing.",
        "price": "Small ...... $5.50 <br> Large ...... $7.50"
      },
      { 
        "name": "Greek Salad", 
        "image": "/images/greek.jpg", 
        "description": "Combination of romaine lettuce, tomatoes, feta cheese, olives, onions, and cucumbers.",
        "price": "Small ...... $8.50 <br> Large ...... $12.50"
      },
      { 
        "name": "Ceasar Salad", 
        "image": "/images/ceasar.jpg", 
        "description": "Romaine lettuce, croutons, and grated cheese.",
        "price": "Small ...... $8.50 <br> Large ...... $12.50"
      },
      { 
        "name": "House Salad", 
        "image": "/images/house.jpg", 
        "description": "",
        "price": "Small ...... $7.50 <br> Large ...... $9.50"
      },
    ],

    // Category: Kabob Entrée
    "Kabob Entree": [
      { 
        "name": "Koobideh", 
        "image": "/images/koobideh.jpg", 
        "description": "Famous Persian ground beef kabob with a hint of onion flavor.",
        "price":"$16.50"
      },
      { 
        "name": "Chicken Kabob", 
        "image": "/images/chicken.jpg", 
        "description": "Marinated chicken tenders with saffron flavor, and grilled to perfection.",
        "price":"$15.50"
      },
      { 
        "name": "Beef Shish Kabob", 
        "image": "/images/beef.jpg", 
        "description": "Chunks of marinated juicy beef tenderloin.",
        "price":"$25.99"
      },
      { 
        "name": "Barg Kabob", 
        "image": "/images/barg.jpg", 
        "description": "Thin cuts of beef tenderloin strips grilled over open flame.",
        "price":"$27.99"
      },
      { 
        "name": "Lamb Loin Kabob", 
        "image": "/images/lamb.jpg", 
        "description": "Tender chunks of lamb tenderloin marinated and charcoal grilled.",
        "price":"$23.99"
      },
    ],

    // Category: Kabob Combination
    "Kabob Combination": [
      { 
        "name": "Kase Kabob", 
        "image": "/images/kase.jpg", 
        "description": "Mix of chicken kabob, koobideh kabob and lamb loin kabob with grilled veggies.",
        "price":"$32.99"
      },
      { 
        "name": "Sultani Kabob (Barg and Koobideh)", 
        "image": "/images/sultani.jpg", 
        "description": "A royal Persian dish featuring a skewer of Koobideh and a skewer of Barg (filet mignon) served with rice and grilled tomato.",
        "price":"$30.99"
      },
      { 
        "name": "Chicken and Koobideh", 
        "image": "/images/chickenkoobideh.jpg", 
        "description": "A combination of one skewer of Koobideh and one skewer of chicken Kabob, served with basmati rice and grilled tomato.",
        "price":"$19.99"
      },
      { 
        "name": "Lamb Loin and Chicken", 
        "image": "/images/lambchicken.jpg", 
        "description": "A combination entree of chicken and lamb loin kabob",
        "price":"$28.99"
      },
      { 
        "name": "Lamb Loin and Koobideh", 
        "image": "/images/lambkoobideh.jpg", 
        "description": "A combination entree of lamb and koobideh kabob",
        "price":"$26.99"
      },
      { 
        "name": "Barg and Chicken", 
        "image": "/images/bargchicken.jpg", 
        "description": "A combination of entree of barg and chicken kabob",
        "price":"$33.99"
      },
      { 
        "name": "Shrimp and Chicken", 
        "image": "/images/shrimpchicken.jpg", 
        "description": "A combination of entree of shrimp and chicken kabob",
        "price":"$28.99"
      },
      { 
        "name": "house Special (Chicken, Barg and Koobideh", 
        "image": "/images/housespecial.jpg", 
        "description": "A combination of entree of barg, chicken and koobideh kabob",
        "price":"37.99"
      },
      { 
        "name": "Family Platter", 
        "image": "/images/familyplatter.jpg", 
        "description": "Four skewers of koobideh, three skewers of chicken and complementary side (Choice between Shirazi salad or Masto Khiar) - serves 3-4 people.",
        "price":"56.99"
      },
    ],

    //Category, Seafoood
    "Seafood":[
      { 
        "name": "Shrimp Kabob", 
        "image": "/images/shrimp.jpg", 
        "description": "Seasoned shrimp served with grilled vegetables and cocktail sauce.",
        "price":"$20.50"
      },
      { 
        "name": "Broiled Salmon", 
        "image": "/images/salmon.jpg", 
        "description": "Marinated flavorful salmon broiled in olive oil and served with basmati dill rice.",
        "price":"$20.99"
      },
    ],

    //category, persian stew
    "Persian Stew":[
      { 
        "name": "Gheymeh", 
        "image": "/images/gheymeh.jpg", 
        "description": "Sautéed beef and onions stewed with yellow split peas simmered in our special tomato sauce.",
        "price":"$16.99"
      },
      { 
        "name": "Bademjan with Meat", 
        "image": "/images/bademjan.jpg", 
        "description": "Sautéed eggplant and onions flavored with sour grapes, simmered in our special tomato sauce.",
        "price":"$17.99"
      },
      { 
        "name": "Gheymeh Bademjan", 
        "image": "/images/gheymehbademjan.jpg", 
        "description": "Sautéed eggplant, beef and onions stewed with yellow split peas, simmered in our special tomato sauce.",
        "price":"$17.99"
      },
      { 
        "name": "Ghormeh Sabzi", 
        "image": "/images/ghormeh.jpg", 
        "description": "A unique blend of parsley, green onions, beef, kidney beans, and an array of various herbs, sautéed and then stewed in a special sauce with dried limes.",
        "price":"$17.99"
      },
      { 
        "name": "Fesenjan with Chicken", 
        "image": "/images/fesenjan.jpg", 
        "description": "Sautéed chicken tenders and walnuts simmered in our delicious sweet and sour pomegranate sauce.",
        "price":"$18.99"
      },
      { 
        "name": "Zereshk Polo Morgh", 
        "image": "/images/morgh.jpg", 
        "description": "Chicken legs and carrots boiled in saffron sauce, traditionally served with sweet and sour barberry rice.",
        "price":"$18.99"
      },
      { 
        "name": "Lamb Shanks", 
        "image": "/images/shanks.jpg", 
        "description": "Stewed lamb shanks served with fragrant basmati rice mixed with dill weed and a side of torshi.",
        "price":"$21.99"
      },
    ],

    //specialty rice
    "Specialty Rice":[
      { 
        "name": "Fluffy Basmati Rice", 
        "image": "/images/rice.jpg", 
        "description": "Aromatic rice cooked Persian-style.",
        "price":"$4.50"
      },
      { 
        "name": "Albalo Polo", 
        "image": "/images/albalo.jpg", 
        "description": "Basmati rice mixed with black cherries.",
        "price":"$8.00"
      },
      { 
        "name": "Zereshk Polo", 
        "image": "/images/zereshkpolo.jpg", 
        "description": "Basmati rice mixed with red sweet and sour barberries.",
        "price":"$8.00"
      },
      { 
        "name": "Baghali Polo", 
        "image": "/images/baghalipolo.jpg", 
        "description": "Basmati rice mixed with fava beans.",
        "price":"$8.00"
      },
      { 
        "name": "Shevid Polo", 
        "image": "/images/shevidpolo.jpg", 
        "description": "Basmati rice mixed with dill.",
        "price":"$6.00"
      },
    ],

    //Side orders
    "Side Orders":[

      { 
        "name": "Masto Khiar", 
        "image": "/images/mastoKhiar.jpg", 
        "description": "Yoghurt mixed with diced cucambers and mint.",
        "price":"Small ...... $5.00 <br> Large ....... $7.00"
      },
      { 
        "name": "Extra Bread", 
        "image": "/images/bread.jpg", 
        "description": "",
        "price":"$1.00 (each)"
      },
      { 
        "name": "Extra Cheese", 
        "image": "/images/cheese.jpg", 
        "description": "",
        "price":"2.00"
      },
      { 
        "name": "Onion", 
        "image": "/images/onion.jpg", 
        "description": "",
        "price":"2.00"
      },
      { 
        "name": "Grilled Vegetables", 
        "image": "/images/skveggie.jpg", 
        "description": "Combination of onions, green and red bell peppers, and mushrooms.",
        "price":"$7.50"
      },
      { 
        "name": "Koobideh Kabob Skewer", 
        "image": "/images/skkoobideh.jpg", 
        "description": "",
        "price":"$7.99"
      },
      { 
        "name": "Chicken Kabob Skewer", 
        "image": "/images/skchicken.jpg", 
        "description": "",
        "price":"$11.99"
      },
      { 
        "name": "Lamb Loin Kabob Skewer", 
        "image": "/images/sklamb.jpg", 
        "description": "",
        "price":"$20.99"
      },
      { 
        "name": "Barg Kabob Skewer", 
        "image": "/images/skbarg.jpg", 
        "description": "",
        "price":"$24.99"
      },
      { 
        "name": "Shrimp Kabob Skewer", 
        "image": "/images/skshrimp.jpg", 
        "description": "",
        "price":"$15.99"
      },
      { 
        "name": "Beef Shish Kabob Skewer", 
        "image": "/images/skbeef.jpg", 
        "description": "",
        "price":"$23.50"
      },
      { 
        "name": "Salmon", 
        "image": "/images/piecesalmon.jpg", 
        "description": "",
        "price":"$15.99"
      },
      { 
        "name": "Mushroom Kabob Skewer", 
        "image": "/images/skmushroom.jpg", 
        "description": "",
        "price":"$6.99"
      },
      { 
        "name": "Tomato Kabob Skewer", 
        "image": "/images/sktomato.jpg", 
        "description": "",
        "price":"$6.99"
      },
      { 
        "name": "Onion Kabob Skewer", 
        "image": "/images/skonion.jpg", 
        "description": "",
        "price":"$5.99"
      },
    ],

    //Drinks and Desserts
    "Drinks and Desserts":[
      // { 
      //   "name": "Abali Dough", 
      //   "image": "/images/abali.jpg", 
      //   "description": "Carbonated Persian yoghurt drink.",
      //   "price":"$3.50"
      // },
      { 
        "name": "Homemade Dough", 
        "image": "/images/dough.jpg", 
        "description": "Persian yoghurt drink.",
        "price":"Cup ...... $3.50 <br> Gallon ...... $9.00"
      },
      { 
        "name": "Juice", 
        "image": "/images/cranberry.jpg", 
        "description": "",
        "price":"$2.50"
      },
      { 
        "name": "Soda", 
        "image": "/images/soda.jpg", 
        "description": "",
        "price":"$3.00"
      },
      { 
        "name": "Lemonade", 
        "image": "/images/lemonade.jpg", 
        "description": "",
        "price":"$3.50"
      },
      { 
        "name": "Persian Hot Tea", 
        "image": "/images/tea.jpg", 
        "description": "Cardamom falvored tea.",
        "price":"$3.50"
      },
      { 
        "name": "Persian Iced Tea", 
        "image": "/images/icedtea.jpg", 
        "description": "",
        "price":"$3.50"
      },
      { 
        "name": "Akbar Mashti", 
        "image": "/images/icecream.jpg", 
        "description": "Persian ice cream made with fresh cream, saffron, and rose water.",
        "price":"$7.00"
      },
      { 
        "name": "Baklava", 
        "image": "/images/baklava.jpg", 
        "description": "Delicate Persian Pastry.",
        "price":"$6.00"
      },
      
    ]

};

// Export this if using in a React or Node.js app
export default menuData;

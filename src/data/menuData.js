const menuData = {
    // Category: Appetizer
    "Appetizer": [
      { 
        "name": "Hummus", 
        "image": "/images/hummus.jpg", 
        "description": "A dip made of garbanzo beans, tahini sauce (sesame seed paste), olive oil, garlic, and lemon juice served with pita bread.", 
        "price": "$5.99" 
      },
      { 
        "name": "Stuffed Grape Leaves", 
        "image": "/images/dolmeh.jpg", 
        "description": "Grape leaves stuffed with rice, chopped onions, dill weed, olive oil, mint, and spices.", 
        "price": "$7.99"
      },
      { 
        "name": "Tahdig", 
        "image": "/images/tahdig.jpg", 
        "description": "Crispy and crunchy crust of rice.", 
        "price": "On its own ...... $3.99 <br> Tahdig plus a choice of stew ...... $10.99"
      },
      { 
        "name": "Kashko Bademjan", 
        "image": "/images/kashko.jpg", 
        "description": "Sautéed eggplant mixed with onion, garlic, and whey (kashk), served with pita bread.", 
        "price": "$7.99"
      },
      { 
        "name": "Masto Khiar", 
        "image": "/images/khiar.jpg", 
        "description": "Homemade yogurt with chopped cucumber and mint.", 
        "price": "Small (8oz) ...... $2.99 <br> Large (16oz) ...... $4.50"
      },
      { 
        "name": "Masto Moosir", 
        "image": "/images/moosir.jpg", 
        "description": "Homemade yogurt with shallots.", 
        "price": "Small (8oz) ...... $5.50 <br> Large (16oz) ...... $7.99"
      },
      { 
        "name": "Olovieh", 
        "image": "/images/olovieh.jpg", 
        "description": "Persian chicken and potato salad mixed with eggs, sweet peas, and pickles served with pita bread.", 
        "price": "$7.50"
      },
      { 
        "name": "Naan Panir Sabzi", 
        "image": "/images/sabzi.jpg", 
        "description": "A delightful mix of top-grade Bulgarian feta cheese, walnuts, parsley, radishes, and scallions served with pita bread.", 
        "price": "Small ...... $5.50 <br> Large ...... $8.00"
      }
    ],

    // Category: Soup and Salad
    "Soup and Salad": [
      { 
        "name": "Ash Reshteh", 
        "image": "/images/ash.jpg", 
        "description": "Traditional persian vegetable and noodle soup with a cilantro base and chickpeas, lentils, and kidney beans.",
        "price": "$5.99"
      },
      { 
        "name": "Shirazi Salad", 
        "image": "/images/shirazi.jpg", 
        "description": "Diced tomatoes, onions, cucumbers, and parsley with our special dressing.",
        "price": "Small ...... $3.50 <br> Large ...... $4.99"
      },
      { 
        "name": "Greek Salad", 
        "image": "/images/greek.jpg", 
        "description": "Combination of romaine lettuce, tomatoes, feta cheese, olives, onions, and cucumbers.",
        "price": "Small ...... $6.50 <br> Large ...... $10.50"
      },
      { 
        "name": "Ceasar Salad", 
        "image": "/images/ceasar.jpg", 
        "description": "Romaine lettuce, croutons, and grated cheese.",
        "price": "Small ...... $6.50 <br> Large ...... $10.50"
      },
      { 
        "name": "House Salad", 
        "image": "/images/house.jpg", 
        "description": "",
        "price": "Small ...... $5.50 <br> Large ...... $7.99"
      },
    ],

    // Category: Kabob Entrée
    "Kabob Entree": [
      { 
        "name": "Koobideh", 
        "image": "/images/koobideh.jpg", 
        "description": "Famous Persian ground beef kabob with a hint of onion flavor.",
        "price":"$14.50"
      },
      { 
        "name": "Chicken Kabob", 
        "image": "/images/chicken.jpg", 
        "description": "Marinated chicken tenders with saffron flavor, and grilled to perfection.",
        "price":"$13.50"
      },
      { 
        "name": "Beef Shish Kabob", 
        "image": "/images/beef.jpg", 
        "description": "Chunks of marinated juicy beef tenderloin.",
        "price":"$23.99"
      },
      { 
        "name": "Barg Kabob", 
        "image": "/images/barg.jpg", 
        "description": "Thin cuts of beef tenderloin strips grilled over open flame.",
        "price":"$25.99"
      },
      { 
        "name": "Lamb Loin Kabob", 
        "image": "/images/lamb.jpg", 
        "description": "Tender chunks of lamb tenderloin marinated and charcoal grilled.",
        "price":"$21.99"
      },
      { 
        "name": "Vegetable Kabob", 
        "image": "/images/veggie.jpg", 
        "description": "Combination of seasoned bell peppers, onions, mushrooms, and tomatoes skewered and grilled to perfection.",
        "price":"$13.50"
      },
    ],

    // Category: Kabob Combination
    "Kabob Combination": [
      { 
        "name": "Chicken and Koobideh", 
        "image": "/images/chickenkoobideh.jpg", 
        "description": "A combination of one skewer of Koobideh and one skewer of chicken Kabob, served with basmati rice and grilled tomato.",
        "price":"$17.99"
      },
      { 
        "name": "Sultani Kabob (Barg and Koobideh)", 
        "image": "/images/sultani.jpg", 
        "description": "A royal Persian dish featuring a skewer of Koobideh and a skewer of Barg (filet mignon) served with rice and grilled tomato.",
        "price":"$28.99"
      },
      { 
        "name": "Lamb Loin and Chicken", 
        "image": "/images/lambchicken.jpg", 
        "description": "A combination entree of chicken and lamb loin kabob",
        "price":"$26.99"
      },
      { 
        "name": "Lamb Loin and Koobideh", 
        "image": "/images/lambkoobideh.jpg", 
        "description": "A combination entree of lamb and koobideh kabob",
        "price":"$24.50"
      },
      { 
        "name": "Barg and Chicken", 
        "image": "/images/bargchicken.jpg", 
        "description": "A combination of entree of barg and chicken kabob",
        "price":"$31.99"
      },
      { 
        "name": "house Special (Chicken, Barg and Koobideh", 
        "image": "/images/housespecial.jpg", 
        "description": "A combination of entree of barg, chicken and koobideh kabob",
        "price":"35.50"
      },
      { 
        "name": "Family Platter", 
        "image": "/images/familyplatter.jpg", 
        "description": "Four skewers of koobideh, three skewers of chicken and complementary side (Choice between Shirazi salad or Masto Khiar) - serves 3-4 people.",
        "price":"54.99"
      },
    ],

    //Category, Seafoood
    "Seafood":[
      { 
        "name": "Shrimp Kabob", 
        "image": "/images/shrimp.jpg", 
        "description": "Seasoned shrimp served with grilled vegetables and cocktail sauce.",
        "price":"$18.50"
      },
      { 
        "name": "Broiled Salmon", 
        "image": "/images/salmon.jpg", 
        "description": "Marinated flavorful salmon broiled in olive oil and served with basmati dill rice.",
        "price":"$18.99"
      },
    ],

    //category, persian stew
    "Persian Stew":[
      { 
        "name": "Gheymeh", 
        "image": "/images/gheymeh.jpg", 
        "description": "Sautéed beef and onions stewed with yellow split peas simmered in our special tomato sauce.",
        "price":"$14.99"
      },
      { 
        "name": "Bademjan", 
        "image": "/images/bademjan.jpg", 
        "description": "Sautéed eggplant and onions flavored with sour grapes, simmered in our special tomato sauce.",
        "price":"$14.99"
      },
      { 
        "name": "Gheymeh Bademjan", 
        "image": "/images/gheymehbademjan.jpg", 
        "description": "Sautéed eggplant, beef and onions stewed with yellow split peas, simmered in our special tomato sauce.",
        "price":"$15.99"
      },
      { 
        "name": "Ghormeh Sabzi", 
        "image": "/images/ghormeh.jpg", 
        "description": "A unique blend of parsley, green onions, beef, kidney beans, and an array of various herbs, sautéed and then stewed in a special sauce with dried limes.",
        "price":"$15.99"
      },
      { 
        "name": "Fesenjan", 
        "image": "/images/fesenjan.jpg", 
        "description": "Sautéed chicken tenders and walnuts simmered in our delicious sweet and sour pomegranate sauce.",
        "price":"$14.99"
      },
      { 
        "name": "Zereshk Polo Morgh", 
        "image": "/images/morgh.jpg", 
        "description": "Chicken legs and carrots boiled in saffron sauce, traditionally served with sweet and sour barberry rice.",
        "price":"$16.99"
      },
      { 
        "name": "Lamb Shanks", 
        "image": "/images/shanks.jpg", 
        "description": "Stewed lamb shanks served with fragrant basmati rice mixed with dill weed and a side of torshi.",
        "price":"$18.99"
      },
    ],

    //specialty rice
    "Specialty Rice":[
      { 
        "name": "Fluffy Basmati Rice", 
        "image": "/images/rice.jpg", 
        "description": "Aromatic rice cooked Persian-style.",
        "price":"$3.99"
      },
      { 
        "name": "Albalo Polo", 
        "image": "/images/albalo.jpg", 
        "description": "Basmati rice mixed with black cherries.",
        "price":"$6.75"
      },
      { 
        "name": "Zereshk Polo", 
        "image": "/images/zereshkpolo.jpg", 
        "description": "Basmati rice mixed with red sweet and sour barberries.",
        "price":"$6.75"
      },
      { 
        "name": "Baghali Polo", 
        "image": "/images/baghalipolo.jpg", 
        "description": "Basmati rice mixed with fava beans.",
        "price":"$6.25"
      },
      { 
        "name": "Shevid Polo", 
        "image": "/images/shevidpolo.jpg", 
        "description": "Basmati rice mixed with dill.",
        "price":"$5.50"
      },
    ],

    //Side orders
    "Side Orders":[

      { 
        "name": "Small Salad", 
        "image": "/images/smsalad.jpg", 
        "description": "Small house salad.",
        "price":"$5.50"
      },
      { 
        "name": "Grilled Tomato", 
        "image": "/images/tomato.jpg", 
        "description": "One whole grilled tomato.",
        "price":"$1.50"
      },
      { 
        "name": "Grilled Vegetables", 
        "image": "/images/skveggie.jpg", 
        "description": "Combination of onions, green and red bell peppers, and mushrooms.",
        "price":"$5.50"
      },
      { 
        "name": "Koobideh Kabob Skewer", 
        "image": "/images/skkoobideh.jpg", 
        "description": "",
        "price":"$5.99"
      },
      { 
        "name": "Chicken Kabob Skewer", 
        "image": "/images/skchicken.jpg", 
        "description": "",
        "price":"$9.50"
      },
      { 
        "name": "Lamb Loin Kabob Skewer", 
        "image": "/images/sklamb.jpg", 
        "description": "",
        "price":"$18.50"
      },
      { 
        "name": "Barg Kabob Skewer", 
        "image": "/images/skbarg.jpg", 
        "description": "",
        "price":"$22.50"
      },
      { 
        "name": "Shrimp Kabob Skewer", 
        "image": "/images/skshrimp.jpg", 
        "description": "",
        "price":"$13.99"
      },
      { 
        "name": "Mushroom Kabob Skewer", 
        "image": "/images/skmushroom.jpg", 
        "description": "",
        "price":"$3.99"
      },
      { 
        "name": "Tomato Kabob Skewer", 
        "image": "/images/sktomato.jpg", 
        "description": "",
        "price":"$4.99"
      },
      { 
        "name": "Onion Kabob Skewer", 
        "image": "/images/skonion.jpg", 
        "description": "",
        "price":"$3.99"
      },
    ],

    //Drinks and Desserts
    "Drinks and Desserts":[
      { 
        "name": "Abali Dough", 
        "image": "/images/abali.jpg", 
        "description": "Carbonated Persian yoghurt drink.",
        "price":"$3.50"
      },
      { 
        "name": "Homemade Dough", 
        "image": "/images/dough.jpg", 
        "description": "Persian yoghurt drink.",
        "price":"$2.50"
      },
      { 
        "name": "Cranberry Juice", 
        "image": "/images/cranberry.jpg", 
        "description": "",
        "price":"$1.99"
      },
      { 
        "name": "Soda", 
        "image": "/images/soda.jpg", 
        "description": "",
        "price":"$2.50"
      },
      { 
        "name": "Lemonade", 
        "image": "/images/lemonade.jpg", 
        "description": "",
        "price":"$2.50"
      },
      { 
        "name": "Persian Hot Tea", 
        "image": "/images/tea.jpg", 
        "description": "Cardamom falvored tea.",
        "price":"$2.50"
      },
      { 
        "name": "Apple Juice", 
        "image": "/images/apple.jpg", 
        "description": "",
        "price":"$1.99"
      },
      { 
        "name": "Persian Iced Tea", 
        "image": "/images/icedtea.jpg", 
        "description": "",
        "price":"$2.50"
      },
      { 
        "name": "Akbar Mashti", 
        "image": "/images/icecream.jpg", 
        "description": "Persian ice cream made with fresh cream, saffron, and rose water.",
        "price":"$5.50"
      },
      { 
        "name": "Baklava", 
        "image": "/images/baklava.jpg", 
        "description": "Delicate Persian Pastry.",
        "price":"$4.50"
      },
      
    ]

};

// Export this if using in a React or Node.js app
export default menuData;

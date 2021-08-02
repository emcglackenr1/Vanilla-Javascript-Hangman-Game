var gameWords = [
        “Assistant” ,
        “Day” ,
        “Freezing” ,
        “Gastropod” ,
        “Ischemia” ,
        “Monkey” ,
        “Partner” ,
        “Treaty” ,
        “Uniformity” ,
        “Wink” ,
        “Candle” ,
        “Chart” ,
        “Democrat” ,
        “Dispute” ,
        “Examiner” ,
        “Graduate” ,
        “Hard-Hat” ,
        “Product” ,
        “Cube” ,
        “Street” ,
        “Flash” ,
        “Smell” ,
        “Foundation” ,
        “Blush” ,
        “Cardboard” ,
        “Chasuble” ,
        “Comprehension” ,
        “Dialect” ,
        “Fix” ,
        “Homeownership” ,
        “Pistol” ,
        “Styling” ,
        “Assignment” ,
        “Breakdown” ,
        “Eavesdropper” ,
        “Eel” ,
        “Melody” ,
        “Meteor” ,
        “Resume” ,
        “Temporary” ,
        “Warlord” ,
        “Watermelon” ,
        “Cabin” ,
        “Dancing” ,
        “Engineer” ,
        “Girl” ,
        “Goodwill” ,
        “Laptop” ,
        “Panties” ,
        “Raincoat” ,
        “Sex” ,
        “Zoo” ,
        “Bidet” ,
        “Debt” ,
        “Futon” ,
        “Outfit” ,
        “Paw” ,
        “Quartz” ,
        “Repeat” ,
        “Scholar” ,
        “Subgroup” ,
        “Weapon” ,
        “William Shakespeare” ,
        “Charles Dickens” ,
        “Mark Twain” ,
        “Edgar Allan Poe” ,
        “Chess” ,
        “Oscar Wilde” ,
        “Netflix” ,
        “Amazon” ,
        “Prime” ,
        “Audiobook” ,
        “Facebook” ,
        “Instagram” ,
        “Aristotle” ,
        “Alexander The Great” ,
        “Henry Viii” ,
        “Charles Darwin” ,
        “Karl Marx” ,
        “Julius Caesar” ,
        “Queen Victoria” ,
        “Martin Luther” ,
        “Joseph Stalin” ,
        “Albert Einstein” ,
        “Leonardo Da Vinci” ,
        “Michelangelo” ,
        “Rembrandt” ,
        “Albrecht Dürer” ,
        “Vincent Van Gogh” ,
        “Pablo Picasso “ ,
        “Andy Warhol” ,
        “Jackson Pollock” ,
        “Salvador Dalí” ,
        “Georgia O'Keeffe” ,
        “Broad” ,
        “Disposal” ,
        “Eyelash” ,
        “Fairy” ,
        “Formula” ,
        “Helo” ,
        “Porcupine” ,
        “Scrutiny” ,
        “Waiting” ,
        “Washbasin” ,
        “Cemetery” ,
        “Closure” ,
        “Elbow” ,
        “Neonate” ,
        “Neuron” ,
        “Originality” ,
        “Outfielder” ,
        “Pouch” ,
        “Pump” ,
        “Wetsuit” ,
        “Nerd” ,
        “Addition” ,
        “Childhood” ,
        “Compass” ,
        “Diplomacy” ,
        “Inversion” ,
        “Outlook” ,
        “Puma” ,
        “Trophy” ,
        “Caddy” ,
        “Chauffeur” ,
        “Complex” ,
        “Hare” ,
        “Knee” ,
        “Pinot” ,
        “Read” ,
        “Slump” ,
        “Text” ,
        “Apron” ,
        “Blend” ,
        “Boot” ,
        “Certainty” ,
        “Copyright” ,
        “Hardware” ,
        “Rag” ,
        “Shadow” ,
        “Pug” ,
        “Beak” ,
        “Snout” ,
        “Nostril” ,
        “Hump” ,
        “Reindeer” ,
        “Fuse” ,
        “Complexion” ,
        “Mustache” ,
        “Muzzle” ,
        “Beard” ,
        “Scent” ,
        “Thick” ,
        “Tail” ,
        “Narrow” ,
        “Hound” ,
        “Bat” ,
        “Scar” ,
        “Throttle” ,
        “Windshield” ,
        “Gaping” ,
        “Hog” ,
        “Dive” ,
        “Shovel” ,
        “Rank” ,
        “Leaf” ,
        “Viper” ,
        “Mole” ,
        “Red” ,
        “Monkey” ,
        “Holster” ,
        “Leopard” ,
        “Revolver” ,
        “Sinus” ,
        “Chameleon” ,
        “Chin” ,
        “Shrew” ,
        “Flat” ,
        “Horseshoe” ,
        “Wrinkle” ,
        “Poke” ,
        “Moustache” ,
        “Forehead” ,
        “Lizard” ,
        “Hawk” ,
        “Turnip” ,
        “Cabbage” ,
        “Cucumber” ,
        “Pea” ,
        “Potato” ,
        “Garlic” ,
        “Vegetable” ,
        “Sprout” ,
        “Tomato” ,
        “Salad” ,
        “Pumpkin” ,
        “Pepper” ,
        “Stew” ,
        “Mutton” ,
        “Bean” ,
        “Beef” ,
        “Melon” ,
        “Slice” ,
        “Broth” ,
        “Barley” ,
        “Juice” ,
        “Soup” ,
        “Soybean” ,
        “Sauce” ,
        “Pork” ,
        “Oat” ,
        “Mushroom” ,
        “Yam” ,
        “Pickle” ,
        “Pineapple” ,
        “Vinegar” ,
        “Mango” ,
        “Legume” ,
        “Raisin” ,
        “Peanut” ,
        “Soy” ,
        “Noodle” ,
        “Ingredient” ,
        “Austria” ,
        “Belgium” ,
        “Latvia” ,
        “Bulgaria” ,
        “Lithuania” ,
        “Croatia” ,
        “Luxembourg” ,
        “Netherlands” ,
        “Denmark” ,
        “Poland” ,
        “Estonia” ,
        “Portugal” ,
        “Finland” ,
        “Romania” ,
        “France” ,
        “Germany” ,
        “Greece” ,
        “Spain” ,
        “Hungary” ,
        “Sweden” ,
        “Ireland” ,
        “Africa” ,
        “Agent” ,
        “Air” ,
        “Alien” ,
        “Alps” ,
        “Amazon” ,
        “Ambulance” ,
        “America” ,
        “Angel” ,
        “Antarctica” ,
        “Apple” ,
        “Arm” ,
        “Atlantis” ,
        “Australia” ,
        “Aztec” ,
        “Back” ,
        “Ball” ,
        “Band” ,
        “Bank” ,
        “Bar” ,
        “Bark” ,
        “Bat” ,
        “Battery” ,
        “Beach” ,
        “Bear” ,
        “Beat” ,
        “Bed” ,
        “Beijing” ,
        “Bell” ,
        “Belt” ,
        “Berlin” ,
        “Bermuda” ,
        “Berry” ,
        “Bill” ,
        “Block” ,
        “Board” ,
        “Bolt” ,
        “Bomb” ,
        “Bond” ,
        “Boom” ,
        “Boot” ,
        “Bottle” ,
        “Bow” ,
        “Box” ,
        “Bridge” ,
        “Brush” ,
        “Buck” ,
        “Buffalo” ,
        “Bug” ,
        “Bugle” ,
        “Button” ,
        “Calf” ,
        “Canada” ,
        “Cap” ,
        “Capital” ,
        “Car” ,
        “Card” ,
        “Carrot” ,
        “Casino” ,
        “Cast” ,
        “Cat” ,
        “Cell” ,
        “Centaur” ,
        “Center” ,
        “Chair” ,
        “Change” ,
        “Charge” ,
        “Check” ,
        “Chest” ,
        “Chick” ,
        “China” ,
        “Chocolate” ,
        “Church” ,
        “Circle” ,
        “Cliff” ,
        “Cloak” ,
        “Club” ,
        “Code” ,
        “Cold” ,
        “Comic” ,
        “Compound” ,
        “Concert” ,
        “Conductor” ,
        “Contract” ,
        “Cook” ,
        “Copper” ,
        “Cotton” ,
        “Court” ,
        “Cover” ,
        “Crane” ,
        “Crash” ,
        “Cricket” ,
        “Cross” ,
        “Crown” ,
        “Cycle” ,
        “Czech” ,
        “Dance” ,
        “Date” ,
        “Day” ,
        “Death” ,
        “Deck” ,
        “Degree” ,
        “Diamond” ,
        “Dice” ,
        “Dinosaur” ,
        “Disease” ,
        “Doctor” ,
        “Dog” ,
        “Draft” ,
        “Dragon” ,
        “Dress” ,
        “Drill” ,
        “Drop” ,
        “Duck” ,
        “Dwarf” ,
        “Eagle” ,
        “Egypt” ,
        “Embassy” ,
        “Engine” ,
        “England” ,
        “Europe” ,
        “Eye” ,
        “Face” ,
        “Fair” ,
        “Fall” ,
        “Fan” ,
        “Fence” ,
        “Field” ,
        “Fighter” ,
        “Figure” ,
        “File” ,
        “Film” ,
        “Fire” ,
        “Fish” ,
        “Flute” ,
        “Fly” ,
        “Foot” ,
        “Force” ,
        “Forest” ,
        “Fork” ,
        “France” ,
        “Game” ,
        “Gas” ,
        “Genius” ,
        “Germany” ,
        “Ghost” ,
        “Giant” ,
        “Glass” ,
        “Glove” ,
        “Gold” ,
        “Grace” ,
        “Grass” ,
        “Greece” ,
        “Green” ,
        “Ground” ,
        “Ham” ,
        “Hand” ,
        “Hawk” ,
        “Head” ,
        “Heart” ,
        “Helicopter” ,
        “Himalayas” ,
        “Hole” ,
        “Hollywood” ,
        “Honey” ,
        “Hood” ,
        “Hook” ,
        “Horn” ,
        “Horse” ,
        “Horseshoe” ,
        “Hospital” ,
        “Hotel” ,
        “Ice” ,
        “Ice Cream” ,
        “India” ,
        “Iron” ,
        “Ivory” ,
        “Jack” ,
        “Jam” ,
        “Jet” ,
        “Jupiter” ,
        “Kangaroo” ,
        “Ketchup” ,
        “Key” ,
        “Kid” ,
        “King” ,
        “Kiwi” ,
        “Knife” ,
        “Knight” ,
        “Lab” ,
        “Lap” ,
        “Laser” ,
        “Lawyer” ,
        “Lead” ,
        “Lemon” ,
        “Leprechaun” ,
        “Life” ,
        “Light” ,
        “Limousine” ,
        “Line” ,
        “Link” ,
        “Lion” ,
        “Litter” ,
        “Loch Ness” ,
        “Lock” ,
        “Log” ,
        “London” ,
        “Luck” ,
        “Mail” ,
        “Mammoth” ,
        “Maple” ,
        “Marble” ,
        “March” ,
        “Mass” ,
        “Match” ,
        “Mercury” ,
        “Mexico” ,
        “Microscope” ,
        “Millionaire” ,
        “Mine” ,
        “Mint” ,
        “Missile” ,
        “Model” ,
        “Mole” ,
        “Moon” ,
        “Moscow” ,
        “Mount” ,
        “Mouse” ,
        “Mouth” ,
        “Mug” ,
        “Nail” ,
        “Needle” ,
        “Net” ,
        “New York” ,
        “Night” ,
        “Ninja” ,
        “Note” ,
        “Novel” ,
        “Nurse” ,
        “Nut” ,
        “Octopus” ,
        “Oil” ,
        “Olive” ,
        “Olympus” ,
        “Opera” ,
        “Orange” ,
        “Organ” ,
        “Palm” ,
        “Pan” ,
        “Pants” ,
        “Paper” ,
        “Parachute” ,
        “Park” ,
        “Part” ,
        “Pass” ,
        “Paste” ,
        “Penguin” ,
        “Phoenix” ,
        “Piano” ,
        “Pie” ,
        “Pilot” ,
        “Pin” ,
        “Pipe” ,
        “Pirate” ,
        “Pistol” ,
        “Pit” ,
        “Pitch” ,
        “Plane” ,
        “Plastic” ,
        “Plate” ,
        “Platypus” ,
        “Play” ,
        “Plot” ,
        “Point” ,
        “Poison” ,
        “Pole” ,
        “Police” ,
        “Pool” ,
        “Port” ,
        “Post” ,
        “Pound” ,
        “Press” ,
        “Princess” ,
        “Pumpkin” ,
        “Pupil” ,
        “Pyramid” ,
        “Queen” ,
        “Rabbit” ,
        “Racket” ,
        “Ray” ,
        “Revolution” ,
        “Ring” ,
        “Robin” ,
        “Robot” ,
        “Rock” ,
        “Rome” ,
        “Root” ,
        “Rose” ,
        “Roulette” ,
        “Round” ,
        “Row” ,
        “Ruler” ,
        “Satellite” ,
        “Saturn” ,
        “Scale” ,
        “School” ,
        “Scientist” ,
        “Scorpion” ,
        “Screen” ,
        “Scuba Diver” ,
        “Seal” ,
        “Server” ,
        “Shadow” ,
        “Shakespeare” ,
        “Shark” ,
        “Ship” ,
        “Shoe” ,
        “Shop” ,
        “Shot” ,
        “Sink” ,
        “Skyscraper” ,
        “Slip” ,
        “Slug” ,
        “Smuggler” ,
        “Snow” ,
        “Snowman” ,
        “Sock” ,
        “Soldier” ,
        “Soul” ,
        “Sound” ,
        “Space” ,
        “Spell” ,
        “Spider” ,
        “Spike” ,
        “Spine” ,
        “Spot” ,
        “Spring” ,
        “Spy” ,
        “Square” ,
        “Stadium” ,
        “Staff” ,
        “Star” ,
        “State” ,
        “Stick” ,
        “Stock” ,
        “Straw” ,
        “Stream” ,
        “Strike” ,
        “String” ,
        “Sub” ,
        “Suit” ,
        “Superhero” ,
        “Swing” ,
        “Switch” ,
        “Table” ,
        “Tablet” ,
        “Tag” ,
        “Tail” ,
        “Tap” ,
        “Teacher” ,
        “Telescope” ,
        “Temple” ,
        “Theater” ,
        “Thief” ,
        “Thumb” ,
        “Tick” ,
        “Tie” ,
        “Time” ,
        “Tokyo” ,
        “Tooth” ,
        “Torch” ,
        “Tower” ,
        “Track” ,
        “Train” ,
        “Triangle” ,
        “Trip” ,
        “Trunk” ,
        “Tube” ,
        “Turkey” ,
        “Undertaker” ,
        “Unicorn” ,
        “Vacuum” ,
        “Van” ,
        “Vet” ,
        “Wake” ,
        “Wall” ,
        “War” ,
        “Washer” ,
        “Washington” ,
        “Watch” ,
        “Water” ,
        “Wave” ,
        “Web” ,
        “Well” ,
        “Whale” ,
        “Whip” ,
        “Wind” ,
        “Witch” ,
        “Worm” ,
        “Yard” ,
        “Angel” ,
        “Nose” ,
        “Truck” ,
        “Olympics” ,
        “Peanut”  
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = gameWords[Math.floor(Math.random() * gameWords.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();

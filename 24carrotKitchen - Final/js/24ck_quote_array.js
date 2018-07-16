"use strict";

/*
   Module 3. Team Project

   Author: Rosanna Morey & Daniel Chrisostomo
   Due Date: June 16, 2018
   
   This script randomly generates a cooking tip from
   a list of 52 tips 
   used ch9 case3 as reference

*/

//google fonts style for quote. satisfy


var randomQ = randomInt(0, 41);
var quoteElem = document.getElementsByTagName("quote")[0];

quoteElem.innerHTML = getQuote(randomQ);

function randomInt(lowest, size) {
return Math.floor(Math.random() * 41); // returns a number 
}

function getQuote(n) {
   var quotes = [   
"Write in your cookbooks. Soup could have used more tomato?<br /> Chicken needed ten more minutes in the oven? Make a note of it & you'll never make that mistake again.",
"Master the quick pickle. Whisk a little salt & sugar into some white vinegar.<br /> Pour over thinly sliced raw vegetables. Wait 20 minutes. Eat.",
"Buy chicken thigh family pack. Chicken breasts are expensive & can get dull after a while;<br /> thighs are juicier, cheaper, & more flavorful.",
"Replace your no.stick skillet. Do your scrambled eggs slide off the pan if you don't use oil or butter?<br /> They should. Might be time for an upgrade.",
"Treat your herbs like flowers. There's nothing worse than limp herbs.<br /> Next time, trim the stems & put the parsley in a glass of water, fit a plastic bag over it, & stash it in the refrigerator.",
"Double that batch of rice (or quinoa, or bulgar, etc.).<br /> Having cooked grains in your fridge means that fried rice, pilafs, rice bowls & robust salads are just minutes away.",
"Make sure your work area is well lit. Look, the 40 watt lightbulb in your oven hood isn't going to cut it.<br /> Get a cheap clamp light from a hardware store so you can see what you are doing.",
"Buy parchment paper. What else are you going to roast your vegetables on?<br /> How else are you going to make quick dinners of fish en papillote!?",
"Stock up on super cheap, random cuts of meat.<br /> A freezer full of roasted turkey necks & bony beef cuts will ensure you always have what you need to make broth.",
"Keep your parmesan rinds & freeze them for later. Remember that thing about super cheap cuts of meat?<br /> Think of rinds as cheese bones.",
"Buy a new kitchen sponge. Existential question time:<br /> If your sponge is filthy & smells, how can you expect it get your dishes clean?", 
"Put the lid on the pot to make your water boil faster.<br /> Seems obvious, but if you don't know, now you know.",
"Use a garbage bowl.<br /> Buy a large bowl & keep it ready to fill up with egg shells & other trash generated while cooking.",
"Find the biggest mixing bowl you can & buy it for tossing a salad, mixing cookies or making meatballs.<br /> Too small a bowl makes a bigger mess.",
"Avoid evil glass cutting boards. They dull your knives & they are slippery.<br /> Use wood, bamboo or plastic instead.",
"Buy 2 loaves of bread & freeze one.<br /> Just remember: air is the enemy so wrap in foil (sliced or unsliced) & put it in a freezer bag.",
"Stop crowding your pans.<br /> Food that's crowded into a castiron skillet or sheet tray gets steamed & soggy instead of crisp.",
"Using quinoa?? The first step to building roasty, warm flavor is to toast it before you rinse it.",
"Season carrots, squash, tomatoes with sugar.<br /> They have a natural sweetness that is enhanced by a dash (just a dash!) of sugar.",
"Don't be afraid to set off the smoke alarm. Especially when cooking meat. Smoke equals char, & char is delicious.",
"Put a damp paper or kitchen towel under your cutting board to stop your board from slipping as you chop.",
"When a recipe calls for chocolate chips, chopping your own chips<br /> creates pockets of melty chocolate throughout your cookies; some small, some large, all delicious.",
"Salt your salads to add texture & make the dressing pop.",
"Cool your food before storing or else the temperature in the refrigerator will rise <br /> & the only thing that benefits is mold.",
"Don't toast your toast. Fry it. Warm some butter or olive oil over medium high heat.<br /> Lay in bread & fry until golden on both sides then sell your toaster.",
"Buy your avocados at a mexican grocery store. Those are the stores that sell them ripe.",
"Caramelize more onions than you need to. A lot more;<br /> You will use the extras in omelets, on sandwiches, on chicken, steak & pork, & in pastas & stews.",
"Get a microplane. Sick of shredding your knuckles instead of cheese?<br /> Buy a microplane for years of shredding power for about $15.",
"Switch to metal measuring cups & spoons. Plastic warps over time making them less precise.",
"Store salad greens in a resealable plastic bag with a paper towel.<br /> The towel is there to absorb moisture, which keeps your greens crisper, longer.",
"Soften your butter. Serving it cold & hard on anything, really is the one way to make butter bad.",
"Make butter better. Mix something into it<br /> like a little shallot, some chopped herbs or maybe some lemon zest and BOOM you just made compound butter.",
"Microfiber dish drying mats are better than dish racks.<br /> So is a decent dish towel because who really has space for a dish rack!?",
"If your brown sugar is rock hard, don't throw it out, revive it with a minute or so in the microwave.",
"Establish a salt bowl. Having a stash of salt always within reach when you are at the stove<br /> is the first step to being a better seasoner.",
"Bake pies in glass pie pans. It heats more evenly than tin &<br /> when your pie is perfectly golden brown everywhere, you will know it.",
"Oil, salt, roast in that order. When roasting vegetables, toss them in oil,<br /> then season with salt & pepper & toss again. This way, the seasoning actually sticks to your food.",
"Keep your veggie scraps & put them into a resealable plastic bag you keep in the freezer.<br /> When you reach critical mass, make vegetable stock.",
"Peel ginger & keep it in the freezer. Not only will it last longer, it will grate it more easily.",
"Marinate your cheese. Mozz, feta & goat cheese marinated in olive oil, chile flakes, & fresh herbs are delicious.",
"Buy a better ice cube tray. Cubes from the fridge dispenser water down your cocktails while<br /> cubes made in silicone trays are denser & keep your drinks cold for hours.",
"Taste & season at every stage of cooking. Because if you wait until the end, it’s probably too late.",
];
   
   return quotes[n];
}

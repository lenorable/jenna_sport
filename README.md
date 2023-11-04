# lenorable-api
**naam:** Lenor Hofschreuder

## description:
deze applicatie dient niet als een echte "website". hoewel ik er tijdens het werken aan deze site achter ben gekomen dat ik hier in makkelijk en goed me eigen website / moodmix zou moeten kunnen schrijven, is dit toch alleen als de server back-end van mijn smart assistant. de plek die dingen kan opslaan, beheren en antwoorden genereert door middel van het serveren van een API. 

## read me opmaak
lees meer over hoe je een document moet [opmaken](https://www.markdownguide.org/cheat-sheet/) en [meer mogelijkheden](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

## file structure 
* config/           // for storing non sensitive data
* .env/             // for storing sensitive data
* data/             // for storing saving data (should props become "/home/")

* node_modules/     // npm imported modules
* target/           // output of things
* src/              // folder for al things that are about the code and not the project in general

* controllers/      // voor het wisselen van data tussen de request handeler en het model
* middleware/       // functions to call before handeling the request or before anwsering it, think authentication!
* routes/           // like a "recourse" folder where you handdel the requests
* model/            // voor het model (soort data)

* public/           // voor alles wat zo maar public available moet zijn. te vinden op het addres dat het ook in de folder staat (vaak static. html zit vaker in views/)
* services/         // javascript services (alsof eigen modules) om herhaalde functies de definieren voor communicatie tussen front- en back-end
* scripts/          // voor javascript files
* style/	        // voor css files
* views/            // voor files die niet static zijn / niet direct berijkbaar moeten zijn

* .gitignore        // files and folders to ignore
* package-lock.json // package manger?
* package.json      // project config / info
* README.md         // this file
* server.js         // main run time

## possible improvements
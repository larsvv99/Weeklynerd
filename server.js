import * as dotenv from '@tinyhttp/dotenv'
import { App } from '@tinyhttp/app'
import { logger } from '@tinyhttp/logger'
import { Liquid } from 'liquidjs';
import serveStatic from 'serve-static';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

//data
import {
	gastsprekers,
} from "./js/data.js";

const engine = new Liquid();
const app = new App()

const __filename = fileURLToPath(import.meta.url); // Convert the URL of the current module to a file path
const __dirname = dirname(__filename); // Get the directory name of the current module

app
  .use(logger())
  .use(serveStatic(path.join(__dirname, 'src')))
  .engine('liquid', engine)
  .set('views', './views')
  .set('view engine', 'liquid')
  .listen(8080, () => console.log(`Listening on http://localhost:8080`))


  app.get('/', async (req, res) => {
    console.log(gastsprekers)
    return res.send(renderTemplate('views/index.liquid', {
      title: 'Weekly Nerd',
      gastsprekers
    }));
  });

  //Vakken

  app.get('/wafs', async (req, res) => {
      
    return res.send(renderTemplate('views/wafs.liquid', {
      title: 'Webapp from scratch',
    }));
  });

  app.get('/cttr', async (req, res) => {
      
    return res.send(renderTemplate('views/cttr.liquid', {
      title: 'CSS to the rescue',
    }));
  });

  app.get('/bt', async (req, res) => {
      
    return res.send(renderTemplate('views/bt.liquid', {
      title: 'Browser technologies',
    }));
  });

  app.get('/hack', async (req, res) => {
      
    return res.send(renderTemplate('views/hack.liquid', {
      title: 'Hack a thon',
    }));
  });

  app.get('/hcd', async (req, res) => {
      
    return res.send(renderTemplate('views/hcd.liquid', {
      title: 'Human centered design',
    }));
  });

  app.get('/api', async (req, res) => {
      
    return res.send(renderTemplate('views/api.liquid', {
      title: 'Api (Hiddengems)',
    }));
  });

  app.get('/meesterproef', async (req, res) => {
      
    return res.send(renderTemplate('views/meesterproef.liquid', {
      title: 'Bieb in Bloei',
    }));
  });

  //Gastsprekers
  // naam: "Kilian Valkhof",
	// 	titel: "Stop using JS for that",
	// 	rol: "Front-end developer, UX designer",
  //       foto: "kilian.png",
  //       url: "/kilian_valkhof",
	// 	html: '<h2>Wat vond ik interessant?</h2> <p>Wat interessant voor mij was om te zien was dat sommige code die je heel complex kan maken veel simpeler opgelost kan worden. Ook de twee zinnen, "The rule of least power" en "Choose the least powerful language suitable for a given purpose" triggeren mij om een zo simpel en effectief mogelijke code te schrijven. Ook vind ik de suggestie voor het kijken van Adam Argyle - oh snap! top, deze wil ik dan ook in de toekomst gaan bekijken. Wat mij nog meer heel nieuwsgierig maakte was het aantal termen en opties die ik nog niet kende in HTML & CSS. Daarbij gezegd hebbende dingen die ik al weet kunnen ook veranderen, daarom moet ik ervoor zorgen dat ik bij blijf en opnieuw moet blijven leren.</p> <h2>Wat ga ik meenemen?</h2> <ul><li>Proberen om "the least powerful language suitable for a given purpose" op mijn eigen code te betrekken.</li><li>Het leren van meer HTML & CSS elementen om eventuele JS te voorkomen.</li><li>Het vaker gebruiken en doorspitten van MDN om meer info in mij op te nemen.</li>'
	// },	

  //  {
  //       naam: "Fenna de Wilde",
  //       titel: "Toegankelijkheid",
  //       rol: "Creative developer",
  //       foto: "fenna.png",
  //       url: "/fenna_de_wilde",
  //       html: '<h2>Wat vond ik interessant?</h2> <p>Wat ik interessant vond aan de presentatie van Fenna de Wilde was dat ze een duidelijk beeld gaf van hoe je een website toegankelijk kan maken voor iedereen. Ze gaf een aantal tips en tricks die je kan toepassen om je website toegankelijk te maken. Zoals het gebruik van alt-teksten, het gebruik van aria-labels en het gebruik van de juiste kleuren. Ook vond ik het interessant dat ze vertelde dat je niet alleen rekening moet houden met mensen met een beperking, maar ook met mensen die bijvoorbeeld in de zon zitten en daardoor niet goed kunnen zien. </p> <h2>Wat ga ik meenemen?</h2> <ul><li>Ik ga zeker weten meer rekening houden met de toegankelijkheid van mijn websites. Ik ga ervoor zorgen dat ik alt-teksten toevoeg aan mijn afbeeldingen en dat ik de juiste kleuren gebruik. Ook ga ik ervoor zorgen dat ik de juiste aria-labels toevoeg aan mijn website. </li><li>Ik ga ervoor zorgen dat ik de juiste kleuren gebruik. </li><li>Ik ga ervoor zorgen dat ik de juiste aria-labels toevoeg aan mijn website. </li>'
  //   },

  //   {
  //       naam: "Nils Binder",
  //       titel: "9Elements",
  //       rol: "Front-end developer",
  //       foto: "nils.png",
  //       url: "/nils_binder",
  //       html: '<h2>Wat'
  //   },

  //   {
  //       naam: "Jeffrey Arts",
  //       titel: "Webdevelopment ecosystem",
  //       rol: "??????????",
  //       foto: "jeffrey.png",
  //       url: "/jeffrey_arts",
  //       html: '<h2>Wat'
  //   },

  //   {
  //       naam: "Jeremy Keith",
  //       titel: "Declarative vs imperative",
  //       rol: "Web developer",
  //       foto: "jeremy.png",
  //       url: "/jeremy_keith",
  //       html: '<h2>Wat'
  //   },

  //   {
  //       naam: "Julia Miocene",
  //       titel: "CSS animating",
  //       rol: "Product designer, CSS animator",
  //       foto: "julia.png",
  //       url: "/julia_miocene",
  //       html: '<h2>Wat'
  //   },

  //   {
  //       naam: "Pim & Marieke",
  //       titel: "Digitaal toegankelijk",
  //       rol: "Mede-eigenaar & UX researcher",
  //       foto: "pim_marieke.png",
  //       url: "/pim_marieke",
  //       html: '<h2>Wat'
  //   },

  //   {
  //       naam: "Rosa Schuurman",
  //       titel: "Creative coding",
  //       rol: "Creative engineer",
  //       foto: "rosa.png",
  //       url: "/rosa_schuurman",
  //       html: '<h2>Wat'
  //   },

  //   {   
  //       naam: "Robert Spier",
  //       titel: "What's next?",
  //       rol: "Creative technologist",
  //       foto: "robert.png",
  //       url: "/robert_spier",
  //       html: '<h2>Wat'
  //   },

  //   {
  //       naam: "Q42",
  //       titel: "Digital product studio",
  //       rol: "Mededwerkers van Q42",
  //       foto: "q42.png",
  //       url: "/q42",
  //       html: '<h2>Wat'
  //   },

  //   {
  //       naam: "De Waag",
  //       titel: "Proefkonijnen",
  //       rol: "Medewerkers van De Waag",
  //       foto: "waag.png",
  //       html: '<h2>Wat'
  //   },      

  //   {
  //       naam: "Bramus van Damme",
  //       titel: "View transitions",
  //       rol: "Web developer",
  //       foto: "bramus.png",
  //       url: "/bramus_van_damme",
  //       html: '<h2>Wat'
  //   },

  //  {
  //       naam: "Miriam Suzanne",
  //       titel: "CSS containers what do they do?",
  //       rol: "Web developer",
  //       foto: "miriam.png",
  //       url: "/miriam_suzanne",
  //       html: '<h2>Wat'
  //   }


  app.get('/kilian_valkhof', async (req, res) => {
      
    return res.send(renderTemplate('views/kilian.liquid', {
      title: 'Kilian Valkhof',
    }));
  });

  app.get('/fenna_de_wilde', async (req, res) => {
      
    return res.send(renderTemplate('views/fenna.liquid', {
      title: 'Fenna de Wilde',
    }));
  });

  app.get('/nils_binder', async (req, res) => {

    return res.send(renderTemplate('views/nils.liquid', {
      title: 'Nils Binder',
    }));
  });

  app.get('/jeffrey_arts', async (req, res) => {

    return res.send(renderTemplate('views/jeffrey.liquid', {
      title: 'Jeffrey Arts',
    }));
  });

  app.get('/jeremy_keith', async (req, res) => {
      
    return res.send(renderTemplate('views/jeremy.liquid', {
      title: 'Jeremy Keith',
    }));
  });

  app.get('/julia_miocene', async (req, res) => {
      
    return res.send(renderTemplate('views/julia.liquid', {
      title: 'Julia Miocene',
    }));
  });

  app.get('/pim_marieke', async (req, res) => {
        
    return res.send(renderTemplate('views/pim_marieke.liquid', {
      title: 'Pim & Marieke',
    }));
  });

  app.get('/rosa_schuurman', async (req, res) => {
          
    return res.send(renderTemplate('views/rosa.liquid', {
      title: 'Rosa Schuurman',
    }));
  });

  app.get('/robert_spier', async (req, res) => {
              
    return res.send(renderTemplate('views/robert.liquid', {
      title: 'Robert Spier',
    }));
  });

  app.get('/q42', async (req, res) => {
                    
    return res.send(renderTemplate('views/q42.liquid', {
      title: 'Q42',
    }));
  });

  app.get('/waag', async (req, res) => {
                          
    return res.send(renderTemplate('views/waag.liquid', {
      title: 'De Waag',
    }));
  });   

  app.get('/bramus_van_damme', async (req, res) => {

    return res.send(renderTemplate('views/bramus.liquid', {
      title: 'Bramus van Damme',
    }));
  });

  app.get('/miriam_suzanne', async (req, res) => {  
    
    return res.send(renderTemplate('views/miriam.liquid', {
      title: 'Miriam Suzanne',
    }));
  });


      






 





const renderTemplate = (template, data) => {
  return engine.renderFileSync(template, data)
}
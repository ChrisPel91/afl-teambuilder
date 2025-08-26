const players = [
  { name: "Player 1", team: "Team A", position: "FB" },
  { name: "Player 2", team: "Team B", position: "FF" },
  { name: "Player 3", team: "Team C", position: "C" },
  // … all your player data here …
  {
    "Player": "Alex Neal-Bullen",
    "Team": "Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Ben Keays",
    "Team": "Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Billy Dowling",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Brayden Cook",
    "Team": "Adelaide",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Brodie Smith",
    "Team": "Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Charlie Edwards",
    "Team": "Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Chayce Jones",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Chris Burgess",
    "Team": "Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Daniel Curtin",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Darcy Fogarty",
    "Team": "Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Harry Schoenberg",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Hugh Bond",
    "Team": "Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Isaac Cumming",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Izak Rankine",
    "Team": "Adelaide",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Jake Soligo",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "James Borlase",
    "Team": "Adelaide",
    "Position": "Key Defender"
  },
  {
    "Player": "James Peatling",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Jordan Dawson",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Jordon Butts",
    "Team": "Adelaide",
    "Position": "Key Defender"
  },
  {
    "Player": "Josh Rachele",
    "Team": "Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Josh Worrell",
    "Team": "Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Karl Gallagher",
    "Team": "Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Kieran Strachan",
    "Team": "Adelaide",
    "Position": "Ruck"
  },
  {
    "Player": "Lachlan McAndrew",
    "Team": "Adelaide",
    "Position": "Ruck"
  },
  {
    "Player": "Lachlan Murphy",
    "Team": "Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Lachlan Sholl",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Luke Nankervis",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Luke Pedlar",
    "Team": "Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Mark Keane",
    "Team": "Adelaide",
    "Position": "Key Defender"
  },
  {
    "Player": "Matt Crouch",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Max Michalanney",
    "Team": "Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Mitchell Hinge",
    "Team": "Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Nick Murray",
    "Team": "Adelaide",
    "Position": "Key Defender"
  },
  {
    "Player": "Oscar Ryan",
    "Team": "Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Reilly O'Brien",
    "Team": "Adelaide",
    "Position": "Ruck"
  },
  {
    "Player": "Riley Thilthorpe",
    "Team": "Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Rory Laird",
    "Team": "Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Sam Berry",
    "Team": "Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Sid Draper",
    "Team": "Adelaide",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Taylor Walker",
    "Team": "Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Toby Murray",
    "Team": "Adelaide",
    "Position": "Ruck"
  },
  {
    "Player": "Tyler Welsh",
    "Team": "Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Wayne Milera",
    "Team": "Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Zac Taylor",
    "Team": "Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Brandon Ryan",
    "Team": "Brisbane",
    "Position": "Key Forward"
  },
  {
    "Player": "Brandon Starcevich",
    "Team": "Brisbane",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Bruce Reville",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Callum Ah Chee",
    "Team": "Brisbane",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Cam Rayner",
    "Team": "Brisbane",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Charlie Cameron",
    "Team": "Brisbane",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Conor McKenna",
    "Team": "Brisbane",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Darcy Craven",
    "Team": "Brisbane",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Darcy Fort",
    "Team": "Brisbane",
    "Position": "Ruck"
  },
  {
    "Player": "Darcy Gardiner",
    "Team": "Brisbane",
    "Position": "Key Defender"
  },
  {
    "Player": "Darcy Wilmot",
    "Team": "Brisbane",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Darragh Joyce",
    "Team": "Brisbane",
    "Position": "Key Defender"
  },
  {
    "Player": "Dayne Zorko",
    "Team": "Brisbane",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Deven Robertson",
    "Team": "Brisbane",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Eric Hipwood",
    "Team": "Brisbane",
    "Position": "Key Forward"
  },
  {
    "Player": "Harris Andrews",
    "Team": "Brisbane",
    "Position": "Key Defender"
  },
  {
    "Player": "Henry Smith",
    "Team": "Brisbane",
    "Position": "Key Forward"
  },
  {
    "Player": "Hugh McCluggage",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Jack Payne",
    "Team": "Brisbane",
    "Position": "Key Defender"
  },
  {
    "Player": "James Tunstill",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Jarrod Berry",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Jaspa Fletcher",
    "Team": "Brisbane",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Josh Dunkley",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Kai Lohmann",
    "Team": "Brisbane",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Keidean Coleman",
    "Team": "Brisbane",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lachie Neale",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Levi Ashcroft",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Lincoln McCarthy",
    "Team": "Brisbane",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Logan Morris",
    "Team": "Brisbane",
    "Position": "Key Forward"
  },
  {
    "Player": "Luke Beecken",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Luke Lloyd",
    "Team": "Brisbane",
    "Position": "Key Defender"
  },
  {
    "Player": "Noah Answerth",
    "Team": "Brisbane",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Oscar McInerney",
    "Team": "Brisbane",
    "Position": "Ruck"
  },
  {
    "Player": "Reece Torrent",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Ryan Lester",
    "Team": "Brisbane",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Sam Day",
    "Team": "Brisbane",
    "Position": "Key Forward"
  },
  {
    "Player": "Sam Marshall",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Shadeau Brain",
    "Team": "Brisbane",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Tom Doedee",
    "Team": "Brisbane",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Ty Gallop",
    "Team": "Brisbane",
    "Position": "Key Forward"
  },
  {
    "Player": "Will Ashcroft",
    "Team": "Brisbane",
    "Position": "Midfielder"
  },
  {
    "Player": "Will McLachlan",
    "Team": "Brisbane",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Zac Bailey",
    "Team": "Brisbane",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Zane Zakostelsky",
    "Team": "Brisbane",
    "Position": "Ruck"
  },
  {
    "Player": "Adam Cerra",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Adam Saad",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Alex Cincotta",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Ashton Moir",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Ben Camporeale",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Billy Wilson",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Blake Acres",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Brodie Kemp",
    "Team": "Carlton",
    "Position": "Key Forward"
  },
  {
    "Player": "Charlie Curnow",
    "Team": "Carlton",
    "Position": "Key Forward"
  },
  {
    "Player": "Cooper Lord",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Corey Durdin",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Elijah Hollands",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Flynn Young",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Francis Evans",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "George Hewett",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Harry Charleson",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Harry Lemmey",
    "Team": "Carlton",
    "Position": "Key Forward"
  },
  {
    "Player": "Harry McKay",
    "Team": "Carlton",
    "Position": "Key Forward"
  },
  {
    "Player": "Harry O'Farrell",
    "Team": "Carlton",
    "Position": "Key Defender"
  },
  {
    "Player": "Hudson O'Keeffe",
    "Team": "Carlton",
    "Position": "Key Forward"
  },
  {
    "Player": "Jack Silvagni",
    "Team": "Carlton",
    "Position": "Key Defender"
  },
  {
    "Player": "Jacob Weitering",
    "Team": "Carlton",
    "Position": "Key Defender"
  },
  {
    "Player": "Jagga Smith",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Jaxon Binns",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Jesse Motlop",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jordan Boyd",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lachie Fogarty",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Lachlan Cowan",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lewis Young",
    "Team": "Carlton",
    "Position": "Key Defender"
  },
  {
    "Player": "Lucas Camporeale",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Marc Pittonet",
    "Team": "Carlton",
    "Position": "Ruck"
  },
  {
    "Player": "Matt Duffy",
    "Team": "Carlton",
    "Position": "Key Defender"
  },
  {
    "Player": "Matthew Carroll",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Matthew Cottrell",
    "Team": "Carlton",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Mitch McGovern",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Nic Newman",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Nick Haynes",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Oliver Hollands",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Orazio Fantasia",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Patrick Cripps",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Rob Monahan",
    "Team": "Carlton",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Sam Docherty",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Sam Walsh",
    "Team": "Carlton",
    "Position": "Midfielder"
  },
  {
    "Player": "Tom De Koning",
    "Team": "Carlton",
    "Position": "Ruck"
  },
  {
    "Player": "Will White",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Zac Williams",
    "Team": "Carlton",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Ash Johnson",
    "Team": "Collingwood",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Beau McCreery",
    "Team": "Collingwood",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Billy Frampton",
    "Team": "Collingwood",
    "Position": "Key Defender"
  },
  {
    "Player": "Bobby Hill",
    "Team": "Collingwood",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Brayden Maynard",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Brody Mihocek",
    "Team": "Collingwood",
    "Position": "Key Forward"
  },
  {
    "Player": "Charlie Dean",
    "Team": "Collingwood",
    "Position": "Key Defender"
  },
  {
    "Player": "Charlie West",
    "Team": "Collingwood",
    "Position": "Key Forward"
  },
  {
    "Player": "Dan Houston",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Daniel McStay",
    "Team": "Collingwood",
    "Position": "Key Forward"
  },
  {
    "Player": "Darcy Cameron",
    "Team": "Collingwood",
    "Position": "Ruck"
  },
  {
    "Player": "Darcy Moore",
    "Team": "Collingwood",
    "Position": "Key Defender"
  },
  {
    "Player": "Edward Allan",
    "Team": "Collingwood",
    "Position": "Midfielder"
  },
  {
    "Player": "Finlay Macrae",
    "Team": "Collingwood",
    "Position": "Midfielder"
  },
  {
    "Player": "Harry DeMattia",
    "Team": "Collingwood",
    "Position": "Midfielder"
  },
  {
    "Player": "Harry Perryman",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Harvey Harrison",
    "Team": "Collingwood",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Iliro Smit",
    "Team": "Collingwood",
    "Position": "Ruck"
  },
  {
    "Player": "Isaac Quaynor",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jack Crisp",
    "Team": "Collingwood",
    "Position": "Midfielder"
  },
  {
    "Player": "Jakob Ryan",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jamie Elliott",
    "Team": "Collingwood",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jeremy Howe",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Joel Cochran",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jordan De Goey",
    "Team": "Collingwood",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Josh Daicos",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lachie Schultz",
    "Team": "Collingwood",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Lachlan Sullivan",
    "Team": "Collingwood",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Mason Cox",
    "Team": "Collingwood",
    "Position": "Key Forward"
  },
  {
    "Player": "Ned Long",
    "Team": "Collingwood",
    "Position": "Midfielder"
  },
  {
    "Player": "Nick Daicos",
    "Team": "Collingwood",
    "Position": "Midfielder"
  },
  {
    "Player": "Noah Howes",
    "Team": "Collingwood",
    "Position": "Key Forward"
  },
  {
    "Player": "Oleg Markov",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Oscar Steene",
    "Team": "Collingwood",
    "Position": "Ruck"
  },
  {
    "Player": "Patrick Lipinski",
    "Team": "Collingwood",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Reef McInnes",
    "Team": "Collingwood",
    "Position": "Key Defender"
  },
  {
    "Player": "Roan Steele",
    "Team": "Collingwood",
    "Position": "Midfielder"
  },
  {
    "Player": "Scott Pendlebury",
    "Team": "Collingwood",
    "Position": "Midfielder"
  },
  {
    "Player": "Steele Sidebottom",
    "Team": "Collingwood",
    "Position": "Midfielder"
  },
  {
    "Player": "Tew Jiath",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Tim Membrey",
    "Team": "Collingwood",
    "Position": "Key Forward"
  },
  {
    "Player": "Tom Mitchell",
    "Team": "Collingwood",
    "Position": "Midfielder"
  },
  {
    "Player": "Wil Parker",
    "Team": "Collingwood",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Will Hoskin-Elliott",
    "Team": "Collingwood",
    "Position": "Gen. Forward"
  },
  {
    "Player": "William Hayes",
    "Team": "Collingwood",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Alwyn Davey Jnr",
    "Team": "Essendon",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Andrew McGrath",
    "Team": "Essendon",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Angus Clarke",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Archer Day-Wicks",
    "Team": "Essendon",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Archer May",
    "Team": "Essendon",
    "Position": "Key Forward"
  },
  {
    "Player": "Archie Perkins",
    "Team": "Essendon",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Archie Roberts",
    "Team": "Essendon",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Ben Hobbs",
    "Team": "Essendon",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Ben McKay",
    "Team": "Essendon",
    "Position": "Key Defender"
  },
  {
    "Player": "Darcy Parish",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Dylan Shiel",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Elijah Tsatas",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Harrison Jones",
    "Team": "Essendon",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Isaac Kako",
    "Team": "Essendon",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jade Gresham",
    "Team": "Essendon",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jaxon Prior",
    "Team": "Essendon",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jayden Laverde",
    "Team": "Essendon",
    "Position": "Key Defender"
  },
  {
    "Player": "Jayden Nguyen",
    "Team": "Essendon",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jordan Ridley",
    "Team": "Essendon",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jye Caldwell",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Jye Menzie",
    "Team": "Essendon",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Kayle Gerreyn",
    "Team": "Essendon",
    "Position": "Key Forward"
  },
  {
    "Player": "Kyle Langford",
    "Team": "Essendon",
    "Position": "Key Forward"
  },
  {
    "Player": "Lachlan Blakiston",
    "Team": "Essendon",
    "Position": "Key Defender"
  },
  {
    "Player": "Lewis Hayes",
    "Team": "Essendon",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Liam McMahon",
    "Team": "Essendon",
    "Position": "Key Forward"
  },
  {
    "Player": "Luamon Lual",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Mason Redman",
    "Team": "Essendon",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Matt Guelfi",
    "Team": "Essendon",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Nate Caddy",
    "Team": "Essendon",
    "Position": "Key Forward"
  },
  {
    "Player": "Nic Martin",
    "Team": "Essendon",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Nick Bryan",
    "Team": "Essendon",
    "Position": "Ruck"
  },
  {
    "Player": "Nik Cox",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Oskar Smartt",
    "Team": "Essendon",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Peter Wright",
    "Team": "Essendon",
    "Position": "Key Forward"
  },
  {
    "Player": "Rhys Unwin",
    "Team": "Essendon",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Saad El-Hawli",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Sam Draper",
    "Team": "Essendon",
    "Position": "Ruck"
  },
  {
    "Player": "Sam Durham",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Thomas Edwards",
    "Team": "Essendon",
    "Position": "Key Forward"
  },
  {
    "Player": "Todd Goldstein",
    "Team": "Essendon",
    "Position": "Ruck"
  },
  {
    "Player": "Vigo Visentini",
    "Team": "Essendon",
    "Position": "Ruck"
  },
  {
    "Player": "Will Setterfield",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Xavier Duursma",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Zach Merrett",
    "Team": "Essendon",
    "Position": "Midfielder"
  },
  {
    "Player": "Zach Reid",
    "Team": "Essendon",
    "Position": "Key Defender"
  },
  {
    "Player": "Zak Johnson",
    "Team": "Essendon",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Aiden Riddle",
    "Team": "Fremantle",
    "Position": "Key Forward"
  },
  {
    "Player": "Alex Pearce",
    "Team": "Fremantle",
    "Position": "Key Defender"
  },
  {
    "Player": "Andrew Brayshaw",
    "Team": "Fremantle",
    "Position": "Midfielder"
  },
  {
    "Player": "Bailey Banfield",
    "Team": "Fremantle",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Brandon Walker",
    "Team": "Fremantle",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Brennan Cox",
    "Team": "Fremantle",
    "Position": "Key Defender"
  },
  {
    "Player": "Caleb Serong",
    "Team": "Fremantle",
    "Position": "Midfielder"
  },
  {
    "Player": "Charlie Nicholls",
    "Team": "Fremantle",
    "Position": "Key Forward"
  },
  {
    "Player": "Cooper Simpson",
    "Team": "Fremantle",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Corey Wagner",
    "Team": "Fremantle",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Hayden Young",
    "Team": "Fremantle",
    "Position": "Midfielder"
  },
  {
    "Player": "Heath Chapman",
    "Team": "Fremantle",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Hugh Davies",
    "Team": "Fremantle",
    "Position": "Key Defender"
  },
  {
    "Player": "Isaiah Dudley",
    "Team": "Fremantle",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jack Delean",
    "Team": "Fremantle",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jaeger O'Meara",
    "Team": "Fremantle",
    "Position": "Midfielder"
  },
  {
    "Player": "James Aish",
    "Team": "Fremantle",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jaren Carr",
    "Team": "Fremantle",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jeremy Sharp",
    "Team": "Fremantle",
    "Position": "Midfielder"
  },
  {
    "Player": "Jordan Clark",
    "Team": "Fremantle",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Josh Treacy",
    "Team": "Fremantle",
    "Position": "Key Forward"
  },
  {
    "Player": "Joshua Draper",
    "Team": "Fremantle",
    "Position": "Key Defender"
  },
  {
    "Player": "Jye Amiss",
    "Team": "Fremantle",
    "Position": "Key Forward"
  },
  {
    "Player": "Karl Worner",
    "Team": "Fremantle",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Liam Reidy",
    "Team": "Fremantle",
    "Position": "Ruck"
  },
  {
    "Player": "Luke Jackson",
    "Team": "Fremantle",
    "Position": "Ruck"
  },
  {
    "Player": "Luke Ryan",
    "Team": "Fremantle",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Matthew Johnson",
    "Team": "Fremantle",
    "Position": "Midfielder"
  },
  {
    "Player": "Michael Frederick",
    "Team": "Fremantle",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Michael Walters",
    "Team": "Fremantle",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Murphy Reid",
    "Team": "Fremantle",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Nat Fyfe",
    "Team": "Fremantle",
    "Position": "Midfielder"
  },
  {
    "Player": "Nathan O'Driscoll",
    "Team": "Fremantle",
    "Position": "Midfielder"
  },
  {
    "Player": "Neil Erasmus",
    "Team": "Fremantle",
    "Position": "Midfielder"
  },
  {
    "Player": "Odin Jones",
    "Team": "Fremantle",
    "Position": "Key Forward"
  },
  {
    "Player": "Ollie Murphy",
    "Team": "Fremantle",
    "Position": "Key Defender"
  },
  {
    "Player": "Oscar McDonald",
    "Team": "Fremantle",
    "Position": "Key Defender"
  },
  {
    "Player": "Patrick Voss",
    "Team": "Fremantle",
    "Position": "Key Forward"
  },
  {
    "Player": "Quinton Narkle",
    "Team": "Fremantle",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Sam Sturt",
    "Team": "Fremantle",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Sam Switkowski",
    "Team": "Fremantle",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Sean Darcy",
    "Team": "Fremantle",
    "Position": "Ruck"
  },
  {
    "Player": "Shai Bolton",
    "Team": "Fremantle",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Will Brodie",
    "Team": "Fremantle",
    "Position": "Midfielder"
  },
  {
    "Player": "Bailey Smith",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Brad Close",
    "Team": "Geelong",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Cameron Guthrie",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Cillian Burke",
    "Team": "Geelong",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Connor O'Sullivan",
    "Team": "Geelong",
    "Position": "Key Defender"
  },
  {
    "Player": "George Stevens",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Gryan Miers",
    "Team": "Geelong",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jack Bowes",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Jack Henry",
    "Team": "Geelong",
    "Position": "Key Defender"
  },
  {
    "Player": "Jack Martin",
    "Team": "Geelong",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Jacob Molier",
    "Team": "Geelong",
    "Position": "Key Forward"
  },
  {
    "Player": "Jake Kolodjashnij",
    "Team": "Geelong",
    "Position": "Key Defender"
  },
  {
    "Player": "Jay Polkinghorne",
    "Team": "Geelong",
    "Position": "Key Forward"
  },
  {
    "Player": "Jed Bews",
    "Team": "Geelong",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jeremy Cameron",
    "Team": "Geelong",
    "Position": "Key Forward"
  },
  {
    "Player": "Jhye Clark",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Joe Pike",
    "Team": "Geelong",
    "Position": "Ruck"
  },
  {
    "Player": "Keighton Matofai-Forbes",
    "Team": "Geelong",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lawson Humphries",
    "Team": "Geelong",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lennox Hofmann",
    "Team": "Geelong",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Mark Blicavs",
    "Team": "Geelong",
    "Position": "Ruck"
  },
  {
    "Player": "Mark O'Connor",
    "Team": "Geelong",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Max Holmes",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Mitch Duncan",
    "Team": "Geelong",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Mitch Knevitt",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Mitchell Edwards",
    "Team": "Geelong",
    "Position": "Ruck"
  },
  {
    "Player": "Oisin Mullin",
    "Team": "Geelong",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Oliver Dempsey",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Oliver Henry",
    "Team": "Geelong",
    "Position": "Key Forward"
  },
  {
    "Player": "Oliver Wiltshire",
    "Team": "Geelong",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Patrick Dangerfield",
    "Team": "Geelong",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Patrick Retschko",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Rhys Stanley",
    "Team": "Geelong",
    "Position": "Ruck"
  },
  {
    "Player": "Sam De Koning",
    "Team": "Geelong",
    "Position": "Key Defender"
  },
  {
    "Player": "Shannon Neale",
    "Team": "Geelong",
    "Position": "Key Forward"
  },
  {
    "Player": "Shaun Mannagh",
    "Team": "Geelong",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Tanner Bruhn",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Ted Clohesy",
    "Team": "Geelong",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Toby Conway",
    "Team": "Geelong",
    "Position": "Ruck"
  },
  {
    "Player": "Tom Atkins",
    "Team": "Geelong",
    "Position": "Midfielder"
  },
  {
    "Player": "Tom Stewart",
    "Team": "Geelong",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Tyson Stengle",
    "Team": "Geelong",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Xavier Ivisic",
    "Team": "Geelong",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Zach Guthrie",
    "Team": "Geelong",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Alex Davies",
    "Team": "Gold Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Alex Sexton",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Asher Eastham",
    "Team": "Gold Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Bailey Humphrey",
    "Team": "Gold Coast",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Ben Ainsworth",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Ben Jepson",
    "Team": "Gold Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Ben King",
    "Team": "Gold Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Ben Long",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Bodhi Uwland",
    "Team": "Gold Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Brayden Fiorini",
    "Team": "Gold Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Caleb Graham",
    "Team": "Gold Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Caleb Lewis",
    "Team": "Gold Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Charlie Ballard",
    "Team": "Gold Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Connor Budarick",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Cooper Bell",
    "Team": "Gold Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Daniel Rioli",
    "Team": "Gold Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "David Swallow",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Elliott Himmelberg",
    "Team": "Gold Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Ethan Read",
    "Team": "Gold Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Jake Rogers",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jarrod Witts",
    "Team": "Gold Coast",
    "Position": "Ruck"
  },
  {
    "Player": "Jed Walter",
    "Team": "Gold Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Joel Jeffrey",
    "Team": "Gold Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "John Noble",
    "Team": "Gold Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jy Farrar",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Lachie Weller",
    "Team": "Gold Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Lachlan Gulbin",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Leonardo Lombard",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Lloyd Johnston",
    "Team": "Gold Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Mac Andrew",
    "Team": "Gold Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Malcolm Rosas",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Matt Rowell",
    "Team": "Gold Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Max Knobel",
    "Team": "Gold Coast",
    "Position": "Ruck"
  },
  {
    "Player": "Ned Moyle",
    "Team": "Gold Coast",
    "Position": "Ruck"
  },
  {
    "Player": "Nick Holman",
    "Team": "Gold Coast",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Noah Anderson",
    "Team": "Gold Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Oscar Adams",
    "Team": "Gold Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Sam Clohesy",
    "Team": "Gold Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Sam Collins",
    "Team": "Gold Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Sam Flanders",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Sean Lemmens",
    "Team": "Gold Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Thomas Berry",
    "Team": "Gold Coast",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Touk Miller",
    "Team": "Gold Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Wil Powell",
    "Team": "Gold Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Will Graham",
    "Team": "Gold Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Zak Evans",
    "Team": "Gold Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Aaron Cadman",
    "Team": "Greater Western Sydney",
    "Position": "Key Forward"
  },
  {
    "Player": "Brent Daniels",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Callan Ward",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Callum Brown",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Cody Angove",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Connor Idun",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Conor Stone",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Darcy Jones",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Finn Callaghan",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Harrison Oliver",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Harry Himmelberg",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Harry Rowston",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Harvey Thomas",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jack Buckley",
    "Team": "Greater Western Sydney",
    "Position": "Key Defender"
  },
  {
    "Player": "Jack Ough",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Jacob Wehr",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Jake Riccardi",
    "Team": "Greater Western Sydney",
    "Position": "Key Forward"
  },
  {
    "Player": "Jake Stringer",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "James Leake",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jesse Hogan",
    "Team": "Greater Western Sydney",
    "Position": "Key Forward"
  },
  {
    "Player": "Joe Fonti",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Josaia Delana",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Josh Fahey",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Josh Kelly",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Kieren Briggs",
    "Team": "Greater Western Sydney",
    "Position": "Ruck"
  },
  {
    "Player": "Lachie Ash",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lachie Whitfield",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lachlan Keeffe",
    "Team": "Greater Western Sydney",
    "Position": "Ruck"
  },
  {
    "Player": "Leek Aleer",
    "Team": "Greater Western Sydney",
    "Position": "Key Defender"
  },
  {
    "Player": "Logan Smith",
    "Team": "Greater Western Sydney",
    "Position": "Ruck"
  },
  {
    "Player": "Max Gruzewski",
    "Team": "Greater Western Sydney",
    "Position": "Key Forward"
  },
  {
    "Player": "Nathan Wardius",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Nicholas Madden",
    "Team": "Greater Western Sydney",
    "Position": "Ruck"
  },
  {
    "Player": "Oliver Hannaford",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Phoenix Gothard",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Ryan Angwin",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Sam Taylor",
    "Team": "Greater Western Sydney",
    "Position": "Key Defender"
  },
  {
    "Player": "Stephen Coniglio",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Toby Bedford",
    "Team": "Greater Western Sydney",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Toby Greene",
    "Team": "Greater Western Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Toby McMullin",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Tom Green",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Wade Derksen",
    "Team": "Greater Western Sydney",
    "Position": "Key Defender"
  },
  {
    "Player": "Xavier O'Halloran",
    "Team": "Greater Western Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Bailey Macdonald",
    "Team": "Hawthorn",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Blake Hardwick",
    "Team": "Hawthorn",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Bodie Ryan",
    "Team": "Hawthorn",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Calsher Dear",
    "Team": "Hawthorn",
    "Position": "Key Forward"
  },
  {
    "Player": "Cam Mackenzie",
    "Team": "Hawthorn",
    "Position": "Midfielder"
  },
  {
    "Player": "Changkuoth Jiath",
    "Team": "Hawthorn",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Cody Anderson",
    "Team": "Hawthorn",
    "Position": "Midfielder"
  },
  {
    "Player": "Connor Macdonald",
    "Team": "Hawthorn",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Conor Nash",
    "Team": "Hawthorn",
    "Position": "Midfielder"
  },
  {
    "Player": "Dylan Moore",
    "Team": "Hawthorn",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Finn Maginness",
    "Team": "Hawthorn",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Harry Morrison",
    "Team": "Hawthorn",
    "Position": "Midfielder"
  },
  {
    "Player": "Henry Hustwaite",
    "Team": "Hawthorn",
    "Position": "Midfielder"
  },
  {
    "Player": "Jack Ginnivan",
    "Team": "Hawthorn",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jack Gunston",
    "Team": "Hawthorn",
    "Position": "Key Forward"
  },
  {
    "Player": "Jack Scrimshaw",
    "Team": "Hawthorn",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jai Newcombe",
    "Team": "Hawthorn",
    "Position": "Midfielder"
  },
  {
    "Player": "Jai Serong",
    "Team": "Hawthorn",
    "Position": "Key Defender"
  },
  {
    "Player": "Jaime Uhr-Henry",
    "Team": "Hawthorn",
    "Position": "Ruck"
  },
  {
    "Player": "James Blanck",
    "Team": "Hawthorn",
    "Position": "Key Defender"
  },
  {
    "Player": "James Sicily",
    "Team": "Hawthorn",
    "Position": "Gen. Defender"
  },
  {
    "Player": "James Worpel",
    "Team": "Hawthorn",
    "Position": "Midfielder"
  },
  {
    "Player": "Jarman Impey",
    "Team": "Hawthorn",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jasper Scaife",
    "Team": "Hawthorn",
    "Position": "Key Forward"
  },
  {
    "Player": "Josh Battle",
    "Team": "Hawthorn",
    "Position": "Key Defender"
  },
  {
    "Player": "Josh Ward",
    "Team": "Hawthorn",
    "Position": "Midfielder"
  },
  {
    "Player": "Josh Weddle",
    "Team": "Hawthorn",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Karl Amon",
    "Team": "Hawthorn",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lloyd Meek",
    "Team": "Hawthorn",
    "Position": "Ruck"
  },
  {
    "Player": "Luke Breust",
    "Team": "Hawthorn",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Mabior Chol",
    "Team": "Hawthorn",
    "Position": "Key Forward"
  },
  {
    "Player": "Massimo D'Ambrosio",
    "Team": "Hawthorn",
    "Position": "Midfielder"
  },
  {
    "Player": "Matt Hill",
    "Team": "Hawthorn",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Max Ramsden",
    "Team": "Hawthorn",
    "Position": "Key Forward"
  },
  {
    "Player": "Mitch Lewis",
    "Team": "Hawthorn",
    "Position": "Key Forward"
  },
  {
    "Player": "Ned Reeves",
    "Team": "Hawthorn",
    "Position": "Ruck"
  },
  {
    "Player": "Nick Watson",
    "Team": "Hawthorn",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Noah Mraz",
    "Team": "Hawthorn",
    "Position": "Key Defender"
  },
  {
    "Player": "Sam Butler",
    "Team": "Hawthorn",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Sam Frost",
    "Team": "Hawthorn",
    "Position": "Key Defender"
  },
  {
    "Player": "Seamus Mitchell",
    "Team": "Hawthorn",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Tom Barrass",
    "Team": "Hawthorn",
    "Position": "Key Defender"
  },
  {
    "Player": "Will Day",
    "Team": "Hawthorn",
    "Position": "Midfielder"
  },
  {
    "Player": "William McCabe",
    "Team": "Hawthorn",
    "Position": "Key Forward"
  },
  {
    "Player": "Aidan Johnson",
    "Team": "Melbourne",
    "Position": "Key Forward"
  },
  {
    "Player": "Andy Moniz-Wakefield",
    "Team": "Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Bailey Laurie",
    "Team": "Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Bayley Fritsch",
    "Team": "Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Blake Howes",
    "Team": "Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Caleb Windsor",
    "Team": "Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Charlie Spargo",
    "Team": "Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Christian Petracca",
    "Team": "Melbourne",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Christian Salem",
    "Team": "Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Clayton Oliver",
    "Team": "Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Daniel Turner",
    "Team": "Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Ed Langdon",
    "Team": "Melbourne",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Harrison Petty",
    "Team": "Melbourne",
    "Position": "Key Forward"
  },
  {
    "Player": "Harry Sharp",
    "Team": "Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Harvey Langford",
    "Team": "Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Jack Billings",
    "Team": "Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Jack Henderson",
    "Team": "Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jack Viney",
    "Team": "Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Jacob van Rooyen",
    "Team": "Melbourne",
    "Position": "Key Forward"
  },
  {
    "Player": "Jai Culley",
    "Team": "Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Jake Bowey",
    "Team": "Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jake Lever",
    "Team": "Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jake Melksham",
    "Team": "Melbourne",
    "Position": "Key Forward"
  },
  {
    "Player": "Jed Adams",
    "Team": "Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Judd McVee",
    "Team": "Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Kade Chandler",
    "Team": "Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Koltyn Tholstrup",
    "Team": "Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Kynan Brown",
    "Team": "Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Kysaiah Pickett",
    "Team": "Melbourne",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Luker Kentfield",
    "Team": "Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Marty Hore",
    "Team": "Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Matthew Jefferson",
    "Team": "Melbourne",
    "Position": "Key Forward"
  },
  {
    "Player": "Max Gawn",
    "Team": "Melbourne",
    "Position": "Ruck"
  },
  {
    "Player": "Oliver Sestan",
    "Team": "Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Ricky Mentha",
    "Team": "Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Shane McAdam",
    "Team": "Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Steven May",
    "Team": "Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Taj Woewodin",
    "Team": "Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Tom Campbell",
    "Team": "Melbourne",
    "Position": "Ruck"
  },
  {
    "Player": "Tom Fullarton",
    "Team": "Melbourne",
    "Position": "Key Forward"
  },
  {
    "Player": "Tom McDonald",
    "Team": "Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Tom Sparrow",
    "Team": "Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Trent Rivers",
    "Team": "Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Will Verrall",
    "Team": "Melbourne",
    "Position": "Ruck"
  },
  {
    "Player": "Xavier Lindsay",
    "Team": "Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Aidan Corr",
    "Team": "North Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Bailey Scott",
    "Team": "North Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Brayden George",
    "Team": "North Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Brynn Teakle",
    "Team": "North Melbourne",
    "Position": "Ruck"
  },
  {
    "Player": "Caleb Daniel",
    "Team": "North Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Callum Coleman-Jones",
    "Team": "North Melbourne",
    "Position": "Ruck"
  },
  {
    "Player": "Cameron Zurhaar",
    "Team": "North Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Charlie Comben",
    "Team": "North Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Colby McKercher",
    "Team": "North Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Cooper Harvey",
    "Team": "North Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Cooper Trembath",
    "Team": "North Melbourne",
    "Position": "Key Forward"
  },
  {
    "Player": "Darcy Tucker",
    "Team": "North Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Dylan Stephens",
    "Team": "North Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Eddie Ford",
    "Team": "North Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Finn O'Sullivan",
    "Team": "North Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Finnbar Maley",
    "Team": "North Melbourne",
    "Position": "Key Forward"
  },
  {
    "Player": "Geordie Payne",
    "Team": "North Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "George Wardlaw",
    "Team": "North Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Griffin Logue",
    "Team": "North Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Harry Sheezel",
    "Team": "North Melbourne",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Jack Darling",
    "Team": "North Melbourne",
    "Position": "Key Forward"
  },
  {
    "Player": "Jackson Archer",
    "Team": "North Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jacob Konstanty",
    "Team": "North Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Josh Goater",
    "Team": "North Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jy Simpkin",
    "Team": "North Melbourne",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Kallan Dawson",
    "Team": "North Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Luke Davies-Uniacke",
    "Team": "North Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Luke McDonald",
    "Team": "North Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Luke Parker",
    "Team": "North Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Luke Urquhart",
    "Team": "North Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Matt Whitlock",
    "Team": "North Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Miller Bergman",
    "Team": "North Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Nick Larkey",
    "Team": "North Melbourne",
    "Position": "Key Forward"
  },
  {
    "Player": "Paul Curtis",
    "Team": "North Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Riley Hardeman",
    "Team": "North Melbourne",
    "Position": "Gen. Defender"
  },
  {
    "Player": "River Stevens",
    "Team": "North Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Robert Hansen Jr",
    "Team": "North Melbourne",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Taylor Goad",
    "Team": "North Melbourne",
    "Position": "Ruck"
  },
  {
    "Player": "Toby Pink",
    "Team": "North Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Tom Powell",
    "Team": "North Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Tristan Xerri",
    "Team": "North Melbourne",
    "Position": "Ruck"
  },
  {
    "Player": "Wil Dawson",
    "Team": "North Melbourne",
    "Position": "Key Defender"
  },
  {
    "Player": "Will Phillips",
    "Team": "North Melbourne",
    "Position": "Midfielder"
  },
  {
    "Player": "Zac Banch",
    "Team": "North Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Zac Fisher",
    "Team": "North Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Zane Duursma",
    "Team": "North Melbourne",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Aliir Aliir",
    "Team": "Port Adelaide",
    "Position": "Key Defender"
  },
  {
    "Player": "Benny Barrett",
    "Team": "Port Adelaide",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Brandon Zerk-Thatcher",
    "Team": "Port Adelaide",
    "Position": "Key Defender"
  },
  {
    "Player": "Christian Moraes",
    "Team": "Port Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Connor Rozee",
    "Team": "Port Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Dante Visentini",
    "Team": "Port Adelaide",
    "Position": "Ruck"
  },
  {
    "Player": "Darcy Byrne-Jones",
    "Team": "Port Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Dylan Williams",
    "Team": "Port Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Esava Ratugolea",
    "Team": "Port Adelaide",
    "Position": "Key Defender"
  },
  {
    "Player": "Ewan Mackinlay",
    "Team": "Port Adelaide",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Harrison Ramm",
    "Team": "Port Adelaide",
    "Position": "Key Defender"
  },
  {
    "Player": "Hugh Jackson",
    "Team": "Port Adelaide",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Ivan Soldo",
    "Team": "Port Adelaide",
    "Position": "Ruck"
  },
  {
    "Player": "Jack Lukosius",
    "Team": "Port Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Jack Whitlock",
    "Team": "Port Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Jackson Mead",
    "Team": "Port Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Jacob Moss",
    "Team": "Port Adelaide",
    "Position": "Key Defender"
  },
  {
    "Player": "Jase Burgoyne",
    "Team": "Port Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Jason Horne-Francis",
    "Team": "Port Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Jed McEntee",
    "Team": "Port Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jeremy Finlayson",
    "Team": "Port Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Joe Berry",
    "Team": "Port Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Joe Richards",
    "Team": "Port Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jordon Sweet",
    "Team": "Port Adelaide",
    "Position": "Ruck"
  },
  {
    "Player": "Josh Lai",
    "Team": "Port Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Josh Sinn",
    "Team": "Port Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Kane Farrell",
    "Team": "Port Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lachie Jones",
    "Team": "Port Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lachlan Charleson",
    "Team": "Port Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Logan Evans",
    "Team": "Port Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Mani Liddy",
    "Team": "Port Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Miles Bergman",
    "Team": "Port Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Mitch Georgiades",
    "Team": "Port Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Ollie Lord",
    "Team": "Port Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Ollie Wines",
    "Team": "Port Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Rory Atkins",
    "Team": "Port Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Ryan Burton",
    "Team": "Port Adelaide",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Sam Powell-Pepper",
    "Team": "Port Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Todd Marshall",
    "Team": "Port Adelaide",
    "Position": "Key Forward"
  },
  {
    "Player": "Tom Anastasopoulos",
    "Team": "Port Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Tom Cochrane",
    "Team": "Port Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Travis Boak",
    "Team": "Port Adelaide",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Will Lorenz",
    "Team": "Port Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Willem Drew",
    "Team": "Port Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Willie Rioli",
    "Team": "Port Adelaide",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Xavier Walsh",
    "Team": "Port Adelaide",
    "Position": "Key Defender"
  },
  {
    "Player": "Zak Butters",
    "Team": "Port Adelaide",
    "Position": "Midfielder"
  },
  {
    "Player": "Ben Miller",
    "Team": "Richmond",
    "Position": "Key Defender"
  },
  {
    "Player": "Campbell Gray",
    "Team": "Richmond",
    "Position": "Key Defender"
  },
  {
    "Player": "Dion Prestia",
    "Team": "Richmond",
    "Position": "Midfielder"
  },
  {
    "Player": "Harry Armstrong",
    "Team": "Richmond",
    "Position": "Key Forward"
  },
  {
    "Player": "Hugo Ralphsmith",
    "Team": "Richmond",
    "Position": "Midfielder"
  },
  {
    "Player": "Jack Ross",
    "Team": "Richmond",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Jacob Bauer",
    "Team": "Richmond",
    "Position": "Key Forward"
  },
  {
    "Player": "Jacob Blight",
    "Team": "Richmond",
    "Position": "Key Defender"
  },
  {
    "Player": "Jacob Hopper",
    "Team": "Richmond",
    "Position": "Midfielder"
  },
  {
    "Player": "Jacob Koschitzke",
    "Team": "Richmond",
    "Position": "Key Forward"
  },
  {
    "Player": "James Trezise",
    "Team": "Richmond",
    "Position": "Midfielder"
  },
  {
    "Player": "Jasper Alger",
    "Team": "Richmond",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jayden Short",
    "Team": "Richmond",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jonty Faull",
    "Team": "Richmond",
    "Position": "Key Forward"
  },
  {
    "Player": "Josh Gibcus",
    "Team": "Richmond",
    "Position": "Key Defender"
  },
  {
    "Player": "Josh Smillie",
    "Team": "Richmond",
    "Position": "Midfielder"
  },
  {
    "Player": "Judson Clarke",
    "Team": "Richmond",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Kaleb Smith",
    "Team": "Richmond",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Kamdyn McIntosh",
    "Team": "Richmond",
    "Position": "Midfielder"
  },
  {
    "Player": "Kane McAuliffe",
    "Team": "Richmond",
    "Position": "Midfielder"
  },
  {
    "Player": "Liam Fawcett",
    "Team": "Richmond",
    "Position": "Key Forward"
  },
  {
    "Player": "Luke Trainor",
    "Team": "Richmond",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Mate Colina",
    "Team": "Richmond",
    "Position": "Ruck"
  },
  {
    "Player": "Maurice Rioli",
    "Team": "Richmond",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Mykelti Lefau",
    "Team": "Richmond",
    "Position": "Key Forward"
  },
  {
    "Player": "Nathan Broad",
    "Team": "Richmond",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Nick Vlastuin",
    "Team": "Richmond",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Noah Balta",
    "Team": "Richmond",
    "Position": "Key Defender"
  },
  {
    "Player": "Oliver Hayes-Brown",
    "Team": "Richmond",
    "Position": "Ruck"
  },
  {
    "Player": "Rhyan Mansell",
    "Team": "Richmond",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Sam Banks",
    "Team": "Richmond",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Sam Lalor",
    "Team": "Richmond",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Samson Ryan",
    "Team": "Richmond",
    "Position": "Ruck"
  },
  {
    "Player": "Seth Campbell",
    "Team": "Richmond",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Steely Green",
    "Team": "Richmond",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Taj Hotton",
    "Team": "Richmond",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Thomas Sims",
    "Team": "Richmond",
    "Position": "Key Forward"
  },
  {
    "Player": "Thomson Dow",
    "Team": "Richmond",
    "Position": "Midfielder"
  },
  {
    "Player": "Tim Taranto",
    "Team": "Richmond",
    "Position": "Midfielder"
  },
  {
    "Player": "Toby Nankervis",
    "Team": "Richmond",
    "Position": "Ruck"
  },
  {
    "Player": "Tom Brown",
    "Team": "Richmond",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Tom Lynch",
    "Team": "Richmond",
    "Position": "Key Forward"
  },
  {
    "Player": "Tylar Young",
    "Team": "Richmond",
    "Position": "Key Defender"
  },
  {
    "Player": "Tyler Sonsie",
    "Team": "Richmond",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Alex Dodson",
    "Team": "St Kilda",
    "Position": "Key Forward"
  },
  {
    "Player": "Alixzander Tauru",
    "Team": "St Kilda",
    "Position": "Key Defender"
  },
  {
    "Player": "Angus Hastie",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Angus McLennan",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Anthony Caminiti",
    "Team": "St Kilda",
    "Position": "Key Defender"
  },
  {
    "Player": "Arie Schoenmaker",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Bradley Hill",
    "Team": "St Kilda",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Callum Wilkie",
    "Team": "St Kilda",
    "Position": "Key Defender"
  },
  {
    "Player": "Cooper Sharman",
    "Team": "St Kilda",
    "Position": "Key Forward"
  },
  {
    "Player": "Dan Butler",
    "Team": "St Kilda",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Darcy Wilson",
    "Team": "St Kilda",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Dougal Howard",
    "Team": "St Kilda",
    "Position": "Key Defender"
  },
  {
    "Player": "Eamonn Armstrong",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Harry Boyd",
    "Team": "St Kilda",
    "Position": "Ruck"
  },
  {
    "Player": "Hugh Boxshall",
    "Team": "St Kilda",
    "Position": "Midfielder"
  },
  {
    "Player": "Hugo Garcia",
    "Team": "St Kilda",
    "Position": "Midfielder"
  },
  {
    "Player": "Hunter Clark",
    "Team": "St Kilda",
    "Position": "Midfielder"
  },
  {
    "Player": "Isaac Keeler",
    "Team": "St Kilda",
    "Position": "Key Forward"
  },
  {
    "Player": "Jack Carroll",
    "Team": "St Kilda",
    "Position": "Midfielder"
  },
  {
    "Player": "Jack Higgins",
    "Team": "St Kilda",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jack Macrae",
    "Team": "St Kilda",
    "Position": "Midfielder"
  },
  {
    "Player": "Jack Sinclair",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jack Steele",
    "Team": "St Kilda",
    "Position": "Midfielder"
  },
  {
    "Player": "James Barrat",
    "Team": "St Kilda",
    "Position": "Key Defender"
  },
  {
    "Player": "Jimmy Webster",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lance Collard",
    "Team": "St Kilda",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Liam Henry",
    "Team": "St Kilda",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Liam O'Connell",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Liam Stocker",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Marcus Windhager",
    "Team": "St Kilda",
    "Position": "Midfielder"
  },
  {
    "Player": "Mason Wood",
    "Team": "St Kilda",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Mattaes Phillipou",
    "Team": "St Kilda",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Max Hall",
    "Team": "St Kilda",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Max Heath",
    "Team": "St Kilda",
    "Position": "Key Forward"
  },
  {
    "Player": "Max King",
    "Team": "St Kilda",
    "Position": "Key Forward"
  },
  {
    "Player": "Mitch Owens",
    "Team": "St Kilda",
    "Position": "Key Forward"
  },
  {
    "Player": "Nasiah Wanganeen-Milera",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Paddy Dow",
    "Team": "St Kilda",
    "Position": "Midfielder"
  },
  {
    "Player": "Patrick Said",
    "Team": "St Kilda",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Rowan Marshall",
    "Team": "St Kilda",
    "Position": "Ruck"
  },
  {
    "Player": "Ryan Byrnes",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Tobie Travaglia",
    "Team": "St Kilda",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Zaine Cordy",
    "Team": "St Kilda",
    "Position": "Key Defender"
  },
  {
    "Player": "Zak Jones",
    "Team": "St Kilda",
    "Position": "Midfielder"
  },
  {
    "Player": "Aaron Francis",
    "Team": "Sydney",
    "Position": "Key Forward"
  },
  {
    "Player": "Angus Sheldrick",
    "Team": "Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Ben Paton",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Blake Leidler",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Braeden Campbell",
    "Team": "Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Brodie Grundy",
    "Team": "Sydney",
    "Position": "Ruck"
  },
  {
    "Player": "Caiden Cleary",
    "Team": "Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Caleb Mitchell",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Callum Mills",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Chad Warner",
    "Team": "Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Corey Warner",
    "Team": "Sydney",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Dane Rampe",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Errol Gulden",
    "Team": "Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Harry Cunningham",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Hayden McLean",
    "Team": "Sydney",
    "Position": "Key Forward"
  },
  {
    "Player": "Indhi Kirk",
    "Team": "Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Isaac Heeney",
    "Team": "Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Jack Buller",
    "Team": "Sydney",
    "Position": "Key Forward"
  },
  {
    "Player": "Jake Lloyd",
    "Team": "Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "James Jordon",
    "Team": "Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "James Rowbottom",
    "Team": "Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Jesse Dattoli",
    "Team": "Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Joel Amartey",
    "Team": "Sydney",
    "Position": "Key Forward"
  },
  {
    "Player": "Joel Hamling",
    "Team": "Sydney",
    "Position": "Key Defender"
  },
  {
    "Player": "Justin McInerney",
    "Team": "Sydney",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Lewis Melican",
    "Team": "Sydney",
    "Position": "Key Defender"
  },
  {
    "Player": "Logan McDonald",
    "Team": "Sydney",
    "Position": "Key Forward"
  },
  {
    "Player": "Matt Roberts",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Ned Bowman",
    "Team": "Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Nick Blakey",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Oliver Florent",
    "Team": "Sydney",
    "Position": "Midfielder"
  },
  {
    "Player": "Patrick Snell",
    "Team": "Sydney",
    "Position": "Key Defender"
  },
  {
    "Player": "Peter Ladhams",
    "Team": "Sydney",
    "Position": "Ruck"
  },
  {
    "Player": "Riak Andrew",
    "Team": "Sydney",
    "Position": "Key Defender"
  },
  {
    "Player": "Riley Bice",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Robbie Fox",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Sam Wicks",
    "Team": "Sydney",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Taylor Adams",
    "Team": "Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Tom Hanily",
    "Team": "Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Tom McCartin",
    "Team": "Sydney",
    "Position": "Key Defender"
  },
  {
    "Player": "Tom Papley",
    "Team": "Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Will Hayward",
    "Team": "Sydney",
    "Position": "Gen. Forward"
  },
  {
    "Player": "William Edwards",
    "Team": "Sydney",
    "Position": "Key Defender"
  },
  {
    "Player": "William Green",
    "Team": "Sydney",
    "Position": "Ruck"
  },
  {
    "Player": "Archer Reid",
    "Team": "West Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Bailey J. Williams",
    "Team": "West Coast",
    "Position": "Ruck"
  },
  {
    "Player": "Bo Allan",
    "Team": "West Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Brady Hough",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Callum Jamieson",
    "Team": "West Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Campbell Chesser",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Clay Hall",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Coen Livingstone",
    "Team": "West Coast",
    "Position": "Ruck"
  },
  {
    "Player": "Dom Sheed",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Elijah Hewett",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Elliot Yeo",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Hamish Davis",
    "Team": "West Coast",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Harley Reid",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Harry Barnett",
    "Team": "West Coast",
    "Position": "Ruck"
  },
  {
    "Player": "Harry Edwards",
    "Team": "West Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Harvey Johnston",
    "Team": "West Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jack Graham",
    "Team": "West Coast",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Jack Hutchinson",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Jack Petruccelle",
    "Team": "West Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jack Williams",
    "Team": "West Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Jacob Newton",
    "Team": "West Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Jake Waterman",
    "Team": "West Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Jamie Cripps",
    "Team": "West Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Jayden Hunt",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Jeremy McGovern",
    "Team": "West Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Jobe Shanahan",
    "Team": "West Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Liam Baker",
    "Team": "West Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Liam Duggan",
    "Team": "West Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Liam Ryan",
    "Team": "West Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Loch Rawlinson",
    "Team": "West Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Lucca Grego",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Malakai Champion",
    "Team": "West Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Matt Flynn",
    "Team": "West Coast",
    "Position": "Ruck"
  },
  {
    "Player": "Matthew Owies",
    "Team": "West Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Noah Long",
    "Team": "West Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Oscar Allen",
    "Team": "West Coast",
    "Position": "Key Forward"
  },
  {
    "Player": "Reuben Ginbey",
    "Team": "West Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Rhett Bazzo",
    "Team": "West Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Ryan Maric",
    "Team": "West Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Sandy Brock",
    "Team": "West Coast",
    "Position": "Key Defender"
  },
  {
    "Player": "Tim Kelly",
    "Team": "West Coast",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Tom Cole",
    "Team": "West Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Tom Gross",
    "Team": "West Coast",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Tom McCarthy",
    "Team": "West Coast",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Tyler Brockman",
    "Team": "West Coast",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Tyrell Dewar",
    "Team": "West Coast",
    "Position": "Midfielder"
  },
  {
    "Player": "Aaron Naughton",
    "Team": "Western Bulldogs",
    "Position": "Key Forward"
  },
  {
    "Player": "Adam Treloar",
    "Team": "Western Bulldogs",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Anthony Scott",
    "Team": "Western Bulldogs",
    "Position": "Midfielder"
  },
  {
    "Player": "Arthur Jones",
    "Team": "Western Bulldogs",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Bailey Dale",
    "Team": "Western Bulldogs",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Bailey Williams",
    "Team": "Western Bulldogs",
    "Position": "Midfielder"
  },
  {
    "Player": "Buku Khamis",
    "Team": "Western Bulldogs",
    "Position": "Key Forward"
  },
  {
    "Player": "Caleb Poulter",
    "Team": "Western Bulldogs",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Cody Weightman",
    "Team": "Western Bulldogs",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Cooper Hynes",
    "Team": "Western Bulldogs",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Ed Richards",
    "Team": "Western Bulldogs",
    "Position": "Midfielder"
  },
  {
    "Player": "Harvey Gallagher",
    "Team": "Western Bulldogs",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jamarra Ugle-Hagan",
    "Team": "Western Bulldogs",
    "Position": "Key Forward"
  },
  {
    "Player": "James Harmes",
    "Team": "Western Bulldogs",
    "Position": "Midfielder"
  },
  {
    "Player": "James O'Donnell",
    "Team": "Western Bulldogs",
    "Position": "Key Defender"
  },
  {
    "Player": "Jason Johannisen",
    "Team": "Western Bulldogs",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Jedd Busslinger",
    "Team": "Western Bulldogs",
    "Position": "Key Defender"
  },
  {
    "Player": "Joel Freijah",
    "Team": "Western Bulldogs",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Jordan Croft",
    "Team": "Western Bulldogs",
    "Position": "Key Forward"
  },
  {
    "Player": "Josh Dolan",
    "Team": "Western Bulldogs",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Lachie Jaques",
    "Team": "Western Bulldogs",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lachlan Bramble",
    "Team": "Western Bulldogs",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Lachlan McNeil",
    "Team": "Western Bulldogs",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Lachlan Smith",
    "Team": "Western Bulldogs",
    "Position": "Ruck"
  },
  {
    "Player": "Laitham Vandermeer",
    "Team": "Western Bulldogs",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Liam Jones",
    "Team": "Western Bulldogs",
    "Position": "Key Defender"
  },
  {
    "Player": "Luke Cleary",
    "Team": "Western Bulldogs",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Luke Kennedy",
    "Team": "Western Bulldogs",
    "Position": "Midfielder"
  },
  {
    "Player": "Marcus Bontempelli",
    "Team": "Western Bulldogs",
    "Position": "Midfielder"
  },
  {
    "Player": "Matthew Kennedy",
    "Team": "Western Bulldogs",
    "Position": "Midfielder"
  },
  {
    "Player": "Michael Sellwood",
    "Team": "Western Bulldogs",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Nick Coffield",
    "Team": "Western Bulldogs",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Oskar Baker",
    "Team": "Western Bulldogs",
    "Position": "Midfielder"
  },
  {
    "Player": "Rhylee West",
    "Team": "Western Bulldogs",
    "Position": "Gen. Forward"
  },
  {
    "Player": "Riley Garcia",
    "Team": "Western Bulldogs",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Rory Lobb",
    "Team": "Western Bulldogs",
    "Position": "Key Defender"
  },
  {
    "Player": "Ryan Gardner",
    "Team": "Western Bulldogs",
    "Position": "Key Defender"
  },
  {
    "Player": "Ryley Sanders",
    "Team": "Western Bulldogs",
    "Position": "Mid-Forward"
  },
  {
    "Player": "Sam Darcy",
    "Team": "Western Bulldogs",
    "Position": "Key Forward"
  },
  {
    "Player": "Sam Davidson",
    "Team": "Western Bulldogs",
    "Position": "Midfielder"
  },
  {
    "Player": "Taylor Duryea",
    "Team": "Western Bulldogs",
    "Position": "Gen. Defender"
  },
  {
    "Player": "Tim English",
    "Team": "Western Bulldogs",
    "Position": "Ruck"
  },
  {
    "Player": "Tom Liberatore",
    "Team": "Western Bulldogs",
    "Position": "Midfielder"
  },
  {
    "Player": "Zac Walker",
    "Team": "Western Bulldogs",
    "Position": "Key Defender"
  }
];

export default players;

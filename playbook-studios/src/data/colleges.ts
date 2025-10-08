export interface College {
  id: string;
  name: string;
  city: string;
  state: string;
  annualCost: number;
  campusDescription: string;
  topMajors: string[]; // IDs of majors
}

export const colleges: College[] = [
  {
    id: "mit",
    name: "Massachusetts Institute of Technology",
    city: "Cambridge",
    state: "MA",
    annualCost: 79850,
    campusDescription: "MIT's campus sits along the Charles River with stunning views of Boston's skyline. The campus culture is intensely focused on innovation and problem-solving - students collaborate on groundbreaking research projects from freshman year. The vibe is entrepreneurial and hands-on; you'll find students building robots at 2am, starting companies in dorm rooms, and engaging in pranks (called 'hacks') that showcase engineering creativity. Boston's vibrant college scene is accessible via subway, offering restaurants, museums, and internship opportunities. Campus life balances rigorous academics with quirky traditions like MIT Mystery Hunt and living groups ranging from traditional dorms to independent co-ops. Winters are cold, but there's serious school spirit around events like CPW (Campus Preview Weekend). The collaborative atmosphere means late-night problem set sessions often become bonding experiences.",
    topMajors: ["computer-science", "mechanical-engineering", "electrical-engineering", "aerospace-engineering", "data-science", "mathematics"]
  },
  {
    id: "stanford",
    name: "Stanford University",
    city: "Stanford",
    state: "CA",
    annualCost: 82162,
    campusDescription: "Stanford's 8,180-acre campus features Spanish-style architecture, palm trees, and year-round sunshine in the heart of Silicon Valley. The atmosphere blends academic excellence with California-casual style - you'll see students biking between classes in shorts and hoodies. The proximity to tech giants and startups creates an entrepreneurial culture where starting a company is as common as joining a club. Campus life offers Division I sports (especially football and basketball games), outdoor activities like hiking in the nearby foothills, and access to San Francisco. The weather enables outdoor studying and social life year-round. Residential life is centered around unique dorms with distinct personalities, from tech-focused dorms to creative arts communities. The campus feels like a bubble of palm trees and sandstone buildings, but Stanford's connections to industry and innovation make it intensely connected to the real world.",
    topMajors: ["computer-science", "data-science", "electrical-engineering", "mechanical-engineering", "biology", "economics"]
  },
  {
    id: "cmu",
    name: "Carnegie Mellon University",
    city: "Pittsburgh",
    state: "PA",
    annualCost: 79559,
    campusDescription: "CMU's compact urban campus sits in Pittsburgh's Oakland neighborhood, adjacent to museums, restaurants, and Schenley Park. The culture is intensely collaborative and multidisciplinary - computer science students work with drama majors, engineers collaborate with artists. Known for rigorous academics, the vibe balances hard work with creative outlets like the famous drama program, hackathons, and game development clubs. Pittsburgh offers a surprisingly vibrant city experience with affordable living, great food, and a growing tech scene (Google, Uber, and many startups have major presences). Campus traditions include Spring Carnival with its famous Buggy Races, Scotch'n'Soda theater, and pulling all-nighters in the Gates Center for Computer Science. The campus feels tight-knit despite being academically competitive, with students supporting each other through challenging coursework. Seasons are distinct with beautiful fall colors and snowy winters.",
    topMajors: ["computer-science", "software-engineering", "electrical-engineering", "data-science", "statistics"]
  },
  {
    id: "berkeley",
    name: "University of California, Berkeley",
    city: "Berkeley",
    state: "CA",
    annualCost: 44007,
    campusDescription: "UC Berkeley's campus overlooks the San Francisco Bay with iconic views from the Campanile (clock tower). The atmosphere is politically engaged, intellectually diverse, and socially conscious - you'll encounter spirited debates, activism, and students passionate about changing the world. Campus culture balances academic rigor with Bay Area laid-back vibes. Berkeley's college town offers amazing food (Telegraph Avenue's restaurants reflect incredible diversity), music venues, bookstores, and hiking trails in the Berkeley Hills. Greek life exists but isn't dominant; students organize around academic interests, social causes, and cultural groups. San Francisco is 30 minutes away by BART for internships, concerts, and city life. Sports enthusiasm centers on football at Memorial Stadium. The public school environment means large lectures balanced by smaller discussion sections, teaching independence and resourcefulness. Weather is mild year-round, enabling outdoor studying and active lifestyles.",
    topMajors: ["computer-science", "electrical-engineering", "mechanical-engineering", "data-science", "economics", "business-administration"]
  },
  {
    id: "penn",
    name: "University of Pennsylvania",
    city: "Philadelphia",
    state: "PA",
    annualCost: 85120,
    campusDescription: "Penn's urban campus in West Philadelphia combines historic brick buildings with modern facilities, all within a walkable area. The culture is pre-professional and social - students are ambitious about careers while also deeply involved in vibrant social life. The Wharton School creates a business-minded atmosphere, but the liberal arts college and engineering school add diversity. Philadelphia offers city amenities (restaurants, museums, music scene) while campus feels like a distinct community. Greek life is prominent but not overwhelming, and students balance hard work with active nightlife. Campus traditions include Toast Throws at football games, Spring Fling concert, and Hey Day (sophomore celebration). The weather experiences all four seasons. Penn's 'One University' policy encourages taking classes across schools, so engineering students might minor in business. Located between NYC and DC, Penn offers access to major cities while maintaining campus community. Students describe the vibe as collaborative but competitive.",
    topMajors: ["finance", "nursing", "business-administration", "computer-science", "accounting", "marketing"]
  },
  {
    id: "illinois",
    name: "University of Illinois Urbana-Champaign",
    city: "Urbana-Champaign",
    state: "IL",
    annualCost: 37358,
    campusDescription: "UIUC's campus sprawls across the twin cities of Urbana and Champaign in central Illinois cornfields, creating a true college town atmosphere where campus IS the town. The vibe is friendly, down-to-earth, and focused on Big Ten spirit - football and basketball games at State Farm Center and Memorial Stadium unite the campus. The engineering and computer science programs create a tech-forward culture with numerous hackathons and startups. Green Street (Campustown) offers endless restaurants, bars, and student hangouts. Greek life is significant with historic fraternity and sorority houses lining the streets. Midwest culture means friendly people, affordable living, and all four seasons (including cold, snowy winters). Research opportunities abound even for undergraduates. The massive campus means you'll find your niche community within the larger university. Students bike or bus everywhere, and there's strong school pride around Chief Illiniwek traditions and orange and blue colors.",
    topMajors: ["computer-science", "mechanical-engineering", "electrical-engineering", "accounting", "aerospace-engineering"]
  },
  {
    id: "cornell",
    name: "Cornell University",
    city: "Ithaca",
    state: "NY",
    annualCost: 84568,
    campusDescription: "Cornell's campus sits on a hill overlooking Cayuga Lake in the Finger Lakes region of upstate New York, featuring stunning gorges, waterfalls, and dramatic natural beauty. The isolated location (4+ hours from NYC) creates a tight campus community where students are fully immersed in college life. The vibe balances Ivy League prestige with a more down-to-earth, collaborative culture than other Ivies. Academic intensity is real - students joke about 'Cornell being the easiest Ivy to get into and hardest to get out of.' The different colleges (Agriculture, Engineering, Arts & Sciences, etc.) create distinct subcommunities. Ithaca offers a quirky college town with good restaurants, local farms, and outdoor activities (hiking, skiing, swimming in gorges). Winters are long and snowy, but fall foliage is spectacular. Campus traditions include Dragon Day, Slope Day (end-of-year festival), and jumping in fountains. The diverse student body and world-class faculty across disciplines create rich intellectual environments.",
    topMajors: ["computer-science", "engineering", "business-administration", "biology", "economics"]
  },
  {
    id: "georgia-tech",
    name: "Georgia Institute of Technology",
    city: "Atlanta",
    state: "GA",
    annualCost: 33794,
    campusDescription: "Georgia Tech's campus sits in Midtown Atlanta, offering a unique blend of urban energy and college campus feel. The culture is tech-focused and career-oriented - co-ops and internships are standard, and students are serious about launching careers with companies like Delta, Coca-Cola, and numerous startups in Atlanta's growing tech scene. The gender ratio (historically male-dominated though improving) influences social dynamics. Campus traditions include stealing the 'T' from Tech Tower, the Ramblin' Wreck (vintage car), and fierce rivalry with University of Georgia. Greek life is prominent for social life. Atlanta offers incredible diversity, music scene (hip-hop culture), food, and professional opportunities. The climate is warm most of the year - mild winters and hot, humid summers. Sports culture centers on football at Bobby Dodd Stadium. Students work hard and play hard, with stress outlets including intramural sports, game nights, and exploring Atlanta's neighborhoods. The campus feels collaborative despite academic rigor.",
    topMajors: ["computer-science", "mechanical-engineering", "electrical-engineering", "aerospace-engineering", "software-engineering"]
  },
  {
    id: "caltech",
    name: "California Institute of Technology",
    city: "Pasadena",
    state: "CA",
    annualCost: 83598,
    campusDescription: "Caltech's tiny campus (240 acres, ~1000 undergrads) in Pasadena creates an intimate, intense academic community focused purely on science and engineering. The culture is quirky, collaborative, and extraordinarily rigorous - students bond through shared problem sets and the Honor Code allows take-home exams. House system (similar to Harry Potter) organizes social life, with each of the eight houses having distinct personalities and pranks. Pasadena's Old Town offers restaurants and shops within walking distance, and Los Angeles is 30 minutes away for beaches, entertainment, and internships at JPL (Jet Propulsion Laboratory) which is managed by Caltech. The weather is perfect year-round. Campus life revolves around academics and house culture rather than sports or parties (though Ditch Day pranks are legendary). Students affectionately call it 'boot camp' but form deep friendships through shared challenges. Small class sizes mean direct access to Nobel Prize-winning faculty. It's not for everyone, but students who thrive love the intellectual intensity and collaborative problem-solving culture.",
    topMajors: ["computer-science", "mechanical-engineering", "electrical-engineering", "mathematics", "aerospace-engineering"]
  },
  {
    id: "princeton",
    name: "Princeton University",
    city: "Princeton",
    state: "NJ",
    annualCost: 79840,
    campusDescription: "Princeton's gothic campus in a wealthy suburban town creates a beautiful, isolated academic bubble. The focus is purely on undergraduate education (small grad programs) making undergrads the priority with exceptional faculty access. The eating club system (upperclassmen join social clubs for meals and parties) dominates social life and is unique to Princeton. The culture balances intellectual rigor with a preppy, social atmosphere - students dress slightly more formally than peer schools. Traditions include Reunions (massive alumni gathering), Houseparties, Lawnparties, and the senior thesis requirement. Nassau Street offers small-town charm with restaurants and shops. NYC and Philadelphia are an hour away by train. The lack of professional schools creates a liberal arts focus even in engineering and science. Residential colleges house underclassmen and create smaller communities within the university. Campus is walkable and architecturally stunning with fall leaves and historic buildings. The prestige is palpable but students describe the culture as collaborative rather than cutthroat.",
    topMajors: ["computer-science", "economics", "mathematics"]
  },
  {
    id: "ut-austin",
    name: "University of Texas at Austin",
    city: "Austin",
    state: "TX",
    annualCost: 31242,
    campusDescription: "UT Austin's massive campus sits in the heart of Austin, seamlessly integrated with one of America's most vibrant cities. The culture embraces Texas pride - burnt orange everywhere, 'Hook 'em Horns' hand signs, and football Saturdays at Darrell K Royal Stadium are religion. Austin's live music scene, food trucks, tech industry (Dell, Indeed, Apple), and 'Keep Austin Weird' culture create endless opportunities beyond campus. Sixth Street offers nightlife, Lady Bird Lake has trails and kayaking, and year-round warm weather enables outdoor lifestyles. The large school means you can find any community - from conservative to liberal, party scene to quiet study groups. Greek life exists but isn't dominant given the size. Students are friendly (Southern hospitality) and school spirit is intense. The scale means large lectures but also incredible resources, research opportunities, and career connections. McCombs Business School and Cockrell Engineering are particularly strong. Diverse population reflects Texas demographics. Weekends might mean BBQ, swimming at Barton Springs, or concerts at ACL Live.",
    topMajors: ["computer-science", "business-administration", "finance", "engineering", "marketing", "accounting"]
  },
  {
    id: "duke",
    name: "Duke University",
    city: "Durham",
    state: "NC",
    annualCost: 82854,
    campusDescription: "Duke's Gothic Wonderland campus (West Campus) and Georgian-style East Campus in Durham, North Carolina offer Southern charm with top-tier academics. The culture is preppy and social with intense school spirit centered on basketball - camping out for tickets to Cameron Indoor Stadium games is a rite of passage. Greek life and SLGs (Selective Living Groups) dominate social scene. Students work hard and party hard, balancing rigorous academics with active social lives. Durham has evolved from tobacco town to growing foodie and startup scene (Research Triangle Park nearby). Weather is mild with beautiful spring blooms and humid summers. Traditions include K-Ville (tenting for basketball), LDOC (Last Day of Classes celebration), and rivalries with UNC. The divide between Trinity (Arts & Sciences) and Pratt (Engineering) students creates friendly competition. Students describe classmates as ambitious but collaborative. Southern location creates distinct culture from Northeast elite schools - more laid-back and friendly but equally driven.",
    topMajors: ["computer-science", "biology", "nursing", "economics", "data-science"]
  },
  {
    id: "johns-hopkins",
    name: "Johns Hopkins University",
    city: "Baltimore",
    state: "MD",
    annualCost: 81000,
    campusDescription: "Johns Hopkins' Homewood campus in northern Baltimore features Georgian buildings, beautiful quads, and a distinct pre-med culture. Known for academic intensity (especially in sciences and pre-health), students are driven and career-focused. The medical school and hospital create incredible research and volunteer opportunities. Baltimore's Inner Harbor, museums, and restaurants are accessible, and DC is an hour away by train for internships and exploration. The culture has gotten more social over the years with growing Greek life and Spring Fair tradition. Lacrosse is the dominant sport with fierce school spirit. The stereotype of cutthroat pre-meds is exaggerated - students are collaborative and supportive through challenging coursework. Winters are cold, springs are beautiful. The campus feels like a residential college bubble within an urban environment. Research opportunities abound from freshman year. Students describe it as intense but rewarding, with incredibly smart and motivated peers pushing each other to excel.",
    topMajors: ["biology", "nursing", "computer-science"]
  },
  {
    id: "emory",
    name: "Emory University",
    city: "Atlanta",
    state: "GA",
    annualCost: 79910,
    campusDescription: "Emory's leafy suburban campus in Atlanta's Druid Hills neighborhood feels like an oasis with Italian Renaissance-style buildings and beautiful landscaping. The culture is pre-professional with strong pre-med, pre-law, and business tracks. Students are driven but Southern hospitality creates a friendlier atmosphere than northern schools. Atlanta offers major city amenities - restaurants, music, professional sports, CDC and corporate headquarters for internships. Greek life exists but isn't dominant; social life also revolves around clubs and Atlanta exploration. The relationship with nearby CDC creates unique public health opportunities. Weather is warm most of the year. Students describe classmates as collaborative and supportive rather than competitive. Traditions include Dooley (skeleton mascot) Week and access to the Carter Presidential Library. The campus is less isolated than some suburban schools with Atlanta's neighborhoods easily accessible. Strong emphasis on service and social justice. Diverse student body with significant international student population.",
    topMajors: ["biology", "nursing", "business-administration"]
  },
  {
    id: "ucsf",
    name: "University of California, San Francisco",
    city: "San Francisco",
    state: "CA",
    annualCost: 44551,
    campusDescription: "UCSF is unique as a graduate-only institution focused exclusively on health sciences (medicine, nursing, pharmacy, dentistry). The campus is spread across San Francisco with the main Parnassus campus on a hill overlooking the city. The culture is intensely collaborative and mission-driven around improving health worldwide. Being in San Francisco offers incredible cultural diversity, food scene, and healthcare innovation ecosystem. The fog and microclimates mean variable weather even within the city. Students are slightly older (graduate/professional students) creating a more mature atmosphere. Access to UCSF Medical Center provides cutting-edge clinical experiences. The focus on health equity and serving diverse populations is central to the culture. While housing is expensive, the education quality and career opportunities are exceptional.",
    topMajors: ["nursing"]
  },
  {
    id: "unc",
    name: "University of North Carolina at Chapel Hill",
    city: "Chapel Hill",
    state: "NC",
    annualCost: 28648,
    campusDescription: "UNC's picturesque campus in charming Chapel Hill embodies classic college town life. The culture combines Southern hospitality with academic excellence and basketball obsession - the Dean Dome and rivalry with Duke define school spirit. Franklin Street offers restaurants, bars, and shops steps from campus. Students are friendly, collaborative, and proud of the affordable, high-quality public education. Greek life is present but not overwhelming. Beautiful weather most of the year enables outdoor lifestyles and studying on quads. Traditions include walking through the Old Well for good luck and rushing Franklin Street after basketball wins. The Journalism, Business (Kenan-Flagler), and Public Health schools are particularly strong. Campus feels like a bubble but Raleigh-Durham offers internship and entertainment options nearby. Students describe the vibe as work hard/play hard with strong community feel. Carolina blue is everywhere during basketball season. The public school atmosphere is more egalitarian than private schools with students from diverse backgrounds.",
    topMajors: ["nursing", "business-administration", "biology", "marketing", "accounting", "education"]
  },
  {
    id: "michigan",
    name: "University of Michigan - Ann Arbor",
    city: "Ann Arbor",
    state: "MI",
    annualCost: 35048,
    campusDescription: "Michigan's massive campus in Ann Arbor creates the quintessential Big Ten experience - football Saturdays at 'The Big House' (107,000+ capacity) are legendary, students wear maize and blue everywhere, and school spirit is off the charts. Ann Arbor is the perfect college town with great restaurants, music venues, and bookstores on and near campus. The academic culture is rigorous across all programs (engineering, business, LSA, nursing all top-ranked) but collaborative rather than cutthroat. Students are ambitious and well-rounded - working hard while also being involved in 1,600+ student organizations. Weather brings all four seasons including harsh winters and beautiful fall colors. Greek life is present but not dominant given the large size. Traditions include touching the banner before football games and the Michigan-Ohio State rivalry. The size means you can find your niche while having resources of a major research university. Downtown Ann Arbor feels like an extension of campus. Students describe Michigan as combining Ivy League academics with Big Ten social life.",
    topMajors: ["computer-science", "business-administration", "mechanical-engineering", "nursing", "kinesiology", "exercise-science"]
  },
  {
    id: "washington",
    name: "University of Washington",
    city: "Seattle",
    state: "WA",
    annualCost: 39906,
    campusDescription: "UW's stunning campus overlooks Lake Washington with views of Mount Rainier on clear days, featuring cherry blossoms in spring and Gothic architecture. Seattle's tech industry (Amazon, Microsoft, countless startups) creates incredible internship and career opportunities, especially for CS and engineering students. The culture is Pacific Northwest laid-back with emphasis on outdoor activities - students hike, ski, kayak, and embrace the active lifestyle. Rain is frequent but creates the lush, green environment. Greek Row is prominent but the large campus supports diverse communities. Coffee culture is strong (it's Seattle!) and students are more casually dressed than East Coast schools. Husky football and rowing have strong followings. The urban setting means Seattle's music scene, food diversity, and cultural activities are easily accessible. Students describe the vibe as collaborative and less competitive than peer schools. The public school culture means large lectures balanced by research opportunities. Quarter system keeps academics fast-paced.",
    topMajors: ["computer-science", "nursing", "biology", "data-science"]
  },
  {
    id: "yale",
    name: "Yale University",
    city: "New Haven",
    state: "CT",
    annualCost: 83880,
    campusDescription: "Yale's Gothic campus in New Haven features stunning architecture, secret societies, and a residential college system that divides students into 14 communities with distinct identities and fierce intramural competition. The culture balances academic excellence with strong emphasis on extracurriculars - Yale students are joiners who act in plays, write for publications, sing in a cappella groups, and lead organizations. New Haven offers surprising pizza (rated among America's best), restaurants, and arts scene, though students stay campus-focused. Traditions include Bladderball (now banned), shopping period (trying classes before committing), and secret society 'tap' night. The residential colleges create smaller communities within the larger university - you'll know your college fellows extremely well. Students are collaborative, creative, and often interested in leadership and public service. The political science, history, drama, and English programs are legendary. Less pre-professional than peer schools, though increasingly career-focused. Gothic architecture creates a beautiful campus, especially in fall.",
    topMajors: ["economics", "biology", "english"]
  },
  {
    id: "columbia",
    name: "Columbia University",
    city: "New York",
    state: "NY",
    annualCost: 85967,
    campusDescription: "Columbia's compact campus in Manhattan's Morningside Heights creates a unique college experience in the heart of NYC. The Core Curriculum (required classes in literature, philosophy, art, music) creates shared intellectual experience and late-night discussions. Students are ambitious and leverage the city constantly - internships, cultural events, restaurants, nightlife - while maintaining campus community. The urban setting means small campus (quad, library, few athletic facilities) but all of NYC as your playground. Students are politically engaged and diverse. Residential life in dorms keeps campus feel despite urban location. The energy is intense - ambitious students in the most dynamic city. Traditions include Orgo Night (marching band disrupting studying), Bacchanal concert, and 1020 (champagne on Low Library steps). Weather brings all four seasons. Subway access makes weekend trips and professional opportunities endless. Students describe it as perfect for those who want traditional academics plus city advantages. Less campus cohesion than rural schools but unmatched opportunities.",
    topMajors: ["computer-science", "economics", "english"]
  },
  {
    id: "nyu",
    name: "New York University",
    city: "New York",
    state: "NY",
    annualCost: 81070,
    campusDescription: "NYU's 'campus' is Greenwich Village itself - no gates or central quad, just purple flags marking buildings integrated into the neighborhood. This creates a completely urban experience where NYC IS your campus. Students are independent, career-focused, and leverage the city's opportunities in finance, tech, media, arts, and startups. Washington Square Park serves as the de facto quad. The culture is diverse and pre-professional - students intern year-round and network actively. Tisch (arts), Stern (business), and Courant (CS/math) create distinct subcultures. Social life revolves around exploring neighborhoods, concerts, restaurants rather than traditional campus events. No football team or Greek life means different college experience than traditional schools. Students choose NYU specifically for this urban immersion. Housing is primarily in dorm buildings throughout downtown. The energy is entrepreneurial and fast-paced. Perfect for self-directed students who want professional experience concurrent with education. Study abroad locations worldwide are excellent. Winters are cold but the city never sleeps.",
    topMajors: ["finance", "business-administration", "computer-science", "marketing", "communications"]
  },
  {
    id: "usc",
    name: "University of Southern California",
    city: "Los Angeles",
    state: "CA",
    annualCost: 85000,
    campusDescription: "USC's campus is an urban oasis with palm trees and brick buildings in South Los Angeles. The culture is spirited and social - 'Fight On' and Tommy Trojan are everywhere, football Saturdays bring tailgates and school pride, and students are incredibly networked ('Trojan Family' alumni connections are legendary). Greek life is prominent and influential. LA's entertainment industry creates unique opportunities for film students, while tech, business, and other programs leverage the city's diversity. Weather is perfect year-round enabling outdoor activities and beach trips. Students are ambitious, polished, and often from wealthy backgrounds, though increasing diversity. The campus feels like a bubble within LA. Traditions include Conquest over UCLA, Fountain Run, and Trojan Family Weekend. Students describe the culture as work hard/play hard with strong emphasis on networking and careers. The combination of excellent academics, school spirit, beautiful weather, and LA opportunities creates a unique environment. Some criticize wealth inequality on campus, but school spirit unites students.",
    topMajors: ["business-administration", "computer-science", "communications", "kinesiology", "marketing", "accounting", "finance"]
  },
  {
    id: "penn-state",
    name: "Pennsylvania State University",
    city: "State College",
    state: "PA",
    annualCost: 38574,
    campusDescription: "Penn State's massive campus in the middle of Pennsylvania creates the ultimate college town experience - State College exists primarily to serve the university. Beaver Stadium holds 106,000+ fans for white-out football games that define school spirit. The culture is friendly, spirited, and all about the Penn State community - 'We Are Penn State' chant unites students. Students are down-to-earth and social with strong Greek life presence. Traditions include THON (46-hour dance marathon raising millions for pediatric cancer), rushing the field, and creamery ice cream. The isolated location means campus IS your world, creating tight community bonds. Weather brings all four seasons with snowy winters. The size means you'll find your niche among hundreds of clubs and organizations. Students describe it as classic American college experience with Big Ten spirit, excellent academics (especially engineering), and lifelong friendships. Alumni network ('We Are' family) is incredibly strong. Downtown State College offers student-friendly bars, restaurants, and apartments within walking distance.",
    topMajors: ["exercise-science", "kinesiology", "mechanical-engineering"]
  },
  {
    id: "wisconsin",
    name: "University of Wisconsin-Madison",
    city: "Madison",
    state: "WI",
    annualCost: 39427,
    campusDescription: "Wisconsin's beautiful campus sits between Lake Mendota and downtown Madison, creating the perfect college city. The culture combines serious academics (top research university) with Midwest friendliness and work-hard/play-hard mentality. Camp Randall Stadium's 'Jump Around' tradition between 3rd and 4th quarters of football games is legendary. State Street connects campus to the State Capitol and offers restaurants, shops, and bars. The Terrace overlooking the lake is the social center in warm months - students study, socialize, and watch sunsets. Badger pride runs deep with red and white everywhere. Students are collaborative, outdoorsy (hiking, skiing, biking), and politically engaged. Greek life exists but isn't dominant. Dairy state pride means amazing cheese and brats. Four seasons bring colorful fall, frozen lake-skating winters, and beautiful summers. The public school culture is egalitarian and students come from all backgrounds. Madison consistently ranks as one of America's best college cities and cities for young professionals. Research opportunities and internships abound.",
    topMajors: ["computer-science", "business-administration", "exercise-science", "kinesiology", "education", "statistics"]
  },
  {
    id: "harvard",
    name: "Harvard University",
    city: "Cambridge",
    state: "MA",
    annualCost: 79450,
    campusDescription: "Harvard's historic campus in Cambridge features iconic red brick buildings, Harvard Yard, and 400 years of tradition. The culture is ambitious and intellectually intense - students are high-achievers who were top of their high schools. The House system (upperclassmen live in 12 residential houses) creates smaller communities and strong identities. Cambridge offers college town charm while Boston is across the river for city opportunities. Students are incredibly diverse in interests - from future politicians to scientists to artists - creating vibrant intellectual community. Traditions include Housing Day, Primal Scream, and The Game (football vs. Yale). The prestige can feel weighty but creates incredible doors - speakers, internships, research, alumni network. Social life revolves around Houses, final clubs (exclusive social organizations), and extracurriculars. Students are collaborative despite stereotypes of competitiveness. The academic freedom (minimal requirements) allows exploration. Weather brings harsh winters and beautiful falls. Being 'Harvard' opens doors but students emphasize the people and opportunities over the name.",
    topMajors: ["economics", "computer-science", "biology", "mathematics", "statistics"]
  },
  {
    id: "chicago",
    name: "University of Chicago",
    city: "Chicago",
    state: "IL",
    annualCost: 84126,
    campusDescription: "UChicago's Gothic campus in Hyde Park on Chicago's South Side creates an intellectual haven. The culture is famously rigorous and intellectually intense - 'where fun comes to die' is a tongue-in-cheek motto students embrace. The Core Curriculum (extensive requirements) ensures all students share deep liberal arts foundation. Students love learning for its own sake and engage in passionate debates about ideas. Scav Hunt (massive scavenger hunt) showcases quirky, creative side. The house system creates close-knit communities within residential dorms. Chicago's downtown, museums, food scene, and culture are accessible by train. Students are collaborative and supportive through challenging academics - commiserating over problem sets builds bonds. Greek life exists but isn't central. Traditions include Kuviasungnerk (winter festival) and Doc Films. The quarter system keeps pace fast. Students choose UChicago specifically for intellectual culture over pre-professional focus. Not the right fit for everyone, but students who thrive love the life of the mind atmosphere. Weather brings very cold winters and humid summers.",
    topMajors: ["economics", "mathematics", "statistics"]
  },
  {
    id: "purdue",
    name: "Purdue University",
    city: "West Lafayette",
    state: "IN",
    annualCost: 28794,
    campusDescription: "Purdue's campus in West Lafayette, Indiana epitomizes Midwest engineering powerhouse. The culture is engineering-focused, practical, and career-oriented - students here to learn skills and launch careers. Big Ten sports (especially basketball at Mackey Arena) create strong school spirit and 'Boiler Up' chant. Greek life is significant social outlet. The campus is large and spread out with brick buildings and lots of construction (always improving). Lafayette/West Lafayette offer affordable college town amenities. Students are down-to-earth, collaborative, and supportive - engineering is hard and students help each other succeed. Weather brings all four seasons with cold, snowy winters. Traditions include Grand Prix (go-kart race), breakfast at Purdue Pete's (mascot), and painting the rock. Strong co-op and internship culture connects students to industry. Alumni network especially strong in engineering and tech companies. The culture values practical problem-solving over theory. Students describe it as great value education with strong career outcomes and friendly community.",
    topMajors: ["mechanical-engineering", "electrical-engineering", "aerospace-engineering", "computer-science"]
  },
  {
    id: "carnegie-mellon",
    name: "Carnegie Mellon University",
    city: "Pittsburgh",
    state: "PA",
    annualCost: 79559,
    campusDescription: "CMU's compact urban campus sits in Pittsburgh's Oakland neighborhood, adjacent to museums, restaurants, and Schenley Park. The culture is intensely collaborative and multidisciplinary - computer science students work with drama majors, engineers collaborate with artists. Known for rigorous academics, the vibe balances hard work with creative outlets like the famous drama program, hackathons, and game development clubs. Pittsburgh offers a surprisingly vibrant city experience with affordable living, great food, and a growing tech scene (Google, Uber, and many startups have major presences). Campus traditions include Spring Carnival with its famous Buggy Races, Scotch'n'Soda theater, and pulling all-nighters in the Gates Center for Computer Science. The campus feels tight-knit despite being academically competitive, with students supporting each other through challenging coursework. Seasons are distinct with beautiful fall colors and snowy winters.",
    topMajors: ["computer-science", "software-engineering", "electrical-engineering"]
  },
  {
    id: "texas",
    name: "University of Texas at Austin",
    city: "Austin",
    state: "TX",
    annualCost: 31242,
    campusDescription: "UT Austin's massive campus sits in the heart of Austin, seamlessly integrated with one of America's most vibrant cities. The culture embraces Texas pride - burnt orange everywhere, 'Hook 'em Horns' hand signs, and football Saturdays at Darrell K Royal Stadium are religion. Austin's live music scene, food trucks, tech industry (Dell, Indeed, Apple), and 'Keep Austin Weird' culture create endless opportunities beyond campus. Sixth Street offers nightlife, Lady Bird Lake has trails and kayaking, and year-round warm weather enables outdoor lifestyles. The large school means you can find any community - from conservative to liberal, party scene to quiet study groups. Greek life exists but isn't dominant given the size. Students are friendly (Southern hospitality) and school spirit is intense. The scale means large lectures but also incredible resources, research opportunities, and career connections. McCombs Business School and Cockrell Engineering are particularly strong. Diverse population reflects Texas demographics.",
    topMajors: ["computer-science", "business-administration", "finance", "mechanical-engineering", "kinesiology", "education", "marketing"]
  },
  {
    id: "indiana",
    name: "Indiana University Bloomington",
    city: "Bloomington",
    state: "IN",
    annualCost: 39120,
    campusDescription: "IU's beautiful limestone campus in Bloomington is consistently ranked among America's most beautiful. The culture is social and spirited with strong Greek life, basketball passion (Assembly Hall games are electric), and classic Big Ten atmosphere. Kelley School of Business is highly regarded creating career-focused culture. Students are friendly, Midwestern, and social - work-hard/play-hard mentality. Bloomington is a quintessential college town with great local restaurants, music venues (large music scene), and outdoor recreation (hiking, cycling at Griffy Lake). The campus features beautiful architecture, wooded areas, and is very walkable. Traditions include Little 500 (bicycle race featured in 'Breaking Away'), striped candies, and singing the fight song. Students describe the social life as active and fun while maintaining academic standards. Weather brings all four seasons. The public school culture creates diverse, accessible community. Strong sense of Hoosier pride and alumni network. The combination of beautiful campus, strong programs, and vibrant social life creates classic American college experience.",
    topMajors: ["business-administration", "finance", "marketing", "accounting"]
  },
  {
    id: "virginia",
    name: "University of Virginia",
    city: "Charlottesville",
    state: "VA",
    annualCost: 35270,
    campusDescription: "UVA's stunning campus, designed by Thomas Jefferson, features the iconic Rotunda, Lawn with student rooms, and Jeffersonian architecture. The culture is preppy and traditional with strong Greek life and secret societies adding mystique. Students dress up for football games and pride themselves on Southern gentleman/lady manners. Charlottesville offers charming downtown mall with restaurants and shops near campus. The culture balances strong academics with very active social scene. Traditions include lighting the Rotunda, streaking the Lawn, and honoring the Honor Code (single sanction system). Students are collaborative and friendly while being ambitious. The public Ivy status means high-quality education at lower cost. Weather is mild with beautiful spring. Greek life dominates social scene for many but alternatives exist. Students describe it as work-hard/play-hard with strong school pride. McIntire School of Commerce is highly regarded. The grounds (never 'campus' - Jefferson called it grounds) feel like a traditional college with historic beauty and modern amenities.",
    topMajors: ["business-administration", "economics", "finance"]
  },
  {
    id: "northwestern",
    name: "Northwestern University",
    city: "Evanston",
    state: "IL",
    annualCost: 84696,
    campusDescription: "Northwestern's lakefront campus in Evanston offers stunning Lake Michigan views while being just 30 minutes from Chicago by train. The culture is pre-professional and balanced - students are ambitious about careers while also involved in diverse activities from Big Ten sports to theater. The quarter system keeps academics fast-paced. Greek life is significant and Northwestern brings together different schools (journalism, engineering, theater, arts and sciences) creating diverse community. Students are collaborative, friendly, and high-achieving. Evanston offers college town amenities while Chicago provides big city opportunities for internships and fun. Football games and basketball create school spirit, though not as intense as other Big Ten schools. Traditions include Dillo Day (music festival), painting the rock, and Primal Scream. Weather brings harsh winters but beautiful summers on the beach. Students describe it as combining Ivy League academics with Big Ten social life. The proximity to Chicago is a huge draw for career opportunities.",
    topMajors: ["communications", "economics", "journalism"]
  },
  {
    id: "syracuse",
    name: "Syracuse University",
    city: "Syracuse",
    state: "NY",
    annualCost: 78789,
    campusDescription: "Syracuse's hilltop campus in upstate New York features iconic orange everywhere and legendary school spirit. The Carrier Dome hosts basketball and football games where students camp out for tickets and rush the court. Students are social, friendly, and incredibly loyal - Orange pride is real. Newhouse School of Communications is top-ranked bringing media-focused culture. Greek life is prominent, and students embrace winter through skiing and snowball fights (Syracuse gets LOTS of snow). Marshall Street (M Street) offers college bars and restaurants. Students describe the vibe as work-hard/play-hard with active nightlife. Campus traditions include Otto the Orange mascot, stomping during games, and Syracuse-Georgetown basketball rivalry. The community is tight-knit despite medium size. Students are collaborative and supportive. The weather is brutally snowy but creates bonding experiences. Alumni network is strong, especially in media industries. Students choose Syracuse for the combination of strong programs, school spirit, and social atmosphere.",
    topMajors: ["communications", "business-administration"]
  },
  {
    id: "florida",
    name: "University of Florida",
    city: "Gainesville",
    state: "FL",
    annualCost: 28658,
    campusDescription: "UF's sprawling campus in Gainesville is all about Gator pride - football Saturdays at The Swamp are electric and students live for football season. The culture is spirited, friendly, and Southern with year-round warm weather enabling outdoor lifestyles. Students bike everywhere (campus is large and flat). Greek life is significant and social scene is active. Gainesville is a classic college town - affordable, student-friendly, with bars and restaurants around campus. Students are collaborative and laid-back while being academically strong (rising reputation as top public university). The combination of excellent academics, big sports culture, warm weather, and affordable cost attracts ambitious students. Traditions include Gator Chomp, orange and blue game, and I singing 'We Are The Boys.' Research opportunities abound at this major research university. The public school culture creates diverse, accessible community. Students describe it as perfect balance of academics and social life with incredible school spirit.",
    topMajors: ["business-administration", "biology", "marketing", "kinesiology"]
  },
  {
    id: "ohio-state",
    name: "Ohio State University",
    city: "Columbus",
    state: "OH",
    annualCost: 34934,
    campusDescription: "Ohio State's enormous campus in Columbus creates massive school spirit and opportunities. Football is religion - Ohio Stadium ('The Horseshoe') holds 102,000+ fans and Script Ohio performed by the marching band is iconic. Students are friendly, Midwestern, and intensely loyal - scarlet and gray everywhere. Columbus is a growing city with vibrant food scene, festivals, and increasing job opportunities (especially in tech and finance). The size means you'll find your community among hundreds of options. Greek life is present but not necessary given the scale. Campus culture is collaborative and spirited. Students are passionate about being Buckeyes and the Michigan rivalry runs deep. Traditions include Mirror Lake Jump (pre-Michigan game), Carmen Ohio fight song, and Buckeye Grove. The campus itself has everything - recreation centers, restaurants, concert venues. Weather brings all four seasons. The public school culture creates accessible, diverse community. Ohio State grads are everywhere creating strong alumni network.",
    topMajors: ["business-administration", "communications", "marketing", "accounting"]
  },
  {
    id: "boston-university",
    name: "Boston University",
    city: "Boston",
    state: "MA",
    annualCost: 82760,
    campusDescription: "BU's urban campus stretches along Commonwealth Avenue in Boston, integrated directly into the city. There's no traditional campus quad - instead, the city is your campus with academic buildings, dorms, and dining spread along a 2-mile corridor. The culture is pre-professional and fast-paced - students leverage Boston's opportunities in medicine, tech, finance, and culture. The urban setting means less traditional campus life but incredible city access - internships, museums, concerts, sports, restaurants all within reach. Students are independent and career-focused. Hockey games at Agganis Arena create school spirit. The diversity of schools (COM, Questrom, ENG, etc.) creates different subcultures. Traditions include BU Beach (students sunbathing on a patio), Head of the Charles, and the Boston Marathon running through campus. Weather brings harsh winters but beautiful falls. Social life revolves around exploring Boston neighborhoods, city activities, and smaller communities within the large university. Perfect for students who want urban immersion and professional opportunities alongside education.",
    topMajors: ["business-administration", "communications"]
  },
  {
    id: "ucla",
    name: "University of California, Los Angeles",
    city: "Los Angeles",
    state: "CA",
    annualCost: 36506,
    campusDescription: "UCLA's beautiful campus in Westwood features red brick buildings, palm trees, and perfect weather year-round. The culture is spirited and balanced - students work hard (academic rigor is real) but also enjoy LA lifestyle with beaches, hiking, and city activities nearby. Basketball tradition (Pauley Pavilion) and USC rivalry create intense school spirit. Students are friendly, diverse, and ambitious. Westwood Village offers restaurants and shops walking distance from campus. The public school culture creates accessible community. Students are collaborative despite competitiveness for some programs. Traditions include Undie Run, Midnight Yell, and True Bruin Welcome. Greek life exists but isn't dominant. Weather enables outdoor studying, recreation year-round. The combination of academic excellence, school spirit, and LA location is unique. Students describe feeling fortunate for quality education at public school price in amazing location. Very diverse campus reflects California demographics.",
    topMajors: ["biology", "computer-science", "business-administration", "economics"]
  },
  {
    id: "ucsd",
    name: "University of California, San Diego",
    city: "La Jolla",
    state: "CA",
    annualCost: 36384,
    campusDescription: "UCSD's sprawling campus overlooks the Pacific Ocean in beautiful La Jolla. The culture is academically intense and less socially vibrant than other UCs - students joke about it being 'socially dead' but that's exaggerated. The college system (six colleges with different focuses and requirements) creates smaller communities. Students are collaborative, diverse, and STEM-focused. La Jolla beaches and year-round perfect weather enable surfing, beach volleyball, and outdoor activities. San Diego's beaches, food scene (especially Mexican food), and laid-back culture influence campus life. No football team means less traditional sports culture but intramurals and clubs thrive. Students are friendly and supportive. Proximity to biotech industry creates research and career opportunities. The campus is huge requiring walking or biking. Traditions include Watermelon Drop, UnOlympics, and college-specific events. Weather is absolutely perfect. Students choose UCSD for strong academics (especially biology, engineering) and amazing location at a great value.",
    topMajors: ["biology", "computer-science", "data-science"]
  },
  {
    id: "minnesota",
    name: "University of Minnesota Twin Cities",
    city: "Minneapolis",
    state: "MN",
    annualCost: 35290,
    campusDescription: "Minnesota's campus spans both sides of the Mississippi River in Minneapolis (and slightly into St. Paul). The culture is friendly, Midwestern nice, and outdoorsy despite harsh winters. Students embrace winter with ice skating, hockey games at Mariucci Arena, and snow activities. The Twin Cities offer excellent arts scene, restaurants, and job opportunities (Fortune 500 companies like Target, 3M, UnitedHealth). Campus is connected by tunnels and skyways for winter mobility. Big Ten sports create school spirit though less intense than some peers. Students are collaborative and down-to-earth. Traditions include Skiing Day, Homecoming, and Paul Bunyan's Axe (Wisconsin rivalry). The public school culture creates diverse, accessible community. Greek life exists but isn't central. Strong programs across engineering, business, and sciences. The campus feels like a community within a major metropolitan area. Students describe it as great value with opportunities of a large research university in a vibrant city.",
    topMajors: ["kinesiology", "exercise-science", "business-administration"]
  },
  {
    id: "north-carolina",
    name: "University of North Carolina at Chapel Hill",
    city: "Chapel Hill",
    state: "NC",
    annualCost: 28648,
    campusDescription: "UNC's picturesque campus in charming Chapel Hill embodies classic college town life. The culture combines Southern hospitality with academic excellence and basketball obsession - the Dean Dome and rivalry with Duke define school spirit. Franklin Street offers restaurants, bars, and shops steps from campus. Students are friendly, collaborative, and proud of the affordable, high-quality public education. Greek life is present but not overwhelming. Beautiful weather most of the year enables outdoor lifestyles and studying on quads. Traditions include walking through the Old Well for good luck and rushing Franklin Street after basketball wins. The Journalism, Business (Kenan-Flagler), and Public Health schools are particularly strong. Campus feels like a bubble but Raleigh-Durham offers internship and entertainment options nearby. Students describe the vibe as work hard/play hard with strong community feel. Carolina blue is everywhere during basketball season. The public school atmosphere is more egalitarian than private schools with students from diverse backgrounds.",
    topMajors: ["nursing", "business-administration", "biology", "kinesiology", "exercise-science", "education"]
  },
  {
    id: "oregon",
    name: "University of Oregon",
    city: "Eugene",
    state: "OR",
    annualCost: 39308,
    campusDescription: "Oregon's tree-filled campus in Eugene embodies Pacific Northwest culture - rainy, green, and outdoorsy. Students are laid-back, environmentally conscious, and active - hiking, biking, and running are lifestyles. Track and Field tradition is legendary (Hayward Field hosted Olympic Trials) and Nike founder Phil Knight's influence is everywhere. Football at Autzen Stadium creates school spirit. Eugene is a classic college town with local food scene, breweries, and progressive culture. Students wear lots of Duck gear and embrace the 'Go Ducks' identity. The culture is collaborative and less competitive than other schools. Weather is rainy but enables lush greenery. Social scene is active with house parties and exploring Eugene. Students are friendly and welcoming. Traditions include painting the 'O,' Ducks after Dark (welcome event), and Nike's annual uniform reveals. The campus feels like a bubble within Eugene. Strong programs in business, journalism, and kinesiology. Students choose Oregon for combination of strong academics, athletic tradition, and Pacific Northwest lifestyle.",
    topMajors: ["kinesiology", "exercise-science", "business-administration"]
  },
  {
    id: "georgia",
    name: "University of Georgia",
    city: "Athens",
    state: "GA",
    annualCost: 29832,
    campusDescription: "UGA's classic Southern campus in Athens features historic red brick buildings, towering oak trees, and Chapel Bell that rings after victories. The culture is quintessential SEC - football Saturdays between the hedges at Sanford Stadium are legendary, students dress up in red and black, and 'How 'bout them Dawgs' is the greeting. Athens is a vibrant college town with incredible music scene (R.E.M., B-52s originated here), restaurants, and Downtown nightlife. Students are friendly, social, and Southern - Greek life is huge and influential. The culture is work hard/play hard with strong school spirit. Traditions include ringing the Chapel Bell, Dawg Walk, and Georgia-Florida game (World's Largest Outdoor Cocktail Party). Weather is warm most of the year. Students are collaborative despite size. The Terry College of Business and journalism programs are strong. Students describe it as having everything - academics, sports, social life, beautiful campus, and amazing college town. Alumni network is incredibly loyal.",
    topMajors: ["business-administration", "kinesiology", "exercise-science", "biology"]
  },
  {
    id: "notre-dame",
    name: "University of Notre Dame",
    city: "Notre Dame",
    state: "IN",
    annualCost: 82046,
    campusDescription: "Notre Dame's gorgeous campus in northern Indiana features the Golden Dome, Touchdown Jesus mural, and distinctive Gothic architecture. The culture is Catholic (though students of all faiths attend), traditional, and centered on football - game days are religious experiences with the band, leprechaun mascot, and intense school spirit. The residential hall system (single-sex dorms with lifelong loyalty) creates tight communities. South Bend is a smaller city with some amenities but campus is self-contained. Students are friendly, service-oriented, and moderately conservative (though diverse politically). The culture emphasizes tradition, values, and community. Dorm traditions, intramural sports, and service projects define social life alongside football. Students are collaborative and supportive. Weather brings harsh winters and beautiful falls. Traditions include Midnight Drummer's Circle, Bookstore Basketball, and Leprechaun movies at off-campus houses. Academic rigor is balanced by strong community support. Students choose Notre Dame for unique combination of academics, Catholic identity, tradition, and football culture.",
    topMajors: ["business-administration", "finance", "accounting"]
  }
];

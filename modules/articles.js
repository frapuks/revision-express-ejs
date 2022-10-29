const articles = [
    {
        title : "HTML / CSS",
        slug : "html-css",
        saisonNumber: 1,
        date : "26/09/2022",
        level : 1/10,
        finished : true,
        infos: "Apprentissage du Mardown, Html et css",
        image : "html-css.webp",
        color : "#ef6325",
        description : "HTML signifie « HyperText Markup Language » qu'on peut traduire par « langage de balises pour l'hypertexte ». Il est utilisé afin de créer et de représenter le contenu d'une page web et sa structure. D'autres technologies sont utilisées avec HTML pour décrire la présentation d'une page (CSS) et/ou ses fonctionnalités interactives (JavaScript). L'« hypertexte » désigne les liens qui relient les pages web entre elles, que ce soit au sein d'un même site web ou entre différents sites web. Les liens sont un aspect fondamental du Web. Ce sont eux qui forment cette « toile » (ce mot est traduit par web en anglais). En téléchargeant du contenu sur l'Internet et en le reliant à des pages créées par d'autres personnes, vous devenez un participant actif du World Wide Web. Le langage HTML utilise des « balises » pour annoter du texte, des images et d'autres contenus afin de les afficher dans un navigateur web. Le balisage HTML comprend des « éléments » spéciaux tels que <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <output>, <progress>, <video>, <ul>, <ol>, <li> et bien d'autres. En HTML, les balises sont insensibles à la casse et peuvent aussi bien être écrites en minuscules, en majuscules voire avec un mélange des deux. Autrement dit, la balise <title> pourrait très bien être écrite comme <Title>, <TiTle> ou d'une autre façon."
    },
    {
        title : "Javascript",
        slug : "js",
        saisonNumber: 2,
        date : "10/10/2022",
        level : 3/10,
        finished : true,
        infos: "Découverte de javascript",
        image : "js.png",
        color: "#f7e018",
        description : "JavaScript (souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. Mais il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que Node.js, Apache CouchDB voire Adobe Acrobat. Le code JavaScript est interprété ou compilé à la volée (JIT). C'est un langage à objets utilisant le concept de prototype, disposant d'un typage faible et dynamique qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet. Apprenez-en plus sur JavaScript. Cette section de MDN est dédiée au langage JavaScript. Pour des informations sur l'utilisation de JavaScript avec les API spécifiques des navigateurs web pour les pages web, veuillez consulter les sections sur les API Web (Web API en anglais) et le DOM."
    },
    {
        title : "Node.js",
        slug : "nodejs",
        saisonNumber: 3,
        date : "24/10/2022",
        level : 5/10,
        finished : false,
        infos: "Découverte du back end avec Node.js",
        image : "nodejs.png",
        color: "#679e63",
        description : "Node.js a été créé par Ryan Dahl en 2009. Son développement et sa maintenance sont effectués par l'entreprise Joyent. Dahl a eu l'idée de créer Node.js après avoir observé la barre de progression d'un chargement de fichier sous Flickr : le navigateur ne savait pas quel pourcentage du fichier était chargé et devait adresser une requête au serveur web. Dahl voulait développer une méthode plus simple13. Le serveur web Mongrel de Ruby a été l'autre source d'inspiration pour Dahl14. Dahl avait échoué dans plusieurs projets en C, Lua et Haskell, mais, quand le moteur V8 fut diffusé, il commença à s'intéresser à JavaScript15. Même si son idée d'origine était d'utiliser des entrées et sorties non bloquantes, il en reviendra un peu dans son module système car cela provoquait des problèmes de chargement de bibliothèques externes16. Node.js est utilisé au cœur du système d'exploitation Palm webOS17."
    },
    {
        title : "Data",
        slug : "data",
        saisonNumber: 4,
        date : "08/11/2022",
        level : 6/10,
        finished : false,
        infos: "Découverte des bases de données",
        image : "data.jpg",
        color: "#0c1147",
        description : "Une base de données permet de stocker et de retrouver des données structurées, semi-structurées ou des données brutes ou de l'information, souvent en rapport avec un thème ou une activité ; celles-ci peuvent être de natures différentes et plus ou moins reliées entre elles. Leurs données peuvent être stockées sous une forme très structurée (base de données relationnelles par exemple), ou bien sous la forme de données brutes peu structurées (avec les bases de données NoSQL par exemple). Une base de données peut être localisée dans un même lieu et sur un même support informatisé, ou répartie sur plusieurs machines à plusieurs endroits. La base de données est au centre des dispositifs informatiques de collecte, mise en forme, stockage et utilisation d'informations. Le dispositif comporte un système de gestion de base de données (abréviation : SGBD) : un logiciel moteur qui manipule la base de données et dirige l'accès à son contenu. De tels dispositifs comportent également des logiciels applicatifs, et un ensemble de règles relatives à l'accès et l'utilisation des informations1. La manipulation de données est une des utilisations les plus courantes des ordinateurs. Les bases de données sont par exemple utilisées dans les secteurs de la finance, des assurances, des écoles, de l'épidémiologie, de l'administration publique (notamment les statistiques) et des médias. Lorsque plusieurs objets nommés « bases de données » sont constitués sous forme de collection, on parle alors d'une banque de données."
    },
    {
        title : "Architecture",
        slug : "archi",
        saisonNumber: 5,
        date : "28/11/2022",
        level : 6/10,
        finished : false,
        infos: "Prise en main de la structure d'une appli",
        image : "architecture.jpg",
        color: "#ab845e",
        description : "Une architecture est le modèle fondamental à la bonne réalisation de l’application web. C’est principalement l’organisation et la structuration de cette dernière. Cela permet au développeur ou n’importe quelle personne intéressée par la conception et la création d’un tel logiciel de bien comprendre comment il va fonctionner. Elle va être composée de tous les éléments fonctionnels, techniques et de codage. Les architectures diffèrent selon le système informatique. Ici, pour l’application, en fonction de son type et de ses utilisateurs, l’architecture varie aussi. La plupart du temps pour représenter les acteurs, les actions, les fonctionnalités et la technique informatique utilisée dans une application, on utilise une méthode de modélisation graphique, c’est-à-dire, que l’on va créer un diagramme. En effet, le diagramme de type UML par exemple, donne une vision globale à son concepteur. Il permet de bien appréhender le développement d’une telle application. L’architecture est une ébauche pertinente à la mise en place de votre projet numérique. Elle vous permet de comprendre les besoins du client à qui va être destiné l’application."
    },
    {
        title : "API",
        slug : "api",
        saisonNumber: 6,
        date : "09/12/2022",
        level : 7/10,
        finished : false,
        infos: "Apprentissage des API",
        image : "api.jpg",
        color: "#d9f6ff",
        description : "En informatique, une interface de programmation d’application1 ou interface de programmation applicative2,3,4 (souvent désignée par le terme API pour Application Programming Interface) est un ensemble normalisé de classes, de méthodes, de fonctions et de constantes qui sert de façade par laquelle un logiciel offre des services à d'autres logiciels. Elle est offerte par une bibliothèque logicielle ou un service web, le plus souvent accompagnée d'une description qui spécifie comment des programmes consommateurs peuvent se servir des fonctionnalités du programme fournisseur. On parle d'API à partir du moment où une entité informatique cherche à agir avec ou sur un système tiers, et que cette interaction se fait de manière normalisée en respectant les contraintes d'accès définies par le système tiers. On dit alors que le système tiers « expose une API ». À ce titre, des interactions aussi diverses que la signature d'une fonction, une URL, un RPC… sont parfois considérés comme des API (ou micro-API) à part entière. Dans l'industrie contemporaine du logiciel, les applications informatiques se servent de nombreuses interfaces de programmation, car la programmation réutilise des briques de fonctionnalités fournies par des logiciels tiers. Cette construction par assemblage nécessite pour le programmeur de connaître la manière d’interagir avec les autres logiciels, qui dépend de leur interface de programmation. Le programmeur n'a pas besoin de connaître les détails de la logique interne du logiciel tiers, et celle-ci n'est pas nécessairement documentée par le fournisseur. Seule l'API est réellement nécessaire pour utiliser le système tiers en question. Des logiciels tels que les systèmes d'exploitation, les systèmes de gestion de base de données, les langages de programmation, ou les serveurs d'applications comportent une ou plusieurs interfaces de programmation."
    },
    {
        title : "SPA",
        slug : "spa",
        saisonNumber: 7,
        date : "16/12/2022",
        level : 0.5/10,
        finished : false,
        infos: "Le calme avant la tempête",
        image : "spa.jpg",
        color: "#5f3c28",
        description : "Un spa désigne un centre de beauté et de remise en forme, dans un cadre luxueux qu’il soit partie d’un hôtel, d’une station thermale ou qu’il existe en tant que tel. De très nombreux spas ont été créés à travers le monde depuis le dernier quart du xxe siècle5. Une communauté internationale des centres de remise en forme a vu progressivement le jour avec ses magazines professionnels spécialisés, ses salons internationaux, ses associations diverses, la formation du personnel commencent à s'organiser. La troisième édition du Mondial Spa et Beauté, destinée aux professionnels des secteurs du Bien-Être, de l'Esthétique, des Cosmétiques et du Spa s'est tenue à Paris (palais des Congrès) en mars 2008. Certains spas proposent à leur curistes des soins, piscine, sauna naturiste… Les mentions « Naturiste » et « KK » sont associées aux spas qui accueillent exclusivement les familles naturistes.."
    },
    {
        title : "CMS",
        slug : "cms",
        saisonNumber: 8,
        date : "23/12/2022",
        level : 7/10,
        finished : false,
        infos: "Prise en main des CMS",
        image : "cms.png",
        color: "#5436f1",
        description : "Un système de gestion de contenu1 ou SGC1 (content management system ou CMS en anglais) est un programme permettant de créer un site internet, un blogue ou encore un site de vente en ligne2. Il permet les fonctionnalités suivantes : il permet à plusieurs individus de travailler sur un même document, il fournit une chaîne de publication (workflow) offrant par exemple la possibilité de mettre en ligne le contenu des documents, il permet de séparer les opérations de gestion de la forme et du contenu, il permet de structurer le contenu (utilisation de FAQ, de documents, de blogues, de forums de discussion, etc.), il permet de hiérarchiser les utilisateurs et de leur attribuer des rôles et des permissions (utilisateur anonyme, administrateur, contributeur, etc.), certains SGC incluent la gestion de versions. Lorsque le SGC gère du contenu dynamique, on parle de système de gestion de contenu dynamique ou SGCD (Dynamic Content Management System ou DCMS). Le SGC ne doit pas être confondu avec les systèmes de gestion électronique des documents (GED) qui permettent de réaliser la gestion de contenu dans l'entreprise (notamment le cycle de vie des documents). WordPress et Wix font partie des SGC (ou CMS en anglais)."
    },
    {
        title : "Spécialisation",
        slug : "spe",
        saisonNumber: 9,
        date : "10/01/2022",
        level : 9/10,
        finished : false,
        infos: "Au choix : React / Data-Api",
        image : "react.png",
        color: "#61dafb",
        description : "React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état. React est une bibliothèque qui ne gère que l'interface de l'application, considéré comme la vue dans le modèle MVC. Elle peut ainsi être utilisée avec une autre bibliothèque ou un framework MVC comme AngularJS. La bibliothèque se démarque de ses concurrents par sa flexibilité et ses performances, en travaillant avec un DOM virtuel et en ne mettant à jour le rendu dans le navigateur qu'en cas de nécessité2. La bibliothèque est utilisée par Netflix3 (depuis le 25 octobre 2017, une migration de la partie client vers du JavaScript pur a permis d'augmenter les performances de 50%4), Yahoo5, Airbnb6, Sony7, Atlassian8 ainsi que par les équipes de Facebook, pratiquant l'autoéquipement sur le réseau social éponyme, Instagram ou encore WhatsApp2. À la fin de 2015, WordPress.com annonce Gutenberg, une interface pour les éditeurs de sites WordPress, développée en JavaScript avec Node.js et React9,10."
    },
    {
        title : "Apothéose",
        slug : "apo",
        saisonNumber: 10,
        date : "13/02/2022",
        level : 10/10,
        finished : false,
        infos: "Projet en groupe",
        image : "apotheose.webp",
        color: "#5b89a5",
        description : "Selon l'étymologie, apothéose vient du latin apotheosis (« déification »), lui-même issu du grec ancien ἀποθέωσις, apotheosis, il est dérivé de θεός, theós (« dieu »)1. Dans la mythologie grecque, l'apothéose signifie l'admission du héros parmi les dieux de l'Olympe : on a pour exemples celles d'Héraclès ou d'Énée. Pendant la période romaine, l'apothéose est une cérémonie de déification (anthume ou posthume) pour les empereurs (ou exceptionnellement pour une personne de la famille ou de l'entourage de l'empereur)2. Dans la religion catholique, l'apothéose renvoie à l'ascension et à la glorification posthume de saints."
    },
]

export {articles};

const collection = [
    {
        title: 'Chernobyl',
        author: 'Craig Mazin',
        category: [
            {name: 'Drame', style: 'tag is-danger ml-2 mr-1'},
            {name:  'Historique', style: 'tag is-dark'},
        ],
        link : 'https://www.youtube.com/watch?v=s9APLXM9Ei8&feature=emb_title"',
        description: '26 avril 1986, l\'histoire vraie de la pire catastrophe causée par l\'homme et de ceux qui ont sacrifié leur vie pour sauver l\'Europe du drame.',
        image:'./img/Chernobyl.jpg',

    },
    {
        title: 'Dark',
        author: ['Baran bo Odar', 'Jantje Friese'],
        category: [
            {name: 'Policier', style: 'tag is-warning ml-2 mr-1'},
            {name:  'Science-fiction', style: 'tag is-black'},
        ],
        link : 'https://www.youtube.com/watch?v=qJpIHpZSkXo',
        description: 'Un enfant disparu lance quatre familles dans une quête éperdue pour trouver des réponses. La chasse au coupable fait émerger les péchés et les secrets d\'une petite ville.',
        image:'./img/Dark.jpg', 
        

    },
    {
        title: 'MindHunter',
        author: 'Joe Penhall',
        category: [
            {name: 'Drame', style: 'tag is-danger ml-2 mr-1'},
            {name:  'Thriller', style: 'tag is-link'},
        ],
        link : 'https://www.youtube.com/watch?v=YnLQzzJMnV8&feature=emb_title',
        description: 'Comment anticiper la folie quand on ignore comment fonctionnent les fous? Deux agents du FBI imaginent une enquête aux méthodes révolutionnaires et se lancent dans une véritable odyssée pour obtenir des réponses.',
        image:'./img/MindHunter.jpg',

    },
    {
        title: 'Mr.Robot',
        author: 'Sam Esmail',
        category: [
            {name: 'Drame', style: 'tag is-danger ml-2 mr-1'},
            {name:  'Thriller', style: 'tag is-link'},
        ],
        link : 'https://www.youtube.com/watch?v=uml6bz9ygxA&feature=emb_title',
        description: 'Elliot est un jeune programmeur antisocial qui souffre d\'un trouble du comportement. Il est recruté par un anarchiste mystérieux, qui se fait appeler Mr. Robot.',
        image:'./img/Mr_Robot.jpg',
        

    },
    {
        title: 'Twin Peaks',
        author: 'David Lynch',
        category: [
            {name: 'Drame', style: 'tag is-danger ml-2 mr-1'},
            {name:  'Thriller', style: 'tag is-link'},
        ],
        link : 'https://www.youtube.com/watch?v=2rmC9M1yla0',
        description: 'Un meurtre a été commis à Twin Peaks, une petite bourgade en apparence tranquille.La jeune Laura Palmer est retrouvée morte nue au bord d\'un lac.',
        image:'./img/Twin_Peaks.jpg' ,

    },
    {
        title: 'Westworld',
        author: ['Jonathan Nolan', 'Lisa Joy'],
        category: [
            {name:  'Thriller', style: 'tag is-link ml-2 mr-1'},
            {name:  'Science-fiction', style: 'tag is-black'},
        ],
        link : 'https://www.youtube.com/watch?v=9BqKiZhEFFw',
        description: ' Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest.',
        image:'./img/Westworld.jpg',

    },
    {
        title: 'The Terror',
        author: 'Joe Penhall',
        category: [
            {name: 'Drame', style: 'tag is-danger ml-2 mr-1'},
            {name:  'Thriller', style: 'tag is-link'},
        ],
        link : 'https://www.youtube.com/watch?v=pjq7Gl_hhPY',
        description: 'En 1847, la Marine Royale britannique entreprend une périlleuse mission : découvrir le passage du Nord. Forcé de prendre le commandement, le capitaine Francis Crozier devra gérer le froid glacial, les menaces de mutinerie, le manque de nourriture ainsi qu\'une menace bien pire encore...',
        image:'./img/The_Terror.jpg',

    },
    {
        title: 'True detective',
        author: 'Nic Pizzolatto',
        category: [
            {name: 'Drame', style: 'tag is-danger ml-2 mr-1'},
            {name:  'Policier', style: 'tag is-warning'},
        ],
        link : 'https://www.youtube.com/watch?v=D-kWun2a7oU&feature=emb_title',
        description: 'A chaque saison, son histoire. True Detective nous embarque dans des récits policiers mêlant mysticisme, réflexions philosophiques et personnages torturés',
        image:'./img/True_detective.jpg',

    },
    {
        title: 'Fargo',
        author: 'Noah Hawley',
        category: [
            {name: 'Comedy', style: 'tag is-light ml-2 mr-1'},
            {name:  'Policier', style: 'tag is-warning'},
        ],
        link : 'https://www.youtube.com/watch?v=gKs8DzjPDMU&feature=emb_title',
        description: 'Le quotidien des habitants d\'une petite ville du Minnesota se retrouve bouleversé suite au passage d\'un tueur à gages.',
        image:'./img/Fargo.jpg',

    },
    {
        title: 'The Mandalorian',
        author: 'Jon Favreau',
        category: [
            {name: 'Aventure', style: 'tag is-success ml-2 mr-1'},
            {name:  'Science-fiction', style: 'tag is-black'},
        ],
        link : 'https://www.youtube.com/watch?v=O6VKY1UkBak&feature=emb_title',
        description: 'Le Mandalorien se déroule après la chute de l\'Empire et juste avant l\'émergence de Premier Ordre et raconte les voyages dans les contrées les plus éloignées de la Galaxie d\'un tireur solitaire loin de l\’autorité de la Nouvelle République.',
        image:'./img/The_Mandalorian.jpg',

    },
];
  


const changeSousTitre = document.querySelectorAll('.subtitle')
changeSousTitre.forEach(function(el){
    el.style.fontStyle = 'italic';
})
const rien = document.querySelectorAll('.columns')
    rien.forEach(function(el) {
        el.innerHTML = ''
    })

    const body = document.querySelector('section')
    body.innerHTML = ''
    body.className = 'container my-6'
const divCol = document.createElement("div")
    divCol.className = "columns is-flex-wrap-wrap"


for (let element of collection) {
    const div = document.createElement('div')
        div.className = 'column is-3'

    const newDiv = document.createElement('div')
        newDiv.className = "card"
        newDiv.style.height = '100%'
        newDiv.style.width = 'auto'
        

    const img = document.createElement('img')
        img.src = element.image
        img.className = "card-image has-text-centered px-6"
       
    
    const title = document.createElement('h3')
        title.innerText = element.title
        title.className = 'title is-4 mb-3 mt-3'
        title.style.textAlign = 'center'
    /*     title.style.marginTop = '10px' */
    const author = document.createElement('h5')
        author.innerText = element.author
        author.className = 'subtitle is-6'
        author.style.margin = "5px 10px"
    const paragraph = document.createElement('p')
        paragraph.textContent = element.description
        paragraph.className = "content mt-3 px-3"
        paragraph.style.marginBottom = '10px'
       
    const footer = document.createElement('footer')
        footer.className = "card-footer mx-0"
        
    const link = document.createElement('a')
        link.className = 'card-footer-item'
        link.href = element.link
        link.target = '_blank'
    const icone = document.createElement('i')
        icone.className = 'fab fa-youtube fa-2x'
        
        newDiv.appendChild(img)
        newDiv.appendChild(title)
        for (let tag of element.category) {
            const tag1 = document.createElement('span')
            tag1.innerText = tag.name
            tag1.className = tag.style

            newDiv.appendChild(tag1)
        }
        div.appendChild(newDiv)
        
        divCol.appendChild(div)
        body.appendChild(divCol)

        newDiv.appendChild(author)
        newDiv.appendChild(paragraph)
        newDiv.appendChild(footer)
        footer.appendChild(link)
        link.appendChild(icone)


        
        
}
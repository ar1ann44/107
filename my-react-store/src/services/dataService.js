const catalog = [
    // alternative
    {
        title: "In Rainbows",
        artist: "Radiohead",
        category: "Alternative",
        price: 29.99,
        image: "inRainbows.jpg",
        _id: "1"
    },
    {
        title: "The Queen Is Dead",
        artist: "The Smiths",
        category: "Alternative",
        price: 27.99,
        image: "theQueenIsDead.jpg",
        _id: "2"
    },
    {
        title: "Mellon Collie and the Infinite Sadness",
        artist: "The Smashing Pumpkins",
        category: "Alternative",
        price: 34.99,
        image: "smashingPumpkins.jpg",
        _id: "3"
    },

    // classic Rock
    {
        title: "Purple Rain",
        artist: "Prince",
        category: "Classic Rock",
        price: 28.99,
        image: "purpleRain.jpg",
        _id: "4"
    },
    {
        title: "Abbey Road",
        artist: "The Beatles",
        category: "Classic Rock",
        price: 32.99,
        image: "abbeyRoad.jpg",
        _id: "5"
    },
    {
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        category: "Classic Rock",
        price: 31.99,
        image: "wishYouWhereHere.jpg",
        _id: "6"
    },

    // Pop Essentials
    {
        title: "Bad",
        artist: "Michael Jackson",
        category: "Pop",
        price: 26.99,
        image: "bad.jpg",
        _id: "7"
    },
    {
        title: "Thriller",
        artist: "Michael Jackson",
        category: "Pop",
        price: 33.99,
        image: "thriller.jpg",
        _id: "8"
    },
    {
        title: "Life for Rent",
        artist: "Dido",
        category: "Pop",
        price: 25.99,
        image: "lifeForRent.jpg",
        _id: "9"
    },

    // Metal
    {
        title: "Mezmerize",
        artist: "System of a Down",
        category: "Metal",
        price: 29.99,
        image: "mezmerize.jpg",
        _id: "10"
    },
    {
        title: "Hybrid Theory",
        artist: "Linkin Park",
        category: "Metal",
        price: 30.99,
        image: "hybridTheory.jpg",
        _id: "11"
    },
    {
        title: "Toxicity",
        artist: "System of a Down",
        category: "Metal",
        price: 28.99,
        image: "toxicity.jpg",
        _id: "12"
    }
];

class DataService {
    getProducts()
    {
        return catalog;
    }
}

export default DataService;
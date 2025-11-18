// Dummy books data for the online library system
// This data includes books across different categories with complete information

export const booksData = [
    // Fiction Books
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        description: "A classic novel of the Jazz Age that follows Jay Gatsby's pursuit of his lost love Daisy Buchanan. Set in the summer of 1922 on Long Island, New York, the story reveals themes of wealth, love, and the American Dream.",
        rating: 4.5,
        pages: 180,
        publishedYear: 1925,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        price: 12.99,
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        description: "A gripping tale of racial injustice and childhood innocence in the American South. Through the eyes of Scout Finch, readers witness the trial of Tom Robinson and the moral growth that comes from understanding prejudice.",
        rating: 4.8,
        pages: 281,
        publishedYear: 1960,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
        price: 14.99,
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        category: "Fiction",
        description: "A dystopian novel presenting a totalitarian society under constant surveillance. This chilling story explores themes of power, control, and the manipulation of truth in a world where freedom is a distant memory.",
        rating: 4.6,
        pages: 328,
        publishedYear: 1949,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780141036144-L.jpg",
        price: 13.99,
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Fiction",
        description: "A romantic novel of manners and marriage set in Georgian England. Elizabeth Bennet's witty and spirited journey challenges social expectations and reveals the complexity of human relationships.",
        rating: 4.7,
        pages: 279,
        publishedYear: 1813,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
        price: 11.99,
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        category: "Fiction",
        description: "A coming-of-age novel following Holden Caulfield as he navigates adolescence and disillusionment. His cynical observations and search for authenticity resonate with readers across generations.",
        rating: 4.2,
        pages: 214,
        publishedYear: 1951,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780316769174-L.jpg",
        price: 12.99,
    },

    // Science Fiction Books
    {
        id: 6,
        title: "Dune",
        author: "Frank Herbert",
        category: "Sci-Fi",
        description: "An epic science fiction novel set on the desert planet Arrakis. The story follows Paul Atreides as he becomes embroiled in political intrigue, ecological disaster, and messianic prophecy.",
        rating: 4.9,
        pages: 688,
        publishedYear: 1965,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
        price: 18.99,
    },
    {
        id: 7,
        title: "Foundation",
        author: "Isaac Asimov",
        category: "Sci-Fi",
        description: "A groundbreaking series opener about a mathematician who uses psychohistory to predict the future and establish a foundation to preserve civilization. Explores themes of science, power, and human destiny.",
        rating: 4.5,
        pages: 255,
        publishedYear: 1951,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780553293357-L.jpg",
        price: 13.99,
    },
    {
        id: 8,
        title: "Neuromancer",
        author: "William Gibson",
        category: "Sci-Fi",
        description: "A cyberpunk novel that defined the genre, following Case, a washed-up computer hacker hired for one last job. Explores artificial intelligence, virtual reality, and the nature of consciousness.",
        rating: 4.4,
        pages: 271,
        publishedYear: 1984,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780441569595-L.jpg",
        price: 14.99,
    },
    {
        id: 10,
        title: "Ender's Game",
        author: "Orson Scott Card",
        category: "Sci-Fi",
        description: "A science fiction novel about a brilliant child trained at Battle School to fight an alien invasion. Explores themes of childhood, strategy, morality, and the cost of being a hero.",
        rating: 4.7,
        pages: 324,
        publishedYear: 1985,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780812550702-L.jpg",
        price: 13.99,
    },

    // Non-Fiction Books
    {
        id: 11,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "Non-Fiction",
        description: "A sweeping history of humankind from the Stone Age to the modern era. Explores how Homo sapiens came to dominate the world through cognitive, agricultural, and scientific revolutions.",
        rating: 4.6,
        pages: 443,
        publishedYear: 2011,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
        price: 18.99,
    },
    {
        id: 12,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        category: "Non-Fiction",
        description: "An exploration of the two systems of thought that drive the way we think. Examines cognitive biases, decision-making, and the psychology behind our judgments.",
        rating: 4.5,
        pages: 499,
        publishedYear: 2011,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780374275631-L.jpg",
        price: 17.99,
    },
    {
        id: 13,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Non-Fiction",
        description: "A practical guide to building good habits and breaking bad ones. Small, incremental changes compound into remarkable results over time.",
        rating: 4.7,
        pages: 320,
        publishedYear: 2018,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
        price: 15.99,
    },

    {
        id: 15,
        title: "Educated",
        author: "Tara Westover",
        category: "Non-Fiction",
        description: "A memoir about a woman raised in an abusive, isolated family in Idaho who pursues education and self-discovery. A powerful story of resilience and transformation.",
        rating: 4.8,
        pages: 352,
        publishedYear: 2018,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg",
        price: 16.99,
    },

    // Mystery/Thriller Books
    {
        id: 16,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        category: "Mystery",
        description: "A gripping mystery novel featuring journalist Mikael Blomkvist and hacker Lisbeth Salander investigating a decades-old disappearance. Combines crime, corruption, and complex characters.",
        rating: 4.5,
        pages: 465,
        publishedYear: 2005,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780307269935-L.jpg",
        price: 16.99,
    },
    {
        id: 17,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        category: "Mystery",
        description: "A fast-paced thriller involving a murder at the Louvre and a quest for religious secrets. Follows symbologist Robert Langdon as he uncovers hidden truths woven through history.",
        rating: 4.3,
        pages: 454,
        publishedYear: 2003,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780385504201-L.jpg",
        price: 15.99,
    },

    {
        id: 19,
        title: "Sherlock Holmes: A Study in Scarlet",
        author: "Arthur Conan Doyle",
        category: "Mystery",
        description: "The classic first appearance of Sherlock Holmes, the world's greatest detective. Introduces his methods of deduction and his relationship with Dr. Watson.",
        rating: 4.4,
        pages: 112,
        publishedYear: 1887,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780141439471-L.jpg",
        price: 9.99,
    },
    {
        id: 20,
        title: "And Then There Were None",
        author: "Agatha Christie",
        category: "Mystery",
        description: "Ten strangers are invited to an island where they are accused of crimes. One by one they are killed according to a nursery rhyme, with no way off the island.",
        rating: 4.7,
        pages: 272,
        publishedYear: 1939,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780062693662-L.jpg",
        price: 12.99,
    },

    // Fantasy Books
    {
        id: 21,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        description: "An epic fantasy trilogy following the hobbit Frodo's quest to destroy the One Ring and defeat the Dark Lord Sauron. A timeless tale of adventure, friendship, and sacrifice.",
        rating: 4.9,
        pages: 1216,
        publishedYear: 1954,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780544003415-L.jpg",
        price: 22.99,
    },
    {
        id: 22,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        category: "Fantasy",
        description: "The first book in the beloved Harry Potter series, introducing the magical world, Hogwarts School, and Harry's journey to discover his destiny and battle evil.",
        rating: 4.8,
        pages: 309,
        publishedYear: 1997,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg",
        price: 13.99,
    },
    {
        id: 23,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        category: "Fantasy",
        description: "A fantasy novel about Kvothe, a legendary figure telling his life story. Combines magic, mystery, and music in a richly detailed world.",
        rating: 4.6,
        pages: 662,
        publishedYear: 2007,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780575081406-L.jpg",
        price: 18.99,
    },

    // Romance Books

    {
        id: 25,
        title: "Outlander",
        author: "Diana Gabaldon",
        category: "Romance",
        description: "A sweeping historical romance following a World War II nurse transported to 18th-century Scotland. Combines adventure, passion, and time travel.",
        rating: 4.6,
        pages: 641,
        publishedYear: 1991,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780553212693-L.jpg",
        price: 16.99,
    },
    {
        id: 26,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        category: "Romance",
        description: "A Gothic romance about an orphaned governess who falls in love with her mysterious employer. Explores themes of love, independence, and morality.",
        rating: 4.8,
        pages: 447,
        publishedYear: 1847,
        coverImage: "https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg",
        price: 12.99,
    },


    // Biography Books
    {
        id: 28,
        title: "Steve Jobs",
        author: "Walter Isaacson",
        category: "Biography",
        description: "An authorized biography of the Apple founder detailing his life from adoption to his final battle with illness. Explores his visionary genius and complex personality.",
        rating: 4.6,
        pages: 656,
        publishedYear: 2011,
        coverImage: "https://covers.openlibrary.org/b/isbn/9781451648539-L.jpg",
        price: 18.99,
    },
    {
        id: 29,
        title: "Becoming",
        author: "Michelle Obama",
        category: "Biography",
        description: "A memoir by the former First Lady recounting her journey from Chicago to the White House. An inspiring story of personal growth and resilience.",
        rating: 4.8,
        pages: 426,
        publishedYear: 2018,
        coverImage: "https://covers.openlibrary.org/b/isbn/9781524763138-L.jpg",
        price: 17.99,
    },

    {
        id: 31,
        title: "Elon Musk",
        author: "Walter Isaacson",
        category: "Biography",
        description: "A comprehensive biography of Elon Musk exploring his ambitious ventures in space exploration, electric vehicles, and artificial intelligence. From PayPal to Tesla to SpaceX.",
        rating: 4.7,
        pages: 688,
        publishedYear: 2023,
        coverImage: "https://covers.openlibrary.org/b/isbn/9781982181284-L.jpg",
        price: 19.99,
    },
];

// Function to get unique categories
export const getCategories = () => {
    const categories = [...new Set(booksData.map(book => book.category))];
    return categories.sort();
};

// Function to get books by category
export const getBooksByCategory = (category) => {
    return booksData.filter(book => book.category === category);
};

// Function to get book by ID
export const getBookById = (id) => {
    return booksData.find(book => book.id === id);
};

// Function to search books by title or author
export const searchBooks = (query) => {
    const lowerQuery = query.toLowerCase();
    return booksData.filter(book =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery)
    );
};

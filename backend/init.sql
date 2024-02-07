-- Create a database if it doesn't exist
CREATE DATABASE IF NOT EXISTS nestjs;
USE nestjs;

-- Create a table for users
CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Insert data into the users table
INSERT INTO user (username, email, password)
VALUES
    ("john_doe", "john@example.com", "password123"),
    ("jane_doe", "jane@example.com", "securepass"),
    ("alice_smith", "alice@example.com", "pass123"),
    ("bob_jones", "bob@example.com", "bobpassword"),
    ("emma_johnson", "emma@example.com", "passwordemma");

-- Create a table for quizzes
CREATE TABLE IF NOT EXISTS quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    likes INT DEFAULT 0,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    authorId INT,
    FOREIGN KEY (authorId) REFERENCES user(id)
);


-- Create a table for questions
CREATE TABLE IF NOT EXISTS question (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quizId INT,
    question VARCHAR(255) NOT NULL,
    correctAnswer VARCHAR(255) NOT NULL,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    option3 VARCHAR(255) NOT NULL,
    FOREIGN KEY (quizId) REFERENCES quiz(id)
);

-- Insert data into the quizzes and questions tables with different dates
INSERT INTO quiz (title, description, likes, creationDate,authorId)
VALUES
    ("Spanish Vocabulary Quiz 1", "Test your knowledge of basic Spanish words", 12, '2024-01-05 08:30:00',2),
    ("Spanish Phrases Quiz", "Identify common Spanish phrases", 52, '2024-01-06 14:45:00',2),
    ("Family Terms Quiz", "Translate family-related terms to Spanish", 7, '2024-01-07 10:20:00',2),
    ("Colors in Spanish", "Guess the correct Spanish names for colors", 25, '2024-01-08 18:00:00',1),
    ("Spanish Numbers Quiz", "Counting in Spanish", 10, '2024-01-09 12:00:00',1),
    ("Physics Basics Quiz", "Test your knowledge of fundamental physics concepts", 0, '2024-01-10 09:30:00',4),
    ("Chemistry Elements Quiz", "Identify elements and their symbols", 4, '2024-01-11 16:15:00',4),
    ("Biology Anatomy Quiz", "Explore human anatomy and biological terms", 32, '2024-01-12 11:45:00',5),
    ("Astronomy Facts Quiz", "Discover interesting facts about the universe and celestial bodies", 0, '2024-01-13 14:00:00',1),
    ("Earth Science Quiz", "Learn about the Earth's geology and atmosphere", 13, '2024-01-14 07:00:00',2),
    ("Medical Terminology Quiz", "Test your understanding of medical terms and terminology", 0, '2024-01-15 16:30:00',2),
    ("Scientific Discoveries Quiz", "Explore major scientific breakthroughs and discoveries", 0, '2024-01-16 19:20:00',3),
    ("Mathematics Trivia Quiz", "Challenge yourself with interesting math facts", 5, '2024-01-17 10:10:00',4),
    ("Environmental Science Quiz", "Understand environmental issues and concepts", 0, '2024-01-18 15:40:00',5),
    ("Technology Innovations Quiz", "Explore advancements in science and technology", 0, '2024-01-19 08:45:00',5);

-- Quiz 1: Spanish Vocabulary Quiz 1
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (1, "How do you say 'goodbye' in Spanish?", "Adiós", "Hola", "Bueno", "Gracias"),
    (1, "Translate 'friend' to Spanish.", "Amigo", "Perro", "Gato", "Hermano"),
    (1, "What is the Spanish word for 'please'?", "Por favor", "Gracias", "Perdón", "De nada"),
    (1, "Translate 'water' to Spanish.", "Agua", "Fuego", "Tierra", "Aire"),
    (1, "How do you say 'good morning' in Spanish?", "Buenos días", "Buenas noches", "Hola", "Adiós"),
    (1, "What is the Spanish word for 'sun'?", "Sol", "Luna", "Estrella", "Nube");

-- Quiz 2: Spanish Phrases Quiz
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (2, "What does '¿Qué pasa?' mean in English?", "What's up?", "How are you?", "Good morning", "I love you"),
    (2, "Translate 'thank you' to Spanish.", "Gracias", "Por favor", "Lo siento", "De nada"),
    (2, "How do you say 'excuse me' in Spanish?", "Perdón", "Hola", "Adiós", "Bueno"),
    (2, "Translate 'I love you' to Spanish.", "Te quiero", "Me gusta", "Lo siento", "Hasta luego"),
    (2, "What is the Spanish phrase for 'How are you doing?'", "¿Cómo estás?", "¿Cómo te llamas?", "Buenos días", "Adiós"),
    (2, "How do you say 'My name is' in Spanish?", "Mi nombre es", "Hola", "Adiós", "Bueno");

-- Quiz 3: Family Terms Quiz
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (3, "Translate 'cousin' to Spanish.", "Primo/Prima", "Tío/Tía", "Abuelo/Abuela", "Padre/Madre"),
    (3, "What is 'grandmother' in Spanish?", "Abuela", "Madre", "Hermana", "Tía"),
    (3, "How do you say 'father' in Spanish?", "Padre", "Hermano", "Abuelo", "Tío"),
    (3, "Translate 'uncle' to Spanish.", "Tío", "Padre", "Abuelo", "Primo"),
    (3, "What is 'sister' in Spanish?", "Hermana", "Madre", "Abuela", "Tía"),
    (3, "How do you say 'son' in Spanish?", "Hijo", "Hermano", "Primo", "Sobrino");

-- Quiz 4: Colors in Spanish
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (4, "How do you say 'blue' in Spanish?", "Azul", "Rojo", "Verde", "Blanco"),
    (4, "Translate 'green' to Spanish.", "Verde", "Azul", "Rojo", "Amarillo"),
    (4, "What is the Spanish word for 'purple'?", "Morado", "Amarillo", "Verde", "Rojo"),
    (4, "Translate 'brown' to Spanish.", "Marrón", "Negro", "Blanco", "Gris"),
    (4, "How do you say 'pink' in Spanish?", "Rosa", "Azul", "Verde", "Amarillo"),
    (4, "What is the Spanish word for 'gray'?", "Gris", "Negro", "Blanco", "Azul");

-- Quiz 5: Spanish Numbers Quiz
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (5, "Translate 'fifteen' to Spanish.", "Quince", "Diez", "Veinte", "Treinta"),
    (5, "What is the Spanish word for 'three'?", "Tres", "Uno", "Dos", "Cinco"),
    (5, "How do you say 'twenty' in Spanish?", "Veinte", "Quince", "Diez", "Treinta"),
    (5, "Translate 'seventy' to Spanish.", "Setenta", "Sesenta", "Ochenta", "Noventa"),
    (5, "What is the Spanish word for 'forty-five'?", "Cuarenta y cinco", "Treinta y cinco", "Cincuenta y cinco", "Veinte y cinco"),
    (5, "How do you say 'ninety' in Spanish?", "Noventa", "Ochenta", "Cien", "Setenta");

-- Quiz 6: Physics Basics Quiz
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (6, "What is the formula for Newton's second law of motion?", "Force equals mass times acceleration (F=ma)", "E=mc^2", "PV=nRT", "F=mg"),
    (6, "Translate 'gravity' to Latin.", "Gravitas", "Gravitas Magna", "Gravitas Nova", "Gravitas Terra"),
    (6, "Define velocity in physics.", "Rate of change of displacement with respect to time", "Mass per unit volume", "Force applied over a distance", "Acceleration due to gravity"),
    (6, "What is the SI unit of electric current?", "Ampere (A)", "Volt (V)", "Ohm (Ω)", "Coulomb (C)"),
    (6, "What is the speed of light in a vacuum?", "299,792 kilometers per second", "150,000 miles per second", "500,000 meters per second", "1,000,000 kilometers per hour");


-- Quiz 7: Chemistry Elements Quiz
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (7, "Which element has the chemical symbol 'O'?", "Oxygen", "Osmium", "Oganesson", "Osmium"),
    (7, "What is the atomic number of gold?", "79", "42", "63", "29"),
    (7, "How many naturally occurring noble gases are there?", "6", "3", "4", "2"),
    (7, "What is the most abundant gas in the Earth's atmosphere?", "Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"),
    (7, "Which element has the highest melting point?", "Tungsten", "Titanium", "Rhenium", "Rhodium");

-- Quiz 8: Biology Anatomy Quiz
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (8, "What is the largest organ in the human body?", "Skin", "Heart", "Liver", "Brain"),
    (8, "What is the powerhouse of the cell?", "Mitochondria", "Nucleus", "Endoplasmic Reticulum", "Golgi Apparatus"),
    (8, "Which part of the human brain is responsible for reasoning and problem-solving?", "Frontal Lobe", "Occipital Lobe", "Temporal Lobe", "Parietal Lobe"),
    (8, "What is the function of red blood cells?", "Transport oxygen", "Fight infections", "Clotting", "Digestion"),
    (8, "What is the main function of the pancreas?", "Produce insulin", "Digestion of fats", "Filtering blood", "Regulating body temperature");

-- Quiz 9: Astronomy Facts Quiz
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (9, "What is the largest planet in our solar system?", "Jupiter", "Saturn", "Mars", "Venus"),
    (9, "Which galaxy is the Milky Way closest to?", "Andromeda", "Triangulum", "Messier 87", "Sombrero"),
    (9, "What is a light-year?", "Distance light travels in a year", "Unit of time", "Brightness of a star", "Speed of light"),
    (9, "What causes a solar eclipse?", "Moon passing between the Earth and the Sun", "Earth passing between the Moon and the Sun", "Alignment of three planets", "Meteor shower"),
    (9, "What is a supernova?", "Explosion of a dying star", "A planet with two suns", "An asteroid belt", "A galaxy with a high star density");

-- Quiz 10: Earth Science Quiz
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (10, "What is the Earth's innermost layer called?", "Inner Core", "Mantle", "Crust", "Outer Core"),
    (10, "Which process is responsible for the formation of mountains?", "Plate Tectonics", "Erosion", "Volcanism", "Earthquakes"),
    (10, "What is the greenhouse effect?", "Trapping of heat by Earth's atmosphere", "Formation of greenhouse gases", "Plant photosynthesis", "Astronomical phenomenon"),
    (10, "What is the Earth's largest ocean?", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"),
    (10, "What is the Richter scale used to measure?", "Earthquake Magnitude", "Temperature", "Wind Speed", "Barometric Pressure");

-- Quiz 11: Mathematics Basics Quiz
INSERT INTO quiz (title, description, likes, creationDate,authorId)
VALUES
    ("Basic Arithmetic Quiz", "Test your knowledge of addition, subtraction, multiplication, and division", 8, '2024-01-20 09:00:00',3);


INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (11, "What is the sum of 25 and 17?", "42", "32", "52", "22"),
    (11, "Subtract 15 from 40.", "25", "20", "35", "10"),
    (11, "Multiply 8 by 6.", "48", "56", "40", "64"),
    (11, "Divide 50 by 5.", "10", "5", "15", "8"),
    (11, "What is the result of 3 squared?", "9", "6", "12", "3");

-- Quiz 12: Literature and Language Quiz
INSERT INTO quiz (title, description, likes, creationDate,authorId)
VALUES
    ("Classic Literature Quiz", "Test your knowledge of classic literature and language", 15, '2024-01-21 14:30:00',4);


INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (12, "Who wrote 'Romeo and Juliet'?", "William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"),
    (12, "In 'To Kill a Mockingbird', who is the main character?", "Scout Finch", "Atticus Finch", "Boo Radley", "Jem Finch"),
    (12, "What language is 'Les Misérables' originally written in?", "French", "Spanish", "English", "German"),
    (12, "Who is the author of 'Pride and Prejudice'?", "Jane Austen", "Charlotte Brontë", "George Eliot", "Charles Dickens"),
    (12, "Which Shakespearean play features the character Othello?", "Othello", "Macbeth", "Hamlet", "Romeo and Juliet");

-- Quiz 13: History and Civilization Quiz
INSERT INTO quiz (title, description, likes, creationDate,authorId)
VALUES
    ("Ancient Civilizations Quiz", "Explore the history of ancient civilizations", 12, '2024-01-22 11:15:00',4);


INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (13, "Which ancient civilization built the pyramids of Giza?", "Egyptians", "Romans", "Greeks", "Persians"),
    (13, "Who was the first emperor of China's Qin Dynasty?", "Qin Shi Huang", "Confucius", "Sun Tzu", "Emperor Wu"),
    (13, "In which city did the Indus Valley Civilization flourish?", "Mohenjo-daro", "Harappa", "Varanasi", "Delhi"),
    (13, "Who was the famous queen of ancient Egypt?", "Cleopatra", "Nefertiti", "Hatshepsut", "Ramses II"),
    (13, "Which ancient Greek philosopher is known for his teachings on ethics?", "Socrates", "Plato", "Aristotle", "Heraclitus");

-- Quiz 14: Geography and World Capitals Quiz
INSERT INTO quiz (title, description, likes, creationDate,authorId)
VALUES
    ("World Capitals Quiz", "Test your knowledge of world capitals and geography", 18, '2024-01-23 16:45:00',5);


INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (14, "What is the capital of Japan?", "Tokyo", "Beijing", "Seoul", "Bangkok"),
    (14, "Which European city is known as the 'City of Love'?", "Paris", "Rome", "Barcelona", "Vienna"),
    (14, "Canberra is the capital of which country?", "Australia", "Canada", "New Zealand", "South Africa"),
    (14, "In which country is the city of Marrakech located?", "Morocco", "Egypt", "Algeria", "Tunisia"),
    (14, "What is the capital of Brazil?", "Brasília", "Rio de Janeiro", "São Paulo", "Buenos Aires");

-- Quiz 15: Art and Music Quiz
INSERT INTO quiz (title, description, likes, creationDate,authorId)
VALUES
    ("Famous Paintings Quiz", "Identify famous paintings and artists", 20, '2024-01-24 10:30:00',5);

INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (15, "Who painted the Mona Lisa?", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"),
    (15, "Which art movement includes works like 'Starry Night'?", "Post-Impressionism", "Cubism", "Surrealism", "Abstract Expressionism"),
    (15, "Who is known for his 'Campbell's Soup Cans' artwork?", "Andy Warhol", "Jackson Pollock", "Salvador Dalí", "Georgia O'Keeffe"),
    (15, "Which composer is famous for 'Symphony No. 9'?", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Pyotr Ilyich Tchaikovsky"),
    (15, "In which period did the Baroque style dominate art and music?", "17th and 18th centuries", "15th and 16th centuries", "19th and 20th centuries", "Ancient times");

-- Quiz 16: Computer Science Basics Quiz
INSERT INTO quiz (title, description, likes, creationDate,authorId)
VALUES
    ("Programming Concepts Quiz", "Test your knowledge of programming and computer science concepts", 25, '2024-01-25 18:15:00',2);

INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (16, "What is the primary purpose of a 'for' loop in programming?", "Repeating a block of code a specific number of times", "Declaring a variable", "Breaking out of a loop", "Defining a function"),
    (16, "Which programming language is often used for web development?", "JavaScript", "Python", "Java", "C++"),
    (16, "What does 'HTML' stand for?", "Hypertext Markup Language", "High-Level Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"),
    (16, "In object-oriented programming, what is an 'object'?", "An instance of a class", "A loop structure", "A data type", "A variable"),
    (16, "Which data structure follows the Last In, First Out (LIFO) principle?", "Stack", "Queue", "Linked List", "Array");
        (16, "What does CSS stand for in web development?", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Coded Style Sheets"),
    (16, "Which of the following is NOT a programming paradigm?", "Hardware Design", "Functional Programming", "Object-Oriented Programming", "Procedural Programming"),
    (16, "What is the purpose of SQL?", "To manage and query databases", "To style web pages", "To write server-side code", "To define webpage structure"),
    (16, "Which programming language is commonly used for data analysis and machine learning?", "Python", "C#", "Ruby", "Swift"),
    (16, "What does the term 'API' stand for?", "Application Programming Interface", "Automated Programming Integration", "Advanced Programming Interface", "Application Protocol Interface");

-- Quiz 17: Social Sciences Quiz
INSERT INTO quiz (title, description, likes, creationDate,authorId)
VALUES
    ("Sociology and Psychology Quiz", "Explore concepts in sociology and psychology", 14, '2024-01-26 07:45:00',4);

INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (17, "Who developed the theory of psychoanalysis?", "Sigmund Freud", "B.F. Skinner", "Carl Jung", "Albert Bandura"),
    (17, "What is the 'nature vs. nurture' debate in psychology about?", "The relative importance of genetics and environment in human development", "The impact of technology on society", "The role of government in shaping behavior", "The influence of religion on behavior"),
    (17, "What is the 'Milgram experiment' known for?", "Studying obedience to authority", "Testing memory recall", "Measuring intelligence", "Observing group dynamics"),
    (17, "Who is the father of modern sociology?", "Auguste Comte", "Emile Durkheim", "Karl Marx", "Max Weber"),
    (17, "What is the 'Stanford prison experiment' about?", "Examining the psychological effects of perceived power", "Studying language acquisition in children", "Analyzing sleep patterns in adults", "Observing the effects of diet on behavior");

-- Quiz 18: Health and Nutrition Quiz
INSERT INTO quiz (title, description, likes, creationDate,authorId)
VALUES
    ("Nutrition and Wellness Quiz", "Test your knowledge of health, nutrition, and wellness", 11, '2024-01-27 14:00:00',2);

INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (18, "Which vitamin is essential for bone health?", "Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"),
    (18, "What is the primary source of energy for the body?", "Carbohydrates", "Proteins", "Fats", "Vitamins"),
    (18, "How many glasses of water are recommended for daily hydration?", "Eight 8-ounce glasses", "Six 6-ounce glasses", "Ten 10-ounce glasses", "Twelve 12-ounce glasses"),
    (18, "Which mineral is important for maintaining healthy blood pressure?", "Potassium", "Calcium", "Sodium", "Iron"),
    (18, "What is the recommended daily intake of fruits and vegetables?", "At least 5 servings", "At least 2 servings", "At least 10 servings", "At least 3 servings");
     (18, "What is the main function of protein in the body?", "Building and repairing tissues", "Providing quick energy", "Regulating body temperature", "Storing vitamins"),
    (18, "Which nutrient is known as the 'building block of life'?", "Protein", "Carbohydrates", "Fats", "Vitamins"),
    (18, "What is the body's preferred source of fuel during prolonged exercise?", "Carbohydrates", "Proteins", "Fats", "Fiber"),
    (18, "What is the recommended amount of daily physical activity for adults?", "At least 150 minutes of moderate-intensity exercise", "At least 30 minutes of vigorous-intensity exercise", "At least 60 minutes of moderate-intensity exercise", "At least 90 minutes of vigorous-intensity exercise"),
    (18, "Which food group is the primary source of dietary fiber?", "Grains", "Proteins", "Dairy", "Fruits and Vegetables");

-- Quiz 19: Political Science Quiz
INSERT INTO quiz (title, description, likes, creationDate,authorId)
VALUES
    ("Political Systems Quiz", "Explore concepts in political science and government", 16, '2024-01-28 09:30:00',3);

INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (19, "What is a 'democracy'?", "A system of government by the people", "A system of government by a single party", "A system of government by a monarch", "A system of government by the military"),
    (19, "Who is considered the 'Father of Modern Political Science'?", "Niccolò Machiavelli", "John Locke", "Jean-Jacques Rousseau", "Thomas Hobbes"),
    (19, "What is 'checks and balances' in a government system?", "Distribution of powers among different branches to prevent abuse", "A method of taxation", "A system of voting", "A process of political campaigning"),
    (19, "What is a 'monarchy'?", "A system of government with a hereditary head of state", "A system of government elected by the people", "A system of government by military leaders", "A system of government by a single party"),
    (19, "What is the 'Rule of Law'?", "All individuals and institutions are subject to and accountable to the law", "The law is applied selectively to certain individuals", "Individuals are above the law", "Government is exempt from the law");

-- Quiz 20: Interesting Facts about Spain Quiz 1
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (20, "What is the capital city of Spain?", "Madrid", "Barcelona", "Seville", "Valencia"),
    (20, "In which year did Spain host the Summer Olympics?", "1992", "1988", "1996", "2000"),
    (20, "Which famous Spanish architect is known for designing Sagrada Familia in Barcelona?", "Antoni Gaudí", "Pablo Picasso", "Salvador Dalí", "Diego Velázquez"),
    (20, "What is the traditional Spanish dish made of saffron-flavored rice and various ingredients such as seafood, chicken, and vegetables?", "Paella", "Tapas", "Churros", "Gazpacho"),
    (20, "Which river is the longest in Spain?", "Tagus (Tajo)", "Ebro", "Guadalquivir", "Duero"),
    (20, "Which autonomous community in Spain is known for its distinctive language and culture?", "Catalonia", "Andalusia", "Basque Country", "Galicia");

-- Quiz 21: Interesting Facts about Spain Quiz 2
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (21, "Which famous Spanish painter is known for his works like 'The Persistence of Memory'?", "Salvador Dalí", "Pablo Picasso", "Diego Velázquez", "Francisco Goya"),
    (21, "What is the name of the famous pilgrimage route that ends in Santiago de Compostela in northwest Spain?", "Camino de Santiago", "Ruta del Sol", "Via España", "Peregrino's Path"),
    (21, "Which Spanish festival involves running with bulls through the streets of Pamplona?", "San Fermín", "La Tomatina", "Feria de Abril", "La Mercè"),
    (21, "What is the official language of Spain?", "Spanish", "Catalan", "Galician", "Basque"),
    (21, "Which Spanish football club is known as 'Blaugrana' and plays its home matches at Camp Nou?", "FC Barcelona", "Real Madrid", "Atletico Madrid", "Valencia CF"),
    (21, "In which year did Spain join the European Union?", "1986", "1975", "1992", "2000");

-- Quiz 22: Interesting Facts about Spain Quiz 3
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (22, "What is the traditional Spanish folk dance often performed during festivals and celebrations?", "Flamenco", "Salsa", "Sevillanas", "Tango"),
    (22, "Which Spanish artist is known for his surreal and abstract paintings, including 'Guernica'?", "Pablo Picasso", "Salvador Dalí", "Joan Miró", "Diego Velázquez"),
    (22, "In which region of Spain is the historic city of Granada located?", "Andalusia", "Catalonia", "Galicia", "Valencia"),
    (22, "What is the name of the ancient Roman aqueduct located in Segovia, Spain?", "Aqueduct of Segovia", "Aqueduct of Toledo", "Aqueduct of Merida", "Aqueduct of Barcelona"),
    (22, "Which Spanish novelist wrote 'Don Quixote,' often considered one of the greatest works of fiction ever written?", "Miguel de Cervantes", "Gabriel García Márquez", "Mario Vargas Llosa", "Isabel Allende");

-- Quiz 23: Interesting Facts about Spain Quiz 4
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (23, "What is the official currency of Spain?", "Euro", "Pound Sterling", "Dollar", "Peso"),
    (23, "Which mountain range separates the Iberian Peninsula from the rest of continental Europe?", "Pyrenees", "Alps", "Carpathians", "Apennines"),
    (23, "What is the name of the famous Spanish dish consisting of bread rubbed with garlic and ripe tomatoes, drizzled with olive oil?", "Pan con Tomate", "Gazpacho", "Paella", "Tortilla Española"),
    (23, "Which autonomous community in Spain has its own distinct language, Euskara (Basque), unrelated to any other language?", "Basque Country", "Catalonia", "Galicia", "Andalusia"),
    (23, "In which Spanish city is the Alhambra, a palace and fortress complex, located?", "Granada", "Seville", "Barcelona", "Madrid");

-- Quiz 24: Interesting Facts about Spain Quiz 5
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (24, "Which river runs through the city of Seville, the capital of Andalusia?", "Guadalquivir", "Tagus (Tajo)", "Ebro", "Duero"),
    (24, "What is the name of the famous surrealist painting by Salvador Dalí, featuring a melting clock?", "The Persistence of Memory", "Starry Night", "The Last Supper", "Guernica"),
    (24, "Which Spanish region is known for its unique architecture, including houses built into cliffs and cave dwellings?", "Andalusia", "Catalonia", "Galicia", "Extremadura"),
    (24, "What is the main ingredient in the Spanish dish 'Gazpacho'?", "Tomatoes", "Eggs", "Potatoes", "Rice"),
    (24, "Which Spanish explorer completed the first circumnavigation of the Earth?", "Ferdinand Magellan", "Christopher Columbus", "Juan Sebastián Elcano", "Hernán Cortés");

-- Quiz 25: Interesting Facts about Spain Quiz 6
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (25, "What is the name of the famous street in Barcelona known for its art and architecture, including works by Antoni Gaudí?", "Passeig de Gràcia", "La Rambla", "Carrer de Montcada", "Avinguda Diagonal"),
    (25, "Which Spanish autonomous community is located on the northeastern corner of the Iberian Peninsula and has its own distinct language, Catalan?", "Catalonia", "Andalusia", "Galicia", "Basque Country"),
    (25, "What is the name of the famous dish from Valencia that consists of rice, saffron, and various seafood?", "Paella", "Gazpacho", "Tortilla Española", "Patatas Bravas"),
    (25, "Which Spanish painter is known for his portraits of the Spanish royal family, including 'Las Meninas'?", "Diego Velázquez", "Francisco Goya", "El Greco", "Bartolomé Esteban Murillo"),
    (25, "In which year did Spain transition to a democracy, ending the Francoist regime?", "1978", "1969", "1985", "1992");

-- Quiz 26: Interesting Facts about Spain Quiz 7
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (26, "What is the name of the famous Spanish dish made of thin slices of raw fish or seafood?", "Ceviche", "Tapas", "Paella", "Gazpacho"),
    (26, "Which Spanish architect is known for designing the iconic Sagrada Familia in Barcelona?", "Antoni Gaudí", "Santiago Calatrava", "Frank Gehry", "Norman Foster"),
    (26, "In which Spanish city is the Prado Museum, housing a vast collection of European art?", "Madrid", "Barcelona", "Seville", "Valencia"),
    (26, "What is the name of the famous Spanish dish consisting of potatoes served with a spicy tomato sauce?", "Patatas Bravas", "Gazpacho", "Tortilla Española", "Churros"),
    (26, "Which Spanish region is known for its annual 'La Tomatina' festival, where participants engage in a massive tomato fight?", "Valencia", "Andalusia", "Catalonia", "Murcia");

-- Quiz 27: Interesting Facts about Spain Quiz 8
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (27, "Which Spanish autonomous community is known for its distinct language, Galician, and its pilgrimage route, the Camino de Santiago?", "Galicia", "Catalonia", "Basque Country", "Andalusia"),
    (27, "What is the name of the famous Spanish dish made of fried dough, often served with chocolate for dipping?", "Churros", "Tapas", "Empanada", "Gazpacho"),
    (27, "In which year did Spain host the World Expo in Seville?", "1992", "1988", "1996", "2000"),
    (27, "What is the name of the historic medieval quarter in Barcelona known for its narrow streets and Gothic architecture?", "Barri Gòtic", "El Raval", "Eixample", "Gràcia"),
    (27, "Which river is the longest in Spain and flows through the city of Toledo?", "Tagus (Tajo)", "Guadalquivir", "Ebro", "Duero");

-- Quiz 28: Interesting Facts about Spain Quiz 9
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (28, "Which Spanish region is known for its unique language, Euskara (Basque), and its strong cultural identity?", "Basque Country", "Catalonia", "Galicia", "Andalusia"),
    (28, "What is the name of the famous Spanish architect known for his modern and innovative designs, including the City of Arts and Sciences in Valencia?", "Santiago Calatrava", "Antoni Gaudí", "Frank Gehry", "Norman Foster"),
    (28, "In which year did Spain host the Summer Olympics in Barcelona?", "1992", "1988", "1996", "2000"),
    (28, "What is the name of the traditional Spanish dish made of eggs, potatoes, and onions?", "Tortilla Española", "Paella", "Gazpacho", "Patatas Bravas"),
    (28, "Which Spanish painter is known for his surrealist works, including 'The Elephants' and 'The Swallow's Tail'?", "Salvador Dalí", "Pablo Picasso", "Joan Miró", "Diego Velázquez");

-- Quiz 29: Interesting Facts about Spain Quiz 10
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (29, "Which Spanish region is known for its annual 'Running of the Bulls' festival during the San Fermín celebration?", "Navarre", "Catalonia", "Andalusia", "Galicia"),
    (29, "What is the name of the famous Spanish dish consisting of thin slices of cured ham, usually served as tapas?", "Jamon Iberico", "Paella", "Gazpacho", "Tortilla Española"),
    (29, "In which Spanish city is the historic Alcazar, a royal palace known for its Mudejar architecture?", "Toledo", "Granada", "Seville", "Cordoba"),
    (29, "What is the traditional Spanish dance often characterized by intricate footwork and colorful costumes?", "Flamenco", "Salsa", "Sevillanas", "Tango"),
    (29, "Which Spanish region is famous for its annual 'La Tomatina' festival, where participants engage in a massive tomato fight?", "Valencia", "Andalusia", "Catalonia", "Murcia");

-- Quiz 30: Interesting Facts about Spain Quiz 10
INSERT INTO question (quizId, question, correctAnswer, option1, option2, option3)
VALUES
    (30, "Which Spanish region is famous for its wine production?", "La Rioja", "Andalusia", "Catalonia", "Navarre", "Valencia", "Murcia"),
    (30, "What is the name of the historic palace complex in Madrid, known for its beautiful architecture and art collection?", "Royal Palace of Madrid", "Alhambra", "El Escorial", "Palau de la Música Catalana"),
    (30, "Which Spanish city is famous for hosting 'La Tomatina,' an annual tomato-throwing festival?", "Buñol", "Barcelona", "Seville", "Valencia"),
    (30, "What is the traditional Spanish dance characterized by hand clapping, foot stomping, and intricate hand, arm, and body movements?", "Flamenco", "Salsa", "Bachata", "Merengue"),
    (30, "Which Spanish architect designed the iconic 'City of Arts and Sciences' complex in Valencia?", "Santiago Calatrava", "Antoni Gaudí", "Rafael Moneo", "Norman Foster");
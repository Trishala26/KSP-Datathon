// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"],
  ["what is crime"], 
  ["how can we protect ourselves from criminals"],// Added prompt for "what is crime"
  ["what are the  types of crimes"], // Added prompt for "what are the different types of crimes"
  ["what are some common causes of crime"], // Added prompt for "what are some common causes of crime"
  ["how do societies define what constitutes a crime"], // Added prompt for "how do societies define what constitutes a crime"
  ["what are some examples of violent crimes"], // Added prompt for "what are some examples of violent crimes"
  ["what are some examples of property crimes"], // Added prompt for "what are some examples of property crimes"
  ["how do law enforcement agencies investigate crimes"], // Added prompt for "how do law enforcement agencies investigate crimes"
  ["what is the role of the criminal justice system in addressing crime"], // Added prompt for "what is the role of the criminal justice system in addressing crime"
  ["how do crime rates vary between different regions or countries"], // Added prompt for "how do crime rates vary between different regions or countries"
  ["how do communities work to prevent crime"],
  ["who are criminals"] // Added prompt for "how do communities work to prevent crime"
]

// Possible responses, in corresponding order
const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"],
  ["A crime is an act that violates the law and is punishable by the legal system."], // Added reply for "what is crime"
  ["Protecting oneself from crime involves staying vigilant, being aware of surroundings, staying connected with trusted individuals"],
  ["Crimes can be categorized into various types including violent crimes (e.g., murder, assault), property crimes (e.g., theft, burglary), white-collar crimes (e.g., fraud, embezzlement), and more."],
  // Added reply for "what are the different types of crimes"
  ["Common causes of crime include poverty, lack of education and employment opportunities, substance abuse, societal factors, and mental health issues."], // Added reply for "what are some common causes of crime"
  ["Societies define crime through their legal systems, which establish laws that outline prohibited behaviors and actions punishable by law."], // Added reply for "how do societies define what constitutes a crime"
  ["Examples of violent crimes include homicide (murder), assault, robbery, sexual assault, and domestic violence."], // Added reply for "what are some examples of violent crimes"
  ["Examples of property crimes include theft, burglary, vandalism, arson, and motor vehicle theft."], // Added reply for "what are some examples of property crimes"
  ["Law enforcement agencies investigate crimes by collecting evidence, interviewing witnesses and suspects, analyzing forensic evidence, and utilizing various investigative techniques."], // Added reply for "how do law enforcement agencies investigate crimes"
  ["The criminal justice system is responsible for enforcing laws, prosecuting offenders, adjudicating cases, and providing punishments or rehabilitative measures for convicted individuals."], // Added reply for "what is the role of the criminal justice system in addressing crime"
  ["Crime rates can vary significantly between different regions or countries due to factors such as socio-economic conditions, cultural norms, law enforcement practices, and legislative differences."], // Added reply for "how do crime rates vary between different regions or countries"
  ["Communities work to prevent crime through various strategies including community policing initiatives, neighborhood watch programs, crime prevention through environmental design (CPTED), youth outreach programs, and addressing underlying social issues."],
  ["Criminals are individuals who break laws and are subject to punishment by the legal system."] // Added reply for "how do communities work to prevent crime"
]

// Random for any other user input
const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)
const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]

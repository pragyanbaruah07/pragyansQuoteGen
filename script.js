let quoteList = [
    "Be the change you wish to see in the world. - Mahatma Gandhi",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln"
];

function genQuote(){
  let indexNum = parseInt(Math.random() * 20);
  console.log(indexNum);
  let quoteText = quoteList[indexNum];
  document.getElementById("quotePara").textContent=quoteText;
}
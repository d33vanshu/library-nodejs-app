const readline = require("readline");
let books = [
  "Ikigai",
  "TSAONGAF",
  "Thinking Fast and Slow",
  "The Great Gatsby",
];
const question = `Choose no.: 1 - Show all books, 2 - Add a new book, 3 - Quit \n`;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Welcome to the bookstore", () => {
  rl.setPrompt(question);
  rl.prompt();
  rl.on("line", (answer) => {
    answer = answer.trim();
    rl.setPrompt(question);

    if (answer === "1") {
      books.forEach((book) => {
        console.log(book);
      });
      rl.prompt();
    } else if (answer === "2") {
      rl.question("Enter a new book: ", (newBook) => {
        books.push(newBook);
        console.log(`${newBook} is added to the list.`);
      });
      rl.prompt();
    } else if (answer === "3") {
      rl.question(
        "Are you sure you want to quit - press Y to quit\n",
        (response) => {
          if (response.toUpperCase().trim() === "Y") {
            rl.close();
          }
          rl.prompt();
        }
      );
    } else {
      console.log(
        "You have selected an invalid entry so please press 1, 2 or 3"
      );
      rl.prompt();
    }
  });
});

rl.on("close", () => {
  console.log("Goodbye! Have a great day.");
  process.exit();
});

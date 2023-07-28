//Print only items (emojis) in the console. Not the arrays.

const printItems = function (array) {
  let text = "";  
  array.forEach(element => {
    text += element;
  });
  return console.log(text.replace(/,/g,""));
};

const array = ["😎", "💩", "🤗", "😼", "😂"];
printItems(array);

const array2 = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array2);

const array3 = [
  "😎",
  [
    ["💩", ["🤗"]],
    [[["😼"]], "😂"],
  ],
];
printItems(array3);

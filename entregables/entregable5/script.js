const longestWord = (text) => {
    const words = text.split(" ");
    let longest_word = "";

    for (let word of words){
        if(word.length > longest_word.length){
            longest_word = word;
        }
    }
    return longest_word;
}

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const longest_word = longestWord(paragraph);
console.log("La palabra mas larga es: ", longest_word);
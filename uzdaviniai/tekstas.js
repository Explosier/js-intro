console.clear();

const tekstas1 = 'vasara';
const tekstas2 = 'pavasaris';
const tekstas3 = 'labas rytas';
const tekstas4 = 'pipiriukai';

// kuri raide pasikartoja dazniausiai?

function findMFChar(...strings) {
    let joined = strings.join('');
    let counts = {};
    let maxCount = 0;
    let mostFrequentChar = '';

    for (let char of joined) {
        counts[char] = (counts[char] || 0) + 1;
        if (counts[char] > maxCount) {
            maxCount = counts[char];
            mostFrequentChar = char;
        }
    }

    return mostFrequentChar;
}

function findMFChar2(...strings) {
    let results = [];

    for (let str of strings) {
        let counts = {};
        let maxCount = 0;
        let mostFrequentChar = '';

        for (let char of str) {
            counts[char] = (counts[char] || 0) + 1;
            if (counts[char] > maxCount) {
                maxCount = counts[char];
                mostFrequentChar = char;
            }
        }

        results.push(`Most frequent in "${str}": '${mostFrequentChar}'`);
    }
    return results;
}

function findMFChar3(...strings) {
    let results = [];

    for (let str of strings) {
        let counts = {};
        let maxCount = 0;
        let mostFrequentChar = '';

        for (let char of str) {
            counts[char] = (counts[char] || 0) + 1;
            if (counts[char] > maxCount) {
                maxCount = counts[char];
                mostFrequentChar = char;
            }
        }

        results.push(`Most frequent in "${str}": '${mostFrequentChar}' - ${maxCount}`);
    }
    return results;
}

console.log(findMFChar3(tekstas1, tekstas2, tekstas3, tekstas4));

function analyzeText(text) {
    let lines = text.split('\n');
    let nonEmptyLinesCount = 0;
    let totalWordCount = 0;
    let longestLineLength = 0;
    let letterCounts = {};
    let wordCounts = {};
    let uniqueLetters = new Set();
    let uniqueWords = new Set();
    let apostropheCount = 0;
    let mostFrequentLetter = '';
    let mostFrequentWord = '';
    let maxLetterCount = 0;
    let maxWordCount = 0;

    for (let line of lines) {
        let trimmedLine = line.trim();

        if (trimmedLine) {
            nonEmptyLinesCount++;

            let words = trimmedLine.split(/\s+/);
            totalWordCount += words.length;

            for (let word of words) {
                let lowerWord = word.toLowerCase();
                wordCounts[lowerWord] = (wordCounts[lowerWord] || 0) + 1;
                if (wordCounts[lowerWord] > maxWordCount) {
                    mostFrequentWord = lowerWord;
                    maxWordCount = wordCounts[lowerWord];
                }

                uniqueWords.add(lowerWord);
            }

            for (let char of trimmedLine.toLowerCase()) {
                if (char >= 'a' && char <= 'z') {
                    letterCounts[char] = (letterCounts[char] || 0) + 1;
                    uniqueLetters.add(char);
                    if (letterCounts[char] > maxLetterCount) {
                        mostFrequentLetter = char;
                        maxLetterCount = letterCounts[char];
                    }
                } else if (char === '\'') {
                    apostropheCount++;
                }
            }

            if (trimmedLine.length > longestLineLength) {
                longestLineLength = trimmedLine.length;
            }
        }
    }

    return {
        nonEmptyLinesCount,
        totalWordCount,
        longestLineLength,
        mostFrequentLetter,
        mostFrequentWord,
        uniqueLetterCount: uniqueLetters.size,
        uniqueWordCount: uniqueWords.size,
        apostropheCount
    };
}

const text = `We're no strangers to love
You know the rules and so do I
A full commitment's what I'm thinking of
You wouldn't get this from any other guy

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've known each other for so long
Your heart's been aching but you're too shy to say it
Inside we both know what's been going on
We know the game and we're gonna play it

And if you ask me how I'm feeling
Don't tell me you're too blind to see

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give, never gonna give
(Give you up)
(Ooh) Never gonna give, never gonna give
(Give you up)
We've known each other for so long
Your heart's been aching but you're too shy to say it
Inside we both know what's been going on
We know the game and we're gonna play it
I just wanna tell you how I'm feeling
Gotta make you understand
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry`;

console.log(analyzeText(text));


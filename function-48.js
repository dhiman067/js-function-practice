// SnapText, a note-taking app, builds a quick preview of a caption by
// keeping only the words at even index positions (0, 2, 4...). Write a function
// filterEvenPositionWords(sentence) that returns the filtered sentence. 

function filterEvenPositionWords(sentence) {
    let arrayOfSentence = sentence.split(" ")
    let wordsOfPreviewSentence = []
    for (let i = 0; i < arrayOfSentence.length; i++) {
        if (i % 2 === 0) {
            wordsOfPreviewSentence.push(arrayOfSentence[i]) 
            

        }
    }
    let previewSentence = wordsOfPreviewSentence.join(" ")
    return previewSentence
}
console.log(filterEvenPositionWords('The quick brown fox jumps'));
function allCombinations(words) {
    const combinations = [];
    // your code here
    function helper(sub, i) {
        if(i >= words.length) {
            combinations.push(sub.substring(1));
        } else {
            for(let word of words[i]) {
                helper(sub + "  " + word, i+1);
            }
        }
    }
    helper("", 0);
    return combinations;
}
  
  const words = [ ["quick", "lazy"],
                  ["fluffy", "scraggly"],
                  ["brown", "red", "grey"],
                  ["fox", "dog"],
                  ["!", "?"] ];
  
  console.log( allCombinations( words ) );
  // should return ["quick brown fox", "quick brown dog", "quick red fox", "quick red dog", "quick grey fox", "quick grey dog", "lazy brown fox", "lazy brown dog", "lazy red fox", "lazy red dog", "lazy grey fox", "lazy grey dog"]
const frequency = (string) => {
    var frequencyHash = {};
    var stringSplit = string.split("");
    for (let i=0; i < stringSplit.length; i++) {
        if (Object.keys(frequencyHash).includes(stringSplit[i])) {
            frequencyHash[stringSplit[i]] += 1;
        } else {
            frequencyHash[stringSplit[i]] = 1;
        }
    }
    return frequencyHash;
};

console.log(frequency("fuck u asshole"));

const frequencySkipsBlank = (string) => {
        var frequencyHash = {};
        var stringSplit = string.split("");
        for (let i=0; i < stringSplit.length; i++) {
            if (Object.keys(frequencyHash).includes(stringSplit[i])) {
                if (stringSplit[i] !== ' ') {
                    frequencyHash[stringSplit[i]] += 1;
                }
            } else {
                if (stringSplit[i] !== ' ') {
                   frequencyHash[stringSplit[i]] = 1;
                }
            }
        }

        return frequencyHash;
    };


console.log(frequencySkipsBlank("fuck u asshole"));
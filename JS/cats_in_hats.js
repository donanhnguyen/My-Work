
const catsInHats = () => {

    let cats = [];
    for (let i = 0; i<100; i++) {
        cats.push('no hat');
    }

    let round = 1;
    while (round <= 100) {
        let count = 1;
        while (count <= 100) {
            if (count % round === 0 && cats[count] === 'no hat') {
                cats[count] = 'yes hat';
            } else if (count % round === 0 && cats[count] === 'yes hat') {
                cats[count] = 'no hat';
            }
            count += 1;
        }
        round += 1;
    }

    let catsWithHats = [];
    for (let j = 0; j<= 100; j++) {
        if (cats[j] === 'yes hat') {
            catsWithHats.push(j);
        }
    }

    return catsWithHats;


};

const result = catsInHats();

console.log(result);
// Returns a random DNA base
const returnRandBase = (dnaBases = ['A', 'T', 'C', 'G']) => {
  return dnaBases[Math.floor(Math.random() * dnaBases.length)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      // Randomly select an element of dna
      let elementIdx = Math.floor(Math.random() * dna.length);
      const element = dna[elementIdx];
      // Randomly change the element to a different base than the current
      let baseArr = ['A', 'T', 'C', 'G'];
      baseArr = baseArr.filter(base => {
        return base != element;
      });
      dna[elementIdx] = returnRandBase(baseArr);
      return dna;
    },
  };
}

console.log(returnRandBase());
console.log(mockUpStrand());

console.log(pAequorFactory(1, ['A', 'G']));
console.log(pAequorFactory(1, ['A', 'G']).mutate());
console.log(pAequorFactory(1, ['A', 'G']).mutate());
console.log(pAequorFactory(1, ['A', 'G']).mutate());
console.log(pAequorFactory(1, ['A', 'G']).mutate());







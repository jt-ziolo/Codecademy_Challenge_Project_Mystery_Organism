const baseCount = 15;
const allBases = ['A', 'T', 'C', 'G']

// Returns a random DNA base
const returnRandBase = (dnaBases) => {
  if(!dnaBases) {
    dnaBases = allBases;
  }
  return dnaBases[Math.floor(Math.random() * dnaBases.length)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < baseCount; i++) {
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
    compareDNA(other) {
      // log the number of identical bases in the same location
      let count = 0;
      for(i in this.dna) {
        const base = this.dna[i];
        if(base === other.dna[i]) {
          count += 1;
        }
      }
      const pct = Math.trunc(100 * count / baseCount);
      console.log(`Specimen #${this.specimenNum} and specimen #${other.specimenNum} have ${pct}% DNA in common.`);
    },
    willLikelySurvive() {
      // return true if dna contains >= 60% 'C' or 'G' bases
      const count = this.dna.filter(base => base === 'C' || base === 'G').length;
      const frac = count / baseCount;
      console.log(this.dna);
      console.log(frac);
      return frac >= 0.6;
    },
  };
}

console.log(returnRandBase());
console.log(mockUpStrand());
let pA1 = pAequorFactory(1, mockUpStrand());
console.log(pA1);
console.log(pA1.mutate());
pA1.compareDNA(pA1);
let pA2 = pAequorFactory(2, mockUpStrand());
pA1.compareDNA(pA2);
pA2.compareDNA(pA1);
pA2.dna = pA2.mutate();
pA2.dna = pA2.mutate();
pA2.dna = pA2.mutate();
pA2.dna = pA2.mutate();
pA1.compareDNA(pA2);
console.log(`T/F? Specimen ${pA1.specimenNum} is likely to survive? ${ pA1.willLikelySurvive() }`);
console.log(`T/F? Specimen ${pA2.specimenNum} is likely to survive? ${ pA2.willLikelySurvive() }`);

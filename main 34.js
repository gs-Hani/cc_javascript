// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (uNumber,dnaArray) => {
    return {
      specimenNum: uNumber,
      dna:dnaArray,
      
      mutate() {
        const randIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randIndex] = newBase;
        return this.dna;
      },//mutate
  
      compareDNA(pAequor){
        let similarBases = 0;
        for (let i = 0 ;i < dnaArray.length ;i++){
          if (pAequor.dna[i] === this.dna[i]){similarBases++}
        }
        let similarityRatio = ((similarBases/this.dna.length) *100);
        console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${(similarityRatio).toFixed(2)}% DNA in common`)
      },//compareDNA
  
      willLikelySurvive() {
        const cOrG = this.dna.filter(el => el === "C" || el === "G");
        return cOrG.length / this.dna.length >= 0.6;
      },//willLikelySurvive
      } //return
    } //pAequorFactory
  
  let samples = []
  let i = 1
  while (samples.length < 30) {
    let newOrg = pAequorFactory(i, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
        samples.push(`specimenNum:${newOrg.specimenNum} dna:${newOrg.dna}`);
    }
    i++;
  }
  console.log(samples);
  /*TEST1*/
  //console.log(pAequorFactory(1,[ 'C', 'A', 'C', 'T', 'G', 'A', 'A', 'G', 'A', 'A', 'T', 'T', 'G', 'T', 'A' ]));
  
  /*TEST2*/
  //console.log(pAequorFactory(1,[ 'C', 'A', 'C', 'T', 'G', 'A', 'A', 'G', 'A', 'A', 'T', 'T', 'G', 'T', 'A' ]).mutate());
  
  /*TEST3*/
  /*const pAequor = {
    specimenNum: 2,
      dna:[ 'C', 'A', 'C', 'T', 'G', 'A', 'A', 'G', 'A', 'A', 'T', 'T', 'G', 'T', 'A' ],
  }
   console.log(pAequorFactory(1,mockUpStrand()).compareDNA(pAequor));*/
  //.compareDNA(pAequorFactory(2,mockUpStrand())
  
  /*TEST4*/
  //console.log(pAequorFactory(1,mockUpStrand()).willLikelySurvive());
  
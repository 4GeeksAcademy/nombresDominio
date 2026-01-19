
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let n = 0; n < noun.length; n++) {
              console.log(pronoun[i] + adj[j] + noun[n] + '.com');
    }
  }
}      




let palabra = ['pued' , 'juguet' , 'inter'];
let hack = ['.es' , '.net'];

for (let p = 0; p < palabra.length; p++) {
  for (let h = 0; h < hack.length; h++){
    console.log(palabra[p] + hack[h]);
    
  }
}
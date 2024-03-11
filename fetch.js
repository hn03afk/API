


async function getNotes() { 
    
    const res = await fetch ('http://localhost:3000/')
    const data =await res.json()
    console.log(data);
}
// async function addNote(){
//   // var nameInput = document.getElementById('nom').value;
//   // var fNameInput = document.getElementById('prenom').value;
//   const { data, error } = await fetch ('http://localhost:3000/')
//     .from('control')
//     .insert({  name: nameInput, prenom: fNameInput, score: 4 ,triche: false})
//     .select()
  
//     return { data, error }
//   }


// async function addNote(){
//   const { data, error } = await supabase
//     .from('control')
//     .insert({  nom: 'supa', prenom:'ngga', score: 4 , triche: false})
//     .select()
  
//     return { data, error }
//   }
  
  async function insertARow(){
    const { data, error } = await supabase
    .from('control')
    .insert([
      { nom: 'someValue', prenom: 'otherValue', score: 2, },
    ])
    .select()
    return {data,error}
   }
// async function pitie(){
// // var nameInput = document.getElementById('nom');
// // var fNameInput = document.getElementById('prenom');

// fetch("http://localhost:3000/", {
//   method: "POST",
//   body: JSON.stringify({
//     nom: 'supa',
//     prenom: 'ngga',
//     score:6,
//     triche: true
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// })
// .then((response) => response.json())
//   .then((json) => console.log(json));;
// }

async function poster() {
  const { data, error } = await supabase
  .from('control')
  .insert([
    {name: 'someValue' },
    { prenom: 'otherValue' },
    {score: 2},
    {triche:false}
  ])
  .select()
return { data,error}
}

export {getNotes, poster,insertARow}
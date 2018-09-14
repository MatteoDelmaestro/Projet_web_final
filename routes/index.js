var express = require('express')
var router = express.Router()

const myListS = [
 {
          
          nom: 'ECOUTEUR',
          image: scr="/images/no-image.png",
          prix: 9,
          catégorie: 'informatique',
          description:'je vend une paire d\'écouteur',
          id:0,
          UidS:0
      },
      {
          
          nom: 'Voiture rouge',
          image: scr="/images/no-image.png",
          prix: 9999,
          catégorie: 'vehicule',
          description:'je vend une voiture',
          id:0,
          UidS:0
      },
      {
          
          nom: 'Table',
          image: scr="/images/no-image.png",
          prix: 59,
          catégorie: 'meuble',
          description:'je vend une table en bois massif',
          id:0,
          UidS:0
      },
      {
          
          nom: 'Trotinette',
          image: scr="/images/no-image.png",
          prix: 999,
          catégorie: 'XX',
          description:'je vend une trotinette',
          id:0,
          UidS:0
      },
      {
          
          nom: 'PC portable',
          image: scr="/images/no-image.png",
          prix: 699.99,
          catégorie: 'informatique',
          description:'je vend un pc portable',
          id:0,
          UidS:0
      },
]
const userList = [
	{

		nom:'dm',
      	prenom:'mat',
      	mailS:'admin@admin.com',
      	mdpS:'admin',
     


	}
]



function findnextID(myListS){
	let max = 0
	for( let i = 0; i<myListS.lenth; i++ ){
		if(myListS[i].id>max){
			max = myListS[i].id
		}
	}
}




router.post('/userList',(req, res) =>{
	const userID = req.body
	console.log('req.body', req.body)
	userID.id = userList.lenth
	userList.push({
		nom : req.body.nom,
		prenom : req.body.prenom,
		mailS : req.body.mailS,
		mdpS : req.body.mdpS
	})
	res.send('userID.id')
})

router.get('/userList',(req, res) =>{
	res.send(userList)

})


router.post('/myListS',(req,res)=>{
	//req.body
	const myObj = req.body
	console.log('req.body', req.body)
	idS = myListS.length
	myListS.push({
		nom : req.body.nom,
		image: scr="/images/no-image.png",
        prix: req.body.prix,
        catégorie: req.body.catégorie,
        description: req.body.description,
        id : idS,
        UidS: req.body.Uid
	})
	res.send('myObj.id')
})

router.get('/myListS',(req, res) =>{
	res.send(myListS)
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.delete('/myListS/:object',(req,res)=>{
	
	const id = parseInt(req.params.object)

	
	
	 var index = -1
	 for (var i in myListS){
	 	if(myListS[i].id === id){
	 		index = i
	 		console.log('index = '+ index)
	 	}
	 }
	//if(index !== -1){

		myListS.splice(index, 1)
	//}
	 // else{
	 // 	res.status(404)
	 // 	res.send('error: not found')
	 // 	return
	 // }
	

})



router.post('/myListServeur', (req,res)=>{
	
	
	const id = req.body.ID

	// for(let i =0; i< myListS.length; i++){
	// 	if(i === id){
	// 		index = i

	// 	}
	// }
	// if(index !== 1){
		myListS[id].nom = req.body.nom,
		myListS[id].image = "/images/no-image.png",
		myListS[id].prix = req.body.prix,
		myListS[id].catégorie = req.body.catégorie,
		myListS[id].description = req.body.description
	// }else{
	// 	res.status(404)
	// 	res.send('error: not found')
	// 	return
	// }


})






/*
// coté client
created(){

	//appeler route get mylist

	this.$http.get('/mylist')
	.then((response)=> {
		console.log('reponse du serveur', responce.data)
		this.mylist = response.data
	})
}

//ajoute dans methode

this.$http.post('/mylist', newObj)

deleteItem(item){
	this.$http.delete('/mylist/' + item.id)
	.then((response)=>{
		console.log('item suppr')
		const index = mylist.findIndex(elem=>elem.id ===id)
	if(index !== -1){
		mylist.splice(index,1)
	}

}
<li> v-for


*/
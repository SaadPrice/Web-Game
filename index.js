function newImage (source,left,bottom){
 let newObject = document.createElement('img')
newObject.src = source
newObject.style.position = "fixed"
newObject.style.left = left
newObject.style.bottom = bottom
document.body.append(newObject)
return newObject
}

newImage("assets/green-character.gif","100px","300px")

newImage("assets/pine-tree.png","450px","200px")

newImage("assets/tree.png","200px","300px")

newImage("assets/pillar.png","350px","100px")

newImage("assets/crate.png","150px","200px")

newImage("assets/well.png","500px","425px")

newImage("assets/sword.png","500px","405px")
sword.addEventListener('click', function(){sword.remove()}

)
export function makePerson(name : string , age : number){
  return {name : name , age: age}
}

export function testMakePerson(){
  console.log(
    makePerson('Jane' , 32),
    makePerson('HP' , 27)
  )
}
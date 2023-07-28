/*
Implement solutions to the following questions/problems by writing functions for each one:
Instruction
Implement a function biggestFollower() which returns the name of the individual who follows the most people.

Instruction
Implement mostPopular() which returns the name of the most popular (most followed) individual.

Instruction
Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.

Instruction
Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.

Instruction
Implement some or all these remaining functions.
Identify who has the most followers over 30
Identify who follows the most people over 30
List everyone and their reach (sum of # of followers and # of followers of followers)

Tips
You are encouraged to create some additional functions in order to avoid having very large 
functions that try to do everything. That said, be sure to name them well. 
All this may sound familiar - that's because it was covered recently as part of our Function Best Practices.
 */

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};


//returns the name of the individual who follows the most people.
const biggestFollower = (obj) => {
  let name = "";
  let tmpFollows = 0;
  let arrObj = Object.values(obj); //convart from obj into array

  arrObj.forEach(element => {
    if(element.follows.length > tmpFollows){
      tmpFollows = element.follows.length;
      name = element.name;
    }
  });
  
  return name;
}


//which returns the name of the most popular (most followed) individual.
const mostPopular = (obj) => {
  let arrObj = Object.values(obj); //convart from obj into array
  let allFolows = [];
  let result = [];
  arrObj.forEach(element => {
    allFolows.push(...element.follows); 
  });
  let textAllFolows = allFolows.join();
  let setAllFolows = new Set(allFolows);//delete same charactors in the array.
  let tempArray = [];
  let maxNumber = 0;
  let resultForReturn = [];

  setAllFolows.forEach(element => {
    regexp = new RegExp(element ,'g');//making Keyword for searching 
    tempArray = textAllFolows.match(regexp);
    if(tempArray.length>maxNumber) 
    {
      maxNumber = tempArray.length;
    }
    result.push([element,tempArray.length]);
  });

  result.forEach(element => {
    if(element[1]===maxNumber){
      resultForReturn.push(element[0]);
    } 
  });
  
  return resultForReturn;
}

//which outputs a list of everyone and for each of them, the names of who they follow and who follows them.
const printAll = (obj) => {
  let arrObj = Object.values(obj); //convart from obj into array
  let result =[];
  arrObj.forEach(element => {
    result.push([element.name,element.follows]);
  });
  return result;
}

//which returns a list of names for those who follow someone that doesn't follow them back.
const unrequitedFollowers = (obj) =>{
  let arr0bjKey = Object.keys(obj);
  let arrObj = Object.values(obj); //convart from obj into array

  arrObj.forEach((element,index) => {
    arrObj[index].key = arr0bjKey[index]; //add a new Key as key: follow account name

  });
  let result = [];
  arrObj.forEach(element => {
    element.follows.forEach(element2 => {
      //look into the object.follows array whether Element1 name match or not

      if(obj[element2].follows.indexOf(element.key) === -1){
        result.push(element.key+" is not followed by "+obj[element2].key+" inspte of follow");
      }      
    });

  });
  
  return result; 
}

// Implement some or all these remaining functions.
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List everyone and their reach (sum of # of followers and # of followers of followers)

//chose that function -> Identify who has the most followers over 30
const over30BiggestFollower = (obj) =>{
  let name = "";
  const age = 30;
  let tmpFollows = 0;
  let arrObj = Object.values(obj); //convart from obj into array

  arrObj.forEach(element => {
    if(element.follows.length > tmpFollows && element.age >= age){
      tmpFollows = element.follows.length;
      name = element.name;
    }
  });
  
  return name;

}


console.log( biggestFollower(data) );
console.log( mostPopular(data) );
console.log( printAll(data) );
console.log( unrequitedFollowers(data) );
console.log( over30BiggestFollower(data) );


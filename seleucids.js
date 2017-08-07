//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var dataset = {
  rulers: [
    {
      name: 'Seleucus I Nicator',
      startReign: 305,
      endReign: 281,
      consorts: ['Apama']
    },
    {
      name: 'Antiochus I Soter',
      startReign: 281,
      endReign: 261,
      consorts: ['Stratonice of Syria']
    },
    {
      name: 'Antiochus II Theos',
      startReign: 261,
      endReign: 246,
      consorts: ['Laodice I', 'Berenice']
    },
    {
      name: 'Seleucus II Callinicus',
      startReign: 246,
      endReign: 225,
      consorts: ['Laodice II']
    },
    {
      name: 'Seleucus III Ceraunus',
      startReign: 225,
      endReign: 223,
      consorts: []
    },
    {
      name: 'Antiochus III the Great',
      startReign: 223,
      endReign: 187,
      consorts: ['Laodice III', 'Euboea of Chalcis']
    },
    {
      name: 'Seleucus IV Philopator',
      startReign: 187,
      endReign: 175,
      consorts: ['Laodice IV']
    },
    {
      name: 'Antiochus IV Epiphanes',
      startReign: 175,
      endReign: 163,
      consorts: ['Laodice IV']
    },
    {
      name: 'Antiochus V Eupator',
      startReign: 163,
      endReign: 161,
      consorts: []
    },
    {
      name: 'Demetrius I Soter',
      startReign: 161,
      endReign: 150,
      consorts: ['Apama', 'Laodice V']
    },
    {
      name: 'Alexander I Balas',
      startReign: 150,
      endReign: 145,
      consorts: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 145,
      endReign: 138,
      consorts: ['Cleopatra Thea']
    },
    {
      name: 'Antiochus VI Dionysus',
      startReign: 145,
      endReign: 140,
      consorts: []
    },
    {
      name: 'Diodotus Tryphon',
      startReign: 140,
      endReign: 138,
      consorts: []
    },
    {
      name: 'Antiochus VII Sidetes',
      startReign: 138,
      endReign: 129,
      consorts: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 129,
      endReign: 126,
      consorts: ['Cleopatra Thea']
    },
    {
      name: 'Alexander II Zabinas',
      startReign: 129,
      endReign: 123,
      consorts: []
    },
    {
      name: 'Cleopatra Thea',
      startReign: 126,
      endReign: 121,
      consorts: []
    },
    {
      name: 'Seleucus V Philometor',
      startReign: 126,
      endReign: 125,
      consorts: []
    },
    {
      name: 'Antiochus VIII Grypus',
      startReign: 125,
      endReign: 96,
      consorts: ['Tryphaena of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Antiochus IX Cyzicenus',
      startReign: 114,
      endReign: 96,
      consorts: ['Cleopatra IV of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Seleucus VI Epiphanes Nicator',
      startReign: 96,
      endReign: 95,
      consorts: []
    },
    {
      name: 'Antiochus X Eusebes Philopator',
      startReign: 95,
      endReign: 92,
      consorts: []
    },
    {
      name: 'Demetrius III Eucaerus',
      startReign: 95,
      endReign: 87,
      consorts: []
    },
    {
      name: 'Antiochus XI Epiphanes Philadelphus',
      startReign: 95,
      endReign: 92,
      consorts: []
    },
    {
      name: 'Philip I Philadelphus',
      startReign: 95,
      endReign: 84,
      consorts: []
    },
    {
      name: 'Antiochus XII Dionysus',
      startReign: 87,
      endReign: 84,
      consorts: []
    },
    {
      name: 'Tigranes I of Armenia',
      startReign: 83,
      endReign: 69,
      consorts: []
    },
    {
      name: 'Seleucus VII Kybiosaktes',
      startReign: 83,
      endReign: 69,
      consorts: []
    },
    {
      name: 'Antiochus XIII Asiaticus',
      startReign: 69,
      endReign: 64,
      consorts: []
    },
    {
      name: 'Philip II Philoromaeus',
      startReign: 65,
      endReign: 63,
      consorts: []
    }
  ]
}








// Write a test and function that returns the rulers who reigned more than `n` years. Use `filter`.

function moreThanNYears(data, n) {
  return data.rulers.filter(function(ruler) {
    let yearsReigned = ruler.startReign - ruler.endReign;
    return yearsReigned > n;
  })
}

console.log('more than 5 years of reign', moreThanNYears(dataset, 5));

let result = moreThanNYears(dataset, 5);

// Write a test and function that returns the king with the longest name
function Ω(data) {
  let bestname = '';
  data.rulers.forEach(function(ruler){
    if (ruler.name.length > bestname.length) {
      bestname = ruler.name;
    }
  });
  return bestname;
}

console.log('longest name', Ω(dataset));
// Write a test and function that returns kings with `n` consorts

function findNConsort(data, n) {
  return data.rulers.filter((ruler) => ruler.consorts.length === n);
};

function blah(data, n) {
  let newArray = [];
  for (i = 0; i < data.rulers.length; i++) {
    if (data.rulers[i].consorts.length === n) {
      newArray.push(data.rulers[i]);
    };
  };
  return newArray;
}

function blahForEach(data, n) {
  let newArray = [];
  data.rulers.forEach((ruler) => {
    if (ruler.consorts.length === n) {
      newArray.push(ruler);
    };
  });
  return newArray;
}

console.log('first function', findNConsort(dataset, 2));
console.log('second function', blah(dataset, 2));
console.log('third function', blahForEach(dataset, 2));

// Write a test and function that calculates the total consorts.
// function totalFriends(data){
//   let friendTotal = 0;
//   data.rulers.forEach((ruler) => friendTotal += ruler.consorts.length);
//   return friendTotal;
// }

function totalFriends(data) {
  let newArray = [];
  data.rulers.forEach((ruler) => {
    ruler.consorts.forEach((consort) => {
      if (newArray.indexOf(consort) === -1) {
        newArray.push(consort);
      }
    })
  })
  return newArray.length;
}


// Write a test and function that counts the total number of rulers named "Antiochus". Hint: the `indexOf` function for strings is your friend.
function rulersWithAName(data, name){
 // let index = 0;
 let folksWithSameName = 0;

 data.rulers.forEach((ruler) => {
  if (ruler.name.indexOf(name) !== -1) {
    folksWithSameName++;
  }
 })

 // function find(){
 //   if (data.rulers.indexOf(name, index) !== -1){
 //     folksWithSameName++;
 //     index = data.rulers.indexOf(name, index) + 1;
 //     find();
 //    }
 //  }
  return folksWithSameName;
};

module.exports = { dataset, moreThanNYears, Ω, findNConsort, totalFriends, rulersWithAName, rulersWithAName };

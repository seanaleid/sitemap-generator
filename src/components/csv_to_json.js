// hard coded siteId, not in the CSV, this will be addressed later.
// set to 0 here on line 3, used in 3 other places
const siteId = 0;

// split the task names from arr[1]
const arrTaskNames = [];
// get a collection of taskNames to manipulate and remove empty strings
// 'Assembly', 'Install', etc.
const taskNames = [];
// split all the data from arr[2] - arr[arr.length-1]
const arrRowData = [];
// get a collection of the raw data
const rowData = [];
// collection of all the buildingNames
const buildingName = [];
// collection of all the unitTypes
const unitTypeName = [];
// collection of all the unitTypeNames in an object with prices
const unitTypeNameObj = {};

// final arrays containing JSON shaped data
// the sites array is hard-coded for now, see note on lines 1-2
const sites = [
  { siteId: siteId, siteName: "Libertad Glendale", phaseLabel: "Building" },
];
const unitTaskNames = [];
const buildings = [];
const unitTypes = [];
const unitTaskAmounts = [];
const units = [];

// Libertad Glendale CSV data turned into an array of strings
// const csvData = [
//   "Building,Unit,Type,Task 1,Task 2,Task 3,Task 4,Task 5,Task 6,Task 7,Task 8,Task 9,Task 10,Task 11,Task 12,Task 13,Task 14,Task 15,Description, Value",
//   "Building,Unit,Type,Assembly,Install,Handles,Crown Molding,Toekick,,,,,,,,,,Misc,Description, Value",
//   "C,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "C,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "C,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "D,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "D,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "D,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "D,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "H,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "H,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "H,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "J,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "J,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "J,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "J,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "K,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "K,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "K,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "K,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "L,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "L,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "L,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "L,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "N,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "N,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "N,103,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "N,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "N,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "P,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "P,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "P,103,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "P,104,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "P,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "P,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "R,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "R,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "R,103,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "R,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "R,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "S,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "S,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "S,103,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "S,104,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "S,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "S,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "S,203,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "S,204,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "T,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "T,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "T,103,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "T,104,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "T,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "T,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "U,101,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "U,102,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "U,103,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "U,104,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "U,201,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "U,202,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "X,203,1B,50,100,10,25,20,,,,,,,,,,,,",
//   "C,102,1BADA,40,80,8,20,15,,,,,,,,,,,,",
//   "H,101,1BADA,40,80,8,20,15,,,,,,,,,,,,",
//   "X,101,2B,60,120,15,30,25,,,,,,,,,,,,",
//   "X,102,2B,60,120,15,30,25,,,,,,,,,,,,",
//   "X,201,2B,60,120,15,30,25,,,,,,,,,,,,",
//   "X,202,2B,60,120,15,30,25,,,,,,,,,,,,",
//   "Q,101,2B ,60,120,15,30,25,,,,,,,,,,,,",
//   "Q,102,2B ,60,120,15,30,25,,,,,,,,,,,,",
//   "Q,103,2B ,60,120,15,30,25,,,,,,,,,,,,",
//   "Q,104,2B ,60,120,15,30,25,,,,,,,,,,,,",
//   "Q,201,2B ,60,120,15,30,25,,,,,,,,,,,,",
//   "Q,202,2B ,60,120,15,30,25,,,,,,,,,,,,",
//   "Q,203,2B ,60,120,15,30,25,,,,,,,,,,,,",
//   "Q,204,2B ,60,120,15,30,25,,,,,,,,,,,,",
//   "M,101,2BADA,55,110,15,30,25,,,,,,,,,,,,",
//   "M,102,2BADA,55,110,15,30,25,,,,,,,,,,,,",
//   "M,103,2BADA,55,110,15,30,25,,,,,,,,,,,,",
//   "M,104,2BADA,55,110,15,30,25,,,,,,,,,,,,",
//   "M,201,2BADA,55,110,15,30,25,,,,,,,,,,,,",
//   "M,202,2BADA,55,110,15,30,25,,,,,,,,,,,,",
//   "M,203,2BADA,55,110,15,30,25,,,,,,,,,,,,",
//   "M,204,2BADA,55,110,15,30,25,,,,,,,,,,,,",
//   "X,103,2BADA,55,110,15,30,25,,,,,,,,,,,,",
//   "A,101,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "A,102,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "A,103,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "B,101,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "B,102,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "B,103,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "E,101,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "E,102,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "E,103,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "F,101,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "F,102,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "F,103,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "G,101,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "G,103,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "V,101,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "V,102,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "V,103,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "W,101,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "W,102,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "W,103,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "Y,101,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "Y,102,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "Y,103,3B,65,128,20,25,20,,,,,,,,,,,,",
//   "G,102,3BADA,70,135,25,30,25,,,,,,,,,,,,",
//   "N,104,3BADA,70,135,25,30,25,,,,,,,,,,,,",
//   "R,104,3BADA,70,135,25,30,25,,,,,,,,,,,,",
// ];

// Stepping Stone 3 CSV data turned into an array of strings
const csvData = [
  "Building,Unit,Type,Task 1,Task 2,Task 3,Task 4,Task 5,Task 6,Task 7,Task 8,Task 9,Task 10,Task 11,Task 12,Task 13,Task 14,Task 15,Desciption, Value ",
  "Building,Unit,Type,Assembly,Install,Handles,,,,,,,,,,,,Misc,Desciption, Value ",
  ",201,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",202,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",203,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",204,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",205,ADA,44.00,135.00,10.50,,,,,,,,,,,,,,",
  ",206,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",207,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",208,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",209,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",210,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",211,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",212,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",213,ADA,44.00,135.00,10.50,,,,,,,,,,,,,,",
  ",214,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",215,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",216,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",217,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",301,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",302,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",303,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",304,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",305,ADA,44.00,135.00,10.50,,,,,,,,,,,,,,",
  ",306,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",307,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",308,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",309,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",310,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",311,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",312,ADA,44.00,135.00,10.50,,,,,,,,,,,,,,",
  ",313,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",314,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",315,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",316,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",317,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",401,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",402,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",403,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",404,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",405,ADA,44.00,135.00,10.50,,,,,,,,,,,,,,",
  ",406,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",407,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",408,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  ",409,Typical,52.00,126.00,15.00,,,,,,,,,,,,,,",
  "Com ,107,Com ,40.00,90.00,11.00,,,,,,,,,,,,,,",
  "Comp Lab,,Comp Lab,4.00,144.00,1.50,,,,,,,,,,,,,,",
  "Laundry,323,Laundry,0.00,45.00,0.00,,,,,,,,,,,,,,",
  "Serv,120,Serv,120.00,315.00,41.00,,,,,,,,,,,,,,",
  "Print,108,Print,32.00,72.00,12.00,,,,,,,,,,,,,,",
  "Restroom,124,Restroom,16.00,36.00,0.00,,,,,,,,,,,,,,",
  "Restroom,125,Restroom,16.00,36.00,0.00,,,,,,,,,,,,,,",
];

function test(arr) {
  // takes all the task values from arr[1] and splits them into an array
  arrTaskNames.push(...arr[1].split(",").slice(3));

  // this for loop removes any empty strings and pushes valid values intoTaskNames
  // the trim method removes white space before and after the strings
  // some values had had white space before and after
  for (let i = 0; i < arrTaskNames.length; i++) {
    if (arrTaskNames[i].trim() === "") {
      continue;
    } else {
      taskNames.push(arrTaskNames[i].trim());
    }
  }

  // creates the shaped JSON for the unitTaskNames
  taskNames.map((x, i) => {
    unitTaskNames.push({
      unitTaskNameId: i,
      taskName: x,
    });
  });

  // takes all the values from arr[2] - arr[arr.length-1] and splits them into arrays
  for (let i = 2; i < arr.length; i++) {
    rowData.push(arr[i].split(","));
  }

  // count variable is used for units with empty strings
  let count = 1;
  // takes all the values in the arrays in arrRowData and removes empty strings
  rowData.map((x, i) => {
    // if the building is an empty string, make the building A
    if (x[0] === "") {
      x[0] = "A";
    }
    // if the unit is empty, make count and count increments
    if (x[1] === "") {
      x[1] = count;
      count++;
    }
  });

  // this map loops through the rowData to populate the buildingName array
  rowData.map((x, i) => {
    // this if statement checks the buildingNames
    // and only pushes the first instance of each unique buildingName into the array
    if (buildingName.indexOf(x[0].trim()) === -1) {
      buildingName.push(x[0].trim());
    }

    // this is statement checks the unitTypeName
    if (unitTypeName.indexOf(x[2].trim()) === -1) {
      unitTypeName.push(x[2].trim());
      unitTypeNameObj[x[2].trim()] = [...x.slice(3)];
    }
  });

  // this map loops through the buildingName array
  // and creates the buildings array with the final JSON objects
  buildingName.map((x, i) => {
    buildings.push({
      buildingId: i,
      buildingName: buildingName[i],
      siteId: siteId,
    });
  });

  // this map loops through the unitTypeName array
  // and creates the unitTypes array with the final JSON objects
  unitTypeName.map((x, i) => {
    unitTypes.push({
      unitTypeId: i,
      siteId: siteId,
      unitTypeName: x,
    });
  });

  // this map loops through the rowData array
  // and creates the units array with the final JSON objects
  rowData.map((x, i) => {
    units.push({
      unitId: i,
      buildingId: buildingName.indexOf(x[0].trim()),
      unitTypeId: unitTypeName.indexOf(x[2].trim()),
      unitName: `${x[1]}`,
    });
  });

  // this newI is a counter value used for the ID in the final unitTaskAmounts JSON object
  let newI = 0;
  // this for loop iterates over the unitTypeNameObj obejct
  // and creates the final array with the JSON objects
  for (const property in unitTypeNameObj) {
    for (let i = 0; i < unitTypeNameObj[property].length; i++) {
      if (unitTypeNameObj[property][i] !== "") {
        unitTaskAmounts.push({
          unitTaskAmountId: newI,
          unitTypeId: unitTypeName.indexOf(property),
          unitTaskNameId: i,
          // since the taskAmount is in dollars, it should be up to 2 decimals
          taskAmount: Number(Number(unitTypeNameObj[property][i]).toFixed(2)),
        });
        newI++;
      }
    }
  }

  return {
    sites: sites,
    unitTaskNames: unitTaskNames,
    buildings: buildings,
    unitTypes: unitTypes,
    unitTaskAmounts: unitTaskAmounts,
    units: units,
  };
}

console.log(test(csvData));

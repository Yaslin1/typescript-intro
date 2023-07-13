interface IEmployee { //interface commas not required
  fName: string
  lName: string
  age: number
  cool?: boolean
  apps: {appName: string; production: boolean}
}

interface IManager extends IEmployee {
  salartier: number

}

let student1: IEmployee= { //objects commas are required
  fName: "Jon",
  lName: "Smith",
  age: 25,
  cool: true,
  apps: {appName: "CF Akeneo", production: true},
}

let manager1: IManager= { //objects commas are required
  fName: "Jon",
  lName: "Smith",
  age: 25,
  cool: true,
  apps: { appName: "CF Akeneo", production: true},
  salaryTier: 2,
}
import { upperCaseFirst } from "upper-case-first";
export default function extractFirstLetter(fullName: string) {
  
  if(fullName == '' || fullName == undefined){
    return '';
  }
  
  let name = fullName;
  let splitName = name.split(" ");
  if (splitName.length > 1) {
    let firstLetter = splitName[0][0];
    let secondLetter = splitName[1][0];

    return upperCaseFirst(firstLetter) + upperCaseFirst(secondLetter);
  } else {
    let firstLetter = splitName[0][0];
    let secondLetter = splitName[0][1];

    return upperCaseFirst(firstLetter) + upperCaseFirst(secondLetter);
  }
}

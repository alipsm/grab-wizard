import { createUniqeKey, isExistUniqeKey } from "./scripts/keyOperations";

const data= createUniqeKey({name:"ali",family:"ahmad"},"data.name.value")
const isExist= isExistUniqeKey("firstName")
console.log('isExist', isExist)
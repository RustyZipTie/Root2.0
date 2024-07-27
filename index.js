import { conditional, matchCase, matchCaseContinue } from "./control/conditionals.js";

// conditional(true, () => console.log('worked'))
const key = 'boo'
console.log(matchCaseContinue(
    key,
    [
        {
            caseKey: 'oob',
            execute: () => 44
        },
        {
            caseKey: 'boo0',
            execute: () => 55
        }
    ],
    () => 66
))


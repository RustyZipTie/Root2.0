export const conditional = (condition, execute, elifs = false, elseExecute = false) => {
    if (condition)
        return execute()
    else if (elifs) {
        for (const { subCondition, subExecute } of elifs){
            if (subCondition)
                return subExecute()
        }    
    }
    if (elseExecute)
        return elseExecute()
}

export const matchCase = (key, cases, elseExecute = false) => {
    for (const { caseKey, execute } of cases)
        if (caseKey === key)
            return execute()

    if (elseExecute)
        return elseExecute()
}

export const matchCaseContinue = (key, cases, elseExecute = false) => {
    if (elseExecute)
        cases.push({ key, elseCase: elseExecute })

    const results = []
    for (const { caseKey, execute, cont } of cases)
        if (caseKey === key) {
            results.push(execute())
            if (!cont)
                return results
        }
    return results
}
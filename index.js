function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction()
{
    return function receivesAFunction(callback){
        return callback()
    }
}

function returnsAnAnonymousFunction() {
    return function () {}
}
function getPerson() {
    return 
    {
        firstname: 'Mary',
    }//this is unreachable code because it comes AFTER 'return' on a NEW LINE
}

function getPerson() {
    return {
        firstname: 'Mary',
    }//this is reachable code because it comes AFTER 'return' on SAME LINE
}
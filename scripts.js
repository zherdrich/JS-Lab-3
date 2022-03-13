let submissions = [
    {}
    
    
    
    
    
    
    
    firstName, score, date, passed];

function addSubmission(array, newName,newScore, newDate) {
    
}




function deleteSubmissionByIndex(array,index) {
    array.splice(index, 1);
    console.log(submissions);
}


function deleteSubmissionByName(array, name){
    let findIndex = array.findIndex(function(student){
        return student.name === name;
    })
    array.splice(findIndex, 1);
    console.log(submissions);
}


deleteSubmissionByName(submissions, 'Jill');
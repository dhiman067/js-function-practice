// FitTrack, a fitness app, logs a user's daily step counts for the week in an
// array. Write a function weeklyStepsSummary(stepsArray) that returns an object {
// totalSteps, goalReached }, where goalReached is true once totalSteps reaches
// 50000. 

function weeklyStepsSummary(stepsArray) {
    let totalSteps = 0
    for (const steps of stepsArray) {
        totalSteps += steps
    }
    if(totalSteps>50000){
        return {totalSteps: totalSteps, goalReached: true}
    }
    else{
        return {totalSteps: totalSteps, goalReached: false}
    }
}
console.log(weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000]));
console.log(weeklyStepsSummary([8000,7500,9200,6000,10000,4000]));
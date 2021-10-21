const {fetchData} = require('../fancyLibrary')


fetchData()
    .then((value)=>console.log(value))
    .catch(error=>console.log(error))



    async function callFunction(){
        try {
            const value = await fetchData()
            console.log(value)
        
            
        } catch (error) {
            console.log(error)
        }
    }
    callFunction()








// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// fetchData that returns a promise.
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Once you have grabbed the favorite foods. Descontrusct the food array to grab only the first 2 values.
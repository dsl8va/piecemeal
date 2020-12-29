

export default function queryMaker(inputs) {
  let searchQuery = '';

  for (var i = 0; i < inputs.length; i++) {
      let current = inputs[i];
      let lowerCase = current.id.toLowerCase();

      if (current.ariaLabel) {continue}

      if (current.value !== "" && current.value !== "0") {
        if (searchQuery === "") {
          if (current.id === "Nutrient" || current.id === "Vitamin"){
            console.log('here')
            // logic to pull the right param min/max and the value and append it to the query string
            // 1. capture the right param
            // 2. look into +1 and +2 and add whichever has values to query param
            let trimmedParam = current.value.split(' (')[0].replace(/\s/g, '');
            if (current[i+1] > 0) {
              searchQuery += `?min${trimmedParam}=${current[i+1].value}`
            }

          } else {
            searchQuery += `?${lowerCase}=${current.value.toLowerCase()}`
          }
        } else {

            if (current.id === "Nutrient" || current.id === "Vitamin"){
            console.log('here')

            let trimmedParam = current.value.split(' (')[0].replace(/\s/g, '');

            if (inputs[i+1].value > 0) {
              searchQuery += `&min${trimmedParam}=${inputs[i+1].value}`
            }
            if (inputs[i+2].value > 0) {
              searchQuery += `&max${trimmedParam}=${inputs[i+2].value}`
            }
          } else {
            searchQuery += `&${lowerCase}=${current.value.toLowerCase()}`
          }
        }
      }
    }
    return searchQuery;
}

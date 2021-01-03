export default function queryMaker(inputs) {
  let searchQuery = '';

  for (var i = 0; i < inputs.length; i++) {
      let current = inputs[i];
      let parameter = current.id.toLowerCase();

      if (current.ariaLabel) {continue}

      if (current.value !== "" && current.value !== "0") {
        if (searchQuery === "") {
          if (current.id === "Nutrient" || current.id === "Vitamin"){

            let trimmedParam = current.value.split(' (')[0].replace(/\s/g, '');
            if (current[i+1] > 0) {
              searchQuery += `?min${trimmedParam}=${current[i+1].value}`
            }
          } else {
            searchQuery += `?${parameter}=${current.value.toLowerCase()}`
          }
        } else {
            if (current.id === "Nutrient" || current.id === "Vitamin"){
            let trimmedParam = current.value.split(' (')[0].replace(/\s/g, '');

            if (inputs[i+1].value > 0) {
              searchQuery += `&min${trimmedParam}=${inputs[i+1].value}`
            }
            if (inputs[i+2].value > 0) {
              searchQuery += `&max${trimmedParam}=${inputs[i+2].value}`
            }
          } else {

            searchQuery.indexOf(parameter) == -1 ?
            searchQuery += `&${parameter}=${current.value.toLowerCase()}` :
            searchQuery += `,${current.value.toLowerCase()}`
          }
        }
      }
    }
    return searchQuery;
}

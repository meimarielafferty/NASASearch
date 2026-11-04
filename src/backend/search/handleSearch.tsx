

export function handleSearch(query: any, error: any) {

  if(error) {
    handleError(query, error);
    return;
  }

  const arr = [...query]
  const len = arr.length;
  alert(len);

}

function handleError(query: any, error?: any) {

  alert('ERROR: ' + error);
  console.error(error);
  console.debug('The query is: ' + query);
  console.info('The query is type: ' + typeof query);

}
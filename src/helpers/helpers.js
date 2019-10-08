export function queryToObject(query) {
  let queryObject = null;

  if (query && typeof query === 'string') {
      queryObject = {};
      console.log("query.split('?').pop().split('&')",query.split('?').pop().split('&'))
      query.split('?').pop().split('&').forEach(pair => {
          const [k, v] = pair.split('=');
          queryObject[k] = decodeURI(v);
      });
  }

  return queryObject;
}

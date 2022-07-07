export const API_URL =
  "http://api.timezonedb.com/v2.1/get-time-zone?key=VCLDKUQ3JHUX&format=xml&by=position";

export const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const graphql = JSON.stringify({
  query:
    "{\r\n      posts(first: 10000) {\r\n        edges {\r\n          node {\r\n            slug\r\n          }\r\n        }\r\n      }\r\n    }",
  variables: {}
});

export const requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: graphql,
  redirect: "follow"
};

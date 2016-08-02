export default (reactOutput) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Isomorphic React</title>
  </head>
  <body>
    ${reactOutput}
  </body>
</html>
`;

# Theory Assignment
## Q 1.  What is **emmet**?

Emmet is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full-fledged
boiler plate code for writing HTML and CSS.
(https://www.freecodecamp.org/news/how-to-write-faster-html-and-css-using-emmet/)
(https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c)

## Q. 2. Difference between a Library and Framework?
Frameworks and libraries are code written by third parties to solve regular/common problems or to optimise performance.
A key difference between the two is Inversion of control. When using a library, the control remains with the developer 
who tells the application when to call library functions. When using a framework, the control is reversed, which means 
that the framework tells the developer where code needs to be provided and calls it as it requires.

## Q 3. What is **CDN**? Why do we use it?
**CDN (Content Delivery Network)** is a network of distributed servers that deliver web content to users based on their geographical location.
CDNs improve page load times and reduce server load by caching content closer to users, resulting in a faster and more reliable browsing experience.

## Q 4. Why is `React` known as React?
React is a JavaScript Library. The name ‘React’ was chosen because the library was designed to allow developers to react to changes 
in state and data within an application, and to update the user interface in a declarative and efficient manner.

## Q 5. What is **crossorigin** in React?

The `crossorigin` attribute in the script tag enables Cross-Origin Resource Sharing (CORS) for loading external JavaScript files from a different origin than the hosting web page. This allows the script to access resources from the server hosting the script, such as making HTTP requests or accessing data.

`<script crossorigin="anonymous|use-credentials"></script>`
|  Value	|  Description|
|---------|-------------|
| anonymous | A cross-origin request is performed. No credentials are sent |
|use-credentials | A cross-origin request is performed. Credentials are sent (e.g. a cookie, a certificate, a HTTP Basic authentication) |

## Q 6. Difference between React and React DOM?
**React** is a JavaScript library for building user interfaces, while **ReactDOM** is a package that specifically deals with rendering
React components into the DOM (Document Object Model).

  ## Q 7. What is difference between react.development.js and react.production.js files via CDN?

`react.development.js` is used for development purpose and the code is not compressed while `react.production.js` is used for production purposes
  and the code for this library is compressed.

## Q 8. What is the difference between `async` and `defer` ?

`async` and `defer` are boolean attributes which are used along with the `script` tag to load the external scripts efficiently in our we page.

Differences between `async` and `defer`.

| Difference  |      async      |  defer |
|-------------|-----------------|--------|
| code | `<script async src = '...'></script>`  |  `<script defer src = '...'></script>`|
| Loading sequence | Does not guarantee the execution sequense of the script    | Guarantees the execution sequence of scripts in wich they are ordered.   |
| Execution sequence | Loads the scripts while HTML is being rendered. When scripts are loaded, then HTML rendering stops and execution of script starts. When execution is completed, HTML rendering resumes.  | Loads the scripts while HTML is being rendered. Executes the scripts only after the HTML is completely rendered



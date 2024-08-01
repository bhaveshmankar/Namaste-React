## `Theory assignment solution :`

## What is `JSX` ?

JSX is HTML-like or XML-like syntax. JSX stands for JavaScript XML. It’s a syntax extension for JavaScript.
It is not a part of React. React apps can be built even without JSX but the code will become very hard to read.
It is not HTML inside JavaScript.
JavaScript engine cannot understand JSX as it only understands ECMAScript so we need to change the JSX code into Javascript code. Basically we have Babel(library) which converts JSX into javascript code.

## superpowers of `JSX`

Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

Advantages of using JSX.
- Sanitizes the data
- If someone gets access to your JS code and sends some malicious data which will then get displayed on the screen, that attack is called cross-site scripting.
- It can read cookies, local storage, session storage, get cookies, get info about your device, and read data. JSx takes care of your data.
- If some API passes some malicious data JSX will escape it. It prevents cross-site scripting and sanitizes the data before rendering
- Makes code readable
- JSX makes it easier to write code as we are no longer creating elements using React.createElement()
- Makes code simple and elegant
- Show more useful errors and warnings
- JSX prevents code injections (attacks)

## Role of `type` attribute in script tag? What options can I use there?

The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.

type attribute can be of the following types:

text/javascript : It is the basic standard of writing javascript code inside the `<script>` tag

Syntax: 
```
<script type="text/javascript"></script>
```

- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

Example: 
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

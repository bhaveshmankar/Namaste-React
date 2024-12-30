## `Theory assignment solution :`

## Q: How do you create `Nested Routes` react-router-dom configuration?

A: We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages

```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```

Now we can create a nested routing for `/path` using `children` again as follows:

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "child",      // Don't use '/' because then react-router-dom will understand it it's the direct path
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```

## Q: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.

A: `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

- Purpose: Creates a router that uses the hash portion of the URL (#) to keep track of the current location.
- Use Case: Useful for web applications that need client-side routing but cannot control the server-side configurations, such as deploying to static hosting platforms where routes other than the root aren't directly accessible.
- Behavior: It uses the URL fragment (after the # symbol) to determine the route. This does not require server-side support, as everything after # is handled by the client.
Example:
```
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```
URL Example:
`http://example.com/#/` → Home page
`http://example.com/#/about` → About page

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

- Purpose: Creates a router that keeps the current location in memory rather than syncing with the browser's address bar.
- Use Case: Ideal for non-browser environments like server-side rendering (SSR), testing, or mobile applications where you don't need a visible address bar or traditional URL management.
- Behavior: Routes are managed purely in memory, so there is no impact on the browser's URL.
Example:
```
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```
URL Example:
The URL doesn't change since it's managed in memory. It's especially useful for tests:
```
import { render } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

render(<RouterProvider router={router} />);
```

## Q: What is the order of life cycle method calls in `Class Based Components`?

A: Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Q: Why do we use `componentDidMount`?

A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
Wwe can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

## Q: Why do we use `componentWillUnmount`? Show with example.

A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

## Q: (Research) Why do we use `super(props)` in constructor?

A: In React, when using class components, super(props) is used in the constructor to properly initialize the parent class (React.Component) with the properties (props) of the child class. Here's a detailed explanation:

1. Accessing this.props:
When you define a constructor in a React component, you must call super() before accessing this or using this.props.
If you pass props to super(props), the parent class (React.Component) initializes with the props, making this.props available throughout the component, including in the constructor.
```
constructor(props) {
    super(props); // Initializes the parent class with the props
    console.log(this.props); // Now accessible
}
```
2. Why super is Necessary:
In JavaScript, when you use the extends keyword to create a subclass, the constructor of the subclass must call the constructor of the parent class using super() before accessing this.
Without calling super(), JavaScript will throw a ReferenceError if you try to use this.
3. Passing props to super:
Passing props to super(props) ensures that the component has access to the props object.
If you omit props in super, this.props will be undefined in the constructor.
Example:
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props); // Passes props to the parent class (React.Component)
    this.state = { count: 0 }; // Initializes state
    console.log(this.props); // Accessible here
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
// Usage
<MyComponent name="Alice" />
Key Points:
- Required for this access: Calling super() initializes this in the child class.
- Props forwarding: Passing props to super(props) makes this.props available in the constructor.
- React-specific behavior: This is a convention in React class components to ensure proper initialization.
If you're not using a constructor or don't need to access props explicitly, you don't need to include it, especially in functional components or newer class syntax without a constructor.

`The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.`

## Q: (Research) Why can't we have the `callback function` of `useEffect async`?

A:n React, the callback function passed to useEffect cannot be async because useEffect expects a clean-up function (or nothing) to be returned from the callback, and async functions always return a promise. This interferes with the expected return type of useEffect.

When you use async inside useEffect, it implicitly returns a promise, and React expects the function to return either a clean-up function or undefined. This mismatch can cause issues, especially when React is trying to clean up or handle updates based on the returned value.

However, you can use an async function within the useEffect hook by defining the async logic inside the function and calling it separately, like this:
```
useEffect(() => {
  const fetchData = async () => {
    // async logic
  };
  fetchData();
}, []);
```
This way, you avoid returning a promise directly from useEffect while still handling asynchronous operations.


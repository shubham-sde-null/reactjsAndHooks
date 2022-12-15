const reasons = [
  {
    heading: "1)React is Easier to Learn Compared to Angular",
    p1: "React is an elementary and lightweight library that only deals with the view layer of a web page.",
    p2: "It has an easy learning curve, making it easier to start with than its counterpart Angular when using JavaScript.",
    p3: "If you have a functional understanding of HTML-CSS and a basic understanding of programming concepts, you can quickly start working with React.",
    p4: "If you are shifting from another framework or library, it might take some time to get used to React’s innovative methods.",
    p5: "Apart from that, there is no concept or utility of React too hard to use. There are extensive documentation available online that will help you with everything related to ReactJS.",
  },
  {
    heading: "2)React Offers Reusable Components",
    p1: "Components in ReactJS are independent, reusable bits of code.",
    p2: "You may provide input if required (called props), and the component will return a rendered HTML element.",
    p3: "You can use them as a primary JavaScript function or a class component, a JavaScript class that uses a render method.",
    p4: "Each React component that you have developed can be reused in other parts of the app, or you can create wrapper components that provide structure and reusability. You can keep creating wrapper components using existing ones and in the end, you have a root component that is your application.",
    p5: "Generally, system upgrades with reusable components often lead to lots of complications as every change can affect other component’s work. But in React, managing updates is easy for developers because all the components are isolated, and change in one doesn’t carry forward to others.",
  },
  {
    heading: "3)React Has a Large Development Community",
    p1: "Among the top 5 trending repositories on GitHub, React is an open-source library created by Jordan Walke.",
    p2: "It has amassed a massive following of JavaScript developers who develop new solutions and tools regularly. A lot of user-developed applications have been included in the official library.",
    p3: "You can get access to a large community of experts to solve any problems. Plus, this is a great way to keep yourself updated. As of January 2022, React has more than 180K stars on Github and around 10 million npm downloads weekly.",
  },
  {
    heading: "4)Virtual DOMS",
    p1: "Document Object Model or DOM is an interface that represents HTML and XML code into trees. A web browser creates a DOM-like model to render output, treating each object/element of the HTML code as a node in the DOM tree.",
    p2: "Whenever a change occurs in the HTML code, either by user interaction or value updates, the DOM tree has to be rendered again, leading to a lot of time and power consumption. ReactJS comes to our rescue here by use of Virtual DOMs.",
    p3: "React simply creates a copy of the DOM, maintaining a cache memory of sorts. Every time a change is made, it examines the Virtual DOM and pinpoints exactly which tree nodes and components need to be updated.",
    p4: "With just a small change in the DOM, the tree can be updated quickly and efficiently. This saves developers a ton of time and makes the application remarkably fast and responsive.",
  },
  {
    heading: "5)JSX increases the performance and efficiency of ReactJS",
    p1: "JSX or JavaScript XML is a syntax extension for JavaScript. Facebook developed it to extend the functionalities of HTML structures into JavaScript. With JSX, there is no requirement for separate HTML and JS codes.",
    p2: "You can use the declarative HTML syntax directly in JavaScript code with ReactJS. Browsers decode HTML documents to display the UI.",
    p3: "They do so by creating DOM trees, and JavaScript enables us to modify this DOM to create interactive UI. JSX increases the efficiency of manipulating DOMs by manifolds.",
    p4: "Developers can pass HTML and ReactJS elements into the browser’s tree structures and write clean, manageable codes.",
    p5: "JSX, along with the Virtual DOM, increases the performance and efficiency of ReactJS apps. JSX can be used with other frameworks and libraries too.",
  },
  {
    heading:
      "6)Efficient Debugging and Error-checking With Unidirectional Data Flow",
    p1: "In React, information inherited from a parent component is called props. Props are immutable objects whose values can not be modified by the child components due to the unidirectional flow of data in React.",
    p2: "The downward directional binding makes the code stable and consistent as any child components’ changes won’t affect the siblings or parent components. To modify an object, you just have to update the state. ReactJS will automatically alter the valid details to maintain consistency.",
    p3: "Debugging and error-checking are much more efficient in React due to the unidirectional data binding providing higher control over data access of components.",
    p4: "It is, however, necessary to ensure that important values that need to be accessible and modifiable by a lot of components are declared as props in parent components to avoid access issues.",
  },
  {
    heading: "7)Redux Maintains Data Consistency Across all Components",
    p1: "Redux is another JavaScript library used by React users to extend React’s state management ability. Redux can be considered as the one official source of information for all components. It maintains data consistency across all components and keeps the View updated.",
    p2: "There is a central store in Redux where all the application data is kept. When a component takes action, Redux receives a message for state change, and Redux uses reducers to change the state in the store and propagate that change for all connected components.",
    p3: "Redux avoids the hassle of passing down props through inheritance for updating states in components. With the central store, all components can directly access all required data.",
  },
  {
    heading: "8)React Hooks",
    p1: "There was a lot of debate when React Hooks was released whether it would replace Redux. The answer- No. Hooks is an independent feature introduced in ReactJS 16.8 that enables JavaScript developers to write states and other features in function components.",
    p2: "You don’t need to deal with the complicated classes anymore. Using Hooks, you can easily manage state logic between components, colocate similar logic in a single component and share data with components without props and classes.",
    p3: "Redux and Hooks are used for optimizing different problems of React. Several developer tools such as react-redux hooks API and React’s useReducer hook will let you use both together.",
  },
];
export default reasons;

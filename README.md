1/What is JSX, and why is it used?
ans: JSX is a syntax extension for JavaScript that looks like HTML and helps keep code declarative and maintainable.

2/What is the difference between State and Props?
ans: State is data managed internally by a component and can change. Props are data passed externally to a component from its parent and are read-only.

3/What is the useState hook, and how does it work?
ans:useState is a built-in React function that lets functional components use local state. It returns a state value and a setter function calling the setter function updates the value and re-renders the component.


4/How can you share state between components in React?

ans: By lifting state up to the closest common parent component. The parent holds the state and passes both the data (state value) and the update function (setter) down to the interested children via props.

5/ How is event handling done in React?
ans: Event handling in React is similar to HTML but with key differences in syntax and underlying implementation, primarily through the use of JSX attributes, camel=case naming, and a synthetic event system.

1.Repo link: https://github.com/Muyedrahman/my-simple-project-7

2.Live Link: https://lighthearted-mooncake-8fb42e.netlify.app
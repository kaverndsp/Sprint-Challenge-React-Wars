# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    ReactJS is a library for single page applications. So instead of having to re-render an entire page when an element gets updated, it only re-renders that element and doesnt re-render the whole page. Its great when there is lots of information that can change and to have a page that continuously updates without having to half and refresh the whole page to see what updated. It looks as if its happening in real time. 

1. What does it mean to think in react?

    Seeing the entire page/application as a tree of components and how those components are connected.

1. Describe state.

    It's like attaching a watcher to  information. Whenever the information changes the "watcher"/state will update and re-render the information.

1. Describe props.

    Short for properties, it gives us an object of data that is passed from a parent.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are something that affectes something outside the scope of a function after its completed. API's as an example because they can affect the DOM while executing. We can sync these by using hooks. The effect hook will run after everything that isn't a side effect is painted to the DOM.
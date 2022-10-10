import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl text-orange-600 text-center mt-12'>Three Questions to Answer:</h2>
            <div>
                <h3 className='text-xl mt-8'>What is the purpose of React Router?</h3>
                <p className='mt-2'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route s as it changes, and it also gives you tools to update the location using Link s and the history API.</p>
            </div>
            <div>
                <h3 className='text-xl mt-8'>How does Context API work?</h3>
                <p className='mt-2'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. </p>
            </div>
            <div>
                <h3 className='text-xl mt-8'>Write about use ref</h3>
                <p className='mt-2 mb-8'>Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it.The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.Refs are a function provided by React to access the DOM element and the React element that you might have created on your own. They are used in cases where we want to change the value of a child component, without making use of props and all.</p>
            </div>
        </div>
    );
};

export default Blog;
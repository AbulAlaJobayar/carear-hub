import React from 'react';

const Blog = () => {
    return (
        <div className=' my-container'>
            <h1 className='mt-14 text-3xl font-bold text-gray-700 text-center'>Blog</h1>


            <div className='border border-gray-200 rounded-xl py-16 px-10 text-bold  text-gray-700 mt-28'>
                <h1 className='text-2xl text-gray-700 font-bold'>No 1: when should you use context api ?</h1>
                <p className='text-lg '>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>
            <div className='border border-gray-200 rounded-xl py-16 px-10 text-bold  text-gray-700 mt-28'>
                <h1 className='text-2xl text-gray-700 font-bold'> No 2: What is Custom Hook?</h1>
                <p className='text-lg '>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. <br /></p>
            </div>
            <div className='border border-gray-200 rounded-xl py-16 px-10 text-bold  text-gray-700 mt-28'>
                <h1 className='text-2xl text-gray-700 font-bold'> No 3: UseRef Hook</h1>
                <p className='text-2xl mt-4'>Introduction</p>
                <p className='text-lg mt-2'>Among the various JavaScript libraries and frameworks, React is recognized for its developer friendliness and support.

                    Most developers find React very comfortable and scalable because of its provision of hooks. Hooks are built-in APIs that come with React and allow developers to interact with React state and lifecycle features in React. Hooks do not work inside classes, so they can only be used inside functional components. Developers can also decide to create custom hooks.

                    React allows for developer discretion, and more so than most UI libraries, it enables you to rethink the standard approach to designing UI components, such as by creating views using React and JSX's abstraction mechanism rather than the typical DOM specification. <br /></p>
                <p className='text-2xl mt-4'>What is useRef?</p>
                <p className='text-xl mt-4'>
                    One of the various hooks included in React is the useRef hook; it is used to reference an object inside a functional component and preserves the referenced object's state between re-renders.

                    useRef has a property called "current" used to retrieve the value of the referenced object at any time while also accepting an initial value as an argument. You can change the value of a referenced object by updating the current value.
                </p>
            </div>
            <div className='border border-gray-200 rounded-xl py-16 px-10 text-bold  text-gray-700 mt-28'>
                <h1 className='text-2xl text-gray-700 font-bold'> No 4: React useMemo Hook</h1>
                <p className='text-2xl mt-4'>Introduction</p>
                <p className='text-xl mt-2'>With the release of React 16.8, there are many useful hooks you can now use in your React applications. One of the built-in Hooks that was introduced in 16.8 is useMemo. This hook has the potential to improve performance in your application.

                    This article will explore how re-rendering works in React, why that is an important consideration for React applications, and how the useMemo hook can leverage it to create a performance boost in your applications. You will also learn when useMemo can cause performance issues.</p>
                <p className='text-2xl mt-4'>Understanding Memoization ...</p>
                <p className='text-xl mt-2'>
                    Memoization is an optimization technique that passes a complex function to be memoized. In memoization, the result is “remembered” when the same parameters are passed-in subsequently.

                    If we have a function compute 1 + 1, it will return 2. But if it uses memoization, the next time we run 1’s through the function, it won’t add them up; it will just remember the answer is 2 without executing the adding function.
                    useMemo takes in a function and an array of dependencies.
                    The dependencies act similar to arguments in a function. The dependency’s list are the elements useMemo watches: if there are no changes, the function result will stay the same. Otherwise, it will re-run the function. If they don’t change, it doesn’t matter if our entire component re-renders, the function won’t re-run but instead return the stored result. This can be optimal if the wrapped function is large and expensive. That is the primary use for useMemo.
                </p>
                <p className='text-2xl mt-2'>When to Use?</p>
                <p className='text-xl mt-2'>Write the code first and then revisit it to see if you can optimize it. If you implement useMemo too often in an application, it can harm the performance.

                    When looking to implement useMemo, you can check with profiling tools to identify expensive performance issues. Expensive means it is using up a lot of resources (like memory). If you are defining a good number of variables in a function at render, it makes sense to memoize with useMemo.</p>
            </div>
        </div>
    );
};

export default Blog;
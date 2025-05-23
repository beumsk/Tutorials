// REACT - Javascript Library - by Beumsk



/**/



// REACT FRAMEWORKS

// create-react-app -> 1st party; simple and basic; it is opinionated; many dependencies that could be useless
// next.js -> ssr or ssg; very fast; integrates best with Vercel hosting which costs
// gatsby -> very fast; plugins and themes available; hard to migrate; official gatsby hosting costs
// blitz -> not very established; good doc but not for migration; fast even with API query; needs a server (except on Vercel)
// redwood -> not very established; JAM stack; tricky migration; deploy everywhere; meant to be serverless
// remix -> very recent




// start a new react project with a builder
create-react-app project-name
create-react-app project-name --template typescript // to have typescript set up
npm start




// FUNCTIONAL COMPONENTS
// state, ref and lyfecycle arrived in react v16.8 with hooks
// still can't use componentDidError and getSnapshotBeforeUpdate

// React Components
const FunctionalComponent() {
  return <h1>Hello world</h1>;
};
const FunctionalComponent = () => (
  <h1>Hello world</h1>;
);



// React Component multiline
const FunctionalComponent() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>How you doing?</p>
    </div>
  );
}
const FunctionalComponent = () => (
  <div>
    <h1>Hello world</h1>
    <p>How you doing?</p>
  </div>
);


// Render Component
import React from "react";
const FunctionalComponent = () => { return <h1>Hello world</h1>; };
ReactDOM.render(<FunctionalComponent />, document.getElementById('app'));
// OR
import React from "react";
const FunctionalComponent = () => { return <h1>Hello world</h1>; };
export default FunctionalComponent;
// OR
import React from "react";
export default function FunctionalComponent() { return <h1>Hello world</h1>; };


// Pay attention to the export method !!! 
export default function ComponentName() {};
import ComponentName from './path';

const ComponentName = () => {};
export default ComponentName;
import ComponentName from './path';

export function ComponentName() {};
import { ComponentName } from './path';

export const ComponentName = () => {};
import { ComponentName } from './path';


// PROPS
import PropTypes from 'prop-types'; // needs 'npm install prop-types'
const FunctionalComponent = (props) => {
 return <h1>Hello, {props.name}</h1>;
};
// OR
const FunctionalComponent = ({ name }) => {
 return <h1>Hello, {name}</h1>;
};
// OR
const FunctionalComponent = ({ name, ...props }) => {
 return <h1>Hello, {name} {props.surname}</h1>;
};
// prop types arrayOf(number), objectOf(string)) -> https://reactjs.org/docs/typechecking-with-proptypes.html
FunctionalComponent.propTypes = { 
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  fun: PropTypes.bool,
  arr: PropTypes.array,
  obj: PropTypes.obj,
  el: PropTypes.element,
  one: PropTypes.oneOf([number, string])
};
// default props
FunctionalComponent.defaultProps = { age: 16 };
<FunctionalComponent name="John" age={25} fun={true} arr={[1, 2]} obj={{yes: 'no'}} el={<AnotherComponent />} one={1} />


// PROPS FROM PARENT TO CHILD
import { ChildComponent } from './ChildComponent';
const ParentComponent = () => {
 return <ChildComponent name="John" />;
};
export const ChildComponent = ({ name, ...props }) => {
 return <h1>Hello, {name}</h1>
};


// PROPS FROM CHILD TO PARENT
import { ChildComponent } from './ChildComponent';
const ParentComponent = () => {
  const getFromChild = (data) => {
    console.log(data);
  }
 return <ChildComponent func={getFromChild} />;
};
export const ChildComponent = ({ func, ...props }) => {
  func('This is data')
  return <></>
};


// STATE HOOK
import { useState } from 'react';
const FunctionalComponent = () => {
 const [count, setCount] = useState(0);
 return (
   <div>
     <p>count: {count}</p>
     <button onClick={() => setCount(count + 1)}>+</button>
     {/* better way to use current state */}
     <button onClick={() => setCount(curr => curr + 1)}>+</button>
   </div>
 );
};
// OR conditional rendering based on state
const FunctionalComponent = () => {
 const [show, setShow] = useState(false);
 return (
   <div>
     <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
     {show && <p>{show ? `Ì'm visible` : `Ì'm not visible`}</p>}
   </div>
 );
};


// EFFECT HOOK
import { useEffect } from 'react';
const FunctionalComponent = () => {
  // On Mounting
  useEffect( () => console.log("mount"), [] );
  // update specific data
  useEffect( () => console.log("will update data"), [ data ] );
  // update all
  useEffect( () => console.log("will update any") );
  // update specific data on unmount
  useEffect( () => () => console.log("will update data on unmount"), [ data ] );
  // On Unmounting
  useEffect( () => () => console.log("unmount"), [] );
  // updated data returned
  return <h1>{data}</h1>;
};

// skip first render with useEffect
import { useEffect, useRef } from 'react';
const FunctionalComponent = () => {
  // useref to avoid wasted renders
  const notInitialRender = useRef(false)
  useEffect(() => {
    if (notInitialRender.current) {
      // do your magic here
    } else {
      notInitialRender.current = true
    }
  }, [data])
  return <h1>{data}</h1>;
}



// REF HOOK
import { useRef } from 'react';
const FunctionalComponent = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}



// REDUCER HOOK
// useReducer instead of useState for complex state logic
import { useReducer } from 'react';
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
const FunctionalComponent = () => {
 const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <div>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
  );
};


// MEMO HOOK
// lets you cache the result of a calculation between re-renders.
import { useMemo } from 'react';
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b), 
  [a, b]
);



// CALLBACK HOOK
// lets you cache a function definition between re-renders.
import { useCallback } from 'react';
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);



// CONTEXT HOOK
// very useful to pass data deep in the tree
import { createContext, useState } from 'react';
export const CountContext = createContext();
const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{setCount, count}}>
      <ChildComponent />
    </CountContext.Provider>
  )
}

import { useContext } from 'react';
import { CountContext } from './FunctionalComponent';
const ChildComponent = () => {
  const {setCount, count} = useContext(CountContext);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}



// ID HOOK
// very useful to have unique IDs generated for similar elements
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>The password should contain at least 18 characters</p>
    </>
  );
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
}





// PORTAL
// creates node out of parent; body or anywhere else
import { useState } from 'react';
import { createPortal } from 'react-dom';
export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Open modal</button>
      {showModal &&
        createPortal(
          <div className="modal">
            <h2>Modal title</h2>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>,
          document.body
        )}
    </>
  );
}




// EVENTS
const EventComponents = () => (
  <>
    <button onCLick={}>btn</button>
    <button onContextMenu={}>btn</button>
    <button onDoubleClick={}>btn</button>
    <button onMouseOver={}>btn</button>
    <button onMouseOut={}>btn</button>
    <button onChange={}>btn</button>
    <button onSubmit={}>btn</button>
    <button onFocus={}>btn</button>
    <button onBlur={}>btn</button>
    <button onKeyDown={}>btn</button>
    <button onKeyPress={}>btn</button>
    <button onKeyUp={}>btn</button>
    <button onCopy={}>btn</button>
    <button onCut={}>btn</button>
    <button onPaste={}>btn</button>
  {/* and many more -> https://reactjs.org/docs/events.html */}
  </>
)




// FORMS (controlled, react manage the state of the form)
import { useState } from 'react';
const ControlledInput = () => {
  const [input, setInput] = useState('');
  const [textarea, setTextarea] = useState('');
  const [select, setSelect] = useState(1);
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState(false);
  const [radioString, setRadioString] = useState('');
  function handleChange(e) {
    setInput(() => e.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="input">Name:</label>
        <input id="input" type="text" name="name" value={input} onChange={handleChange} />
        {/* external OR inline onChange function */}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} />
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
        <input type="checkbox" checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} />
        <input type="radio" checked={radio} onChange={(e) => setRadio(e.target.checked)} />
        <input type="radio" checked={radio} value="radio-string" onChange={(e) => setRadioString(e.target.value)} />
      </form>
      <p>Input value: {input}</p>
      <p>Textarea value: {textarea}</p>
      <p>Select value: {select}</p>
      <p>Checkbox value: {checkbox.toString()}</p>
      <p>Radio value: {radio.toString()}</p>
    </div>
  )
};


// FORMS (simplified state)
import { useState } from 'react';
const ControlledInput = () => {
  const [form, setForm] = useState({
    name: "John",
    surname: "Doe",
    desc: "Newbie dev"
  });
  function handleChange(e) {
    setForm((curr) => ({...curr, [e.target.name]: e.target.value}));
  }
  return (
    <div>
      <form>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <input type="text" name="surname" value={form.surname} onChange={handleChange} />
        <textarea name="desc" value={form.desc} onChange={handleChange} />
      </form>
      <p>Name: {form.name}</p>
      <p>Surname: {form.surname}</p>
      <p>Desc: {form.desc}</p>
    </div>
  )
};


// 'react-hook-form' to build forms faster (uncrontrolled forms & more performance)
import { useForm } from "react-hook-form";
function ReactHookForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}


// 'formik' to build forms faster (controlled forms)
import { Formik, Field, Form } from "formik";
function FormikForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Field name="name" type="text" />
        <Field name="email" type="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}


// 'yup' helps with validation
import * as yup from 'yup';
const schema = Yup.object().shape({
  name: yup.string().min(2, 'Too short').required('Required'),
  email: yup.string().email('Invalid email').required('Required')
});


// FORM (uncrontolled, DOM manage the form)
import React, { useRef, useState } from "react";
const UncontrolledInput = () => {
  const fileInput = useRef("");
  const [fileName, setFileName] = useState("");
  const func = () => {
    setFileName(fileInput.current.value);
  };
  return (
    <>
      <input type="file" ref={fileInput} />
      <button onClick={func}>Upload file</button>
      {fileName && <p>You uploaded {fileName}</p>}
    </>
  );
};




// ERROR BOUNDARIES
// https://reactjs.org/docs/error-boundaries.html




// HANDLING ERRORS and async
import { useEffect, useState } from 'react';
const FunctionalComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  // fake data fetching
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    async function delayFunc() {
      try {
        // fetch data
        await delay(2000);
        setIsLoading(false);
        setData(["waw"]);
      }
      catch (e) {
        setIsLoading(false);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  if (error) return <p>Loading failed: {error}</p>
  if (isLoading) return <p>Loading...</p>
  return (
    <p>{data}</p>
  )
}




// ROUTING with react router dom !!very much different in V6

// install react-router-dom (yarn or npm)

// V6 basics
import { BrowserRouter, Routes, Route } from "react-router-dom";
const FunctionalComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blog">
            <Route path=":id" element={<BlogPost />} />
            <Route index element={<Blog />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>,
  )
}

// V5 basics
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import different page components
const FunctionalComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:title">
          <BlogPost />
        </Route>
        <Route >
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

// Link and NavLink
import { Link, NavLink } from 'react-router-dom';
const FunctionalComponent = () => {
  return (
    <nav>
      <NavLink to="/" style={isActive => ({color: isActive ? 'red' : ''})}>Home</NavLink>
      <Link to="/">Blog</Link>
    </nav>
  )
};

// navigate
import ( useNavigate ) from 'react-router-dom';
const navigate = useNavigate();
const FunctionalComponent = () => {
  return (
    <>
      <button onClick={() => navigate('/')}>Go Root</button>
      {/* navigate and pass data */}
      <button onClick={() => navigate('/', {data: {title: 'test'}})}>Go Root with title data</button>
    </>
  )
};

// history !stop using in V6! -> useNavigate
import ( useHistory ) from 'react-router-dom';
const FunctionalComponent = () => {
  const history = useHistory();
  return (
    <>
      <button onClick={history.push('/')}>Go Root</button>
      <button onClick={history.goBack()}>Go Back</button>
      <button onClick={history.goForward()}>Go Forward</button>
      <button onClick={history.go(-2)}>Go Back 2</button>
    </>
  )
};

// location; you can check current path or query params
import { useLocation } from 'react-router-dom';
const { pathname, search } = useLocation();
const queryParams = new URLSearchParams(search);
const FunctionalComponent = () => {
  return (
    <>
      {/* assuming we are on /blog?sort=inverted */}
      <p>Pathname: {pathname}</p>
      {pathname === 'blog' && <p>You are on blog page</p>} {/* conditional based on path */}
      <p>Query params: {queryParams.get('sort')}</p>
    </>
  )
};

// params from the navigation
import ( useParams ) from 'react-router-dom';
const { blogPost } = useParams(); // assuming we are in a <Route>: /blog/:blogPost
const FunctionalComponent = () => {
  return <p>{blogPost}</p> // /blog/test will render 'test'
};




// API CALLS

// external file with logic (./services/productService)
const baseUrl = process.env.REACT_APP_API_BASE_URL; // local url eg: http://localhost:3001/ or prod url eg: https://remybeumier.be
export async function getProducts(category) {
  const response = await fetch(baseUrl + 'products?category=' + category);
  if (response.ok) return response.json();
  throw response;
}
// app file
import React, { useState, useEffect } from 'react';
import { getProducts } from './services/productService';
export default function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // with promises
  useEffect(() => {
    getProducts('shoes')
      .then((response) => setProducts(response))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);
  // with async/await
  useEffect(() => {
    async function init() {
      try {
        const response = await getProducts('shoes');
        setProducts(response);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);
  return (
    <section>
      {products.map((p) => (
        <p>{p.name}</p>
      ))}
    </section>
  )
}




// API CALL WITH CUSTOM HOOK

// external custom hook
import { useState, useEffect } from 'react';
// local url eg: http://localhost:3001/ or prod url eg: https://remybeumier.be
const baseUrl = process.env.REACT_APP_API_BASE_URL;
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);
  return { data, error, loading };
}

// app file
import React, { useState } from 'react';
import useFetch from './services/useFetch';
export default function App() {
  const { data: products, loading, error, } = useFetch('products?category=shoes');
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <section>
      {products.map((p) => (
        <p>{p.name}</p>
      ))}
    </section>
  )
}



// API call with aborting fetch request
function useDataFetcher(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const abortController = new AbortController();
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
}




// STYLE inline
import React from 'react';
const StyleComponent = () => {
  return (
      <h1 style={{color: 'red', fontSize: '72px'}}>Styled Title</h1>
  );
};
export default StyleComponent;


// STYLE inline with a const
import React from 'react';
const styles = {color: 'red', fontSize: '72px'}
const StyleComponent = () => {
  return (
      <h1 style={styles}>Styled Title</h1>
  );
};


// EMOTION
import React from 'react';
import styled from '@emotion/styled';
const Box = styled.div`
  background-color: #ddd;
  color: #444;
  padding: 10px;
`;
const BoxComponent = () => {
  return (
    <div>
      <h1>Box component</h1>
      <Box>I'm a box!</Box>
    </div>
  );
};
export default BoxComponent;


// EMOTION EXTERNAL
import { forwardRef } from 'react';
import Styled from './Component.styled';
const Component = forwardRef((props, ref) => (
  <Styled.Component ref={ref} {...props}>
    Content of the <span>component</span>
    <Styled.AsBox textColor="blue" />
    <Styled.AsBox isRed />
  </Styled.Component>
));
export default Component;

import styled from '@emotion/styled';
// styled system allows fast css with props -> m="10px" will return 'margin: 10px;'
import { layout, space, typography } from 'styled-system';
import { Box } from 'components';
export default {
  Component: styled.p`
    // a theme.js is adviced for consistency
    ${(p) => `
      font-size: ${p.theme.fontSizes[2]};
      text-align: center;
      margin: ${p.theme.space[4]}px 0;
      span {
        color: ${p.theme.colors.red};
      }
    `}
    ${layout}
    ${space}
    ${typography}
  `,
  AsBox: styled(Box)`
    // AsBox will take all CSS from Box component + those defined here
    background: black;
    // will apply the value passed to textColor prop
    color: ${(p) => p.textColor};
    // these styles will apply only if component has 'isRed' prop
    ${(p) =>
      p.isRed &&
      `
      background: red;
    `}
  `
}




// TRANSLATE I18N

// npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector --save
// https://react.i18next.com/latest/using-with-hooks

// i18n.js next to index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });
export default i18n;

// update index.js with i18n import
import './i18n';

// add translation to App.js
import React, { Suspense } from 'react';
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}

// create translation files (./public/locales/en/translation.json)
{
  "text": "This text comes from translation",
  "translations": "Translations",
  "anything": "Anything",
  "withVariable": "With a variable of: {{var}}",
  "item_one": "Item",
  "item_other": "Items"
}  

// add translation to a component
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
function MyComponent() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  function changeLang(lng) {
    setLang(lng);
    i18n.changeLanguage(lng);
  }
  return (
    <div className="App">
      <h1>
        i18n {lang.toUpperCase()} {t('translations')}
      </h1>
      <h2>{t('text')}</h2>
      <p>{t('anything')}</p>
      <p>{t('withVariable', { var: 40 })}</p>
      <p>{t('item', { count: 1 })}</p>
      <p>{t('item', { count: 2 })}</p>
      <button onClick={() => changeLang('en')}>EN</button>
      <button onClick={() => changeLang('fr')}>FR</button>
    </div>
  );
}




// DEBUGGING

// add debugger anywhere to add a breakpoint
debugger;




// TESTING WITH JEST

// in package.json -> "scripts": {"test": "jest --watchAll"}
// run it with yarn test / npm run test

  // TESTING WITH REACT TESTING LIBRARY
  // https://github.com/testing-library/react-testing-library
  // npm install --save-dev @testing-library/react
  import { render, screen, fireEvent, waitFor } from '@testing-library/react';
  import userEvent from '@testing-library/user-event';
  import App from './App';
  describe('Group tests in describe', () => {
    test('Give useful names to your tests', () => {
      render(<App />); // render your component to be tested
      render(<App neededFunc={jest.fn()} />); // fake empty function to avoid errors when a function prop is required
      // queries by priority: (more: https://testing-library.com/docs/dom-testing-library/cheatsheet/#queries)
      const el = screen.getByRole('button', {name: '<button>'});
      const el = screen.getByRole('link', {name: '<a>'});
      const el = screen.getByRole('img', {name: '<img>'});
      const el = screen.getByRole('heading', {name: '<h1>'});
      const el = screen.getByRole('list', {name: '<ul><ol>'});
      const el = screen.getByRole('listitem', {name: '<li>'});
      const el = screen.getByRole('textbox', {name: '<input type="text">'});
      const el = screen.getByRole('checkbox', {name: '<input type="checkbox">'});
      const el = screen.getByRole('radio', {name: '<input type="radio">'});
      const el = screen.getByRole('spinbutton', {name: '<input type="number">'});
      const el = screen.getByRole('combobox', {name: '<select>'});
      const el = screen.getByRole('option', {name: '<option>'});
      const el = screen.getByRole('banner', {name: '<header>'});
      const el = screen.getByRole('contentinfo', {name: '<footer>'});
      // find roles with https://testing-library.com/docs/dom-testing-library/api-debugging/#logroles
      const el = screen.getByLabelText('Testing react');
      const el = screen.getByPlaceholderText('Testing react');
      const el = screen.getByText('Testing react');
      const el = screen.getByText('Testing', { exact: false });
      const el = screen.getByDisplayValue('Testing react');
      const el = screen.getByAltText('Testing react');
      const el = screen.getByTitle('Testing react');
      const el = screen.getByTestId('Testing react');
      // use get when you expect element to be in DOM
      const el = screen.getByRole('button');
      const els = screen.getAllByRole('button');
      // use query when you don't expect element to be in DOM
      const el = screen.queryByRole('button');
      const els = screen.queryAllByRole('button');
      // use find when you expect element to appear async ==> test('', async () => {})
      const el = await screen.findByRole('button');
      const els = await screen.findAllByRole('button');
      // check roles; will give error and give current roles in tested component
      screen.getByRole('blah');
      // see current state of testing DOM
      screen.debug();
      // see Testing Playground url to open in browser
      screen.logTestingPlaygroundURL();
      // jet-dom assertions https://github.com/testing-library/jest-dom#table-of-contents
      expect(const).toBe('any string'); // string or number
      expect(const).toEqual(['one', 'two']); // array or object
      expect(el).toBeInTheDocument();
      expect(el).not.toBeInTheDocument(); // use query !
      expect(el).toBeVisible();
      expect(el).toBeEnabled();
      expect(el).toBeDisabled();
      expect(el).toBeChecked();
      expect(el).not.toBeChecked();
      expect(el).toHaveTextContent(/change to red/i);
      expect(el.textContent).toBe('Testing react');
      expect(el).toHaveStyle({'background-color': 'red'});
      expect(el).toHaveClass('class-name');
      expect(el).toHaveAttribute('href', '/');
      expect(els).toHaveLength(3); // 3 elements in array
      // use waitFor to ensure elements are rendered (fetched)
      await waitFor(async () => {
        const el = await screen.findAllByRole('button');
        expect(el).toHaveLength(2);
      });
      // fire event
      fireEvent.click(el);
      // better event !needs async ==> test('', async () => {});
      const user = userEvent.setup();
      await user.click(el);
      await user.hover(el);
      await user.unhover(el);
      await user.clear(el); // input
      await user.type(el, '1'); // input; value as second argument
      await user.keyboard('{enter}'); // also {arrowleft} {arrowright} {arrowdown} {arrowup} {esc} {del} {backspace} {selectall} {space}
      // test functions (unit test)
      const func = () => 'anything';
      expect(func()).toBe('anything');
    });
    test('async test', async () => {});
    test.only('skip other tests, run only this test', () => {});
    test.skip('skip this test, run other tests', () => {});
    it('is exactly the same as test()', () => {});
  });


  // testing server features needs a mocker; one is called msw


  // work with file.test.js
  import { Component } from './Component';
  import { render, fireEvent, wait } from '@testing-library/react';
  const r = render(<Component content="Some content" title="Some title" isImportant={true} />);
  r.getByTitle('Some title');
  r.getByText('Some content');
  // better to use describe
  describe('Component', () => {
    describe('render', () => {
      it('should return a container', () => {
        const { container } = render(
          <Component />
        );
        expect(container).toBeDefined();
      });
      it('should display the correct date', () => {
        // needs the component to have a data-testid="title" defined (value can be anything you want)
        const { getByTestId } = render(
          <Component>
            <h1 data-testid="title">Some title</h1>
          </Component>
        );
        const title = getByTestId('title');
        expect(title).toHaveTextContent('Some title');
      });
      // expect().toHaveValue()

      // SNAPSHOT TESTING
      it('should not change', () => {
        const { getByTestId } = render(
          <Component>
            <h1 data-testid="title">Some title</h1>
          </Component>
        );
        const title = getByTestId('title').toJSON();
        expect(title).toMatchSnapshot();
      });

      // EVENT TESTING
      it('should increment on click', () => {
        const { queryByTestId } = render(
          <Component>
            <h1 data-testid="title">0</h1>
          </Component>
        );
        const title = getByTestId('title');
        fireEvent.click(title);
        expect(title.textContent).toBe('1');
        fireEvent.click(title);
        expect(title.textContent).toBe('2');
      });

      // ASYNC TESTING
      it('should increment on click', async () => {
        const { queryByTestId } = render(
          <Component>
            <h1 data-testid="title">0</h1>
          </Component>
        );
        const title = getByTestId('title');
        fireEvent.click(title);
        await wait(() => {
          expect(title.textContent).toBe('1');
        });
      });
    });

    // EVENT MOCKS
    describe('change', () => {
      it('Should publish the typed text', () => {
        const fn = jest.fn();
        const { getByTestId } = render(
          <Input data-testid="input" onChange={fn} />
        );
        const input = getByTestId("input");
        fireEvent.change(input, { target: { value: 'John' }});
        expect(fn.mock.calls).toEqual(['John']);
      });
    });

    // USEEFFECT HOOK TESTING (possible to mock a hook)
    describe('image from useEffect and async', () => {
      it('should render an image with a url', async () => {
        const { queryByTestId } = render(
          <Component>
            <Image data-testid="image" alt="image"/>
          </Component>
        );
        await wait(() => {
          const image = getByTestId('image');
          expect(image.src).toMatch(/http/);
        });
      });
    });
  });



  // TESTING WITH REACT TESTING LIBRARY alternatively
  import React from 'react';
  import { render } from '@testing-library/react';
  import Component from './Component';
  // helping func to avoid extra typing
  function renderComponent(args) {
    let defaultProps = {
      saving: false,
      errors: {},
      onSave: () => {},
      onChange: () => {},
    };
    const props = { ...defaultProps, ...args };
    return render(<Component {...props} />);
  }
  // concise testing without the need to use expect()
  it('should render Add Course header', () => {
    const { getByText } = renderComponent();
    getByText('Add Course');
  });
  it('should label save button as "Save" when not saving', () => {
    const { getByText } = renderComponent();
    getByText('Save');
  });
  it('should label save button as "Saving..." when saving', () => {
    const { getByText, debug } = renderComponent({ saving: true });
    // prints compmonent in terminal
    debug();
    getByText('Saving...');
  });




  // TESTING without external library
  // very verbose...
  // work with file.render.test.js
  import { Component } from './Component';
  describe('Component', () => {
    it('should always render a message', () => {
      const notImportantMessage = Message({
        content: "I am text inside Component",
        isImportant: false
      });
      expect(notImportantMessage.props.children.props.children)
        .toBe('I am text inside Component');
      const importantMessage = Message({
        content: "I am text inside Component",
        isImportant: true
      });
      expect(importantMessage.props.children.props.children)
        .toBe('I am text inside Component');
    });
    it('should make important message strong', () => {
      const importantMessage = Message({
        content: "I am text inside Component",
        isImportant: true
      });
      expect(importantMessage.props.children.type).toBe('strong');
    });
    it('should not make not important message strong', () => {
      const notImportantMessage = Message({
        content: "I am text inside Component",
        isImportant: false
      });
      expect(notImportantMessage.props.children.type).not.toBe('strong');
    });
  });



  // TESTING WITH REACT TEST UTILS
  import ReactTestUtils from 'react-dom/test-utils';
  import { Component } from './Component';
  describe('Component', () => {
    describe('rendering', () => {
      let container, title;
      beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactTestUtils.act(()=>{
          ReactDOM.render(<Component />, container);
        });
        title = container.querySelector('title');
      });
      afterEach(() => {
        document.body.removeChild(container);
        container = null;
      });
      it("should render a title element", () => {
          expect(title).toBeDefined();
      });
    });
  });



  // TESTING WITH ENZYME
  import React from 'react';
  import { Component } from './Component';
  import { shallow } from 'enzyme';
  // helping func to avoid extra typing
  function renderComponent(args) {
    const defaultProps = {
      saving: false,
      errors: {},
      onSave: () => {},
      onChange: () => {},
    };
    const props = { ...defaultProps, ...args };
    return shallow(<Component {...props} />);
  }
  it('renders form and header', () => {
    const wrapper = renderComponent();
    // see the whole component in the terminal
    console.log(wrapper.debug());
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h2').text()).toEqual('Add Course');
  });
  it('labels save buttons as "save" when not saving', () => {
    const wrapper = renderComponent();
    expect(wrapper.find('button').text()).toBe('Save');
  });
  // test passing props to component
  it('labels save buttons as "save" when not saving', () => {
    const wrapper = renderComponent({ saving: true });
    expect(wrapper.find('button').text()).toBe('Saving...');
  });




  // ENZYME SHALLOW vs MOUNT
  import React from 'react';
  import Header from './Header';
  import { mount, shallow } from 'enzyme';
  // MemoryRouter is needed for mount
  import { MemoryRouter } from 'react-router-dom';
  // shallow to test one component in isolation
  it('contains 3 NavLinks via shallow', () => {
    const numLinks = shallow(<Header />).find('NavLink').length;
    expect(numLinks).toEqual(3);
  });
  // mount to test more realistically with component and children
  it('contains 3 anchors via mount', () => {
    const numAnchors = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ).find('a').length;
    expect(numAnchors).toEqual(3);
  });





// TESTING VISUAL WITH STORYBOOK
// npx -p @storybook/cli sb init 
// npm run storybook
// work with file.stories.js




// TYPESCRIPT IN REACT

// install easy with create-react-app
// create-react-app project-name --template typescript

// or later on with npm
// npm install typescript @types/react @types/react-dom @types/node

// some library need to have a special tsx install
// react-router-dom needs npm install @types/react-router-dom

// work in .tsx files; you can change files one at a time
// test Typescript live -> https://www.typescriptlang.org/play 
// nice source -> https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

// @ts-ignore -> ignore next line ts errors
// @ts-nocheck -> ignore file ts errors


// class comp into typescript; respect this order <Props, State>
class TypescriptComponent extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  state = { hasError: false };
  render() {
    if (this.state.hasError) return <p>Something went wrong</p>
    return this.props.children
  }
}


// function comp into typescript
function TypescriptComponent(props: {
  title: string;
  id: number;
  hidden?: boolean;
}) {
  return <p key={props.id} hidden={props.hidden}>{props.title}</p>
}
// <TypescriptComponent title="title" id={1} hidden />

// array of object prop into typescript
function TypescriptComponent(props: {
  data: {
    title: string;
    intro: string;
  }[];
}) {
  return <p onClick={props.someFunc(props[0].title)}>{props[0].title}</p>
}
// <TypescriptComponent data={ [{title: 'title', intro: 'intro'}] } />

// function prop into typescript
function TypescriptComponent(props: {
  title: string;
  someFunc: () => void;
}) {
  return <p onClick={() => props.someFunc(props.title)}>{props.title}</p>
}
// <TypescriptComponent title="title" someFunc={() => console.log('duh') } />

// children prop into typescript
function TypescriptComponent({ children }: {children: React.ReactNode}) {
  return <p>{children}</p>
}

// logic can also be extracted with interface {}
interface Props { children: React.ReactNode }
function TypescriptComponent({ children }: Props) {
  return <p>{children}</p>
}
// or
const TypescriptComponent = ({ children }: Props) => {
  return <p>{children}</p>
}
// or
const TypescriptComponent: React.FC<Props> = ({ children }) => {
  return <p>{children}</p>
}

// interface is useful with complex typescript object
interface ComplexProp {
  title: string;
  data: {
    id: number;
    name: string;
  }[];
  optionalData?: [];
  twoTypes: string | number;
  func: (param: string) => string;
}
function TypescriptComponent(props: ComplexProp) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.data.map(x => <p key={x.id}>{x.name}, {x.twoTypes}</p>)}
      <button onClick={() => props.func("Hello")}></button>
    </>
  )
}


// typing style prop
import React, { ReactNode, CSSProperties } from 'react';
type ButtonProps = {
  style?: CSSProperties;
  children: ReactNode;
};
function Button({ style, children }: ButtonProps) {
  return <button style={style}>{children}</button>;
}


// typing rest props
interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}
function InputGroup({ label, ...rest }: InputGroupProps) {
  return (
    <label>
      {label}:
      <input {...rest} />
    </label>
  );
}


// typing react events
function EventComponent() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }
  return <button onClick={handleClick}>Click</button>
}

function EventComponent() {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }
  return <input type="text" onChange={handleChange} />
}

function EventComponent() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>, prevent: boolean) {
    if (prevent) {e.preventDefault();}
  }
  return <button onClick={(e) => handleClick(e, true)}>Click</button>
}


// typing react state
function TypescriptComponent() {
  const [value, setValue] = useState<number>(0);
  return <p onClick={() => setValue(value + 1)}>{value}</p>
}

function TypescriptComponent() {
  const [text, setText] = useState<string | null>(null);
  return <p onClick={() => setText('Hello')}>{text}</p>
}


// typing react ref
function TypescriptComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  return <input type="text" ref={inputRef} />
}




// REDUX
// handy alternative to useReducer or Flux
// single store, immutable, action
// use Redux devtool !

// Redux initial setup
// 0. create action types (/redux/actionTypes.js)
export const ADD = "ADD";

// 1. Create action (/redux/actions/messageActions.js)
import { ADD } from "../actionTypes";
export function addMessage(message) {
  return { type: ADD, message: message };
}

// 2. Create reducer (/redux/reducers/messageReducer.js)
import { ADD } from "../actionTypes";
const initialState = [];
export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}

// 3. Create root reducer (/redux/reducers/index.js)
import { combineReducers } from "redux";
import messages from "./messagesReducer";
export default combineReducers({
  messages: messages
});

// 4. Configure store (/redux/store.js)
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}

// 5. Instantiate store (index.js)
import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './components/App';
import configureStore from './redux/configureStore';
render(
  <ReduxProvider store={configureStore()}>
    <App />
  </ReduxProvider>,
  document.getElementById('app')
);

// 6. Connect component && Pass props via connect && Dispatch action (/AnyComponent.js)
import React, { useState } from "react";
import { connect } from "react-redux";
import { addMessage } from "./redux/actions/messageActions"; // path to adapt
function App(props) {
  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  };
  function submitMessage(e) {
    e.preventDefault();
    if (input.length > 0) {
      props.submitNewMessage(input);
      setInput("");
    }
  };
  return (
    <div>
      <h2>Type in a new Message:</h2>
      <form onSubmit={submitMessage}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="New message..."
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {props.messages.length > 0 &&
          props.messages.map((message) => {
            return <li key={message}>{message}</li>;
          })}
      </ul>
    </div>
  );
}
function mapStateToProps(state) {
  return { messages: state.messages };
};
function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);



// SINGLE FILE BASIC REDUX
import React from 'react';
import { createStore } from "redux";
import { connect } from "react-redux";
import { Provider as ReduxProvider } from "react-redux";
// action type
const ADD = 'ADD';
// action
const addMessage = (message) => {
  return { type: ADD, message: message }
};
// reducer
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};
// component
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// getting state from redux into props
const mapStateToProps = (state) => {
  return {messages: state}
};
// dispatching data to redux
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};
// store
const store = createStore(messageReducer);
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
class AppWrapper extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <Container/>
      </ReduxProvider>
    );
  }
};



// ASYNC IN REDUX

// 0. create action types (/redux/actionTypes.js)
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

// 1. create action (/redux/actions/todosActions.js)
import {
  GET_TODOS_SUCCESS,
  GET_TODOS_LOADING,
  GET_TODOS_ERROR
} from '../actionTypes';
export function getTodos(todos) {
  return { type: GET_TODOS_SUCCESS, payload: todos };
}
export function loadingTodos() {
  return { type: GET_TODOS_LOADING };
}
export function errorTodos(error) {
  return { type: GET_TODOS_ERROR, payload: error };
}
export function fetchTodos() {
  return function (dispatch) {
    dispatch(loadingTodos());
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      // .then((x) => new Promise((resolve) => setTimeout(() => resolve(x), 1000)))
      .then((todos) => {
        dispatch(getTodos(todos));
      })
      .catch((error) => {
        dispatch(errorTodos(error.message));
      });
  };
}

// 2. create reducer (/redux/reducers/todosReducer.js)
import {
  GET_TODOS_SUCCESS,
  GET_TODOS_LOADING,
  GET_TODOS_ERROR
} from '../actionTypes';
const initialState = { loading: false, todos: [], error: '' };
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_LOADING:
      return { ...state, loading: true };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: ''
      };
    case GET_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// 3. Create root reducer (/redux/reducers/index.js)
import { combineReducers } from "redux";
import messages from "./todosReducer";
export default combineReducers({
  messages: messages
});

// 4. configure store (/redux/store.js)
import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}

// 5. Instantiate store (index.js)
import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './components/App';
import configureStore from './redux/configureStore';
render(
  <ReduxProvider store={configureStore()}>
    <App />
  </ReduxProvider>,
  document.getElementById('app')
);

// 6. Connect component && Pass props via connect && Dispatch action (/AnyComponent.js)
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from './redux/actions/todosActions'; // path to adapt
function App(props) {
  const { todos, error, loading } = props.todosData;
  useEffect(() => {
    props.fetchTodos();
  }, []);
  return (
    <div>
      <h2>Todos from API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {todos.length > 0 &&
              todos.map((todo) => {
                return <li key={todo.id}>{todo.title}</li>;
              })}
          </ul>
          {error && <p>{error}</p>}
        </>
      )}
    </div>
  );
}
function mapStateToProps(state) {
  return { todosData: state.todos };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);




// TESTING REDUX

// testing connected react component
import React from 'react';
import { mount } from 'enzyme';
import { authors, newCourse, courses } from '../../../tools/mockData';
import { ManageCoursePage } from './ManageCoursePage';
function render(args) {
  const defaultProps = {
    authors,
    courses,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {},
  };
  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursePage {...props} />);
}
it('sets error when attempting to save an empty title field', () => {
  const wrapper = render();
  wrapper.find('form').simulate('submit');
  const error = wrapper.find('.alert').first();
  expect(error.text()).toBe('Title is required.');
});


// testing action creators; maybe not useful if we test the store
import * as courseActions from './courseActions';
import * as types from './actionTypes';
import { courses } from '../../../tools/mockData';
describe('createCourseSuccess', () => {
  it('should create a CREATE_COURSE_SUCCESS action', () => {
    //arrange
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course,
    };
    //act
    const action = courseActions.createCourseSuccess(course);
    //assert
    expect(action).toEqual(expectedAction);
  });
});


// testing thunks
import * as courseActions from './courseActions';
import * as types from './actionTypes';
import { courses } from '../../../tools/mockData';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  describe('Load Courses Thunk', () => {
    it('should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses', () => {
      fetchMock.mock('*', {
        body: courses,
        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_COURSES_SUCCESS, courses },
      ];

      const store = mockStore({ courses: [] });
      return store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});


// testing reducers
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';
it('should add course when passed CREATE_COURSE_SUCCESS', () => {
  // arrange
  const initialState = [
    {
      title: 'A',
    },
    {
      title: 'B',
    },
  ];
  const newCourse = {
    title: 'C',
  };
  const action = actions.createCourseSuccess(newCourse);
  // act
  const newState = courseReducer(initialState, action);
  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual('A');
  expect(newState[1].title).toEqual('B');
  expect(newState[2].title).toEqual('C');
});


// testing the store
import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";
it("Should handle creating courses", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean Code"
  };
  // act
  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);
  // assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});




// AXIOS
// get rid of JSON methods as it is handled by axios
// npm install axios

const url = 'http://localhost:3333/some';
// GET
// Fetch way
async function getSomeFetch() {
  await fetch(url, {method: 'GET', /*params*/})
}
// Axios way
async function getSomeAxios() {
  await axios.get(url, {/*params*/})
}

// POST
// Fetch way
async function postSomeFetch(id) {
  await fetch(url, {method: 'POST', body: JSON.stringify({id: id}), /*params*/})
}
// Axios way
async function postSomeAxios(id) {
  await axios.post(url, { id: id }, {/*params*/})
}

// DELETE
// Fetch way
async function deleteSomeFetch(id) {
  await fetch(url, {method: 'DELETE', body: JSON.stringify({id: id}), /*params*/})
}
// Axios way
async function deleteSomeAxios(id) {
  await axios.delete(url, {data: { id: id }, /*params*/})
}

// PATCH
// Fetch way
async function patchSomeFetch(id, quantity) {
  await fetch(url, {method: 'PATCH', body: JSON.stringify({id: id, quantity: quantity}), /*params*/})
}
// Axios way
async function patchSomeAxios(id, quantity) {
  await axios.patch(url, { id: id, quantity: quantity }, {/*params*/})
}




// REACT-QUERY
// npm install react-query

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}
function Example() {
 const { isLoading, error, data } = useQuery('repoData', () =>
   fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
     res.json()
   )
 )
 if (isLoading) return 'Loading...'
 if (error) return 'An error has occurred: ' + error.message
 return (
   <div>
     <h1>{data.name}</h1>
     <p>{data.description}</p>
     <strong>👀 {data.subscribers_count} </strong>
     <strong>✨ {data.stargazers_count} </strong>
     <strong>🍴 {data.forks_count} </strong>
   </div>
 )
}




// SWR: Stale While Revalidating
// cleaner and shorter way
// npm install swr

const fetcher = (...args) => fetch(...args).then(res => res.json());
import useSWR from 'swr'
function Profile () {
  const { data, error } = useSWR('/api/user/123', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  // render data
  return <div>hello {data.name}!</div>
}




// OPTIMIZE PERFORMANCE

// use react profiler from react dev tools to find and optimize perf

// Preventing wasted renders
import React from 'react';
// React.Component becomes React.PureComponent
export class PureComponent extends React.PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick}>Add</button>
    )
  }
}
import React, { useState, useCallback } from 'react';
function App() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  // function must be memoized with useCallback
  const showDialog = useCallback(() => setIsAddOpen(true), []);
  return (
    <PureComponent onClick={showDialog} />
  )
}
// OR with functional component
export const PureComponent = React.memo(({ onClick }) => {
  return (
    <button onClick={onClick}>Add</button>
  )
});
// OR naming the func comp (and avoid anonymous function)
export const PureComponent = React.memo(function AddButton({ onClick }) {
  return (
    <button onClick={onClick}>Add</button>
  )
});

// Preventing wasted renders in complex components
// make sure to work with immutable data
export class Summary extends React.Component {
  shouldComponentUpdate(nextProps) {
    const oldKeys = Object.keys(this.props.cards);
    const newKeys = Object.keys(nextProps.cards);
    return oldKeys.length !== newKeys.length;
  }
  render() {
    const cards = Object.values(this.props.cards);
    return (
      <div>You have {Object.keys(this.props.cards).length} cards!</div>
    );
  }
}
// OR with functional component
// React.memo takes a function as second argument, if false -> should re-render
export const Summary = React.memo(
  function Summary(props) {
    const cards = Object.values(props.cards);
    return (
      <div>You have {Object.keys(props.cards).length} cards!</div>
    );
  },
  (p1, p2) => Object.keys(p1.cards).length === Object.keys(p2.cards).length
);


// Caching (memoize) expensive operation results
import React, { useMemo } from 'react';
export const Summary = React.memo(
  function Summary(props) {
    const cards = Object.values(props.cards);
    const memoExpensiveFunc = useMemo(() => {
      /* very long/expensive function process */ 
    }, [Object.keys(cards).length]);
    return (
      <div>You have {Object.keys(props.cards).length} cards!</div>
    );
  },
  (p1, p2) => Object.keys(p1.cards).length === Object.keys(p2.cards).length
);


// Reducing bundle size
// make sure to build for production before pushing your repo on production environment


// Memo components
// lets you skip re-rendering a component when its props are unchanged.
import React, { memo } from 'react';
function App() {
  const MemoComponent = memo(({ name }) => {
    return <h1>Hello, {name}!</h1>;
  });
  return (
    <div>
      <MemoComponent name="Rem" />
    </div>
  )
}



// Lazy loading components
// lets you defer loading component’s code until it is rendered for the first time.
import React, { lazy, Suspense } from 'react';
function App() {
  const LazyComponent = lazy(() => import('./LazyComponent'));
  const ComponentLoader = () => <div>Loading</div>;
  return (
    <Suspense fallback={<ComponentLoader />}>
      <LazyComponent />
    </Suspense>
  )
}


// HANDLE LARGE DATA SETS

// with pagination (annoying nav buttons)
// -> x elements per page rendered and navigation to previous and next pages

// or with infinite scroll (better ui but user can feel lost and cannot share a certain 'page')
// -> x elements added to the rendered list once scrolled to bottom 

// or with windowing (height and positionning constraints and bad HTML semantics)
// -> x elements are rendered from the whole list once scrolled; the rest is unrendered




// SECURITY

// PREVENTING CROSS SITE SCRIPTING ATTACKS (XSS)

// Avoid getting URL data (such as query string) to write code directly in your page
// Every data coming from the URL is subject to attack !
// Make sure those URL data are treated as text only
// Or modified first -> replace all '<' and '>'
// JSX handles that for us making sure they are strings. see below
function Print() {
  const qs = new URLSearchParams(window.location.search);
  const bug = {
    title: decodeURIComponent(qs.get('t')),
    severity: decodeURIComponent(qs.get('s')),
    description: decodeURIComponent(qs.get('d')),
  };
  return (
    <div>
      <h1>{bug.title}</h1>
      <h3>{bug.severity}</h3>
      <p>{bug.description}</p>
    </div>
  );
}

// Links can take malicius javascript too inside href
// pay attention not to take anything from url parameters
// or add tests such as below
export function getBackUrl() {
  const qs = new URLSearchParams(window.location.search);
  const backUrl = qs.get('backUrl');
  try {
    const url = new URL(backurl);
    if (url.protocol.toLowerCase() !== 'http:') {
      backUrl = null;
    }
  } catch {
    backUrl = null;
  }
  return backUrl;
}


// SAFE DYNAMIC CONTENT RENDERING

// dangerouslySetInnerHTML warns us to be careful with the data it takes
// avoid taking input data, especially from rich text editors
// a useful tool is DOMPurify, it removes malicious code but keeps safe code
// npm install dompurify
import DOMPurify from 'dompurify';
export function SafeComponent(props) {
  // let's say this data is coming from a RTE
  const inputData = props.inputData;
  return (
    <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(inputData)}}></p>
  )
}

// DOM access with Refs or findDOMNode
// get rid of Refs if possible
// otherwise, add testing yourself


// SSR vulnerabilities -> stored XSS and reflected XSS


// JSON vulnerabilities
// replace potentially dangerous characters such as '<' and '>'
JSON.stringify(theString).replace(/</g, '\\u003c');
// or use a library such as serialize-javascript






// BASICS

// use those import everytime! They are needed in all examples
import React from "react";
import ReactDOM from "react-dom";


// write JSX elements just as HTML
const h1 = <h1>React JS</h1>;

// define element attribute just as in HTML
const a = <a href="#0">What a link!</a>;

// multiline element are possible using parenthesis ()
const ah1 = (
  <a href="#0">
    <h1>
      What a big link!
    </h1>
  </a>
);

// a JSX expression must have exactly one outermost element
// good habit is to have a <div>, or <> (<React.Fragment>, <Fragment>) wrapping everything
const blog = (
  <div>
    <h1>Main title</h1>
    <p>Subtitle</p>
  </div>
);


// render your HTML; first argument is the JSX element and the second points to the HTML where it will be rendered
// -> <div id="app"></div>
ReactDOM.render(<h1>Hello world</h1>, document.getElementById("app"));

// you can use variable of course
const myElt = <h1>Render me!</h1>;
ReactDOM.render(myElt, document.getElementById("app"));

// or create it without JSX
const myElt = React.createElement("h1", null, "Hello world");
ReactDOM.render(myElt, document.getElementById("app"));


// class property is special, contrary to HTML, JSX need it to be called className
const myDiv = <div className="big"></div>;

// self closing tags as well, they NEED the back slash
const myImg = <img src="img.jpg" />;
const myBr = <br />;

// javascript into JSX thanks to curly braces {}
const text = "The result of 2 + 3 is:";
const myJS = <p>{text + " " + 2 + 3}</p>;

// you can have comments that way
const myCom = (
  <div>
    <h1>Comment</h1>
    {/* here is a commented text */}
  </div>
);


// create event listeners
function myFunc() {
  alert("Click on this image");
}
<img onClick={myFunc} />


// if else are not possibile inside JSX --> use ternary operator
const isTrue = <p>{1 === 1 ? "true" : "false"}</p>;

// JSX conditionals; will render the HTML or not based on the left of the logical operator
const showParagraph = true;
const myDiv = (
  <div>{showParagraph && <p>I'm rendered because the const is true</p>}</div>
);
const hideParagraph = false;
const myDiv = (
  <div>{hideParagraph || <p>I'm rendered because the const is false</p>}</div>
);


// map method and JSX; React understand it needs to make a list out of the array
// use key attribute to make list item identifiable! makte each key unique and avoid index!!
const numbers = ["one", "two", "three"];
const list = numbers.map((number, i) => <li key={"number_"+i}>{number}</li>);
ReactDOM.render(<ul>{list}</ul>, document.getElementById("app"));


// filter helps with filtering maps
const numbers = [
  {n: "one", ok: true},
  {n: "twoo", ok: false},
  {n: "three", ok: true}
];
const list = numbers.filter(number => number.ok).map((numberFiltered, i) => <li key={"number_"+i}>{numberFiltered.n}</li>);
ReactDOM.render(<ul>{list}</ul>, document.getElementById("app"));



// CLASS COMPONENTS

// React Component
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
ReactDOM.render(<MyComponentClass />, document.getElementById('app'));


// React Component multiline
class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>The world is full of objects, more or less interesting; I do not wish to add any more.</p>
        <cite>Douglas Huebler</cite>
      </blockquote>
    );
  }
};
ReactDOM.render(<QuoteMaker />, document.getElementById('app'));


// React Component with variables
const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};
class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
      </div>
    );
  }
}
ReactDOM.render(<Owl />, document.getElementById('app'));


// React Component render with logic
class Random extends React.Component {
  render() {
    const n = Math.floor(Math.random() * 10 + 1);
    return <h1>The number is {n}!</h1>;
  }
}
ReactDOM.render(<Random />, document.getElementById('app'));


// conditionals in components
const fiftyFifty = Math.random() < 0.5;
class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>;
    }
    else {
      return <h1>Tonight I'm going to bed WOOO</h1>;
    }   
  }
}
ReactDOM.render(<TonightsPlan />, document.getElementById('app'));


// Components and this
class MyName extends React.Component {
  get name() {
    return 'Einstein';
  }
  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}
ReactDOM.render(<MyName />, document.getElementById('app'));


// Event listener in Component
class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }
  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}
ReactDOM.render(<Button />, document.getElementById('app'));




// COMPONENTS RENDER OTHER COMPONENTS

// Component render another component
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}
class Crazy extends React.Component {
  render() {
    return (
      <div>
        <OMG />
        <p>Amazing.</p>
      </div>
    );
  }
}


// Import a component from another file
// exported OMG class in file OMG.js
export class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}
// import OMG class from OMG.js
import { OMG } from './OMG.js';
class Crazy extends React.Component {
  render() {
    return (
      <div>
        <OMG />
        <p>Amazing.</p>
      </div>
    );
  }
}

// Pay attention to the export method !!! 
export default class ComponentName extends React.Component {};
import ComponentName from './path';

export class ComponentName extends React.Component {};
import { ComponentName } from './path';


// accurate and full example of imported component
// file NavBar.js
import React from 'react';
export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>{page}</a>
      )
    });
    return <nav>{navLinks}</nav>;
  }
}
// file ProfilePage.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';
class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
ReactDOM.render(<ProfilePage />, document.getElementById('app'));




// THIS.PROPS

// access component properties
class PropsDisplayer extends React.Component {
  render() {
    <p>{JSON.stringify(this.props)}</p>
  }
}
ReactDOM.render(<PropsDisplayer name="Rem" age={26} alive={true} />, document.getElementById('app'));

// show a specific property
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}
ReactDOM.render(<Greeting firstName='Rem' />, document.getElementById('app'));


// imported component with props
import React from 'react';
export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello and Welcome to The Newzz!</h1>
        <Greeting name="Rem" />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));


// conditionals with props
import React from 'react';
export class Welcome extends React.Component {
  render() {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
        <h2>hello sir it is truly great to meet you here on the web</h2>
      );
    } else {
      return (
        <h2>WELCOME "2" MY WEB SITE BABYYY!!!!!</h2>
      );
    }
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';
class Home extends React.Component {
  render() {
    return <Welcome name='Ludwig van Beethoven' />;
  }
}
ReactDOM.render(<Home />, document.getElementById('app'));


// imported event handler
import React from 'react';
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Click me!</button>
    );
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  render() {
    return <Button onClick={this.handleClick} />;
  }
}
ReactDOM.render(<Talker />, document.getElementById('app'));


// props children
import React from 'react';
export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
      titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';
class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));


// default props; if props doesn't exist, it will take the default value
import React from 'react';
import ReactDOM from 'react-dom';
class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}
Button.defaultProps = {text: 'I am a button'};
ReactDOM.render(<Button text="heya" />, document.getElementById('app'));




// THIS.STATE


// setting and accessing a state
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }
  // alternative to constructor
  // state = {
  //   title: 'Best App'
  // };
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));


// update state; don't forget to bind 'this' !; setState automatically calls render !
import React from 'react';
import ReactDOM from 'react-dom';
const green = '#39D1B4';
const yellow = '#FFD712';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: green};
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>Change my color</h1>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
ReactDOM.render(<Toggle />, document.getElementById('app'));


// react forms (a form is uncontrolled when react doesn't manage it, meaning real DOM is in charge)
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  // to avoid binding we can make handleChange an arrow function
  // handleChange = (event) => { this.setState({ input: event.target.value }) }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};


// component lifecycle methods
import React from 'react';
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  startInterval() {
    let delay = this.props.isPrecise ? 100 : 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  componentDidMount() {
    this.startInterval();
  }
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID);
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

















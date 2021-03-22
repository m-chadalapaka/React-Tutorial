import React, {useReducer} from 'react';
import './App.css';
import TestCounter from './components/TestCounter';
// import ClassCounter from './components/UseContextHook/ClassCounter'
// import Counter1 from './components/CustomHooks/Counter1';
// import Counter2 from './components/CustomHooks/Counter2';
// import DocTitle1 from './components/CustomHooks/DocTitle1';
// import DocTitle2 from './components/CustomHooks/DocTitle2';
// import UserForm from './components/CustomHooks/UserForm';
// import A from './components/A';
// import B from './components/B';
// import C from './components/C';

// import ComponentC from './components/ComponentC';
// import DataFetchingWithReducerTwo from './components/DataFetchingWithReducerTwo';
// import ReducerHookOne from './components/ReducerHookOne';
// import ReducerHookTwo from './components/ReducerHookTwo';
// import ParentComponent from './components/UseCallBacks/ParentComponent';
// import Counter from './components/UseMemoHook/Counter';
// import ClassTimer from './components/UseRefHook/ClassTimer';
// import HookTimer from './components/UseRefHook/HookTimer';
// import FocusInput from './components/UseRefHook/FocusInput';
// import DataFetchWithReducer from './DataFetchWithReducer';
// import DataFetching from './components/DataFetching';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import ClassCounterWithoutUseEffect from './components/ClassCounterWithoutUseEffect';
import HookCounter from './components/UseStateHook/HookCounter';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import UseEffectHookOne from './components/UseEffectHookOne';

export const UserContext = React.createContext()
export const LanguageContext =  React.createContext()
export const CountContext = React.createContext()


// const initState = 0;
// const reducer = (state,action) => {
//     switch(action) {
//         case 'increment': return state + 1;
//         case 'decrement': return state - 1;
//         case 'reset': return initState;
//         default: return state;
//     }
// }

function App (){
  // const [count, dispatch] = useReducer(reducer, initState);
    return(
      // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        {/* <p>Count: {count}</p> */}
        {/* <ClassCounter></ClassCounter> */}
        {/* <HookCounter/> */}
        {/* <HookCounterTwo/> */}
        {/* <HookCounterThree></HookCounterThree> */}
        {/* <HookCounterFour></HookCounterFour>       */}
        {/* <ClassCounterWithoutUseEffect/> */}
        {/* <UseEffectHookOne/> */}
        {/* <HookMouse/> */}
        {/* <MouseContainer/> */}
        {/* <IntervalHookCounter/> */}
        {/* <DataFetching/> */}
        {/* <UserContext.Provider value={'Madhuri'}>
          <LanguageContext.Provider value={'ReactJS'}>
            <ComponentC/>
          </LanguageContext.Provider>
        </UserContext.Provider> */}

        {/* <ReducerHookOne/> */}
        {/* <ReducerHookTwo/> */}
        {/* <A/>
        <B/>
        <C/> */}

        {/* <DataFetchWithReducer/> */}
        {/* <DataFetchingWithReducerTwo/> */}
        {/* <ParentComponent/> */}
        {/* <Counter/> */}
        {/* <FocusInput/> */}
        {/* <ClassTimer/> */}
        {/* <HookTimer/> */}
        {/* <DocTitle1/>
        <DocTitle2/> */}
        {/* <Counter1/>
        <Counter2/> */}

        {/* <UserForm/> */}



        <TestCounter/>

</div>      
// {/* </CountContext.Provider> */}
    );
}

export default App;

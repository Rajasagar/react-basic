- React allows you to build these re-usable and reactive components consisting of HTML and JavaScript.
- React uses something which is called a declarative approach
- components basically just a custom HTML elements.And we do that with this declarative approach,as I mentioned, which means with React we defined the desired target state and React is then responsible for generating and running the actual DOM instructions which update what's visible on the screen. 

- What is JSX?
    - javascript xml it's special, non-standards syntax which is enabled in React projects.

- why React is all about 'Components?

        -Every UI in the end is made up of multiple buildings block (=components), hence it makes sense to think about user interface as "combinations of components".

- what does declarative means in react?

        - you define the desired outcome (e.g. a target UI) and let the libary React figure out the steps.

- what is React Components?

        - its javascripts function which typically returns HTML (JSX) code that should be displayed. with React, You build a component tree with one root component that's mounted into a DOM. 
        - Components tree means you have a root node which then has more components nested beneath it.

- how you pass data between components?

        - via "custom HTML attributes" (better known as props)

- How can you output dynamic data in React components (.i.e in the returned JSX code)?

        - you can use single curly braces (opening & closing) with nay JS expression between them.
        
- How react works?
    - find answer

- How is a Component written in React?

   - Well, we already saw it in App JS. It's just a function.And that is a key takeaway, that is super important,definitely keep that in mind.A Component in React is just a JavaScript function.A special kind of function special regarding what it returns that it does return this JSX code, but other than that, it's just a Java script function.

And it's always these steps.
You create a Component, which is in the end, just a function of returning some HTML code, you then export it.And then ultimately you import it in the file where you wanna use it here(app.js) so that they're in the JSX code,you can use it like an HTML element,just starting with this uppercase character.

- How make the components reusable.
36.lecture.
- Props 
    - to split functionality across multiple smaller codebase and also to have reusable functions which we can call multiple times.Now, when we write functions in JavaScript,then we make these functions reusableby accepting parameters.And that allows us to call one of the same function with different parameter values.And, therefore, the function may and typically will produce different results for different input values,but it's still always the same function being called.so,
    - React having same concept built-in We can make our components reusable by using parameters and a concept called props in React.
    - n ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components

    -Props is a super important concept because it allows you to make your components reusable, and it allows you to pass data from another component to this component. And hence if we now have a look, we see these different expenses are rendered with different titles, different dates,and different amounts..

- The concept of composition ("Children props").

- 
### Section - 4 React State and working with events
- Listening to Events & working with event handlers
- In Javascript we add event listener like this document.getElementById('root').addEventListener(), but in React, we add an event listener by going to the JSX element, like this button. And there we add a special prop.But now it's not a prop which sets some value for this button, but instead it's a prop which startswith on. Because React exposes all these default events as props which start with on. And for example, here we can add onClick.Now, what this does is it adds an event listener for click events to this button.Now we just need to define what should happenwhen such a click occurs.And we do that by assigning a value to this click event.And the value here, and all this on props or eventlistner props need a function as value <button onClick={function_name}>changes tille</button>

        - for function name don't use parentheses if you would add parenthesis here JS would execute <button onClick={function_name}>changes tille</button> this when this line of code is being prepared when the JSX code is returned.So it's then not executing clickHandler when the click occurs but when this JSX code is evaluated,and that would be too early. that's why instead we just point at the clickHandler. we just point at function we pass a pointer at this function as a value to onClick and then React basically memorizes this and executes the function for us whenever the click occurs.so that it's not executed when this is evaluated but when the click occurs, which is exactly what we want.

        const clickHandler()=>{
                console.log("clicked..!!);
        }
        <button onClick={clickHandler}>Changes Title..!!</button>
        - And that is how we can add event listeners to our elements.To all these built-in HTML elements,we can add supported event listeners basically.OnClick, for example, basically is available on every element.Some events are only available on specific elements.But that is all based on the default DOM behavior.If an element supports an event, then you can add a listener with React by adding such an on and then the event name prop. Just make sure that the event name starts with a capital character, like in the case of onClick here. And then you just point at a function,either defined in line here or, better, defined upfront,and React will execute that function for youwhen that event occurs.That's how you add events.
- Q.> Imagine you're working on a brand-new React app that should allow users to bookmark articles (e.g., news articles).To start with your work, your task is to "connect" a click event listener to an already existing button and output "Stored!" via console.log(). And, of course, you should do that "the React way".

        - Solution :App.js  import React from 'react';
                        const connect =() =>{
                        console.log("Stored!");
                        }
                        import './styles.css';
                        // don't change the Component name "App"
                        export default function App() {
                        return <button onClick={connect}>Bookmark</button>;
                        }

- How components function are executed?

        - Your componets is a function and special thing is that it return the JSX. now since it's function someone has to call it and we might notice we never called components function in react we just use as HTML elements in the JSX code. <expense/> like this. it is just like function call. By using our components in JSX code, we make React aware of our component functions.e.g., we make react awares of the expense evaluated like jsc code and it will call components function. and they will return jsx code. which is all evaluated up until there's no more jsx code to be evaluated. so React keep on call any component function it encounters in jsx.then calls any functions that those functions might have returned so any elements those components might have used in their JSX code until there are no more functions left.
        - in the code expense.js react encounter the expenseitem.js component function excutes all the code in there encounter te jsx code then it will call card function, expenseDate and then it goes through the JSX code of this components until there's no more component code left to call.And then it re-evaluates the overall result and translates that into DOM instructions which renders something like this on the screen.That's how react works.
        - Now it all started from index.js file where we initially point at the app component. and that's first  components called & that happens when the react app is been loaded on the screen.
        - So that's how react goes through all these components executes all these components functionsand draws something on to the screen.
        - The only problem with that is,that react never repeats that.React goes through all of that when the application is initially rendered, but thereafter it's done.
        - solution-- State concept in REACT

- Working with useState?

        - as we know React never repeat after going throgh all the componets once. or application initially rendered, raect doesn't care about the re-evaluation. if you have a variable changes, react ignore it.
        const ExpenseItem=(props) ={
        let title = props.title;
        const clickHandler =()=>{
                title='updated.!'
                console.log(tile);
        }
        }
        return (
                <button onClick={clickHandler}>Change Title</button>
        )
        - if you excute the again, ofcourse above variable would all just be retreated and re-initalized to the props value and you wouldn't reach the desired result but we don't even need to think about that it is not happening. just because clicked occur ExpenseItem component function doesn't called again.

        - To work this cases we use import something from REACT which is useState. useState function
        - to follow this process....
                - inside the components function we called useState();
                - const ExpenseItem = (props)=>{
                        const [title, setTitle] =  useState(props.tile); // title- variable setTitle- function

                        const clickHandler =()=>{
                                setTitle('Updated.!')
                                console.log('title')
                        }
                };
        - above useState funnction is a React Hook we simple pass this as argument to useState.
        - useState actually returns an array [] as two values 1. is value itself 2. updating the function
        - we use modern js feature called array destructing which look like this [title, setTitle]
        - first value i.e., title is a point at that managed value or value stored.
        - second value .i.e., setTitle function which will update the title.
        - and, useState always return an array with exactly two elements. as above two show.
        - call this updating function setTitle('updated') inside the clickHandler function and pass an agruments as 'updated'
        - why this work 'updated' when we pass as argument

                - The reason for that is, that calling this function does not just assign a new value to some variable, but that instead it is a special variable to begin with. It's managed by React somewhere in memory.And when we call this state updating function, this special variable will not just receive a new value but, and that's important,the component function in which you called this state updating function. And in which you initialized your state with useState will be executed again.And that is exactly what we need.We want to call this component function again when our state changes.And by calling this state updating function that's happening.Because by calling this function, you're telling React that you wanna assign a new value to this state.And that then also tells React that the component in which this state was registered with useState should be re-evaluated.And therefore React will go ahead and execute this component function again, and therefore also evaluate this JSX code again. And then it will draw any changes which it's detects compared to the last time it evaluated this onto the screen. So if we now save everything,if I click Change Title,you see the title changes to updated for the ExpenseItem in which we're doing this.And that's now how this works.
        - also we refresh it will be initial that we defined before or before updated happens.
                - you will notice that these in console locks still show the title before it was updated. the reason for this is that calling this state updating function actually doesn't change the value right away.but instead schedules this state update.So in the very next line thereafter, this new value isn't available yet. That's why we see the old value being locked even though we updated it before logging.But you do see that eventually this component is called again and is evaluated again.And that therefore we see our updated value on the screen.That's how React state works.
        
        - so, if you have data, which might change, and where changes to that data should be reflected on the user interface then you need state because a regular variables will not do the trick with state, however you can set and change values.And when they do change,React will re-evaluate the component in which the state was registered.And only that component, by the way not any other components,just this component in which this state was registered.

        - Q.> You're working on a part of an online shop where a discounted price should be displayed on the screen once the user clicked a button. Your task is to add an event listener to listen for clicks on the button that's already included in the App component.Upon a button click, the price should change from $100 to $75. Add a state value to the existing App component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.
        - solution:--
                import React from 'react';

                import './styles.css';


                // don't change the Component name "App"
                // important: In this code editor, use React.useState() instead of just useState()
                export default function App(props) {
                const [price, setDiscount]=React.useState(100)
                
                const clickHandler = ()=>{
                        setDiscount('75');
                }
                
                return (
                        <div>
                        <p>${price}</p>
                        <button onClick={clickHandler}>Apply Discount</button>
                        </div>
                );
                }
        .css 
        body {
        font-family: sans-serif;
        margin: 0;
        padding: 3rem;
        background-color: #2d2c2c;
        color: #959090;
        }

        - UseState registers some State,so some value as a State for the component in which it is being called.And I wanna be even more precise here.It registers it for a specific component instance. For example, ExpenseItem here is being used four times, right? And Expenses.js we have four ExpenseItems. Now, every item receives its own separate State which is detached from the other States. We have one ExpenseItem definition here, but then this function is basically called four times when we create four ExpenseItems. And every time it's called, a new separate State is created of course in the same way but managed independently by React. So if we change the title in the first ExpenseItem the other ones are not affected because they have their own State.That's really important.It's on a per component instance basis.So we have separate States,even if we create a component more than once.
        - How do we get the latest title value then though? Well, keep in mind that the component function is re-executed when the State is updated.And React provides us this latest State in this array which useState always returns.
        - Now you might be wondering if that doesn't mean that we always overwrite any State changes with props.title again, here.And here, the special thing is that React keeps track of when we call useState in a given component instance for the first time.And when we call it for the first time ever,it'll take that argument as an initial value.But if a component is then re-executed because of such a State change, for example, React will not reinitialize the State. Instead, it will detect that this State had been initialized in the past, and it will just grab the latest State which is based on some State update, for example,and give us that State instead.So this initial value is really only considered when this component function is being executedfor the first time, for a given component instance.

        - In a Nutshell  using State is simple though. You just register State with useState, you always get back two values; the value itself and the updating function. You call the updating function whenever the State should change, and you use that first element whenever you wanna use the State value, like here for outputting it in the JSX code. And React, will do the rest and it will re-execute the component function and re-evaluate the JSX code therefore; whenever the State changes. That's State and that's an important concept because it's State which adds reactivity to our application. Without State, our user interface would never change. But with State and with listening to events, we can make sure that we can react to user input and that such input can result in a visible change on our screen.
        
- Working with multiple useState()

        - 1. we can create different- different useState() or we call a multi-state useState approach and add in the titlchangeHandler function and there we can different function which we use in useState() array. and do the same for different useState.
        const ExpenseForm =()=>{
        const [enteredTitle, setEnteredTitle]= useState('')
        const titlechangeHandler = (event)=>{
                console.log(event.target.value);
        };
        };
        - Above is sometimes more code we have to write if we have more useState()

        2. we can combine all the useState() as once and define function and speard operator to fetch the data which here not called or leave behind when we use othe useState().
        - here we can use useState() in one places for different function.
        - const [userInput, setUserInput] = useState({
          enteredTitle:'',
          enteredAmount:'',
          enteredDate: ''
         }); // uses all the useState in one places
        -  const amountChangeHandler = (event)=>{
        //setEnteredAmount(event.target.value)
        setUserInput({
            ...userInput, //spread operater to get other value what we miss when we takes an object,pulls out all the key value pairs,
                         //and adds them to this new object. And then we can still override key value pairs like in this case enter title.
                         //And by doing it like this,we ensure that the other values aren't thrown away,
            enteredAmount: event.target.value
                });
                };
        - 3. for differnt useState() we are spread operator to fetch the other data.for that we have new solution we can create setUseinput as a function and pass a counter variable to remmeber the last value and pass to next after first useState done.
        - setUserInput((prevState)=>{
          return {...prevState, enteredTitle: event.target.value}
        });

        - all the above 3 way will work fine but for 3 one here is the reason.
        - that Reacts schedules state updates, it doesn't perform them instantly. And therefore, theoretically, if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot if you use this approach. If you use this approach, React will guarantee that the state snapshot it gives you here in this inner function, will always be the latest state snapshot, keeping all scheduled state updates in mind. So this is the safer way to ensure that you always operate on the latest state snapshot.So you should use this function syntax here whenever your state update depends on the previous state. That is something you should memorize. If your state update depends on the previous state, use this function form.With all of that though,

- Question . You're working on a text messaging app and your task is to validate the text entered by a user whilst the user is typing. If the text message entered is valid (for this example: if it's at least 3 characters long), the text "Valid message" should be displayed below the input field. If it's invalid (i.e., shorter than 3 characters), the text "Invalid message" should be displayed.

        - solution 
        - app.js
                import React from 'react';

                import './styles.css';

                // don't change the Component name "App"
                export default function App() {
                const [messageValidity, setMessageValidity] = React.useState('Invalid');
                
                const messgaeChangeHandler = (event)=&gt;{
                        const value = event.target.value;
                        if (value.trim().length &lt; 3){
                        setMessageValidity('Invalid')
                        }
                        else{
                        setMessageValidity('Valid')
                        }
                }
                
                return (
                        
                        Your message
                        
                        <p>{messageValidity} message</p>
                        
                );
                }
        - style.css
                body {
                font-family: sans-serif;
                margin: 0;
                padding: 3rem;
                background-color: #2d2c2c;
                color: #959090;
                }

                label {
                display: block;
                margin-bottom: 0.5rem;
                }

                input {
                font: inherit;
                padding: 0.5rem;
                background-color: #474545;
                border: none;
                border-radius: 4px;
                color: white;
                }

- Question (Exercise: Updating State Based On Older State) .Your task is to build a basic counter that should increment whenever the "Increment" button is clicked.Whilst this task allows you to apply your general knowledge about event handling and state (which you already practiced quite a bit at this point in the course), there's also one crucial new aspect: You should update the state following React best practices!

        - solution 
        - app.js
        import React from 'react';

        import './styles.css';

        // don't change the Component name "App"
        export default function App() {
        
        const [incrementNumber, setIncrementNumber] = React.useState(0);
        
        const numberChangeHandler = ()=&gt;{
                setIncrementNumber(prevCounter =&gt; prevCounter +1 );
        }
        
        return (
        <div>
                <p>{incrementNumber}</p>
                Increment
        </div>
        );
        }
        - style.css
        body {
        font-family: sans-serif;
        margin: 0;
        padding: 3rem;
        background-color: #2d2c2c;
        color: #959090;
        text-align: center;
        }

        #counter {
        color: #d7adff;
        font-size: 3rem;
        }

- Two-way binding
        
        - which is called two-way binding, which simply means that for inputs we don't just listen to changes, but we can also pass a new value back into the input. So that we can reset or change the input programmatically. And how do we do that? Well, it's very simple. All we have to do is add the value attribute, which is a default attribute, to this input element. This will set the internal value property, which every input element has. And we can set it to a new value. And here, I will bind this to enteredTitle. So now it is this two-way binding because now we don't just listen to changes in the input to update our state. But we also feed the state back into the input so that when we change the state, we also change input. This might sound like an infinite loop, but it actually isn't. So we won't have a problem there. But the advantage is that when the form is submitted for example, we can call setEnteredTitle. And set this back to an empty string, which also was our initial state. And by doing that, we override what the user entered after the form was submitted and therefore cleared the input. And we can do this for all inputs. We can set the entered amount to an empty string, and set the entered date to an empty string, and then just add to the value prop to all these inputs. So here I add value and point at enteredAmount to pass that back into the amount input. Two-way binding is very useful when you're working with forms because it allows you to gather user input, but then also change it.

        - For example, upon form of mission.

        const ExpenseForm =()=>{
                
        const [enteredTitle, setEnteredTitle]= useState('')
        const titlechangeHandler = (event)=>{
                // console.log(event.target.value);
                setEnteredTitle(event.target.value)
        };

                // handle the submit when we provide input to something in required field
        const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
        };

        console.log(expenseData)
        //two way binding thats means we remove the value after it store somewhere 
        //and delete from input value. and we have to put value={} in  input element in jsx code.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        };
        }  
        return (
        <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titlechangeHandler} />
                </div>
        )

- Child-to-parent component communication (BOTTOM-UP)

        - Let's say we wanna pass the expense data which we gather in the expense form component to the new expense component as a first step because if we ultimately wanna reach the app component, we first of all have to reach the new expense component because it's the new expense component which uses the expense form and then in a second step later, it's the app component which use the new expense component but we can't skip components in between, that's also something you learned in the previous course section. Props can only be passed from parent to child, we can't skip intermediate components.

        - first step
         in newExpense.js 
        const NewExpense = ()=>{
        const saveExpenseDataHandler = (enteredExpenseData) =>{
                const expenseData ={
                ...enteredExpenseData,
                id: Math.random().toString()
                };
                console.log(expenseData)
        };

        return (
        <div className="new-expense">
        <ExpenseForm  onSaveExpenseData ={saveExpenseDataHandler}/>
        </div>
        );
        };
        export default NewExpense;

        - so that this onSaveExpenseData prop in my custom component receives above function(saveExpenseDataHandler) as a value. we don't add parenthesis, I just point at the function, so that the function itself a pointer edit is passed to expense form.
        
        - second step:
         to use the inside the of our customed componets that step we don't have do to for inputs because these are built in components basically, but they're also we pass a function to onchange and internally react and we'll add a listener and call this function which we pass in whenever that event occurs, that change event. Now, since we're doing this on our own custom component,
         in ExpenseForm.js
        const ExpenseForm =(props)=>{ 
        const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
        };

        //console.log(expenseData)
        props.onSaveExpenseData(expenseData) // we are passing above data to pass as an arguments 
        //and will be there to child NewExpense.js where we use this as function point to get/recived as parameter the data for there need.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        };

         };
        - So, inside of expense form, I of course now expect to get some props because we're setting a prop now and now, inside of the submit handler, instead of I logging my expense data,I will access props onSaveexpensedata and executed here. And that's not important, now I executed I can execute it. I can execute it because the value which we get on this onSaveexpensedata key will be a function. We are passing in a function here after all.So it's this function defined in the new expense component which we will now execute in a different component,inside of expense them to be precise. And we can execute the function even though it's not defined inside of expense form because we are passing a pointer edit through the onSaveexpensedata prop.And this is a super important pattern which you will use a lot in react. This is how you can communicate between components and how you can communicate up.
        - how you can make sure that a child component,the expense form component here for example, can communicate up to the parent component,.i.e., new expense component in this case. We can call a function in the new expense component and we can pass data as a parameter. So here, when we call onSaveexpensedata in the expense form, I can pass the expense data which are generated here as our argument .... props.onSaveExpenseData(expenseData) 
        and that's the value which we'll receive as a parameter (enteredExpenseData) here in new expense.   const saveExpenseDataHandler = (enteredExpenseData) =>{.....}
        I hope this flow is clear. The trick really is that we pass around a pointer at a function.
        when we run this and see on console we see that it is being on the console and in the code in the NewExpense.js console.log(expenseData) and data is generated there too what we passed in UI.

        - we can communicate up from inside the expense.js to app.js because its this app componets which needs the new expense in the end to add it to expenses array.
        so there fore in app.js we have a add function which we defind before  the jsx code.
        app.js.....
        const addExpenseHandler = expense =>{
        console.log('IN APP.js'); // for the moment i'll just console.log in app.js
        console.log(expense)
        }
        return (
                <div>
                {/* <h2>lets get started!</h2> */}
                <NewExpense onAddExpense={addExpenseHandler}/>
                {/* <p>This is visiable</p> */}
                <Expense items={expenses} />
                </div>
        ) -So here's the function now again, using the same pattern as before, we can pass a pointer at this function to a new expense so that inside of new expense, we can call this function and pass that expense data up to the app component.
        - onAddExpense that it's a function pointer which has passed as our argument and then I pass a pointer at add expense handler to the on expense prop on new expense, 
        and therefore inside of new expense, we can now call it. NewExpense.js

        const NewExpense = (props)=>{ // We can accept the props argument here as well,
        const saveExpenseDataHandler = (enteredExpenseData) =>{
                const expenseData ={
                ...enteredExpenseData,
                id: Math.random().toString()
                };
                props.onAddExpense(expenseData) // here we call it
                //console.log(expenseData)
        };
        - so inside the saveExpenseDataHandler we have to bring new expense and therefore inside it we have to call it now as props.onAddExpense(expenseData). I'm calling us here, and it will forward my enriched expense data here. And if we now save everything,


vanillajs-momentum2021

: 2021 clone coding; chrome app Momentum

- Learning Vanilla JS

=======================
First Part - JSBasic

1. Data Type
   ; integer, float,
   ; text: "hello"
   ; string: "my name is hw"
   -> both are text

2. using console.log()
   : to send value to console

3. variables
   : save & hold values
   ; const value : constant - stay as it is.
   ; camel case : convension for js variable naming
   ; let value: can be changed. (or updated)
   ; var: do not use.. it doesn't show error when code changed value that should not changed

4. Booleans
   : true or false / 0 or 1
   ; null: nothingness; diff with false - there is nothing
   ; undefined: not defined

5. Array
   : list of data
   ; using "[]"
   ; can reach to each element by index or value
   ; get item from array: array[index]
   ; add item to array: array.push(item);
   ; any valid datatype could be element of array
   ; elements are same type
   ex) list = ["mon", "tue", "wed" , ...]

6. Object
   : better way to organize data; when an entity has many properties
   ; get item from object
   ; and update item from object
   ; add property to object

7. function
   : with/without arguments (data)
   ; how to recieve arguments (data)
   ; function inside of object also can recieve outer data
   ; encapsulate code and could be used over and over again

- try code challenge : make calculator

8. Return
   : to get actual data instead of print it on console (console.log)
   ; console.log - show result on console

9. Conditionals
   : if-else
   ; check if a condition is true or false
   (only true or false)
   ; else if - more than one condition

10. paresInt()
    : change str to number
    ; input string is not a number, "NaN"

11. getElementById
    : how to get element from html to use on js
    ; html's id should be same as id using in js to find

12. getElementsByClassName
    : get element by class
    ; should know because use class more than ids

13. getElementsByTagName
    : getting elements by tag names
    ; for the case class name is used by some tags and want to get one tag

14. querySelector
    : find elements by using css notation
    ; useful getting element
    ; only bring first element it found

15. querySelectorAll
    : get all element that match selector

16. addEventListener
    : to add events on elements

17. google MDN for js/html elements
    OR use console.dir to find elements(and properties)
    : ex) for onclick event: should add 'click' event

18. sth.on~(func) or sth.addEventlistener("~", func);

19. resize
    : cannot resize h1, can resize window

20. .className
    : can use to update class name in js

21. toggle function
    : check classlist and remove/add class

==============================

Second Part = Momentum App

1. User Login
   - always validate input values.
   - users can make mistakes.
   - to trigger validation of input tag in HTML, input tag has to be inside of form tag
   - and if using form tag, click will automatically submit values so js's added click event not needed
   - can give 'submit' event to form element instead of giving click ; refreshing is default of form submit; browser will call function with some arguments
   - first args of event func will be infos about what just happened
   - preventDefault: stops default behavior of any event; like preventing browser refreshing when submits form
   - default act of link : move to link
   - alert: blockes everything
   - console.log(event): have many information includes mouse corrdinates
   - "Hello" + username == `Hello ${username}`


###Class based components
Parent constructor
AboutUs.js:19 Parent render
UserClass.js:11 Varshini Child constructor
UserClass.js:19 Varshini Child render
UserClass.js:11 Second Child constructor
UserClass.js:19 Second Child render
UserClass.js:15 Varshini Child Component did mount
UserClass.js:15 Second Child Component did mount
AboutUs.js:15 Parent Component did mount


only the variables that are updated are changed and others are not being touched by the class based component state 

used using super(props)
and changed using this.setState(//callback function)


initially, constructor is being called and then render is being called in case of class based components

creating a class and sending it as a component means creating an instance of the class and mountig to the page

###REACT lifediagram
DOM manipulation is a costly operation
so after updating and rendering , component did mounts are batched and then mounted all at once 


react life diagram doesn't effect fucntional based components again 



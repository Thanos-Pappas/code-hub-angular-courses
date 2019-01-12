#   [Code Hub](https://www.codehub.gr/) - Angular Courses (instructor: [Fanis Prodromou](https://github.com/profanis))

## Components

### exercise #1
Create a module with all the needed components components to illustrate the following.
![Alt text](readme_resources/first-ex.PNG)

### exercise #2
* Create a parent component which has a list of items accessible
via a method
* Create a child component fwhich accepts as input the list of the
items from the parent component and displays the list on screen

### exercise #3
The parent should display a list of items only if the child allows it.
Use inline template

### exercise #4
Create a component which will display the message:
*  “Message from OnInit” on the onInit method
*  “Message from AfterViewInit” on the AfterViewInit method

## Services

### exercise #5
Create a service which:

1. return an array of items
2. add an item into the array **(emit an event with the new array)**

Create another service which:

1. append its own array with the first array **(use spread operator)**
2. don't use the **providedIn: 'root'**

* inject the above services in a component, and utilize their functionality

## Ng Directives

### exercise #6
Having the array ["one", "two", "three", "four", "five", "six", "seven",
"eight", "nine", "ten"]

* In a component display on an unordered list the label of each item
* If the item is the first one, display the label “Is First”
* If the item is the last one, display the label “Is Last”
The array should be on a service

### exercise #7
Having the array people: any[] = [{ "name": "Douglas Pace",
"age": 35,
"country": 'MARS'}];

* Display the name of the user in blue, if country is UK
*  Display the name of the user in red, if country is USA
* Display the name of the user in green, if country is HK
* Display the name of the user in black in any other cases

## Custom Directives

### exercise #8
Create a directive which will highlight a text on hover
and will have the default state on blur

## Built-in Pipes

### exercise #9
* Create a service with a method which will return a typed object with
properties:
* date = today
* amount = 1.5
* Consume the service in a component and display the date in format
yyyyMMdd and the amount in format €amount

## Custom Pipes

### exercise #10
Create a pipe which will get as input a date and transforms it by default
to “dd/MM/yyyy”. Use a boolean parameter which if true will return the
time in format “hh:mm:ss” concatenated with the date

## HTTP

### exercise #11
1. Create a service that GETs data from
https://restcountries.eu/rest/v2/
    Create a model with properties:
    * name
    * topLevelDomain
    * alpha2Code
    * alpha3Code
    * capital
    * region
2. Consume the service in a component and display the results in an
inline template

## Routing

### exercise #12
Create a navigation bar with two items:
1. **Name**: “Component A”, **link**: /parenta
a. It will display the content of **parenta** component
2. **Name**: “Component B”, **link**: /parentb
a. It will display the content of **parentb** component

### exercise #13
Enhance the menu bar you created just before with two more components:
1. **Name**: “Child A”, **link**: /parenta/childa
a. It will display the content of **childa** component on the nested
router-outlet of **parenta** component
2. **Name**: “Child B”, **link**: /parentb/childb
a. It will display the content of **childb** component on the nested
router-outlet of **parentb** component

### exercise #14
Create an unordered list of items. Each item will navigate to the
component by giving as id the index of the array position.
i.e. /path/3

### exercise #15
Extend exercise #13

* Each Parent with its children component should be on a separate feature
  module, having its own routing
The destination component should log the id in the console

## Extras

### extra #1
Use local reference and viewChild() to get access to DOM elements.
Use ng-content to inject html code to a component.
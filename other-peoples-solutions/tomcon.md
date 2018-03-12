# [tomcon](https://www.codewars.com/users/tomcon)'s Solution

```js
function sqInRect(lng, wdth){
  let arr = []
  if(lng === wdth) return null
  while(lng > 0 && wdth > 0){
    arr.push(lng > wdth ? wdth : lng)
    lng > wdth ? lng -= wdth : wdth -= lng
  }
  return arr
}
```
---

## Solution Explanation

This solution starts by creating an empty array. It then tests if length and width of the square are the same, if they are it returns an null. Next, there is a while loop that checks if length or width are zero. If it isnt, the program pushes the larger of the two numbers and then


---

## Language Features

tomton used the following:
* Tenary Operator
* If Statement
* While Statement
* Array.Prototype.Push()


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>


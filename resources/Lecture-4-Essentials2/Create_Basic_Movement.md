Create Basic Movement

The movement basically is changing the position of GameObject and there are many ways to move a GameObject in Unity 3D, let’s use one of the simplest ways.

In order to move a GameObject, you need to specify a direction in which to translate it through space, and to represent a direction, you need to specify the three dimensions (x, y, z). To do this easily, Unity 3D provides us with a special data type called Vector3.
so what is a Vector3?

**Vector3**

**Description**

It represents 3D vectors and points holding three floats values(x,y,z).

This structure is used throughout Unity to pass 3D positions and directions around. It also contains functions for doing common vector operations.

**Static Properties**

We can use the static properties as shortcuts for setting the properties of the Vector3:

|[back](https://docs.unity3d.com/ScriptReference/Vector3-back.html)|Shorthand for writing Vector3(0, 0, -1).|
| :- | :- |
|[down](https://docs.unity3d.com/ScriptReference/Vector3-down.html)|Shorthand for writing Vector3(0, -1, 0).|
|[forward](https://docs.unity3d.com/ScriptReference/Vector3-forward.html)|Shorthand for writing Vector3(0, 0, 1).|
|[left](https://docs.unity3d.com/ScriptReference/Vector3-left.html)|Shorthand for writing Vector3(-1, 0, 0).|
|[one](https://docs.unity3d.com/ScriptReference/Vector3-one.html)|Shorthand for writing Vector3(1, 1, 1).|
|[right](https://docs.unity3d.com/ScriptReference/Vector3-right.html)|Shorthand for writing Vector3(1, 0, 0).|
|[up](https://docs.unity3d.com/ScriptReference/Vector3-up.html)|Shorthand for writing Vector3(0, 1, 0).|
|[zero](https://docs.unity3d.com/ScriptReference/Vector3-zero.html)|Shorthand for writing Vector3(0, 0, 0).|
###
### **Properties**
We can set the value of the Vector3 separately using the properties:	

|[x](https://docs.unity3d.com/ScriptReference/Vector3-x.html)|X component of the vector.|
| :- | :- |
|[y](https://docs.unity3d.com/ScriptReference/Vector3-y.html)|Y component of the vector.|
|[z](https://docs.unity3d.com/ScriptReference/Vector3-z.html)|Z component of the vector.|

Declaring (Creating) 
Declaring a Vector3 it’s the same way as declaring any variable:
### **Syntax**
Vector3 nameOfTheVariable;

You can declare it and give it initial value:

Vector3 nameOfTheVariable = new Vector3(float,float,float);
### **Example**
Create a **Vector3** called “direction” and assign its values **x=2.5,y=8,z=26.3**:

Vector3 direction = new Vector3(2.5f,8f,26.3f);

void start(){

}

**Or** You can Create it and assign its values in the Start function

Vector3 direction;

void start(){

direction = new Vector3(2.5f,8f,26.3f);

}


**Or** We can use the static properties as shortcuts for setting the values of the Vector3

Vector3 direction;

void start(){

direction = Vector3.up; 
//note: vector3.up means Vector3(0,1,0);

}




Alright, now we know how to represent a direction it's time to use it, where we're going to use the direction?
As mentioned earlier, movement primarily involves changing the position of a GameObject. The position is a property of the Transform component. Therefore, to change the position of an object, we need to access its Transform component and utilize it using the function provided by Unity 3D, there is a function called “Translate” which help us to translate the position of GameObject through the space.
#
#
#
#
# [Transform](https://docs.unity3d.com/ScriptReference/Transform.html).Translate
### **Description**
**Moves the transform in the direction and distance of translation.**

**Syntax**
---------------------------------------------------------------------
transform.Translate(Vectore3);

**examples:**


`   `void [Update](https://docs.unity3d.com/ScriptReference/PlayerLoop.Update.html)()

`    `{

`        `// Move the object forward along its z axis 

`        `transform.Translate([Vector3.forward](https://docs.unity3d.com/ScriptReference/Vector3-forward.html));

`    `}

using UnityEngine;
using System.Collections;

public class ExampleClass : [MonoBehaviour](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html)

{
`     `float speed = 5.8f;

`    `void [Update](https://docs.unity3d.com/ScriptReference/PlayerLoop.Update.html)()

`    `{

`        `// Move the object forward along its z axis 1 unit/second.

`        `transform.Translate([Vector3.forward](https://docs.unity3d.com/ScriptReference/Vector3-forward.html) \* speed \* [Time.deltaTime](https://docs.unity3d.com/ScriptReference/Time-deltaTime.html));

`    `}

}
`  `}

void [Update](https://docs.unity3d.com/ScriptReference/PlayerLoop.Update.html)()

`    `{

`        `// Move the object forward along its z axis 1 unit/second.

`        `transform.Translate([Vector3.forward](https://docs.unity3d.com/ScriptReference/Vector3-forward.html) \* [Time.deltaTime](https://docs.unity3d.com/ScriptReference/Time-deltaTime.html));

`    `}


In the above example, the object will move too fast because it moves every frame. To ensure it moves at a 1 unit per second, we need to multiply it by a value called 'deltaTime'.this value is property of class called “Time”



![](Aspose.Words.5ec22cb3-52ce-4bcc-b5c7-87a19af574ac.001.png)![](Aspose.Words.5ec22cb3-52ce-4bcc-b5c7-87a19af574ac.002.png)now let’s add speed factor to  control its speed movement 


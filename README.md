# Learning TypeScript

## 1. Type Annotations

Type annotations in TypeScript allow you to explicitly specify the type of variables, function parameters, and return values. This feature helps catch type-related errors at compile time and improves code clarity. Here's an overview:

1. **Basic Type Annotations:**

   - **Variables:** You can specify the type of a variable using a colon followed by the type.
     ```typescript
     let age: number = 30
     let name: string = 'Alice'
     ```
   - **Arrays:** You can specify the type of elements in an array.
     ```typescript
     let numbers: number[] = [1, 2, 3]
     let names: string[] = ['Alice', 'Bob']
     ```
   - **Objects:** Define the type of an object by specifying the shape it should have.
     ```typescript
     let person: { name: string; age: number } = { name: 'Alice', age: 30 }
     ```

2. **Function Type Annotations:**

   - **Parameters:** Specify the types of function parameters.
     ```typescript
     function greet(name: string): void {
       console.log(`Hello, ${name}`)
     }
     ```
   - **Return Type:** Indicate the type of value a function returns.
     ```typescript
     function add(x: number, y: number): number {
       return x + y
     }
     ```

3. **Type Aliases and Interfaces:**

   - **Type Aliases:** Create custom types using `type`.
     ```typescript
     type Person = { name: string; age: number }
     let alice: Person = { name: 'Alice', age: 30 }
     ```
   - **Interfaces:** Define the shape of objects or classes using `interface`.
     ```typescript
     interface Person {
       name: string
       age: number
     }
     let alice: Person = { name: 'Alice', age: 30 }
     ```

4. **Enums:**

   - **Enumerations:** Define a set of named constants.
     ```typescript
     enum Color {
       Red,
       Green,
       Blue,
     }
     let favoriteColor: Color = Color.Green
     ```

5. **Function Overloading:**
   - **Overload Signatures:** Define multiple signatures for a function.
     ```typescript
     function combine(a: string, b: string): string
     function combine(a: number, b: number): number
     function combine(a: any, b: any): any {
       return a + b
     }
     ```

Type annotations provide a way to specify and enforce the types of values and structures in your code, leading to fewer errors and better code quality.

// Required Props
// interface Props {
//     a?: number;
//     b?: string;
//   }
//   const obj: Props = { a: 5 };
//   const obj2: Required<Props> = { a: 5 ,b:"req"};
//---------------------------------------------------
// Partial Props
//   interface Todo {
//     title: string;
//     description: string;
// }
// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//     return { ...todo, ...fieldsToUpdate };
// }
// const todo1 = {
//     title: "organize desk",
//     description: "clear clutter",
// };
// const todo2 = updateTodo(todo1, {
//     description: "throw out trash",
// });
//------------------------------------------------------------------
//Readonly Props
//   interface Todo {
//     title: string;
//   }
//   const todo: Readonly<Todo> = {
//     title: "Delete inactive users",
//   };
//   todo.title = "Hello";
//----------------------------------------------------------------------
// Record <keys,type>
// type catName = "morris" | "miffy";
// interface catInfo {
//     name: string,
//     age: number
// }
// const cat: Record<catName, catInfo> = {
//     morris: { name: "persian", age: 22 },
//     miffy: { name: "maine", age: 11 }
// }
// console.log(cat);
//---------------------------------------------------
//Pick <type,keys>
// interface Todo {
// title:string,
// description:string,
// work:string
// }
// type newTodo = Pick<Todo, "title" | "description">;
// const task: newTodo = {
//     title: "new",
//     description : "new"
// }
//-----------------------------------------------------------------
//Omit <type,keys>
// interface Todo {
//     title: string,
//     name: string,
//     description: string
// }
// type newTodo = Omit<Todo, "description">
// const task: newTodo = {
//     title:"new",
//     name:"omit",
// }
//----------------------------------------------------------------------

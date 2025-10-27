// b_todo.ts

//! 타입스크립트 TODO 리스트 구현

/*
@ 데이터 구조
  - 여러 개의 할 일을 저장할 수 있는 배열
  - 각 할 일은 객체

  EX) 상품들-상품 / 회원들-회원 / 할일들(TodoItem[])-할일(TodoItem)

  cf) 배열 타입 정의: 요소타입[]

@ 요구사항 정리
  1. Todo(할 일, 객체) 항목의 인터페이스 정의(TodoItem)
    : id(고유값, number), task(할 일 내용, string), completed(완료 여부, boolean)

  2. 각 할 일들을 todos 배열로 관리

  3. 할 일 리스트를 관리하는 함수 구현
    - addTodo (추가)
    - completedTodo (수정)
    - deleteTodo (삭제)
*/

//^ 1. 할 일의 객체 인터페이스 명시
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

//^ 2. 요구 사항 정리 (map & filter 사용)
// 1) 특정 id를 가진 Todo 항목의 task를 편집하는 함수(editTodo)
// 2) 완료된 Todo 항목을 모두 삭제하는 함수(clearCompleted)
// 3) 모든 Todo 항목을 조회하는 함수(getAllTodos)
// 4) 특정 상태(completed)에 따라 Todo 항목을 필터링하는 함수(filterTodos)
// 5) 특정 id를 가진 Todo 항목의 completed 상태를 토글하는 함수(toggleTodo)
// 6) 모든 Todo 항목의 completed 상태를 일괄적으로 설정하는 함수(setAllTodosCompletion)

//^ 3. 프로그램 구현

// 1) 특정 id를 가진 Todo 항목의 task를 편집하는 함수(editTodo)
function editTodo(todos: TodoItem[], id: number, newTask: string): TodoItem[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, task: newTask } : todo
  );
}

// 2) 완료된 Todo 항목을 모두 삭제하는 함수(clearCompleted)
function clearCompleted(todos: TodoItem[]): TodoItem[] {
  return todos.filter((todo) => !todo.completed);
}

// 3) 모든 Todo 항목을 조회하는 함수(getAllTodos)
function getAllTodos(todos: TodoItem[]): TodoItem[] {
  return todos;
}

// 4) 특정 상태(completed)에 따라 Todo 항목을 필터링하는 함수(filterTodos)
function filterTodos(todos: TodoItem[], completed: boolean): TodoItem[] {
  return todos.filter((todo) => todo.completed === completed);
}

// 5) 특정 id를 가진 Todo 항목의 completed 상태를 토글하는 함수(toggleTodo)
function toggleTodo(todos: TodoItem[], id: number): TodoItem[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

// 6) 모든 Todo 항목의 completed 상태를 일괄적으로 설정하는 함수(setAllTodosCompletion)
function setAllTodosCompletion(
  todos: TodoItem[],
  completed: boolean
): TodoItem[] {
  return todos.map((todo) => ({ ...todo, completed }));
}

//^ 4. 프로그램 실행
let todos: TodoItem[] = [
  { id: 1, task: "abc", completed: false },
  { id: 2, task: "def", completed: true },
  { id: 3, task: "ghi", completed: false },
  { id: 4, task: "jkl", completed: false },
  { id: 5, task: "mno", completed: true },
  { id: 6, task: "pqr", completed: false },
  { id: 7, task: "stu", completed: true },
  { id: 8, task: "vwx", completed: true },
  { id: 9, task: "yz", completed: false },
];

todos = editTodo(todos, 2, "자바스크립트");
console.log(todos);

todos = filterTodos(todos, false);
console.log(todos);

todos = clearCompleted(todos);
console.log(todos);

todos = toggleTodo(todos, 3);
console.log(todos);

todos = setAllTodosCompletion(todos, false);
console.log(getAllTodos(todos));
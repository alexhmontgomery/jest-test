import reducer from "./reducer";
import { createTodo, filterTodos, toggleTodo } from './actions'

describe("CREATE_TODO", function () {
    test("creates a new todo", function () {
      const initialState = {todos: [], nextId: 1}
      const state = reducer(initialState, createTodo("Test"));
      expect(state.todos).toHaveLength(1);
      expect(state.todos[0]).toEqual({id: 1, done: false, text: 'Test'});
    })

    test("updates nextId", function () {
      const initialState = {todos: [], nextId: 1}
      const state = reducer(initialState, createTodo("Test"));
      expect(state.nextId).toEqual(2);
    })
})

describe('TOGGLE_TODO', function () {
  test('toggles the todo to done', function () {
    const initialState = {todos: [], nextId: 1, done: false}
    const newTodo = reducer(initialState, createTodo('Test'))
    const state = reducer(newTodo, toggleTodo(1))
    expect(state.todos[0].done).toEqual(true)
  })
})

describe('FILTER_TODO', function () {
  test('filters the todos', function () {
    const initialState = {todos: [], nextId: 1, filter: 'all'}
    const state = reducer(initialState, filterTodos('completed'))
    expect(state.filter).toEqual('completed')
  })
})

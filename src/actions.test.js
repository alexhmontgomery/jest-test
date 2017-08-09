import {CREATE_TODO, TOGGLE_TODO, FILTER_TODOS} from './actions'
import { createTodo, filterTodos, toggleTodo } from './actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: CREATE_TODO,
    }
    expect(createTodo()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('toggle the status of done to true', () => {
    const expectedAction = {
      type: TOGGLE_TODO,
    }
    expect(toggleTodo()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should filter completed and incomplete todos', () => {
    const expectedAction = {
      type: FILTER_TODOS,
    }
    expect(filterTodos()).toEqual(expectedAction)
  })
})

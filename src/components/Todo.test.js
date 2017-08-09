// src/components/Todo.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Todo from "./Todo";
//
test('Todo renders correctly', () => {
    const todo = renderer.create(
        <Todo todo={{text: "Test", id: 1, done: false}} />
    ).toJSON();
    expect(todo).toMatchSnapshot();
});

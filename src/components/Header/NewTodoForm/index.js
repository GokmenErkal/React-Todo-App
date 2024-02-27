import React from 'react'
import { Field, Form, Formik } from 'formik';
import validationsSchema from './validation';
import { useTodo } from '../../../contexts/TodoContext';

function NewTodoForm() {
    const { addTodo } = useTodo()

    return (
        <Formik
            initialValues={{
                text: '',
            }}
            onSubmit={(values, bag) => {
                console.log(values)
                addTodo(values.text)
                bag.resetForm()
            }}
            validationsSchema={validationsSchema}
        >
            <Form>
                <Field
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    id='text'
                    name='text'
                />
            </Form>
        </Formik>
    )
}

export default NewTodoForm

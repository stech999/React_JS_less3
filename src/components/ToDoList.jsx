// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

//     Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI.Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления(например, DeleteIcon).

//     Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, IconButton, Typography, Grid2 } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const getInputValue = (e) => {
        setNewTask(e.target.value);
    }

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask.trim()]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h4>Список дел с Material UI</h4>
            <Grid2 container spacing={2} direction="column">
                <Grid2 item className="button">
                    <TextField
                        label="Новая задача"
                        variant="outlined"
                        value={newTask}
                        onChange={getInputValue}
                    />
                    <Button variant="contained" onClick={handleAddTask} style={{ marginLeft: '10px' }}>
                        Добавить задачу
                    </Button>
                </Grid2>
                <Grid2 item container spacing={2} direction="column">
                    {tasks.map((task, index) => (
                        <Grid2 item key={index}>
                            <Card variant="outlined">
                                <CardContent className='deleteItem'>
                                    <Typography variant="body1">{task}</Typography>
                                    <IconButton aria-label="delete" onClick={() => handleDeleteTask(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Grid2>
        </div>
    );
};

export default TodoList;
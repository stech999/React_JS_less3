// Урок 3. Virtual DOM.Подключение библиотеки UI - компонентов
// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

//     Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения(Цельсия и Фаренгейта).

//     Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.
// import React, { useState, Button } from "react";

import React, { useState } from 'react';
import { TextField, Button, Grid2 } from '@mui/material';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        setFahrenheit((parseFloat(value) * 9 / 5 + 32).toFixed(2));
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
    };

    return (
        <div>
            <h4>Температурный конвертер с Material UI</h4>
            <Grid2 container spacing={2} alignItems="center">
                <Grid2 item>
                    <TextField
                        label="Градусы Цельсия"
                        variant="outlined"
                        type="number"
                        value={celsius}
                        onChange={handleCelsiusChange}
                    />
                </Grid2>
                <Grid2 item>
                    <TextField
                        label="Градусы Фаренгейта"
                        variant="outlined"
                        type="number"
                        value={fahrenheit}
                        onChange={handleFahrenheitChange}
                    />
                </Grid2>
                <Grid2 item>
                    <Button variant="contained" onClick={() => { setCelsius(''); setFahrenheit(''); }}>
                        Сбросить
                    </Button>
                </Grid2>
            </Grid2>
        </div>
    );
};

export default TemperatureConverter;
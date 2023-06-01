function generateDifficultyLevels(currentLevel){

    const difficultyLevels = [
        {key: 1, label: 'Very Easy', selected: false},
        {key: 2, label: 'Easy', selected: false},
        {key: 3, label: 'Medium (Standart 3x3)', selected: false},
        {key: 4, label: 'Intermediate', selected: false},
        {key: 5, label: 'Experd', selected: false},
        {key: 6, label: 'Hardcore', selected: false},
    ];

    const result = difficultyLevels.map(x => x.key == currentLevel ? {...x, selected: true} : x);

    //Деструктуриране на обект е възможно ако присвояваме пропъритата му в друг обект, както в случая
    //Проверяваме всеки елемент от шестте в масива, ако левела му съвпадне с подадения левел във функцията, деструктурираме
    //съответния елемент от масива, и му сетваме selected на true

    return result;
}

module.exports = generateDifficultyLevels;
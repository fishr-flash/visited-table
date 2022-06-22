// eslint-disable-next-line import/no-anonymous-default-export
export default {
    "name": "Сторис",
    "stories": [
        {"name": "SOFSERV-44 Разработка экрана Запись (Клиент)",
            "screens":[
                {
                    "name": "Экран сервиса. Бронирование",
                    "parts": [
                        {
                            "name": "Календарь. Реализация через плагин",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 24
                                },
                                {
                                    "name": "Функциональность ( во взаимодействии с кастом фильтрами )",
                                    "duration": 32
                                },
                                {
                                    "name": "API",
                                    "duration": 20
                                },
                                {
                                    "name": "AIP mock",
                                    "duration": 3
                                },
                                {
                                    "name": "Tests",
                                    "duration": 6
                                }
                            ]
                        }
                    ],
                    "modals": [
                        {
                            "name": "Окно бронирования (включает в себя бронирование, добавление друзей, изменения )",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 16
                                },
                                {
                                    "name": "Функциональность ( не включая добавление участников )",
                                    "duration": 8

                                },
                                {
                                    "name": "API",
                                    "duration": 12
                                },
                                {
                                    "name": "API mock",
                                    "duration": 2
                                },
                                {
                                    "name": "Tests",
                                    "duration": 2
                                }

                            ]
                        },
                        {
                            "name": "Документы",
                            "jobs":[
                                {
                                    "name": "Верстка",
                                    "duration": 12
                                },
                                {
                                    "name": "API mock",
                                    "duration": 2
                                },
                                {
                                    "name": "Tests",
                                    "duration": 1
                                }
                            ]
                        },
                        {
                            "name": "Блокировка (Переиспользование)",
                            "jobs": [{
                                "name": "Верстка и функциональность",
                                "duration": 2
                            }]
                        },
                        {
                            "name": "Расписание (Переиспользование)",
                            "jobs": [
                                {
                                    "name": "Верстка и функциональность ",
                                    "duration": 3
                                }
                            ]

                        },
                        {
                            "name": "Ограничения зала",
                            "components":[
                                {
                                    "name": "Хеадер и футер",
                                    "jobs":[
                                        {
                                            "name": "Верстка и Функциональность",
                                            "duration": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "Таблица информации",
                                    "components":[
                                        {
                                            "name": "Элемент представления зала",
                                            "jobs": [
                                                {
                                                    "name": "Верстка",
                                                    "duration": 8
                                                }
                                            ]

                                        },
                                        {
                                            "name": "Табличное представление",
                                            "jobs": [
                                                {
                                                    "name": "Верстка",
                                                    "duration": 4
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }

                    ],
                    "jobs": [
                        {
                            "name": "API",
                            "duration": 14
                        },
                        {
                            "name": "API mock",
                            "duration": 2,
                        },
                        {
                            "name": "Tests",
                            "duration": 2
                        }
                    ]
                }
            ]
        }
    ]
}
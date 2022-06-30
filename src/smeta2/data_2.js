// eslint-disable-next-line import/no-anonymous-default-export
export default {
    "name": "Сторис",
    "stories": [
        {
            "name": "SOFSERV-1 Я как Администратор, хочу создавать сервис бронирования",
            "screens": [
                {
                    "name": "Сервис",
                    "parts": [
                        {
                            "name": "Удаление сервиса",
                            "modals": [
                                {
                                    "name": "Окно удаления",
                                    "jobs": [
                                        {
                                            "name": "API",
                                            "duration": 6
                                        }
                                    ]
                                }
                            ]
                        },
                    ],
                    "jobs": [
                        {
                            "name": "Функциональность",
                            "duration": 6
                        },
                        {
                            "name": "API (mocks )",
                            "duration": 1
                        },
                        {
                            "name":"API",
                            "duration": 6,
                        }
                    ]
                }
            ]
        },
        {
            "name": "SOFSERV-3 Я как Администратор, хочу иметь возможность просматривать шаблоны",
            "screens": [
                {
                    "name": "Сервис. Вкладка Шаблоны",
                    "parts": [
                        {
                            "name": "Шаблоны событий",
                            "jobs": [
                                {
                                    "name": "Функциональность (переход к редактированию )",
                                    "duration": 1
                                },
                                {
                                    "name": "API ( mocks )",
                                    "duration": 1
                                },
                                {
                                    "name": "API",
                                    "duration": 6
                                }
                            ]
                        },
                        {
                            "name": "Категории занятий",
                            "jobs": [
                                {
                                    "name": "Функциональность",
                                    "duration": 1
                                }
                            ]
                        },
                        {
                            "name": "Комнаты",
                            "jobs": [
                                {
                                    "name": "Переиспользование эл-та Категории занятий",
                                    "duration": 0
                                }
                            ]
                        },
                        {
                            "name": "Тренеры",
                            "jobs": [
                                {
                                    "name": "Переиспользование эл-та Категории занятий",
                                    "duration": 0
                                }
                            ]
                        }
                    ],
                    "subscreens": [
                        {
                            "name": "Тренер",
                            "parts": [
                                {
                                    "name": "Общие свойства",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Привязки",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Удаление",
                                    "modals": [
                                        {
                                            "name": "Удаление с привязкой",
                                            "jobs": [
                                                {
                                                    "name": "Функциональность",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API",
                                                    "duration": 6
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Удаление без привязки",
                                            "jobs": [
                                                {
                                                    "name": "Верстка, Функциональность, API mocks",
                                                    "duration": 1
                                                },
                                                {
                                                    "name":"API",
                                                    "duration": 6
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Категории занятий",
                            "parts": [
                                {
                                    "name": "Общая информация",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Наличие правил",
                                    "jobs": [
                                        {
                                            "name": "Верстка и функциональность",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Персональные правила (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Документы для ознакомления (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Привязки (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Удаление",
                                    "modals": [
                                        {
                                            "name": "Удаление категории",
                                            "jobs": [
                                                {
                                                    "name": "Верстка",
                                                    "duration": 0
                                                },
                                                {
                                                    "name": "Функциональность",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API",
                                                    "duration": 6
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "modals": [
                                {
                                    "name": "Сохранение изменений",
                                    "jobs": [
                                        {
                                            "name": "Верстка и функциональность",
                                            "duration": 0
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "API (mocks)",
                                    "duration": 1
                                },
                                {
                                    "name": "API",
                                    "duration": 6
                                }
                            ]
                        },
                        {
                            "name": "Комната",
                            "parts": [
                                {
                                    "name": "Общая информация",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Персональные правила (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Документы для ознакомления (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Привязки (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Заблокировать комнату",
                                    "modals": [
                                        {
                                            "name": "Блокировка команты",
                                            "jobs": [
                                                {
                                                    "name": "Верстка",
                                                    "duration": 0
                                                },
                                                {
                                                    "name": "Функциональность",
                                                    "duration": 2
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API",
                                                    "duration": 6
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Удалить комнату",
                                    "modals": [
                                        {
                                            "name": "Удаление команты",
                                            "jobs": [
                                                {
                                                    "name": "Верстка",
                                                    "duration": 0
                                                },
                                                {
                                                    "name": "Функциональность",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 6
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "modals": [
                                {
                                    "name": "Сохранение изменений",
                                    "jobs": [
                                        {
                                            "name": "Верстка и функциональность",
                                            "duration": 0
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "API (mocks)",
                                    "duration": 1
                                },
                                {
                                    "name": "API",
                                    "duration": 6
                                }
                            ]
                        },
                        {
                            "name": "Шаблон",
                            "parts": [
                                {
                                    "name": "Фотографии",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        },
                                        {
                                            "name": "Функциональность",
                                            "duration": 1
                                        },
                                        {
                                            "name": "API (mocks )",
                                            "duration": 1
                                        },
                                        {
                                            "name": "API",
                                            "duration": 6
                                        }
                                    ]
                                },
                                {
                                    "name": "Общая информация ( сюда входят и Название и Общие правила )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        },
                                        {
                                            "name": "Функциональность",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Ссылка на online-ресурс",
                                    "jobs": [
                                        {
                                            "name": "Верстка и функциональность",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Привязки (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "Удаление",
                                    "modals": [
                                        {
                                            "name": "Удаление шаблона",
                                            "jobs": [
                                                {
                                                    "name": "Верстка",
                                                    "duration": 0
                                                },
                                                {
                                                    "name": "Функциональность",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API",
                                                    "duration": 6
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "modals": [
                                {
                                    "name": "Сохранение изменений",
                                    "jobs": [
                                        {
                                            "name": "Верстка и функциональность",
                                            "duration": 0
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "API (mocks)",
                                    "duration": 1
                                }
                            ]
                        }
                    ],
                    "jobs": [
                        {
                            "name": "Функциональность",
                            "duration": 4
                        },
                        {
                            "name": "API (mocks )",
                            "duration": 1
                        },
                        {
                            "name": "API",
                            "duration": 6
                        }
                    ]
                }
            ]
        },
        {
            "name": "SOFSERV-27 Я как Администратор хочу иметь возможность управлять календарем событий",
            "screens": [
                {
                    "name": "Сервис. Вкладка Календарь ( табличное представление )",
                    "jobs": [
                        {
                            "name": "Верстка",
                            "duration": 0
                        },
                        {
                            "name": "Функциональность",
                            "duration": 2
                        },
                        {
                            "name": "API (mocks )",
                            "duration": 1
                        },
                        {
                            "name": "API",
                            "duration": 6
                        }
                    ]
                }
            ],
            "subscreens": [
                {
                    "name": "Создание события",
                    "parts": [
                        {
                            "name": "Общая информация",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 0
                                }
                            ]
                        },
                        {
                            "name": "Участники",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 0
                                }
                            ]
                        },
                        {
                            "name": "Режим работы",
                            "parts": [
                                {
                                    "name": "Период",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 0
                                },
                                {
                                    "name": "Функциональность",
                                    "duration": 12
                                }
                            ]
                        }
                    ],
                    "jobs": [
                        {
                            "name": "API (mocks )",
                            "duration": 1
                        },
                        {
                            "name": "API",
                            "duration": 6
                        }
                    ]
                },
                {
                    "name": "Просмотр события",
                    "parts": [
                        {
                            "name": "Общая информация ( включая все виджеты )",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 0
                                }
                            ]
                        },
                        {
                            "name": "Участники (таблица)",
                            "parts": [
                                {
                                    "name": "Фильтры",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        },
                                        {
                                            "name": "Функциональность",
                                            "duration": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "Таблица",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        },
                                        {
                                            "name": "Функциональность",
                                            "duration": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "Добавление участника",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        },
                                        {
                                            "name": "Функциональность",
                                            "duration": 4
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "jobs": [
                        {
                            "name": "Верстка",
                            "duration": 0
                        },
                        {
                            "name": "Функциональность",
                            "duration": 4
                        },
                        {
                            "name": "API (mocks)",
                            "duration": 1
                        },
                        {
                            "name": "API",
                            "duration": 6
                        }
                    ]
                },
                {
                    "name": "Редактирование события",
                    "jobs":[
                        {
                            "name": "Верстка ( переиспользование )",
                            "duration": 0
                        },
                        {
                            "name": "Функциональность",
                            "duration": 4
                        },
                        {
                            "name": "API (mocks)",
                            "duration": 1

                        },
                        {
                            "name": "API",
                            "duration": 6

                        }
                    ]
                }
            ]
        },
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
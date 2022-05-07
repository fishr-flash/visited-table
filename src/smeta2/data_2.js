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
                                            "name": "Верстка",
                                            "duration": 3
                                        },
                                        {
                                            "name": "Функциональност и API",
                                            "duration": 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Общая информация",
                            "components": [
                                {
                                    "name": "Местоположение",
                                    "jobs": [
                                        {
                                            "name": "функциональность ( подстановка местоположения )",
                                            "duration": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "Описание",
                                    "jobs": [
                                        {
                                            "name": "Заменить на компонент с учетом кол-ва знаков",
                                            "duration": 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Тип сервиса",
                            "jobs": [
                                {
                                    "name": "Верстка и функциональность",
                                    "duration": 1
                                },
                                {
                                    "name": "API ( mocks )",
                                    "duration": 1
                                }
                            ]
                        },
                        {
                            "name": "Правила (простые поля )",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 2
                                },
                                {
                                    "name": "API ( mocks )",
                                    "duration": 2
                                }
                            ]
                        },
                        {
                            "name": "QR-код",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 2
                                },
                                {
                                    "name": "API ( mocks )",
                                    "duration": 2
                                }
                            ]
                        },
                        {
                            "name": "Документы для согласования (переиспользование )",
                            "jobs": [
                                {
                                    "name": "Верстка, функциональность, API ( mocks )",
                                    "duration": 3
                                }
                            ]
                        }
                    ],
                    "jobs": [
                        {
                            "name": "Функциональность",
                            "duration": 12
                        },
                        {
                            "name": "API (mocks )",
                            "duration": 12
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
                                    "name": "Верстка",
                                    "duration": 4
                                },
                                {
                                    "name": "Функциональность (переход к редактированию )",
                                    "duration": 1
                                },
                                {
                                    "name": "API ( mocks )",
                                    "duration": 3
                                }
                            ]
                        },
                        {
                            "name": "Категории занятий",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 4
                                },
                                {
                                    "name": "Функциональность",
                                    "duration": 3
                                }
                            ]
                        },
                        {
                            "name": "Комнаты",
                            "jobs": [
                                {
                                    "name": "Переиспользование эл-та Категории занятий",
                                    "duration": 3
                                }
                            ]
                        },
                        {
                            "name": "Тренеры",
                            "jobs": [
                                {
                                    "name": "Переиспользование эл-та Категории занятий",
                                    "duration": 2
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
                                            "duration": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "Привязки",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 2
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
                                                    "name": "Верстка",
                                                    "duration": 2
                                                },
                                                {
                                                    "name": "Функциональность",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 3
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Удаление без привязки",
                                            "jobs": [
                                                {
                                                    "name": "Верстка, Функциональность, API mocks",
                                                    "duration": 1
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
                                            "duration": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "Наличие правил",
                                    "jobs": [
                                        {
                                            "name": "Верстка и функциональность",
                                            "duration": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "Персональные правила (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "Документы для ознакомления (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "Привязки (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 1
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
                                                    "duration": 2
                                                },
                                                {
                                                    "name": "Функциональность",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 3
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
                                            "duration": 1
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "API (mocks)",
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
                                            "duration": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "Персональные правила (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "Документы для ознакомления (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "Привязки (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 1
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
                                                    "duration": 3
                                                },
                                                {
                                                    "name": "Функциональность",
                                                    "duration": 6
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 2
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
                                                    "duration": 2
                                                },
                                                {
                                                    "name": "Функциональность",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 1
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
                                            "duration": 1
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "API (mocks)",
                                    "duration": 8
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
                                            "duration": 2
                                        },
                                        {
                                            "name": "Функциональность",
                                            "duration": 2
                                        },
                                        {
                                            "name": "API (mocks )",
                                            "duration": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "Общая информация ( сюда входят и Название и Общие правила )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 3
                                        },
                                        {
                                            "name": "Функциональность",
                                            "duration": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "Ссылка на online-ресурс",
                                    "jobs": [
                                        {
                                            "name": "Верстка и функциональность",
                                            "duration": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "Привязки (переиспользование )",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 1
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
                                                    "duration": 2
                                                },
                                                {
                                                    "name": "Функциональность",
                                                    "duration": 1
                                                },
                                                {
                                                    "name": "API (mocks )",
                                                    "duration": 3
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
                                            "duration": 1
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "API (mocks)",
                                    "duration": 8
                                }
                            ]
                        }
                    ],
                    "jobs": [
                        {
                            "name": "Функциональность",
                            "duration": 12
                        },
                        {
                            "name": "API (mocks )",
                            "duration": 12
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
                            "duration": 6
                        },
                        {
                            "name": "Функциональность",
                            "duration": 8
                        },
                        {
                            "name": "API (mocks )",
                            "duration": 5
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
                                    "duration": 1
                                }
                            ]
                        },
                        {
                            "name": "Участники",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 1
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
                                            "duration": 4
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 24
                                },
                                {
                                    "name": "Функциональность",
                                    "duration": 32
                                }
                            ]
                        }
                    ],
                    "jobs": [
                        {
                            "name": "API (mocks )",
                            "duration": 24
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
                                    "duration": 10
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
                                            "duration": 2
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
                                            "duration": 6
                                        },
                                        {
                                            "name": "Функциональность",
                                            "duration": 8
                                        }
                                    ]
                                },
                                {
                                    "name": "Добавление участника",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 8
                                        },
                                        {
                                            "name": "Функциональность",
                                            "duration": 12
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "jobs": [
                        {
                            "name": "Верстка",
                            "duration": 4
                        },
                        {
                            "name": "Функциональность",
                            "duration": 12
                        },
                        {
                            "name": "API (mocks)",
                            "duration": 24
                        }
                    ]
                },
                {
                    "name": "Редактирование события",
                    "jobs":[
                        {
                            "name": "Верстка ( переиспользование )",
                            "duration": 6
                        },
                        {
                            "name": "Функциональность",
                            "duration": 12
                        },
                        {
                            "name": "API (mocks)",
                            "duration": 24

                        }
                    ]
                }
            ]
        },
        {"name": "SOFSERV-44 Разработка экрана Запись (Клиент) /требуется утверждение шаблонов/"}
    ]
}
export default
{
    "stories": [
        {
            "name": "Главный экран",
            "screens": [

                {
                    "name": "Супервизор",
                    "jobs": [
                        {
                            "name": "Нормализация данных",
                            "duration": 3
                        },
                        {
                            "name": "Эмуляция mock-данных",
                            "duration": 1
                        }
                    ],
                    "subscreens": [
                        {
                            "name": "Редактирование Территориального Банка",
                            "components": [
                                {
                                    "name": "Карточка пользователя",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0.5
                                        },
                                        {
                                            "name": "Поведение",
                                            "duration": 1
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 2
                                },
                                {
                                    "name": "Поеведение",
                                    "duration":3
                                },
                                {
                                    "name": "Нормализация данных",
                                    "duration": 1
                                },
                                {
                                    "name": "Эмуляция mock-данных (получение, запись)",
                                    "duration": 2
                                }
                            ]
                        }

                    ]
                },
                {
                    "name": "Мои здания ( Визор ТБ )",
                    "components": [
                        {
                            "name": "Область фильтров",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 3
                                },
                                {
                                    "name": "Поведение",
                                    "duration": 2
                                },
                                {
                                    "name": "Сигнализация",
                                    "duration": 1
                                }
                            ]
                        },
                        {
                            "name": "Контент",
                            "components": [
                                {
                                    "name": "Блок карточек города",
                                    "components": [
                                        {
                                            "name": "Карточка здания",
                                            "jobs": [
                                                {
                                                    "name": "Верстка",
                                                    "duration": 3
                                                }
                                            ]
                                        }
                                    ],
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0.5
                                        }
                                    ]
                                }
                            ]

                        }

                    ],
                    "jobs": [
                        {
                            "name": "Верстка",
                            "duration": 0.5
                        },
                        {
                            "name": "Нормализация данных",
                            "duration": 3
                        },
                        {
                            "name": "Поведение",
                            "duration": 3
                        },
                        {
                            "name": "Эмуляция mock-данных",
                            "duration": 1
                        }
                    ],
                    "subscreens": [
                        {
                            "name": "Редактирование здания",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 3
                                }

                            ],
                            "subscreens": [
                                {
                                    "name": "Модальное окно добавления/удаления",
                                    "components": [
                                        {
                                            "name": "Карточка пользователя",
                                            "jobs": [
                                                {
                                                    "name": "Верстка",
                                                    "duration": 0.5
                                                },
                                                {
                                                    "name": "Поведение",
                                                    "duration": 1
                                                }
                                            ]
                                        }
                                    ],
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 2
                                        },
                                        {
                                            "name": "Поеведение",
                                            "duration":3
                                        },
                                        {
                                            "name": "Нормализация данных",
                                            "duration": 1
                                        },
                                        {
                                            "name": "Эмуляция mock-данных (получение, запись)",
                                            "duration": 2
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Мои сервисы (Администратор здания)",
                    "components": [
                        {
                            "name": "Блок фильтрации",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 1
                                },
                                {
                                    "name": "Поведение",
                                    "duration": 1
                                }
                            ]
                        },
                        {
                            "name": "Контент",
                            "components": [
                                {
                                    "name": "Блок карточек сервисов",
                                    "components": [
                                        {
                                            "name": "Карточка сервиса",
                                            "jobs": [
                                                {
                                                    "name": "Верстка",
                                                    "duration": 3
                                                }
                                            ]
                                        }
                                    ],
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0.5
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 0.5
                                },
                                {
                                    "name": "Нормализация данных",
                                    "duration": 3
                                },
                                {
                                    "name": "Поведение",
                                    "duration": 3
                                },
                                {
                                    "name": "Эмуляция mock-данных",
                                    "duration": 1
                                }
                            ]
                        }
                    ],
                    "jobs": [
                        {
                            "name": "Верстка",
                            "duration": 1
                        },
                        {
                            "name": "Поведение",
                            "duration": 3
                        },
                        {
                            "name": "Нормализация данных",
                            "duration": 4
                        },
                        {
                            "name": "Эмуляция mock-данных",
                            "duration": 2
                        }
                    ]

                }

            ]
        },
        {
            "name": "Редактирование сервиса",
            "screens": [
                {
                    "name": "Редактирование и Добавление нового",
                    "components": [
                        {
                            "name": "Общая информация",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 5
                                },
                                {
                                    "name": "Нормализация данных",
                                    "duration": 1
                                }
                            ]
                        },
                        {
                            "name": "Режим работы",
                            "components": [
                                {
                                    "name": "Дни недели",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 3
                                        },
                                        {
                                            "name": "Поведение",
                                            "duration": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "Список режимов",
                                    "components": [
                                        {
                                            "name": "Карточка режима",
                                            "components": [
                                                {
                                                    "name": "Модальное окно добавления перерыва",
                                                    "jobs": [
                                                        {
                                                            "name": "Верстка",
                                                            "duration": 3
                                                        },
                                                        {
                                                            "name": "Поведение",
                                                            "comment": "Нужно ли контролировать перекрытие диапазонов времени? Возможно ли это",
                                                            "duration": 2

                                                        },
                                                        {
                                                            "name": "Нормализация данных",
                                                            "duration": 2
                                                        }


                                                    ]
                                                }
                                            ],
                                            "jobs": [
                                                {
                                                    "name":"Верстка",
                                                    "duration": 6
                                                },
                                                {
                                                    "name": "Нормализация данных",
                                                    "duration": 4
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "QR-code",
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0.5
                                        }
                                    ]
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 2
                                },
                                {
                                    "name": "Нормализация данных",
                                    "duration": 4
                                }
                            ]
                        },
                        {
                            "name": "Бронирование",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 4
                                },
                                {
                                    "name": "Нормализация данных",
                                    "duration": 2
                                }
                            ]
                        },
                        {
                            "name": "Ответственные",
                            "duration": 1,
                            "comment": "Переиспользуемый компонент"
                        },
                        {
                            "name": "Документы",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 3
                                },
                                {
                                    "name": "Поведение",
                                    "duration": 5
                                },
                                {
                                    "name": "Нормализация данных",
                                    "duration": 1
                                }
                            ]
                        }
                    ],
                    "jobs": [
                        {
                            "name": "Поведение",
                            "duration": 4
                        },
                        {
                            "name": "Нормализация данных",
                            "duration": 6
                        },
                        {
                            "name": "Эмуляция mock-данных",
                            "duration": 3
                        }
                    ]
                },
            ]
        }
    ]
}
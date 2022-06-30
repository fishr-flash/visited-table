export default
{
    "name": "Сторис",
    "stories": [
        {
            "name": "Главный экран",
            "screens": [

                {
                    "name": "Супервизор",
                    "jobs": [
                        {
                            "name": "API (mocks)",
                            "duration": 1
                        }
                    ],
                    "subscreens": [
                        {
                            "name": "Редактирование Территориального Банка",
                            "parts": [
                                {
                                    "name": "Карточка пользователя",
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
                                }
                            ],
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 0
                                },
                                {
                                    "name": "Функциональность",
                                    "duration":3
                                },
                                {
                                    "name": "API (mocks) (получение, запись)",
                                    "duration": 2
                                }
                            ]
                        }

                    ]
                },
                {
                    "name": "Мои здания ( Визор ТБ )",
                    "parts": [
                        {
                            "name": "Область фильтров",
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
                                    "name": "Сигнализация",
                                    "duration": 1
                                }
                            ]
                        },
                        {
                            "name": "Контент",
                            "parts": [
                                {
                                    "name": "Блок карточек города",
                                    "parts": [
                                        {
                                            "name": "Карточка здания",
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
                            "duration": 3
                        },
                        {
                            "name": "API (mocks)",
                            "duration": 1
                        }
                    ],
                    "subscreens": [
                        {
                            "name": "Редактирование здания",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 0
                                }

                            ],
                            "subscreens": [
                                {
                                    "name": "Модальное окно добавления/удаления",
                                    "parts": [
                                        {
                                            "name": "Карточка пользователя",
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
                                        }
                                    ],
                                    "jobs": [
                                        {
                                            "name": "Верстка",
                                            "duration": 0
                                        },
                                        {
                                            "name": "Функциональность",
                                            "duration":3
                                        },
                                        {
                                            "name": "API (mocks)",
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
                    "parts": [
                        {
                            "name": "Блок фильтрации",
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
                            "name": "Контент",
                            "parts": [
                                {
                                    "name": "Блок карточек сервисов",
                                    "parts": [
                                        {
                                            "name": "Карточка сервиса",
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
                                    "duration": 3
                                },
                                {
                                    "name": "API (mocks)",
                                    "duration": 1
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
                            "duration": 3
                        },
                        {
                            "name": "API (mocks)",
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
                    "parts": [
                        {
                            "name": "Общая информация",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 0
                                },
                            ]
                        },
                        {
                            "name": "Режим работы",
                            "parts": [
                                {
                                    "name": "Дни недели",
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
                                    "name": "Список режимов",
                                    "parts": [
                                        {
                                            "name": "Карточка режима",
                                            "parts": [
                                                {
                                                    "name": "Модальное окно добавления перерыва",
                                                    "jobs": [
                                                        {
                                                            "name": "Верстка",
                                                            "duration": 0
                                                        },
                                                        {
                                                            "name": "Функциональность",
                                                            "comment": "Нужно ли контролировать перекрытие диапазонов времени? Возможно ли это",
                                                            "duration": 2

                                                        },
                                                    ]
                                                }
                                            ],
                                            "jobs": [
                                                {
                                                    "name":"Верстка",
                                                    "duration": 0
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "QR-code",
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
                            ]
                        },
                        {
                            "name": "Бронирование",
                            "jobs": [
                                {
                                    "name": "Верстка",
                                    "duration": 0
                                },
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
                                    "duration": 0
                                },
                                {
                                    "name": "Функциональность",
                                    "duration": 5
                                },
                            ]
                        }
                    ],
                    "jobs": [
                        {
                            "name": "Функциональность",
                            "duration": 4
                        },
                        {
                            "name": "API (mocks)",
                            "duration": 3
                        }
                    ]
                },
            ]
        },
        {
            "name":"SOFSERV-1 Я как Администратор, хочу создавать сервис бронирования",
            "screens":[
                {
                    "name":"Сервис",
                    "parts":[
                        {
                          "name":"Общая информация",
                          "components":[
                              {
                                  "name":"Местоположение",
                                  "jobs":[{
                                      "name":"функциональность ( подстановка местоположения )",
                                      "duration": 1
                                  }]
                              },
                              {
                                  "name":"Описание",
                                  "jobs":[
                                      {
                                          "name":"Заменить на компонент с учетом кол-ва знаков",
                                          "duration":1
                                      }
                                  ]
                              }
                          ]
                        },
                        {
                          "name":"Тип сервиса",
                          "jobs":[
                              {
                                  "name":"Верстка и функциональность",
                                  "duration": 0
                              },
                              {
                                  "name":"API",
                                  "duration": 1
                              }
                          ]
                        },
                        {
                            "name":"Правила",
                            "jobs":[
                                {
                                    "name":"Верстка",
                                    "duration": 0
                                },
                                {
                                    "name":"API",
                                    "duration": 2
                                }
                            ]
                        },
                        {
                            "name":"QR-код",
                            "jobs":[
                                {
                                    "name":"Верстка",
                                    "duration": 0
                                },
                                {
                                    "name":"API",
                                    "duration": 2
                                }
                            ]
                        },
                        {
                            "name":"Документы для согласования (переиспользование )",
                            "jobs":[
                                {
                                    "name":"Верстка, функциональность, API",
                                    "duration": 0
                                },
                            ]
                        },
                    ]
                },

            ]
        }
    ]
}
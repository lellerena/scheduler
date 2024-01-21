'use server'

import {
    Schedule,
    scheduleByHours as scheduleByHoursType
} from '@prisma/client'

export interface schedule extends Schedule {
    scheduleByHours: scheduleByHoursType
}

export const getSchedulesByUserId = async (
    userId: string
): Promise<schedule[]> => {
    return [
        {
            name: 'my Schedule',
            id: '1',
            userId: 'skks',
            period: '202410',
            visibility: 'PRIVATE',
            createdAt: new Date(),
            updatedAt: new Date(),
            scheduleByHours: {
                id: 'ss',
                scheduleId: '1',
                updatedAt: new Date(),
                createdAt: new Date(),
                subjectsByDays: {},
                data: [
                    [null, null, null, null, null, null],
                    [
                        {
                            nrc: '2385',
                            name: 'DISEÑO DE SOFTWARE I',
                            shortName: 'DISEÑO DE SOFTWARE I',
                            instructors: 'Nieto Bernal, Wilson',
                            type: 'IST 7121',
                            place: 'BLOQJ1 SDU-51J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '07:30 AM',
                            endTime: '09:28 AM',
                            startParsedTime: '7:30',
                            endParsedTime: '8:28'
                        },
                        {
                            nrc: '1872',
                            name: 'ANÁLISIS  DE DATOS EN INGEN I',
                            shortName: 'ANÁLISIS  DE DATOS EN INGEN I',
                            instructors: 'Nieto Isaza, Santiago',
                            type: 'EST 7042',
                            place: 'BLOQJ1 27J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '07:30 AM',
                            endTime: '09:28 AM',
                            startParsedTime: '7:30',
                            endParsedTime: '8:28'
                        },
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        {
                            nrc: '2385',
                            name: 'DISEÑO DE SOFTWARE I',
                            shortName: 'DISEÑO DE SOFTWARE I',
                            instructors: 'Nieto Bernal, Wilson',
                            type: 'IST 7121',
                            place: 'BLOQJ1 SDU-51J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '07:30 AM',
                            endTime: '09:28 AM',
                            startParsedTime: '8:30',
                            endParsedTime: '9:28'
                        },
                        {
                            nrc: '1872',
                            name: 'ANÁLISIS  DE DATOS EN INGEN I',
                            shortName: 'ANÁLISIS  DE DATOS EN INGEN I',
                            instructors: 'Nieto Isaza, Santiago',
                            type: 'EST 7042',
                            place: 'BLOQJ1 27J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '07:30 AM',
                            endTime: '09:28 AM',
                            startParsedTime: '8:30',
                            endParsedTime: '9:28'
                        },
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        {
                            nrc: '2379',
                            name: 'SISTEMAS OPERACIONALES',
                            shortName: 'SISTEMAS OPERACIONALES',
                            instructors: 'Marquez Diaz, Jose D.',
                            type: 'IST 7081',
                            place: 'BLOQJ1 15J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '09:30 AM',
                            endTime: '10:29 AM',
                            startParsedTime: '9:30',
                            endParsedTime: '10:29'
                        },
                        {
                            nrc: '1872',
                            name: 'ANÁLISIS  DE DATOS EN INGEN I',
                            shortName: 'ANÁLISIS  DE DATOS EN INGEN I',
                            instructors: 'Nieto Isaza, Santiago',
                            type: 'EST 7042',
                            place: 'BLOQJ1 27J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '09:30 AM',
                            endTime: '10:29 AM',
                            startParsedTime: '9:30',
                            endParsedTime: '10:29'
                        },
                        {
                            nrc: '2379',
                            name: 'SISTEMAS OPERACIONALES',
                            shortName: 'SISTEMAS OPERACIONALES',
                            instructors: 'Marquez Diaz, Jose D.',
                            type: 'IST 7081',
                            place: 'BLOQJ1 26J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '09:30 AM',
                            endTime: '11:28 AM',
                            startParsedTime: '9:30',
                            endParsedTime: '10:28'
                        },
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        {
                            nrc: '2379',
                            name: 'SISTEMAS OPERACIONALES',
                            shortName: 'SISTEMAS OPERACIONALES',
                            instructors: 'Marquez Diaz, Jose D.',
                            type: 'IST 7081',
                            place: 'BLOQJ1 26J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '09:30 AM',
                            endTime: '11:28 AM',
                            startParsedTime: '10:30',
                            endParsedTime: '11:28'
                        },
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        {
                            nrc: '2385',
                            name: 'DISEÑO DE SOFTWARE I',
                            shortName: 'DISEÑO DE SOFTWARE I',
                            instructors: 'Nieto Bernal, Wilson',
                            type: 'IST 7121',
                            place: 'BLOQG 5-0G',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '11:30 AM',
                            endTime: '12:29 PM',
                            startParsedTime: '11:30',
                            endParsedTime: '12:29'
                        },
                        null,
                        null,
                        null
                    ],
                    [null, null, null, null, null, null],
                    [null, null, null, null, null, null],
                    [
                        {
                            nrc: '2381',
                            name: 'ESTRUCTURA DEL COMPUTADOR II',
                            shortName: 'ESTRUCTURA DEL COMPUTADOR II',
                            instructors: 'Salazar Silva, Augusto',
                            type: 'IST 7102',
                            place: 'BLOQB SDU2',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '02:30 PM',
                            endTime: '05:27 PM',
                            startParsedTime: '14:30',
                            endParsedTime: '15:27'
                        },
                        null,
                        {
                            nrc: '2555',
                            name: 'TEORIA DE CODIGOS',
                            shortName: 'TEORIA DE CODIGOS',
                            instructors: 'Zuleta Saldarriaga, Yesneri M.',
                            type: 'MAT 4215',
                            place: 'BLOQJ1 27J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '02:30 PM',
                            endTime: '04:28 PM',
                            startParsedTime: '14:30',
                            endParsedTime: '15:28'
                        },
                        null,
                        null,
                        null
                    ],
                    [
                        {
                            nrc: '2381',
                            name: 'ESTRUCTURA DEL COMPUTADOR II',
                            shortName: 'ESTRUCTURA DEL COMPUTADOR II',
                            instructors: 'Salazar Silva, Augusto',
                            type: 'IST 7102',
                            place: 'BLOQB SDU2',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '02:30 PM',
                            endTime: '05:27 PM',
                            startParsedTime: '15:30',
                            endParsedTime: '16:27'
                        },
                        null,
                        {
                            nrc: '2555',
                            name: 'TEORIA DE CODIGOS',
                            shortName: 'TEORIA DE CODIGOS',
                            instructors: 'Zuleta Saldarriaga, Yesneri M.',
                            type: 'MAT 4215',
                            place: 'BLOQJ1 27J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '02:30 PM',
                            endTime: '04:28 PM',
                            startParsedTime: '15:30',
                            endParsedTime: '16:28'
                        },
                        {
                            nrc: '2555',
                            name: 'TEORIA DE CODIGOS',
                            shortName: 'TEORIA DE CODIGOS',
                            instructors: 'Zuleta Saldarriaga, Yesneri M.',
                            type: 'MAT 4215',
                            place: 'BLOQJ1 15J',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '03:30 PM',
                            endTime: '04:29 PM',
                            startParsedTime: '15:30',
                            endParsedTime: '16:29'
                        },
                        null,
                        null
                    ],
                    [
                        {
                            nrc: '2381',
                            name: 'ESTRUCTURA DEL COMPUTADOR II',
                            shortName: 'ESTRUCTURA DEL COMPUTADOR II',
                            instructors: 'Salazar Silva, Augusto',
                            type: 'IST 7102',
                            place: 'BLOQB SDU2',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '02:30 PM',
                            endTime: '05:27 PM',
                            startParsedTime: '16:30',
                            endParsedTime: '17:27'
                        },
                        null,
                        null,
                        null,
                        {
                            nrc: '1872',
                            name: 'ANÁLISIS  DE DATOS EN INGEN I',
                            shortName: 'ANÁLISIS  DE DATOS EN INGEN I',
                            instructors: 'Nieto Isaza, Santiago',
                            type: 'EST 7042',
                            place: 'BLOQG 5-0G',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '04:30 PM',
                            endTime: '06:28 PM',
                            startParsedTime: '16:30',
                            endParsedTime: '17:28'
                        },
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null,
                        {
                            nrc: '1872',
                            name: 'ANÁLISIS  DE DATOS EN INGEN I',
                            shortName: 'ANÁLISIS  DE DATOS EN INGEN I',
                            instructors: 'Nieto Isaza, Santiago',
                            type: 'EST 7042',
                            place: 'BLOQG 5-0G',
                            startDate: 'Jan 29, 2024',
                            endDate: 'May 26, 2024',
                            startTime: '04:30 PM',
                            endTime: '06:28 PM',
                            startParsedTime: '17:30',
                            endParsedTime: '18:28'
                        },
                        null
                    ],
                    [null, null, null, null, null, null],
                    [null, null, null, null, null, null],
                    [null, null, null, null, null, null],
                    [null, null, null, null, null, null],
                    [null, null, null, null, null, null],
                    [null, null, null, null, null, null]
                ]
            }
        }
    ]
}

export const getScheduleById = async (scheduleId: string) => {
    const rawSchedule = await getSchedulesByUserId('1')
    return rawSchedule[0]
}

export interface Subject {
    nrc: string
    name: string
    shortName: string
    instructors: string
    color: string
    type: string
    place: string
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    startParsedTime: string
    endParsedTime: string
}

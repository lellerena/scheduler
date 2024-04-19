import { ScheduleIdColumn } from '@/components/schedule/schedule-columns'
import { Subject } from './schedules'

const rawSchedules = [
    {
        id: '65b2fc6554157c7f8bb40d30',
        userId: '65b2fbf554157c7f8bb40d2d',
        name: 'Septimo',
        period: '202410',
        current: true,
        visibility: 'PRIVATE',
        createdAt: '2024-01-26T00:27:17.017Z',
        updatedAt: '2024-01-26T00:27:17.017Z',
        scheduleByHours: [
            {
                hour: '6:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '7:30',
                lunes: {
                    nrc: '1355',
                    name: 'LOGISTICS AND DISTRIBUTION',
                    shortName: 'LOGISTICS AND DISTRIBUTION',
                    instructors: 'Redondo Fajardo, Javier I.',
                    type: 'ADM 0017',
                    place: 'BLOQC 35C',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '07:30 AM',
                    endTime: '08:29 AM',
                    startParsedTime: '7:30',
                    endParsedTime: '8:29',
                    color: '#818CF8'
                },
                martes: null,
                miercoles: {
                    nrc: '1898',
                    name: 'INTRODUCCION A LA FILOSOFIA',
                    shortName: 'INTRODUCCION A LA FILOSOFIA',
                    instructors:
                        'Mercado Castro, Santiago D.,Serrano Lopez, Federico G.',
                    type: 'FIL 4020',
                    place: 'BLOQG2 13G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '07:30 AM',
                    endTime: '09:28 AM',
                    startParsedTime: '7:30',
                    endParsedTime: '8:28',
                    color: '#F472B6'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '8:30',
                lunes: {
                    nrc: '1352',
                    name: 'COMPANY  VALUATION',
                    shortName: 'COMPANY  VALUATION',
                    instructors: 'Gomez Bravo, Yuli P.',
                    type: 'ADM 0016',
                    place: 'BLOQG2 24G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '08:30 AM',
                    endTime: '09:29 AM',
                    startParsedTime: '8:30',
                    endParsedTime: '9:29',
                    color: '#34D399'
                },
                martes: null,
                miercoles: {
                    nrc: '1898',
                    name: 'INTRODUCCION A LA FILOSOFIA',
                    shortName: 'INTRODUCCION A LA FILOSOFIA',
                    instructors:
                        'Mercado Castro, Santiago D.,Serrano Lopez, Federico G.',
                    type: 'FIL 4020',
                    place: 'BLOQG2 13G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '07:30 AM',
                    endTime: '09:28 AM',
                    startParsedTime: '8:30',
                    endParsedTime: '9:28',
                    color: '#F472B6'
                },
                jueves: {
                    nrc: '1898',
                    name: 'INTRODUCCION A LA FILOSOFIA',
                    shortName: 'INTRODUCCION A LA FILOSOFIA',
                    instructors:
                        'Mercado Castro, Santiago D.,Serrano Lopez, Federico G.',
                    type: 'FIL 4020',
                    place: 'BLOQG2 25G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '08:30 AM',
                    endTime: '09:29 AM',
                    startParsedTime: '8:30',
                    endParsedTime: '9:29',
                    color: '#F472B6'
                },
                viernes: null,
                sabado: null
            },
            {
                hour: '9:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '10:30',
                lunes: {
                    nrc: '2575',
                    name: 'MARKETING  MANAGEMENT',
                    shortName: 'MARKETING  MANAGEMENT',
                    instructors: 'Arevalo Silva, Erika',
                    type: 'MDO 0011',
                    place: 'BLOQC 31C',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '10:30 AM',
                    endTime: '11:29 AM',
                    startParsedTime: '10:30',
                    endParsedTime: '11:29',
                    color: '#F97316'
                },
                martes: null,
                miercoles: {
                    nrc: '1352',
                    name: 'COMPANY  VALUATION',
                    shortName: 'COMPANY  VALUATION',
                    instructors: 'Gomez Bravo, Yuli P.',
                    type: 'ADM 0016',
                    place: 'BLOQG2 24G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '10:30 AM',
                    endTime: '12:28 PM',
                    startParsedTime: '10:30',
                    endParsedTime: '11:28',
                    color: '#34D399'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '11:30',
                lunes: null,
                martes: null,
                miercoles: {
                    nrc: '1352',
                    name: 'COMPANY  VALUATION',
                    shortName: 'COMPANY  VALUATION',
                    instructors: 'Gomez Bravo, Yuli P.',
                    type: 'ADM 0016',
                    place: 'BLOQG2 24G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '10:30 AM',
                    endTime: '12:28 PM',
                    startParsedTime: '11:30',
                    endParsedTime: '12:28',
                    color: '#34D399'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '12:30',
                lunes: null,
                martes: null,
                miercoles: {
                    nrc: '1355',
                    name: 'LOGISTICS AND DISTRIBUTION',
                    shortName: 'LOGISTICS AND DISTRIBUTION',
                    instructors: 'Redondo Fajardo, Javier I.',
                    type: 'ADM 0017',
                    place: 'BLOQE 11E',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '12:30 PM',
                    endTime: '02:28 PM',
                    startParsedTime: '12:30',
                    endParsedTime: '13:28',
                    color: '#818CF8'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '13:30',
                lunes: null,
                martes: null,
                miercoles: {
                    nrc: '1355',
                    name: 'LOGISTICS AND DISTRIBUTION',
                    shortName: 'LOGISTICS AND DISTRIBUTION',
                    instructors: 'Redondo Fajardo, Javier I.',
                    type: 'ADM 0017',
                    place: 'BLOQE 11E',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '12:30 PM',
                    endTime: '02:28 PM',
                    startParsedTime: '13:30',
                    endParsedTime: '14:28',
                    color: '#818CF8'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '14:30',
                lunes: null,
                martes: {
                    nrc: '2575',
                    name: 'MARKETING  MANAGEMENT',
                    shortName: 'MARKETING  MANAGEMENT',
                    instructors: 'Arevalo Silva, Erika',
                    type: 'MDO 0011',
                    place: 'BLOQG2 34G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '02:30 PM',
                    endTime: '04:28 PM',
                    startParsedTime: '14:30',
                    endParsedTime: '15:28',
                    color: '#F97316'
                },
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '15:30',
                lunes: null,
                martes: {
                    nrc: '2575',
                    name: 'MARKETING  MANAGEMENT',
                    shortName: 'MARKETING  MANAGEMENT',
                    instructors: 'Arevalo Silva, Erika',
                    type: 'MDO 0011',
                    place: 'BLOQG2 34G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '02:30 PM',
                    endTime: '04:28 PM',
                    startParsedTime: '15:30',
                    endParsedTime: '16:28',
                    color: '#F97316'
                },
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '16:30',
                lunes: null,
                martes: {
                    nrc: '1356',
                    name: 'PROJECT MANAGEMENT',
                    shortName: 'PROJECT MANAGEMENT',
                    instructors: 'Saavedra Camerano, Andres',
                    type: 'ADM 0018',
                    place: 'BLOQG2 33G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '04:30 PM',
                    endTime: '06:28 PM',
                    startParsedTime: '16:30',
                    endParsedTime: '17:28',
                    color: '#60A5FA'
                },
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '17:30',
                lunes: {
                    nrc: '1356',
                    name: 'PROJECT MANAGEMENT',
                    shortName: 'PROJECT MANAGEMENT',
                    instructors: 'Saavedra Camerano, Andres',
                    type: 'ADM 0018',
                    place: 'BLOQG1 45G1',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '05:30 PM',
                    endTime: '06:29 PM',
                    startParsedTime: '17:30',
                    endParsedTime: '18:29',
                    color: '#60A5FA'
                },
                martes: {
                    nrc: '1356',
                    name: 'PROJECT MANAGEMENT',
                    shortName: 'PROJECT MANAGEMENT',
                    instructors: 'Saavedra Camerano, Andres',
                    type: 'ADM 0018',
                    place: 'BLOQG2 33G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '04:30 PM',
                    endTime: '06:28 PM',
                    startParsedTime: '17:30',
                    endParsedTime: '18:28',
                    color: '#60A5FA'
                },
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '18:30',
                lunes: {
                    nrc: '4201',
                    name: 'BUSINESS ENGLISH I ADM',
                    shortName: 'BUSINESS ENGLISH I ADM',
                    instructors: 'Diaz De La Cruz, Mayra A.',
                    type: 'IGL 0011',
                    place: 'BLOI3 I3-21',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '06:30 PM',
                    endTime: '08:28 PM',
                    startParsedTime: '18:30',
                    endParsedTime: '19:28',
                    color: '#FCD34D'
                },
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '19:30',
                lunes: {
                    nrc: '4201',
                    name: 'BUSINESS ENGLISH I ADM',
                    shortName: 'BUSINESS ENGLISH I ADM',
                    instructors: 'Diaz De La Cruz, Mayra A.',
                    type: 'IGL 0011',
                    place: 'BLOI3 I3-21',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '06:30 PM',
                    endTime: '08:28 PM',
                    startParsedTime: '19:30',
                    endParsedTime: '20:28',
                    color: '#FCD34D'
                },
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            }
        ],
        user: { name: 'Javier', image: null }
    },
    {
        id: '65b2fba154157c7f8bb40d2c',
        userId: '65b2fac654157c7f8bb40d28',
        name: 'Septimo',
        period: '202410',
        current: true,
        visibility: 'PRIVATE',
        createdAt: '2024-01-26T00:24:01.278Z',
        updatedAt: '2024-01-26T00:24:01.278Z',
        scheduleByHours: [
            {
                hour: '6:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '7:30',
                lunes: null,
                martes: {
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
                    endParsedTime: '8:28',
                    color: '#F97316'
                },
                miercoles: null,
                jueves: {
                    nrc: '2538',
                    name: 'ECUACIONES DIFERENCIALES',
                    shortName: 'ECUACIONES DIFERENCIALES',
                    instructors: 'Barraza Martinez, Bienvenido',
                    type: 'MAT 4011',
                    place: 'BLOQE 33E',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '07:30 AM',
                    endTime: '09:28 AM',
                    startParsedTime: '7:30',
                    endParsedTime: '8:28',
                    color: '#3B82F6'
                },
                viernes: null,
                sabado: null
            },
            {
                hour: '8:30',
                lunes: null,
                martes: {
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
                    endParsedTime: '9:28',
                    color: '#F97316'
                },
                miercoles: null,
                jueves: {
                    nrc: '2538',
                    name: 'ECUACIONES DIFERENCIALES',
                    shortName: 'ECUACIONES DIFERENCIALES',
                    instructors: 'Barraza Martinez, Bienvenido',
                    type: 'MAT 4011',
                    place: 'BLOQE 33E',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '07:30 AM',
                    endTime: '09:28 AM',
                    startParsedTime: '8:30',
                    endParsedTime: '9:28',
                    color: '#3B82F6'
                },
                viernes: {
                    nrc: '1335',
                    name: 'TERMODINAMICA I',
                    shortName: 'TERMODINAMICA I',
                    instructors: 'Acuña Garrido, Francisco E.',
                    type: 'IME 7061',
                    place: 'BLOQG2 35G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '08:30 AM',
                    endTime: '09:29 AM',
                    startParsedTime: '8:30',
                    endParsedTime: '9:29',
                    color: '#F472B6'
                },
                sabado: null
            },
            {
                hour: '9:30',
                lunes: {
                    nrc: '2533',
                    name: 'CALCULO 3',
                    shortName: 'CALCULO 3',
                    instructors: 'Uribe Jongbloed, Bernardo',
                    type: 'MAT 1121',
                    place: 'BLOQE 33E',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '09:30 AM',
                    endTime: '11:28 AM',
                    startParsedTime: '9:30',
                    endParsedTime: '10:28',
                    color: '#10B981'
                },
                martes: null,
                miercoles: {
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
                    endParsedTime: '10:29',
                    color: '#F97316'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '10:30',
                lunes: {
                    nrc: '2533',
                    name: 'CALCULO 3',
                    shortName: 'CALCULO 3',
                    instructors: 'Uribe Jongbloed, Bernardo',
                    type: 'MAT 1121',
                    place: 'BLOQE 33E',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '09:30 AM',
                    endTime: '11:28 AM',
                    startParsedTime: '10:30',
                    endParsedTime: '11:28',
                    color: '#10B981'
                },
                martes: {
                    nrc: '2533',
                    name: 'CALCULO 3',
                    shortName: 'CALCULO 3',
                    instructors: 'Uribe Jongbloed, Bernardo',
                    type: 'MAT 1121',
                    place: 'BLOQE 33E',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '10:30 AM',
                    endTime: '12:28 PM',
                    startParsedTime: '10:30',
                    endParsedTime: '11:28',
                    color: '#10B981'
                },
                miercoles: {
                    nrc: '2273',
                    name: 'MECÁNICA DE SOLIDOS',
                    shortName: 'MECÁNICA DE SOLIDOS',
                    instructors: 'ZAMBRANO RODRIGUEZ, HABIB',
                    type: 'IME 4200',
                    place: 'BLOQG2 36G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '10:30 AM',
                    endTime: '12:28 PM',
                    startParsedTime: '10:30',
                    endParsedTime: '11:28',
                    color: '#FCD34D'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '11:30',
                lunes: null,
                martes: {
                    nrc: '2533',
                    name: 'CALCULO 3',
                    shortName: 'CALCULO 3',
                    instructors: 'Uribe Jongbloed, Bernardo',
                    type: 'MAT 1121',
                    place: 'BLOQE 33E',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '10:30 AM',
                    endTime: '12:28 PM',
                    startParsedTime: '11:30',
                    endParsedTime: '12:28',
                    color: '#10B981'
                },
                miercoles: {
                    nrc: '2273',
                    name: 'MECÁNICA DE SOLIDOS',
                    shortName: 'MECÁNICA DE SOLIDOS',
                    instructors: 'ZAMBRANO RODRIGUEZ, HABIB',
                    type: 'IME 4200',
                    place: 'BLOQG2 36G2',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '10:30 AM',
                    endTime: '12:28 PM',
                    startParsedTime: '11:30',
                    endParsedTime: '12:28',
                    color: '#FCD34D'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '12:30',
                lunes: {
                    nrc: '1292',
                    name: 'EXIGENCIA  INGLES VI',
                    shortName: 'EXIGENCIA  INGLES VI',
                    instructors: 'Bermudez Puello, Edgar A.',
                    type: 'IGL 4915',
                    place: 'BLOI1 I1-25',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '12:30 PM',
                    endTime: '01:29 PM',
                    startParsedTime: '12:30',
                    endParsedTime: '13:29',
                    color: '#A78BFA'
                },
                martes: null,
                miercoles: {
                    nrc: '1292',
                    name: 'EXIGENCIA  INGLES VI',
                    shortName: 'EXIGENCIA  INGLES VI',
                    instructors: 'Bermudez Puello, Edgar A.',
                    type: 'IGL 4915',
                    place: 'BLOQG1 54G1',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '12:30 PM',
                    endTime: '02:28 PM',
                    startParsedTime: '12:30',
                    endParsedTime: '13:28',
                    color: '#A78BFA'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '13:30',
                lunes: null,
                martes: null,
                miercoles: {
                    nrc: '1292',
                    name: 'EXIGENCIA  INGLES VI',
                    shortName: 'EXIGENCIA  INGLES VI',
                    instructors: 'Bermudez Puello, Edgar A.',
                    type: 'IGL 4915',
                    place: 'BLOQG1 54G1',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '12:30 PM',
                    endTime: '02:28 PM',
                    startParsedTime: '13:30',
                    endParsedTime: '14:28',
                    color: '#A78BFA'
                },
                jueves: null,
                viernes: {
                    nrc: '1292',
                    name: 'EXIGENCIA  INGLES VI',
                    shortName: 'EXIGENCIA  INGLES VI',
                    instructors: 'Bermudez Puello, Edgar A.',
                    type: 'IGL 4915',
                    place: 'BLOQG1 32G1',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '01:30 PM',
                    endTime: '02:29 PM',
                    startParsedTime: '13:30',
                    endParsedTime: '14:29',
                    color: '#A78BFA'
                },
                sabado: null
            },
            {
                hour: '14:30',
                lunes: null,
                martes: null,
                miercoles: {
                    nrc: '1335',
                    name: 'TERMODINAMICA I',
                    shortName: 'TERMODINAMICA I',
                    instructors: 'Acuña Garrido, Francisco E.',
                    type: 'IME 7061',
                    place: 'BLOI4 I4-S11',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '02:30 PM',
                    endTime: '04:28 PM',
                    startParsedTime: '14:30',
                    endParsedTime: '15:28',
                    color: '#F472B6'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '15:30',
                lunes: null,
                martes: null,
                miercoles: {
                    nrc: '1335',
                    name: 'TERMODINAMICA I',
                    shortName: 'TERMODINAMICA I',
                    instructors: 'Acuña Garrido, Francisco E.',
                    type: 'IME 7061',
                    place: 'BLOI4 I4-S11',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '02:30 PM',
                    endTime: '04:28 PM',
                    startParsedTime: '15:30',
                    endParsedTime: '16:28',
                    color: '#F472B6'
                },
                jueves: {
                    nrc: '2273',
                    name: 'MECÁNICA DE SOLIDOS',
                    shortName: 'MECÁNICA DE SOLIDOS',
                    instructors: 'ZAMBRANO RODRIGUEZ, HABIB',
                    type: 'IME 4200',
                    place: 'BLOQD 23D',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '03:30 PM',
                    endTime: '04:29 PM',
                    startParsedTime: '15:30',
                    endParsedTime: '16:29',
                    color: '#FCD34D'
                },
                viernes: null,
                sabado: null
            },
            {
                hour: '16:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: {
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
                    endParsedTime: '17:28',
                    color: '#F97316'
                },
                sabado: null
            },
            {
                hour: '17:30',
                lunes: {
                    nrc: '2538',
                    name: 'ECUACIONES DIFERENCIALES',
                    shortName: 'ECUACIONES DIFERENCIALES',
                    instructors: 'Barraza Martinez, Bienvenido',
                    type: 'MAT 4011',
                    place: 'BLOQE 33E',
                    startDate: 'Jan 29, 2024',
                    endDate: 'May 26, 2024',
                    startTime: '05:30 PM',
                    endTime: '06:29 PM',
                    startParsedTime: '17:30',
                    endParsedTime: '18:29',
                    color: '#3B82F6'
                },
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: {
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
                    endParsedTime: '18:28',
                    color: '#F97316'
                },
                sabado: null
            },
            {
                hour: '18:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '19:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            }
        ],
        user: { name: 'Miller', image: null }
    },
    {
        id: '65ade03c331c46bf8907c42e',
        userId: '65ade019331c46bf8907c42c',
        name: 'Septimo',
        period: '202410',
        current: true,
        visibility: 'PRIVATE',
        createdAt: '2024-01-22T03:25:48.062Z',
        updatedAt: '2024-01-25T20:35:52.748Z',
        scheduleByHours: [
            {
                hour: '6:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '7:30',
                lunes: {
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
                    endParsedTime: '8:28',
                    color: '#34D399'
                },
                martes: {
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
                    endParsedTime: '8:28',
                    color: '#F472B6'
                },
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '8:30',
                lunes: {
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
                    endParsedTime: '9:28',
                    color: '#34D399'
                },
                martes: {
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
                    endParsedTime: '9:28',
                    color: '#F472B6'
                },
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '9:30',
                lunes: null,
                martes: {
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
                    endParsedTime: '10:29',
                    color: '#FCD34D'
                },
                miercoles: {
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
                    endParsedTime: '10:29',
                    color: '#F472B6'
                },
                jueves: {
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
                    endParsedTime: '10:28',
                    color: '#FCD34D'
                },
                viernes: null,
                sabado: null
            },
            {
                hour: '10:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: {
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
                    endParsedTime: '11:28',
                    color: '#FCD34D'
                },
                viernes: null,
                sabado: null
            },
            {
                hour: '11:30',
                lunes: null,
                martes: null,
                miercoles: {
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
                    endParsedTime: '12:29',
                    color: '#34D399'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '12:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '13:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '14:30',
                lunes: {
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
                    endParsedTime: '15:27',
                    color: '#3B82F6'
                },
                martes: null,
                miercoles: {
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
                    endParsedTime: '15:28',
                    color: '#60A5FA'
                },
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '15:30',
                lunes: {
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
                    endParsedTime: '16:27',
                    color: '#3B82F6'
                },
                martes: null,
                miercoles: {
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
                    endParsedTime: '16:28',
                    color: '#60A5FA'
                },
                jueves: {
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
                    endParsedTime: '16:29',
                    color: '#60A5FA'
                },
                viernes: null,
                sabado: null
            },
            {
                hour: '16:30',
                lunes: {
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
                    endParsedTime: '17:27',
                    color: '#3B82F6'
                },
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: {
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
                    endParsedTime: '17:28',
                    color: '#F472B6'
                },
                sabado: null
            },
            {
                hour: '17:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: {
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
                    endParsedTime: '18:28',
                    color: '#F472B6'
                },
                sabado: null
            },
            {
                hour: '18:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            },
            {
                hour: '19:30',
                lunes: null,
                martes: null,
                miercoles: null,
                jueves: null,
                viernes: null,
                sabado: null
            }
        ],
        user: {
            name: 'luis eduardo llerena',
            image: 'https://lh3.googleusercontent.com/a/ACg8ocJJSyfALNVnKDWjefcV-sbPERVSivcgvJINYYsiZHW_=s96-c'
        }
    }
]

const schedules = rawSchedules.map((raw) => {
    const schedule = {
        [raw.user.name]: {
            data: raw.scheduleByHours as unknown as ScheduleIdColumn[],
            image: raw.user.image
        }
    }
    return schedule
})

const schedule = [] as ScheduleIdColumn[]
const invertedSchedule = [] as ScheduleIdColumn[]

const unifiedSchedule = schedules.forEach((rawschedule) => {
    const name = Object.keys(rawschedule)[0]
    const data = rawschedule[name].data

    data.forEach((time, index) => {
        const keys = Object.keys(time).filter((key) => key !== 'hour')
        if (!schedule[index]) {
            schedule[index] = { hour: time.hour } as ScheduleIdColumn
        }

        if (!invertedSchedule[index]) {
            invertedSchedule[index] = { hour: time.hour } as ScheduleIdColumn
        }

        keys.forEach((key) => {
            if (time[key]) {
                if (!schedule[index][key]) {
                    schedule[index][key] = []
                }
                schedule[index][key].push({
                    ...time[key],
                    name,
                    image: rawschedule[name].image
                })
            } else {
                if (!invertedSchedule[index][key]) {
                    invertedSchedule[index][key] = []
                }
                invertedSchedule[index][key].push({
                    ...time[key],
                    name,
                    image: rawschedule[name].image
                })
            }
        })
    })
})

console.log(invertedSchedule)

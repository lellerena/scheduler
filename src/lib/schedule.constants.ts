export const days = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado'
]

const generateHours = (start: number, end: number) => {
    const hours = []
    for (let i = start; i <= end; i++) {
        hours.push(`${i}:30`)
    }
    return hours
}

export const colors = [
    '#F87171',
    '#FBBF24',
    '#34D399',
    '#60A5FA',
    '#A78BFA',
    '#F472B6',
    '#FCD34D',
    '#86EFAC',
    '#818CF8',
    '#D4D4D8',
    '#EC4899',
    '#F97316',
    '#10B981',
    '#3B82F6'
]
export const hours = generateHours(6, 19)

function getMonthName() {
    const date = new Date()
    const month = date.getMonth()
    const monthNames = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ]
    return monthNames[month]
}

export default getMonthName;
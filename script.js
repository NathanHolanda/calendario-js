const date = new Date()
const displayedDate =  new Date()

const renderCalendar = () => {
    const month = date.getMonth()
    const year = date.getFullYear()

    const monthDays = document.querySelector(".days")

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    date.setDate(1)
    let firstDayIndex = date.getDay()
    let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    let lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    let nextDays = 7 - lastDayIndex - 1

    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
    
    if(year === new Date().getFullYear())
        document.querySelector(".date h4").innerHTML = months[date.getMonth()]
    else
        document.querySelector(".date h4").innerHTML = months[date.getMonth()] + " (" + year + ")"
    
    function toPTBRDate(date){
        let weekday = date.substring(0,3)
        let month = date.substring(4,7)
        let day = date.substring(8,11)
        let year = date.substring(11,16)

        let engWeekdays = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ]

        let ptWeekdays = [
            "Domingo",
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado"
        ]

        let engMonths = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ]

        let ptMonths = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ]

        for(let i in engWeekdays){
            if(engWeekdays[i] === weekday)
                weekday = ptWeekdays[i]
        }

        for(let j in engMonths){
            if(engMonths[j] === month)
                month = ptMonths[j]
        }

        if(parseInt(day) < 10){
            day = day.substring(1,2)
        }

        date = weekday + ", " + day + " de " + month + " de " + year
        return date
    }

    let convertedDate = toPTBRDate(displayedDate.toDateString())
    document.querySelector(".date p").innerHTML = convertedDate

    let days = ""

    for(let i = firstDayIndex; i > 0; i--){
        days += `<div class="prevOrNextDays day">${prevLastDay - i + 1}</div>`
    }        
    
    for(let j = 1; j <= lastDay; j++){
        if(j == displayedDate.getDate() && month === new Date().getMonth() && year === new Date().getFullYear())
            days += `<div class="day today">${j}</div>`
        else
            days += `<div class="day">${j}</div>`
    }

    for(let k = 1; k <= nextDays; k++){
        days += `<div class="prevOrNextDays day">${k}</div>`
        monthDays.innerHTML = days
    }
}

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1)

    renderCalendar()
})

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1)

    renderCalendar()
})

renderCalendar()

let birthYearUser = prompt('Введіть сюди рік вашого народження')

if(birthYearUser === null){
    alert("Шкода, що ви не захотіли вводити свій рік народження.")
}else{
    let cityUser = prompt('Введіть ваше місто')
    if(cityUser === null){
        alert("Шкода, що ви не захотіли вводити своє місто")
    }else{
        let userSport = prompt('Введіть улюблений вид спорту')
        if(userSport === null){
            alert("Шкода, що ви не захотіли вводити свій улюблений вид спорту.")
        }else{
            let yearUser = 2024 - birthYearUser
            let message = `Ваш вік : ${yearUser}\n`
            if (cityUser=== "Київ" || cityUser === "Вашингтон" || cityUser === "Лондон") {
                message += `Ти живеш у столиці ${getCountry(cityUser)}!\n`;
            } else {
                message += `Ти живеш у місті ${cityUser}!\n`;
            }
            const sport = {
                'футбол': 'Андрієм Шевченко',
                'бокс': 'Володимиром Кличко',
                'теніс': 'Рафаєлем Надалем'
            }
            if (sport.hasOwnProperty(userSport)) {
                message += `Круто! Хочеш стати ${sport[userSport]}?\n`;
                } else {
                message += "Круто! Хочеш стати чемпіоном у своєму улюбленому виді спорту?\n";
                }
            alert(message);
        }
    }
    function getCountry (cityUser){
    const capitalCity = {
        'Київ': 'України',
        'Лондон': 'Великобританії',
        'Вашингтон':'США'
    }
    return capitalCity[cityUser] || "не відомої країни";
}
}

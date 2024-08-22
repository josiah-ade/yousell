export async function dateTime(){
    let dateD = new Date();
    let time = dateD.toLocaleTimeString();
    let dateString = dateD.toDateString();
    let Month = dateD.getMonth() + 1;
    let newMonth;
    if(Month < 10){
        newMonth = '0'+Month;
    }else{
        newMonth = Month;
    }
    let date = dateD.getFullYear() +"-"+ newMonth + "-"+ dateD.getDate();

    return {date:date, dateString: dateString, time: time}
}
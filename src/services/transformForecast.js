import moment  from 'moment';
import transformWeather from './transformWeather'
import 'moment/locale/es'

/*const transformForecast =(data) =>{
    console.log(JSON.stringify(data));
};
*/


const transformForecast =data =>(
    data.list.filter(item=>(
       moment.unix(item.dt).utc().hour()===6 ||
       moment.unix(item.dt).utc().hour()===12||
       moment.unix(item.dt).utc().hour()===18
    )).map(item=>(
        {
            weekDay:moment.unix(item.dt).format('ddd'),
            hour:moment.unix(item.dt).hour(),
            data: transformWeather(item)
            /*data:{
                humidity:,
                termperature,
                wind:,
                weatherState:
            }*/
        }
    ))

 

);
    //return ({    });
//}


export default transformForecast;
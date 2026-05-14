import Image from "react-bootstrap/Image"



import type {WeatherCondition} from "../services/OWMAPI.types"
interface WeatherCondProps
{

    data:WeatherCondition
}




const WeatherCond: React.FC <WeatherCondProps>=({data})=>{
    
    return(
    <li>
    <Image
     src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
      title={data.main} 
      alt={data.main} />
      <span className="condition-description">
        {data.description}
      </span>
      
    </li>
    )
}


export default WeatherCond;
  const AVERAGE_TEMPERATURE = {
      today: 77.5,
      tomorrow: 80
  }

  function getTomorrowTemperature(averageTemperature){

    const {tomorrow : tomorrowTemperature} = averageTemperature;
    return tomorrowTemperature;
  }

  let temperatureOfTomorrow = getTomorrowTemperature(AVERAGE_TEMPERATURE);

  console.log(temperatureOfTomorrow);

  //Destructuring of Array
  let ages = [22,24,66,57,58]
  const [a,d,f,h,k] = ages;
 
 
  console.log(a,d,f,h,k);
  
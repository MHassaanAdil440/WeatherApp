// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { StyleSheet } from 'react-native';

// const MainAppScreen = () => {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     // Function to fetch weather data from the OpenWeatherMap API
//     const fetchWeatherData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/onecall?lat=74.3587&lon=31.5204&appid=895284fb2d2c50a520ea537456963d9c`
//         );
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchWeatherData();
//   }, []);

//   // Function to map the weather icon code to the corresponding image
//   const getWeatherImage = (iconCode) => {
//     switch (iconCode) {
//       case '01n':
//         return require('../images/Moon.png');
//       case '10d':
//       case '10n':
//         return require('../images/Rainyday.png');
//       case '02d':
//       case '03d':
//       case '04d':
//         return require('../images/Cloudyday.png');
//       case '02n':
//       case '03n':
//       case '04n':
//         return require('../images/Cloudynight.png');
//       case '13d':
//       case '13n':
//         return require('../images/Snowfall.png');
//       default:
//         return require('../images/Sun.png');
//     }
//   };

//   const renderItem = ({ item }) => {
//     const icon = item.weather[0].icon;
//     const description = item.weather[0].description;
//     const date = new Date(item.dt * 1000).toLocaleDateString();

//     return (
//       <View style={styles.weatherItem}>
//         <Image source={getWeatherImage(icon)} style={styles.weatherIcon} />
//         <Text>{description}</Text>
//         <Text>{date}</Text>
//       </View>
//     );
//   };

//   if (!weatherData) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading weather data...</Text>
//       </View>
//     );
//   }

//   const currentWeather = weatherData.current;
//   const dailyWeather = weatherData.daily.slice(0, 15); // Show weather for the next 15 days

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Current Weather</Text>
//       <Image
//         source={getWeatherImage(currentWeather.weather[0].icon)}
//         style={styles.currentWeatherIcon}
//       />
//       <Text style={styles.weatherDescription}>{currentWeather.weather[0].description}</Text>
//       <Text style={styles.weatherTemperature}>{currentWeather.temp}°C</Text>
//       <Text style={styles.weatherLocation}>City Name</Text>
//       <Text style={styles.weatherTime}>{new Date().toLocaleTimeString()}</Text>
//       <Text style={styles.header}>Next 15 Days</Text>
//       <FlatList
//         data={dailyWeather}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.dt.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#54B435',
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 16,
//   },
//   weatherItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   weatherIcon: {
//     width: 50,
//     height: 50,
//     marginRight: 10,
//   },
//   currentWeatherIcon: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//   },
//   weatherDescription: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   weatherTemperature: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 16,
//   },
//   weatherLocation: {
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   weatherTime: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     marginBottom: 16,
//   },
// });

// export default MainAppScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const MainAppScreen = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Function to fetch weather data from the OpenWeatherMap API
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=74.3587&lon=31.5204&appid=895284fb2d2c50a520ea537456963d9c`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  // Function to map the weather icon code to the corresponding image
  const getWeatherImage = (iconCode) => {
    switch (iconCode) {
      case '01n':
        return require('../images/Moon.png');
      case '10d':
      case '10n':
        return require('../images/Rainyday.png');
      case '02d':
      case '03d':
      case '04d':
        return require('../images/Cloudyday.png');
      case '02n':
      case '03n':
      case '04n':
        return require('../images/Cloudynight.png');
      case '13d':
      case '13n':
        return require('../images/Snowfall.png');
      default:
        return require('../images/Sun.png');
    }
  };

  const renderItem = ({ item }) => {
    const icon = item.weather[0].icon;
    const description = item.weather[0].description;
    const date = new Date(item.dt * 1000).toLocaleDateString();
    const temperature = Math.round(item.temp.day - 273.15); // Convert temperature from Kelvin to Celsius
    const uvi = item.uvi;
    const windSpeed = item.wind_speed;
    const humidity = item.humidity;

    return (
      <View style={styles.weatherItem}>
        <Image source={getWeatherImage(icon)} style={styles.weatherIcon} />
        <Text>{description}</Text>
        <Text>{date}</Text>
        <Text>Temperature: {temperature}°C</Text>
        <Text>UV Index: {uvi}</Text>
        <Text>Wind Speed: {windSpeed} m/s</Text>
        <Text>Humidity: {humidity}%</Text>
      </View>
    );
  };

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Loading weather data...</Text>
      </View>
    );
  }

  const currentWeather = weatherData.current;
  const dailyWeather = weatherData.daily.slice(0, 15); // Show weather for the next 15 days
  const currentTemperature = Math.round(currentWeather.temp - 273.15); // Convert temperature from Kelvin to Celsius

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Current Weather</Text>
      <Image
        source={getWeatherImage(currentWeather.weather[0].icon)}
        style={styles.currentWeatherIcon}
      />
      <Text style={styles.weatherDescription}>{currentWeather.weather[0].description}</Text>
      <Text style={styles.currentTemperature}>{currentTemperature}°C</Text>
      <Text style={styles.weatherInfo}>Feels like: {Math.round(currentWeather.feels_like - 273.15)}°C</Text>
      <Text style={styles.weatherInfo}>Humidity: {currentWeather.humidity}%</Text>
      <Text style={styles.weatherInfo}>UV Index: {currentWeather.uvi}</Text>
      <Text style={styles.weatherInfo}>Wind Speed: {currentWeather.wind_speed} m/s</Text>
      <Text style={styles.header}>Daily Weather</Text>
      <FlatList
        data={dailyWeather}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  currentWeatherIcon: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  weatherDescription: {
    fontSize: 16,
    marginVertical: 5,
  },
  currentTemperature: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  weatherInfo: {
    fontSize: 16,
    marginVertical: 2,
  },
  weatherItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default MainAppScreen;

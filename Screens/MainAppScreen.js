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

  const renderItem = ({ item }) => {
    const icon = item.weather[0].icon;
    const description = item.weather[0].description;
    const date = new Date(item.dt * 1000).toLocaleDateString();

    // Function to map the weather icon code to the corresponding image
    const getWeatherImage = (iconCode) => {
      switch (iconCode) {
        case '01n':
          return require('./images/Moon.png');
        case '10d':
        case '10n':
          return require('./images/Rainyday.png');
        case '02d':
        case '03d':
        case '04d':
          return require('./images/Cloudyday.png');
        case '02n':
        case '03n':
        case '04n':
          return require('./images/Cloudynight.png');
        case '13d':
        case '13n':
          return require('./images/Snowfall.png');
        default:
          return require('./images/Sun.png');
      }
    };

    return (
      <View style={styles.weatherItem}>
        <Image source={getWeatherImage(icon)} style={styles.weatherIcon} />
        <Text>{description}</Text>
        <Text>{date}</Text>
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

  const dailyWeather = weatherData.daily.slice(0, 5); // Show weather for the next 5 days

  return (
    <View style={styles.container}>
      <Text>Current Weather</Text>
      <Image
        source={getWeatherImage(weatherData.current.weather[0].icon)}
        style={styles.currentWeatherIcon}
      />
      <Text>{weatherData.current.weather[0].description}</Text>
      <Text>{new Date(weatherData.current.dt * 1000).toLocaleDateString()}</Text>
      <Text>Next 5 Days</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  weatherItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  currentWeatherIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default MainAppScreen;

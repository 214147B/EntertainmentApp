import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const HomeScreen = () => {
  const route = useRoute();
  const { username } = route.params || {};

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]); // State to track favorite movies

  const API_KEY = "ed4d9d40d58a54a1355e06245a36e1ea"; // Replace with your TMDB API key
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setMovies(result.results || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movieId)) {
        return prevFavorites.filter((id) => id !== movieId); // Remove from favorites
      } else {
        return [...prevFavorites, movieId]; // Add to favorites
      }
    });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {username || "User"}!</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const isFavorite = favorites.includes(item.id); // Check if the movie is a favorite
            return (
              <View style={styles.movieContainer}>
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                  style={styles.moviePoster}
                />
                <View style={styles.movieDetails}>
                  <Text style={styles.movieTitle}>{item.title}</Text>
                  <Text style={styles.movieReleaseDate}>
                    Release Date: {item.release_date}
                  </Text>
                  <Text style={styles.movieOverview}>{item.overview}</Text>
                </View>
                <TouchableOpacity
                  style={styles.favoriteButton}
                  onPress={() => toggleFavorite(item.id)}
                >
                  <Icon
                    name={isFavorite ? "heart" : "heart-o"} // Toggle heart icon
                    size={30}
                    color={isFavorite ? "red" : "#fff"} // Change color based on favorite status
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#121212",
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#E91E63",
    marginVertical: 20,
    textAlign: "center",
  },
  movieContainer: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    padding: 10,
  },
  moviePoster: {
    width: 120,
    height: 180,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  movieDetails: {
    flex: 1,
    padding: 12,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  movieReleaseDate: {
    fontSize: 14,
    color: "#BBBBBB",
    marginBottom: 8,
  },
  movieOverview: {
    fontSize: 14,
    color: "#DDDDDD",
    lineHeight: 20,
  },
  favoriteButton: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    
  },
});

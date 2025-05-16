export default {
  name: "mappit",
  slug: "mappit",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.anonymous.mappit"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    }
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png"
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      }
    ],
    [
      "@rnmapbox/maps",
      {
        RNMapboxMapsImpl: "mapbox",
        accessToken: "pk.eyJ1Ijoic2Vhbmx1dSIsImEiOiJjbTd2MjB5bWowNzV5MmpuNGptbTNocjdnIn0.dNhHkY6L8_EC1VAmK-obaw"
      }
    ]
  ],
  experiments: {
    typedRoutes: true
  },
  extra: {
    mapboxAccessToken: "YOUR_MAPBOX_ACCESS_TOKEN"
  }
};

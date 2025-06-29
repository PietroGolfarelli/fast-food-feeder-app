
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d5ecac1ec81d4c7d8a86302c74d1a4ad',
  appName: 'fast-food-feeder-app',
  webDir: 'dist',
  server: {
    url: 'https://d5ecac1e-c81d-4c7d-8a86-302c74d1a4ad.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#DC2626',
      showSpinner: false
    }
  }
};

export default config;

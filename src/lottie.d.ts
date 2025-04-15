declare module '@lottiefiles/vue-lottie-player' {
  import { DefineComponent } from 'vue';
  
  export const LottieAnimation: DefineComponent<{
    animationOptions: {
      path?: string;
      animationData?: any;
      loop?: boolean;
      autoplay?: boolean;
      renderer?: string;
      rendererSettings?: any;
    };
    height?: string | number;
    width?: string | number;
    style?: Record<string, any>;
  }>;
} 
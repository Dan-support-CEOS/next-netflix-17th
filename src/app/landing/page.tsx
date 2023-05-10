import Lottie from 'react-lottie-player';
import lottieJson from '../../../public/Lottie/29313-netflix-logo-swoop.json';

export default function LandingPage() {
    return (
      <Lottie loop animationData={lottieJson} play style={{width: 150, height: 150}}/>
    )
  }
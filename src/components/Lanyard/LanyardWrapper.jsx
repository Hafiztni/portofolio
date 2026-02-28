import { Component, Suspense } from 'react';
import Lanyard from './Lanyard';

class LanyardErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, timeout: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidMount() {
    // Timeout fallback: jika masih loading setelah 5 detik, tampilkan placeholder
    this.timeoutId = setTimeout(() => {
      if (!this.state.hasError && !this.state.timeout) {
        this.setState({ timeout: true });
      }
    }, 5000);
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lanyard Error:', error, errorInfo);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    if (this.state.hasError || this.state.timeout) {
      return (
        <div className="w-full h-[400px] bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/30 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-4">🎴</div>
            <p className="text-gray-400">Interactive 3D Card</p>
            <p className="text-gray-500 text-sm mt-2">{this.state.timeout ? 'Loading timeout' : 'Error loading'}</p>
          </div>
        </div>
      );
    }

    return (
      <Suspense fallback={
        <div className="w-full h-[400px] flex items-center justify-center">
          <p className="text-gray-400">Loading 3D card...</p>
        </div>
      }>
        <div className="w-full flex justify-center">
          <Lanyard {...this.props} />
        </div>
      </Suspense>
    );
  }
}

export default LanyardErrorBoundary;

import { Component, ReactNode } from 'react';
import { MdError } from 'react-icons/md';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };

        window.onunhandledrejection = (event) => {
            this.setState({
                hasError: true,
                error: event.reason instanceof Error ? event.reason : new Error(String(event.reason))
            });
            event.preventDefault();
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    handleRefresh = () => {
        this.setState({ hasError: false });
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center bg-black">
                    <MdError className="text-[5rem] text-primary-red mb-4" />
                    <h1 className="text-2xl font-semibold text-secondary-text mb-4">
                        Oops! Something went wrong
                    </h1>
                    <p className="text-[1.1rem] mb-8">
                        We're having trouble displaying this section.
                    </p>
                    <button
                        type="button"
                        className="px-6 py-3 text-lg text-primary-text bg-button-color rounded-lg transition duration-200 ease-in-out hover:bg-green-900 cursor-pointer active:scale-95"
                        onClick={this.handleRefresh}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }

    componentWillUnmount() {
        window.onerror = null;
        window.onunhandledrejection = null;
    }
}

export default ErrorBoundary;
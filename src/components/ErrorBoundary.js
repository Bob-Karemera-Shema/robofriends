import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
        // this.setState({ hasError: true });
    }

    render() {
        return this.state.hasError ? <h1>Unable to retreive contacts</h1> : this.props.children;
    }
}

export default ErrorBoundary;
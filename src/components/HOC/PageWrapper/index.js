import './index.css';

export const pageWrapper = WrappedComponent => props => (
  <div className="PageWrapper">
    <div className="Page">
      <WrappedComponent {...props} />
    </div>
  </div>
);
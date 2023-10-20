import styled from 'styled-components';

// Skeleton for the Header
const SkeletonHeader = styled.div`
  background: #f0f0f0;
  margin: 0;
  border-radius: 10px 10px 0 0;
  padding: 8px;
  height: 40px;
  margin-bottom: 24px;
`;

// Skeleton Loader style
const SkeletonLoader = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  position: relative;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  height: 8px;
  border-radius: 0 0 4px 4px;
  text-align: center;
  margin: 8px auto;
  width: 150px;
`;

const SkeletonCard: React.FC = () => {
  return (
    <>
      <SkeletonHeader data-testid='skeleton-loader' />
      {Array.from({ length: 3 }, (_, index) => (
        <SkeletonLoader key={index} />
      ))}
    </>
  );
};

export default SkeletonCard;

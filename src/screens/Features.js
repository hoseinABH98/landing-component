import styled from 'styled-components';
import FeatureCard from '../components/FeatureCard';

// data
import webDevData from '../webdev.data';

const Features = () => {
  return (
    <FeaturedSection>
      <h2>Featured courses</h2>
      <p>
        Explore our structured learning paths to discover everything you need to
        know about <br /> building for the modern web.
      </p>

      <a href="/">See all</a>
      <CardRowContainer>
        {webDevData.map((data) => (
          <div key={data.id}>
            <FeatureCard {...data} />
          </div>
        ))}
      </CardRowContainer>
    </FeaturedSection>
  );
};

const FeaturedSection = styled.section`
  background-color: #f8f9fa;
  margin: 45px auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h2 {
    margin-bottom: 0;
  }
  p {
    text-align: center;
  }
  a {
    color: #585b63;
  }

  @media (max-width: 650px) {
    padding: 40px;
  }
`;

const CardRowContainer = styled.div`
  margin-top: clamp(2.375rem, 1.98rem + 1.96vw, 3.75rem);
  display: flex;
  max-width: 100%;
  width: 1200px;
  overflow-x: auto;
  height: 100%;
  padding: 25px 5px;
  div:not(:first-child) {
    margin-left: 30px;
  }
  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border: 1px solid #d2d3d7;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d2d3d7;
    border-radius: 25px;
  }
`;

export default Features;

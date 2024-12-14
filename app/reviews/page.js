import GoogleReviewsServer from '@/components/GoogleReviewsServer';
import '@/styles/globals.css';

const ReviewsPage = async () => {
  const businessId = 'ChIJN1t_tDeuEmsRUsoyG83frY4';

  return (
    <div>
      <h1 className='title'>Google Reviews</h1>
      <GoogleReviewsServer businessId={businessId} />
    </div>
  );
};

export default ReviewsPage;
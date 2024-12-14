'use client';

import styles from '@/styles/SubmitReviewButton.module.css';

const SubmitReviewButton = ({ businessId }) => {
  const openReviewPopup = () => {
    const reviewUrl = `https://search.google.com/local/writereview?placeid=${businessId}`;
    window.open(reviewUrl, '_blank', 'width=600,height=600');
  };

  return (
    <button className={styles.submitReview} onClick={openReviewPopup}>
      Submit a Review
    </button>
  );
};

export default SubmitReviewButton;
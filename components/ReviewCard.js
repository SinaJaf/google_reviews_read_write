import styles from "@/styles/ReviewCard.module.css";

const ReviewCard = ({ review }) => (
  <div className={styles.reviewCard}>
    <div className={styles.cardHeader}>
      <div className={styles.avatar}>{review.reviewerName.charAt(0)}</div>
      <div className={styles.reviewerInfo}>
        <p className={styles.reviewerName}>{review.reviewerName}</p>
        <p className={styles.starRating}>{"⭐".repeat(review.rating)}</p>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png"
        alt="Google Logo"
        className={styles.googleLogo}
      />
    </div>

    <p className={styles.reviewText}>{review.text}</p>
  </div>
);

export default ReviewCard;

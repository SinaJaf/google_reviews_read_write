import ReviewCard from "@/components/ReviewCard";
import SubmitReviewButton from "@/components/SubmitReviewButton";
import styles from "@/styles/GoogleReviews.module.css";

const GoogleReviewsServer = async ({ businessId }) => {
  let reviews = [];
  let error = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews?businessId=${businessId}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }
    const data = await res.json();
    reviews = data.reviews;
  } catch (err) {
    error = err.message;
  }

  return (
    <div>
      <div className={styles.googleReviews}>
        {error ? (
          <p className={styles.error}>{error}</p>
        ) : (
          reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        )}
      </div>
      <SubmitReviewButton businessId={businessId} />
    </div>
  );
};

export default GoogleReviewsServer;

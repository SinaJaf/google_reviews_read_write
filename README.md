# Google Reviews Read/Write

This project demonstrates how to integrate Google Business Reviews into a Next.js application. It allows users to view reviews fetched from Google Business and submit their own reviews directly from the website.

## Features

- **Fetch Google Reviews**: Retrieve and display reviews from Google Business API.
- **Submit a Review**: Users can submit their own reviews directly from the web interface.
- **Responsive UI**: A clean and responsive user interface for better user experience.
- **Reusable Components**: Modular design for components to enhance scalability and maintainability.

---

## Folder Structure

```plaintext
📂 GOOGLE_REVIEWS_TEST
├── 📂 app                     # Application pages
├── 📂 components              # Reusable React components
│   ├── GoogleReviewsServer.js    # Fetches and displays reviews from Google Business API
│   ├── ReviewCard.js             # Component to display individual reviews
│   ├── SubmitReviewButton.js     # Button for submitting reviews
├── 📂 public                  # Public assets (e.g., images, fonts)
├── 📂 styles                  # CSS styles
│   ├── globals.css               # Global application styles
│   ├── GoogleReviews.module.css  # Styles for GoogleReviewsServer.js
│   ├── ReviewCard.module.css     # Styles for ReviewCard.js
│   ├── SubmitReviewButton.module.css # Styles for SubmitReviewButton.js
├── .env.local                 # Environment variables (API keys)
├── .gitignore                 # Ignored files for Git
├── eslint.config.mjs          # ESLint configuration
├── jsconfig.json              # JavaScript project settings
├── next.config.mjs            # Next.js configuration
├── package.json               # Project dependencies
├── package-lock.json          # Dependency lock file
├── README.md                  # Project documentation

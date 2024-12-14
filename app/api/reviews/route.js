import fetch from "node-fetch";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const businessId = searchParams.get("businessId");
  const offset = parseInt(searchParams.get("offset"), 10) || 0;

  if (!businessId) {
    return new Response(JSON.stringify({ error: "Business ID is required" }), {
      status: 400,
    });
  }

  try {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${businessId}&fields=reviews&key=${GOOGLE_API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Google API responded with status ${response.status}`);
    }

    const data = await response.json();
    const allReviews = data.result?.reviews || [];
    const reviews = allReviews.slice(offset, offset + 5).map((review) => ({
      reviewerName: review.author_name,
      rating: review.rating,
      text: review.text,
    }));

    return new Response(JSON.stringify({ reviews }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

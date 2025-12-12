import { simplyfyReview } from "@/utils/simplyfyReviewData";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const API_KEY = process.env.TRIP_ADVISOR_API_KEY;
const FALLBACK_LOCATION_ID = "34026318";

async function getReviews({
  name,
  locationId,
}: {
  name: string;
  locationId: string;
}) {
  try {
    if (!API_KEY) {
      return {
        success: false,
        error: "API key not configured",
        message: "TRIP_ADVISOR_API_KEY is missing from environment variables",
        help: "Make sure you have TRIP_ADVISOR_API_KEY in your .env.local file",
        status: 500,
      };
    }

    const usedFallback = !locationId;
    if (!locationId) {
      locationId = FALLBACK_LOCATION_ID;
    }

    // Construct the URL - IMPORTANT: Use the exact format that works in browser
    const apiUrl = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/reviews?key=${API_KEY}`;

    // Make the request
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      let errorDetails;
      try {
        const errorText = await response.text();
        console.error("Error response body:", errorText);
        errorDetails = JSON.parse(errorText);
      } catch {
        errorDetails = null;
      }

      // Provide specific guidance based on error
      let helpMessage = "";
      if (response.status === 403) {
        if (API_KEY.length === 9) {
          helpMessage =
            "You are using a 9-character key. The working key from browser is 32 characters. Update your .env.local with the full key.";
        } else {
          helpMessage =
            "API key is invalid or does not have permission to access this endpoint.";
        }
      }

      return {
        success: false,
        error: "TripAdvisor API Error",
        message: `API returned ${response.status} ${response.statusText}`,
        details: errorDetails,
        help: helpMessage,
        status: response.status,
        config: {
          apiKeyLength: API_KEY.length,
          expectedLength: 32,
          locationId,
          usedFallback,
          urlMasked: `https://api.content.tripadvisor.com/api/v1/location/${locationId}/reviews?key=${API_KEY.substring(
            0,
            8
          )}...`,
        },
      };
    }

    // Success!
    const data = await response.json();

    console.info({
      success: true,
      config: {
        locationId,
        name,
        usedFallback,
      },
      data: {
        totalReviews: data.data?.length || 0,
        allReviews: simplyfyReview(data.data) || [],
      },
    });

    return {
      success: true,
      config: {
        locationId,
        name,
        usedFallback,
      },
      data: {
        totalReviews: data.data?.length || 0,
        allReviews: simplyfyReview(data.data) || [],
      },
    };
  } catch (error: any) {
    console.error("Fatal error:", error);

    return {
      success: false,
      error: "Request Failed",
      message: error.message || "Unknown error",
      config: {
        apiKeyConfigured: !!API_KEY,
        apiKeyLength: API_KEY?.length || 0,
      },
      status: 500,
    };
  }
}

const generateData = async ({
  name,
  locationId,
}: {
  name: string;
  locationId: string;
}) => {
  try {
    const entityFeed = await getReviews({
      name,
      locationId,
    });

    // Create data directory relative to project root
    const dataDir = path.join(process.cwd(), "services", "review", "data");

    // Create directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log(`📁 Created directory: ${dataDir}`);
    }

    const entityFilename = `${name}.json`;
    const entityFilePath = path.join(dataDir, entityFilename);
    const jsonContent = JSON.stringify({ data: entityFeed.data }, null, 2);

    fs.writeFileSync(entityFilePath, jsonContent);
    console.log(`✅ File saved: ${entityFilePath}`);

    return {
      success: true,
      filePath: entityFilePath,
      fileName: entityFilename,
    };
  } catch (error) {
    console.error("❌ Error generating data:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

const deleteDataFolder = async () => {
  const dataDir = path.join(process.cwd(), "services", "review", "data");

  if (fs.existsSync(dataDir)) {
    fs.rmSync(dataDir, { recursive: true, force: true });
    console.log(`🗑️  Deleted: ${dataDir}`);
  }
};

export { getReviews, generateData, deleteDataFolder };

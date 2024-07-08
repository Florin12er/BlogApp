import { useState } from "react";
import axios from "axios";

const ApiKeyGenerator = ({ token }) => {
  const [apiKey, setApiKey] = useState("");

  const generateApiKey = async () => {
    try {
      const response = await axios.post(
        "https://blogapi-production-fb2f.up.railway.app/user/generate-api-key",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setApiKey(response.data.apiKey);
    } catch (error) {
      console.error("API key generation failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Generate API Key</h2>
        <button
          onClick={generateApiKey}
          className="w-full p-2 bg-green-500 text-white rounded"
        >
          Generate API Key
        </button>
        {apiKey && (
          <div className="mt-4">
            <label className="block mb-2">Your API Key:</label>
            <input
              type="text"
              value={apiKey}
              readOnly
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiKeyGenerator;


#cd "C:\Users\antho\Desktop\Cmps 271\Project\Django\holiday_generator"

import requests
import json

# Replace with your actual OpenAI API key
API_KEY = "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"

# Set up the request headers and payload
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

data = {
    "model": "dall-e-3",
    "prompt": "Hawaii beach with people",
    "n": 1,
    "size": "1024x1024"
}

# Make the request to generate the image
response = requests.post(
    "https://api.openai.com/v1/images/generations",
    headers=headers,
    data=json.dumps(data)
)

# Check if the request was successful
if response.status_code == 200:
    response_data = response.json()
    image_url = response_data['data'][0]['url']
    print("Image URL:", image_url)
else:
    print("Failed to generate image:", response.status_code, response.text)

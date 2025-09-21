import os
from supermemory import Supermemory
from pathlib import Path

# Get environment variables

class uploadClient:
    def __init__(self, api_key):
        self.SUPERMEM_API_KEY = api_key or os.getenv("SUPERMEM_API_KEY")
        if not self.SUPERMEM_API_KEY:
            raise ValueError("Supermemory API key not provided and SUPERMEMORY_API_KEY not set in environment.")
        
        self.client = Supermemory(api_key=self.SUPERMEM_API_KEY)

    def uploadText(self, context, className):
        response = self.client.memories.add(
            content = context,
            container_tag = className
        )
        print(response)
        return

    def uploadFile(self, fileObj):
        response = self.client.memories.upload_file(
            file=fileObj,
        )
        print(response)
        return
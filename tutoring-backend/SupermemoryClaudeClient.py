import anthropic

class SupermemoryClaudeClient:
    def __init__(self, anthropic_api_key, supermemory_api_key, user_id, base_url=None):
        self.client = anthropic.Anthropic(api_key=anthropic_api_key)
        self.supermemory_headers = {
            "x-supermemory-api-key": supermemory_api_key,
            "x-sm-user-id": user_id
        }
        if base_url:
            import os
            os.environ["ANTHROPIC_API_BASE"] = base_url

    def chat(self, prompt, model="claude-3.5", max_tokens=200):
        # Add Supermemory headers to each request
        import os
        os.environ["ANTHROPIC_DEFAULT_HEADERS"] = str(self.supermemory_headers)  # Not official but illustrative

        full_prompt = anthropic.HUMAN_PROMPT + prompt + anthropic.AI_PROMPT
        response = self.client.completions.create(
            model=model,
            prompt=full_prompt,
            max_tokens_to_sample=max_tokens
        )
        return response.completion

# Usage
client = SupermemoryClaudeClient(
    anthropic_api_key="YOUR_ANTHROPIC_API_KEY",
    supermemory_api_key="YOUR_SUPERMEMORY_API_KEY",
    user_id="user123",
    base_url="https://api.supermemory.ai/v3/https://api.anthropic.com/v1/"
)

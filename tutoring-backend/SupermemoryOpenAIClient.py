from openai import OpenAI




class SupermemoryOpenAI:
  def __init__(self, oai_api_key, sm_api_key, user_id):
    self.oai_api_key = oai_api_key
    self.sm_api_key = sm_api_key
    self.client = OpenAI(
    api_key=oai_api_key,
    base_url="https://api.supermemory.ai/v3/https://api.openai.com/v1/",
    default_headers={
            "x-supermemory-api-key": sm_api_key,
            "x-sm-user-id": user_id  # Unique user identifier
        }
    )
    self.model = "gpt-3.5-turbo"  # or "gpt-4"




  def query_LLM(self, question, conversation_id=None):
       if not conversation_id:
           response = self.client.chat.completions.create(
           model=self.model,
           messages=[
                   {"role": "user", "content": question}
           ]
           )
       else:
           response = self.client.chat.completions.create(
               model=self.model,
               messages=[
                   {"role": "user", "content": question}
               ],
               extra_headers={
               "x-sm-conversation-id": conversation_id
               }
           )
 
       return response.choices[0].message.content



import ChatBot from 'react-chatbotify'
export default function AiSummary(){
  
  
  const flow = {
    "start": {
      "message": "Hello world!"
    }
  }
    return (
        <>
          <ChatBot flow = {flow}/>
          
        </>
      )
}
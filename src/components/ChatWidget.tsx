import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    // Dynamically load and initialize the n8n chat
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://n8n-6421994137235212.kloudbeansite.com/webhook/1e36aa33-fe60-4eac-a4a9-e9db0e60bbc5/chat'
      });
    `;
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // n8n chat handles its own UI
};

export default ChatWidget;

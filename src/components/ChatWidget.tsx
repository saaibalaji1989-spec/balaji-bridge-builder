import { useEffect } from "react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

declare global {
  interface Window {
    n8nChatLoaded?: boolean;
    createChat?: (config: {
      webhookUrl: string;
      title: string;
      subtitle: string;
      theme?: { color: string };
    }) => void;
  }
}

const ChatWidget = () => {
  useEffect(() => {
    // Load the n8n chat script if not already loaded
    if (!window.n8nChatLoaded) {
      const script = document.createElement("script");
      script.type = "module";
      script.innerHTML = `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
        window.createChat = createChat;
        window.n8nChatLoaded = true;
      `;
      document.head.appendChild(script);
    }
  }, []);

  const launchChat = () => {
    if (window.createChat) {
      window.createChat({
        webhookUrl: 'https://n8n-6421994137235212.kloudbeansite.com/webhook/1e36aa33-fe60-4eac-a4a9-e9db0e60bbc5/chat',
        title: 'Your Friendly Assistant',
        subtitle: "I'm here to help any time!",
        theme: { color: 'hsl(43, 100%, 67%)' } // Using accent color from design system
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={launchChat}
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-6 py-6"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-medium">Chat with Us</span>
      </Button>
    </div>
  );
};

export default ChatWidget;

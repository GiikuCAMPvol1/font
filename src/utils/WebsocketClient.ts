import { WebsocketRequests } from "@/@types/WebsocketRequest";
import { typeGuard } from "@/utils/typeGuard";
import { WebsocketEvents } from "@/@types/WebsocketEvent";
import { WebsocketResponses } from "@/@types/WebsocketResponse";

type MessageEventHandler = (
  param: MessageEvent<WebsocketEvents | WebsocketResponses>
) => unknown;

class WebsocketClient {
  public client?: WebSocket;
  public isActive: boolean;
  public userId: string | null;
  private token: string | null;
  private handlers: MessageEventHandler[];

  constructor() {
    this.userId = localStorage.getItem("userId");
    this.token = localStorage.getItem("token");
    this.isActive = false;
    this.handlers = [];
  }
  connect() {
    return new Promise<void>((resolve, reject) => {
      if (this.client?.readyState !== 1) {
        this.client = new WebSocket("ws://localhost:5000");
      }
      if (this.isActive) {
        resolve();
        return;
      }
      const handler = (e: MessageEvent) => {
        this.client?.removeEventListener("message", handler);
        const data = JSON.parse(e.data) as unknown;
        if (!typeGuard.userIdResponse(data)) {
          reject();
          return;
        }
        this.userId = data.userId;
        localStorage.setItem("userId", data.userId);
        this.token = data.token;
        localStorage.setItem("token", data.token);
        this.isActive = true;
        resolve();
      };
      this.client.addEventListener("message", handler);
      this.client.addEventListener("close", this.connect);
      this.handlers.forEach((handler) => {
        this.client?.addEventListener("message", handler);
      });
      this.sendMessage({
        type: "userIdRequest",
      });
    });
  }
  addMessageHandler(handler: MessageEventHandler) {
    this.handlers.push(handler);
    this.client?.addEventListener("message", handler);
  }
  sendMessage(message: WebsocketRequests) {
    this.client?.send(JSON.stringify(message));
  }
  close() {
    this.isActive = false;
    this.handlers.forEach((handler) => {
      this.client?.removeEventListener("message", handler);
    });
    this.client?.close();
  }
}

export { WebsocketClient };

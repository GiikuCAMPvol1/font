import { WebsocketRequests } from "@/@types/WebsocketRequest";
import { typeGuard } from "@/utils/typeGuard";
import {
  onResultOpen,
  onStateUpdate,
  WebsocketEvents,
} from "@/@types/WebsocketEvent";
import {
  joinRoomResponse,
  WebsocketResponses,
} from "@/@types/WebsocketResponse";

type MessageEventHandler = (param: MessageEvent) => unknown;

let client: WebSocket;

class WebsocketClient {
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
      if (client?.readyState === 1) {
        resolve();
        return;
      }
      client = new WebSocket("ws://127.0.0.1:9001");
      client.onopen = () => {
        client.onopen = client.onerror = null;
        resolve();
      };
      client.onerror = () => {
        client.onopen = client.onerror = null;
        reject();
      };
    });
  }

  setup() {
    return new Promise<void>(async (resolve, reject) => {
      if (client?.readyState !== 1) {
        await this.connect();
      }
      if (this.isActive) {
        resolve();
        return;
      }
      const handler = (e: MessageEvent) => {
        client?.removeEventListener("message", handler);
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
      client.addEventListener("message", handler);
      this.handlers?.forEach((handler) => {
        client?.addEventListener("message", handler);
      });
      if (this.userId && this.token) {
        this.sendMessage({
          type: "userIdRequest",
          userId: this.userId,
          token: this.token,
        });
        return;
      }
      this.sendMessage({
        type: "userIdRequest",
      });
    });
  }
  addMessageHandler(handler: MessageEventHandler) {
    client?.addEventListener("message", handler);
    this.handlers.push(handler);
  }
  removeMessageHandler(handler: MessageEventHandler) {
    client?.removeEventListener("message", handler);
    const index = this.handlers.indexOf(handler);
    if (index === -1) return;
    this.handlers = this.handlers.splice(index, 1);
  }
  sendMessage(message: WebsocketRequests) {
    client?.send(JSON.stringify(message));
  }
  close() {
    this.isActive = false;
    this.handlers.forEach((handler) => {
      client?.removeEventListener("message", handler);
    });
    client?.close();
  }

  joinRoomRequest(roomId: string, username: string) {
    return new Promise<joinRoomResponse>((resolve, reject) => {
      if (!this.userId) {
        reject();
        return;
      }
      const handler = (e: MessageEvent) => {
        const data = JSON.parse(e.data) as unknown;
        if (!typeGuard.joinRoomResponse(data)) {
          reject();
          return;
        }
        this.removeMessageHandler(handler);
        resolve(data);
      };
      this.addMessageHandler(handler);
      this.sendMessage({
        type: "joinRoomRequest",
        roomId,
        userId: this.userId,
        username,
      });
    });
  }

  createRoomRequest(username: string) {
    return new Promise<joinRoomResponse>((resolve, reject) => {
      if (!this.userId) {
        reject();
        return;
      }
      const handler = (e: MessageEvent) => {
        const data = JSON.parse(e.data) as unknown;
        if (!typeGuard.joinRoomResponse(data)) {
          reject();
          return;
        }
        this.removeMessageHandler(handler);
        resolve(data);
      };
      this.addMessageHandler(handler);
      this.sendMessage({
        type: "createRoomRequest",
        userId: this.userId,
        username,
      });
    });
  }

  endPhaseRequest(type: "coding" | "reading", data: string) {
    if (!this.userId)return;
    this.sendMessage({
      type: "endPhaseRequest",
      userId: this.userId,
      phase: type,
      data: data,
    });
  }

  openNextResultRequest() {
    return new Promise<onResultOpen>((resolve, reject) => {
      const handler = (e: MessageEvent) => {
        const data = JSON.parse(e.data) as unknown;
        if (!typeGuard.onResultOpen(data)) {
          reject();
          return;
        }
        this.removeMessageHandler(handler);
        resolve(e.data);
      };
      this.sendMessage({
        type: "openNextResultRequest",
      });
    });
  }

  gameEndRequest() {
    return new Promise<void>((resolve, reject) => {
      const handler = (e: MessageEvent) => {
        const data = JSON.parse(e.data) as unknown;
        if (!typeGuard.onGameEnd(data)) {
          reject();
          return;
        }
        this.removeMessageHandler(handler);
        resolve();
      };
      this.sendMessage({
        type: "gameEndRequest",
      });
    });
  }
}

export { WebsocketClient };

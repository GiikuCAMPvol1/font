import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Styles from "@/styles/App.module.scss";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useIsomorphicEffect } from "@/utils/IsomorphicEffect";
import { WebsocketClient } from "@/utils/WebsocketClient";
import { Loading } from "@/components/Loading/Loading";
import { useSetAtom } from "jotai";
import { socketAtom } from "@/atom/socketAtom";
import { phaseAtom } from "@/atom/PhaseAtom";
import { typeGuard } from "@/utils/typeGuard";
import { useRouter } from "next/router";

const Wrapper = styled.div.attrs<{ renderScale: number }>((p) => ({
  style: {
    transform: `scale(${p.renderScale}) translate(-50%,-50%)`,
  },
}))``;

export default function App({ Component, pageProps }: AppProps) {
  const [scale, setScale] = useState(1);
  const [isInited, setIsInited] = useState(false); //todo: バックエンドが完成したらfalseにする
  const setSocket = useSetAtom(socketAtom);
  const setPhaseItem = useSetAtom(phaseAtom);
  const router = useRouter();
  const IsomorphicEffect = useIsomorphicEffect();
  IsomorphicEffect(() => {
    const onResize = () => {
      const targetScale = Math.min(
        window.innerWidth / 600,
        window.innerHeight / 450
      );
      setScale(targetScale);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
  const refFirstRef = useRef(true);
  const socketRef = useRef<WebsocketClient>();

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && refFirstRef.current) {
      refFirstRef.current = false;
      return;
    }
    const websocket = new WebsocketClient();
    socketRef.current = websocket;

    const phaseHandler = (e: MessageEvent) => {
      const data = JSON.parse(e.data) as unknown;
      if (!typeGuard.onPhaseStart(data)) return;
      setPhaseItem(data);
      if (router.pathname !== "/gamemain") {
        router.push("/gamemain");
      }
    };

    websocket.setup().then(() => {
      setSocket(websocket);
      setIsInited(true);
      websocket.addMessageHandler(phaseHandler);
    });
    return () => {
      websocket.removeMessageHandler(phaseHandler);
      websocket.close();
    };
  }, []);

  return (
    <div className={Styles.body}>
      <Wrapper className={Styles.container} {...{ renderScale: scale }}>
        {isInited ? (
          <Component {...pageProps} socket={socketRef.current} />
        ) : (
          <Loading message={"サーバーに接続しています..."} />
        )}
      </Wrapper>
    </div>
  );
}

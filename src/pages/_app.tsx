import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Styles from "@/styles/App.module.scss";
import { useState } from "react";
import styled from "styled-components";
import { useIsomorphicEffect } from "@/utils/IsomorphicEffect";

const Wrapper = styled.div.attrs<{ renderScale: number }>((p) => ({
  style: {
    transform: `scale(${p.renderScale})`,
  },
}))``;

export default function App({ Component, pageProps }: AppProps) {
  const [scale, setScale] = useState(1);
  const IsomorphicEffect = useIsomorphicEffect();
  IsomorphicEffect(() => {
    const onResize = () => {
      const targetScale = Math.min(
        1920 / window.innerWidth,
        1080 / window.innerHeight
      );
      setScale(targetScale);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
  return (
    <div className={Styles.body}>
      <Wrapper renderScale={1}>
        <Component {...pageProps} />
      </Wrapper>
    </div>
  );
}

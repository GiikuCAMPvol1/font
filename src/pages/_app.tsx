import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Styles from "@/styles/App.module.scss";
import { useState } from "react";
import styled from "styled-components";
import { useIsomorphicEffect } from "@/utils/IsomorphicEffect";

const Wrapper = styled.div.attrs<{ renderScale: number }>((p) => ({
  style: {
    transform: `scale(${p.renderScale}) translate(-50%,-50%)`,
  },
}))``;

export default function App({ Component, pageProps }: AppProps) {
  const [scale, setScale] = useState(1);
  const IsomorphicEffect = useIsomorphicEffect();
  IsomorphicEffect(() => {
    const onResize = () => {
      const targetScale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
      );
      setScale(targetScale);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
  return (
    <div className={Styles.body}>
      <Wrapper className={Styles.container} {...{renderScale: scale}}>
        <Component {...pageProps} />
      </Wrapper>
    </div>
  );
}

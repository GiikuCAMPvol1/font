import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Styles from "@/styles/App.module.scss";
import { useState } from "react";
import styled from "styled-components";
import { useIsomorphicEffect } from "@/utils/IsomorphicEffect";
import { RecoilRoot } from "recoil";

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

  return (
    <RecoilRoot>
      <div className={Styles.body}>
        <Wrapper className={Styles.container} {...{ renderScale: scale }}>
          <Component {...pageProps} />
        </Wrapper>
      </div>
    </RecoilRoot>
  );
}

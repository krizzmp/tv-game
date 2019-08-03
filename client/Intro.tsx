import styled, { createGlobalStyle } from 'styled-components'
// @ts-ignore
import g from './bg-01.gif'
import { usePresentation } from './useKpState'
// @ts-ignore
import { Reset } from 'styled-reset'
import * as React from 'react'

const Global = createGlobalStyle`
  *{
  box-sizing: border-box;
  }
  body{
    background: #48C28D;
    background: #592E8B;
    //background: url("https://images.unsplash.com/photo-1475694867812-f82b8696d610?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80");
    background: url(${g});
    background-size: cover;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, STHeiTi, "Microsoft YaHei", sans-serif;
  }
`
const hue = 198
const Bg = styled.div`
  // background: radial-gradient(
  //   circle at center,
  //   hsla(${hue}, 92%, 40%, 0.1),
  //   hsla(${hue}, 92%, 10%, 0.1)
  // );
  //background: hsl(198,76%,32%);
  color: white;
  color: #48C28D;
  //color: black;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: [start] 1fr [centerstart] auto [centerend] 1fr [end];
  grid-template-rows: [start] auto 1fr [main] auto 1fr [players] auto [end];
  padding: 60px;
`
const Players = styled.div`
  grid-column: centerstart / centerend;
  grid-row: players / end;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Player = styled.div`
  border-radius: 12px;
  //background: hsla(${hue}, 92%, 35%, 0.6);
  background:hsla(${hue}, 0%, 60%, 0.4);

  backdrop-filter: blur(100px);
  //background: hsl(198,83%,26%);
  font-weight: 300;
  display: inline-block;
  height: 84px;
  line-height: 84px;
  min-width: 256px;
  margin: 12px;
  text-align: center;
  font-size: 32px;
  //box-shadow: 0 2px 2px hsla(${hue}, 92%, 30%, 0.4);
  //border: 1px solid hsla(${hue}, 92%, 70%, 0.4);
`
const CastButton = styled.button`
  grid-row: start;
  grid-column: start / end;
  justify-self: end;
`
const MainContent = styled.div`
  grid-row: start / end;
  grid-column: start / end;
  text-align: center;
  font-size: 92px;
  padding-left: 60px;
  padding-right: 60px;
  line-height: 1.25;
  align-self: center;
  @media (max-width: 768px) {
    font-size: 48px;
  }
`

export function App () {
  // const [state, emit] = useKpState();
  const [isAvailable, presentationReq] = usePresentation('/')
  return (
    <Bg>
      <Reset/>
      <Global/>
      {isAvailable ? (
        <CastButton
          onClick={() => {
            presentationReq.start()
          }}
        >
          connect
        </CastButton>
      ) : (
        'no connections available'
      )}
      <MainContent>
        To connect to the game go to url.com and type in the roomcode 5GF7Q
      </MainContent>
      <Players>
        <Player>kristoffer</Player>
        <Player>kristoffer</Player>
        <Player>kristoffer</Player>
        <Player>kristoffer</Player>
      </Players>
    </Bg>
  )
}

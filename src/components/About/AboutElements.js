import styled from "styled-components";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: scroll;
  overflow-x: hidden;
  background: black;
`;

export const AboutH1 = styled.h1`
  color: #fff;
  font-size: 2.3em;
  text-align: center;
  margin-top: 7rem;
`;
export const AboutWrapper = styled.div`
  display: grid;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  background: transparent;
`;

export const AboutContent = styled.div`
  background: white;
  border-radius: 10px;
  width: clamp(250px, 90vw, 900px);
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const VideoWrapper = styled.div``;

export const InfoVideo = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  border-radius: 5px;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100px;
  margin-top: 1rem;
`;

export const InfoSectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const InfoSectionText = styled.p`
  font-size: 1.5rem;
  /* text-align: center; */
`;

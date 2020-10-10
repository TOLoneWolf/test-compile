/* eslint-disable react/no-unescaped-entities */
import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { ipcRenderer } from "electron";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import Modal from "../components/Modal";

const Changelogs = () => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    ipcRenderer.invoke("getAppVersion").then(setVersion).catch(console.error);
  }, []);

  return (
    <Modal
      css={`
        height: 500px;
        width: 650px;
      `}
      title={`What's new in ${version}`}
    >
      <Container>
        <Section>
          <SectionTitle
            css={`
              color: ${(props) => props.theme.palette.colors.green};
            `}
          >
            <span>New Features</span>
          </SectionTitle>
          <div>
            <ul>
              <li>
                GDLauncher Migration is now here. Easily export your packs to
                your favorite launcher with our new Koala Migrate Tech.
              </li>
              <li>
                You can now download 100 mods at once. Better not try that on
                McDonalds Internet.
              </li>
            </ul>
          </div>
        </Section>
        <Section>
          <SectionTitle
            css={`
              color: ${(props) => props.theme.palette.colors.red};
            `}
          >
            <span>Bug Fixes</span>
          </SectionTitle>
          <div>
            <ul>
              <li>Hopefully Fixed Linux Icons.</li>
            </ul>
          </div>
        </Section>
        <Section>
          <SectionTitle
            css={`
              color: ${(props) => props.theme.palette.colors.lavander};
            `}
          >
            <span>Join Our Community</span>
          </SectionTitle>
          <p>
            We <b>Really</b> love our users, that's why we have a dedicated
            Discord server just to talk with all of them!
          </p>
          <Button
            css={`
              width: 200px;
              height: 40px;
              font-size: 20px;
              padding: 4px !important;
              margin-top: 20px;
            `}
            type="primary"
            href="https://invite.gg/KoalaDevs"
          >
            <FontAwesomeIcon icon={faDiscord} />
            &nbsp; Discord
          </Button>
        </Section>
      </Container>
    </Modal>
  );
};

export default memo(Changelogs);

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
  color: ${(props) => props.theme.palette.text.primary};
`;

const SectionTitle = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid;
  line-height: 0.1em;
  margin: 10px 0 20px;

  span {
    background: ${(props) => props.theme.palette.secondary.main};
    padding: 0 10px;
  }
`;

const Section = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 40px 0;
    border-radius: 5px;

    p {
      margin: 20px 0;
    }

    li {
      text-align: start;
    }
  }
`;
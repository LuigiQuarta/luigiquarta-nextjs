import type { NextPage } from 'next'
import {BsEnvelope, BsGithub, BsTelegram} from "react-icons/bs";

import Page from "../src/components-layout/Page";
import Jumbotron from "../src/components-ui/Jumbotron";

import styles from '../styles/Home.module.scss'
import SocialIcon from "../src/components-ui/SocialIcon";

const Home: NextPage = () => {
  return (
    <Page>
      <Jumbotron>Hello world,<br/>I'm Luigi<br/>Frontend Engineer</Jumbotron>
      <div className={styles.social}>
        <SocialIcon href="mailto:lmquarta@gmail.com" title="Mail" icon={<BsEnvelope />}/>
        <SocialIcon href="https://github.com/LuigiQuarta" title="Github" icon={<BsGithub />}/>
        <SocialIcon href="https://t.me/lquarta" title="Telegram" icon={<BsTelegram />}/>
      </div>
    </Page>
  )
};

export default Home;

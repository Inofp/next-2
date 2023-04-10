import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import { Titillium_Web } from "next/font/google";
import styles from "./Home.module.scss";
import Layout from './../../layout/Layout';

const titilium = Titillium_Web({ weight: ['300', '400', '600', '700'] });

const Home: FC = () => {
  return (
    <Layout>
    <h1>Hello miwki</h1>
    </Layout>
  );
};

export default Home;

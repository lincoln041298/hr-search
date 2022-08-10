import type { NextPage } from 'next';
import Head from 'next/head';
import { HrSearch } from './HrSearch';

const Home: NextPage = () => {
    return (
            <div>
                <Head>
                    <title>Candidate</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <HrSearch/>
                </main>
            </div>   
    );
};

export default Home;

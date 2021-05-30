import Head from "next/head";

export default function AppHead(props: any) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Elo Rating Brasil {props.title}</title>
    </Head>
  );
}

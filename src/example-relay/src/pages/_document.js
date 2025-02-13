// @flow

import type { Node, Element } from 'react';
import Document, { Head, Main, NextScript, type DocumentContext } from 'next/document';
import sx from '@adeira/sx';

import { mediaStyles } from '../components/Media';

type RenderPageResult = {
  +html: string,
  +head: $ReadOnlyArray<Node>,
  +styles: $ReadOnlyArray<any>,
};

export default class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext): RenderPageResult {
    return sx.renderPageWithSX(ctx.renderPage);
  }

  render(): Element<'html'> {
    return (
      <html lang="en-US">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
            rel="stylesheet"
          />
          <link rel="icon" href="https://adeira.dev/img/favicon.ico" />
          <style dangerouslySetInnerHTML={{ __html: mediaStyles }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export function Header() {
  return (
    <>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/src/images/icon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Hello, I am a system engineer with more than 5 years working on technology projects in the backend area (Java) such as frontend (Angular and React) and development of hybrid and native mobile applications (Ionic and ReactNative) applying an agile scrum methodology"
      />
      <meta name="author" content="Sebastian Jordan Frontend" />
      <meta
        property="og:title"
        content="Hello to personal website where I show my skills and resume"
      />
      <meta
        property="og:description"
        content="My personal portfolio where I show my technical skills at the fullstack level"
      />
      <meta property="og:image" content="src/images/icon.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sjmPanama" />
      <meta
        name="twitter:title"
        content="Hello to personal website where I show my skills and resume"
      />
      <meta
        name="twitter:description"
        content="My personal portfolio where I show my technical skills at the fullstack level"
      />
      <meta name="twitter:image" content="src/images/icon.png" />
      <title>
        Hi, i&apos;m Sebasti&aacute;n Jord&aacute;n this is my portfolio
      </title>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

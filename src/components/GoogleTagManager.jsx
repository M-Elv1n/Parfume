const GoogleTagManager = () => (
  <Helmet>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-16807421415"
    ></script>
    <script>
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16807421415');
          gtag('event', 'conversion', {
            'send_to': 'AW-16807421415/isuvCMquw_IZEOfLs84-',
            'value': 1.0,
            'currency': 'PLN'
          });
        `}
    </script>
  </Helmet>
);

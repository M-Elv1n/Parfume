import React from "react";
import { Helmet } from "react-helmet";

const ConversionEvent = () => (
  <Helmet>
    <script>
      {`
        gtag('event', 'conversion', {
          'send_to': 'AW-16807421415/isuvCMquw_IZEOfLs84-',
          'value': 1.0,
          'currency': 'PLN'
        });
      `}
    </script>
  </Helmet>
);

export default ConversionEvent;
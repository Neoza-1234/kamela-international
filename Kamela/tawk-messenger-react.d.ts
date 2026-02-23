declare module '@tawk.to/tawk-messenger-react' {
  import * as React from 'react';

  export interface TawkMessengerReactProps {
    propertyId: string;
    widgetId: string;
    [key: string]: any;
  }

  export default class TawkMessengerReact extends React.Component<
    TawkMessengerReactProps
  > {}
}
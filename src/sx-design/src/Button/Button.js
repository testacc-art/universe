// @flow

import * as React from 'react';

import sharedButtonStyles from './styles';

type Props = {
  +'children': FbtWithoutString,
  +'onClick': (event: SyntheticEvent<HTMLButtonElement>) => void,
  +'type'?:
    | 'submit' // The button submits the form data to the server.
    | 'reset' // The button resets all the controls to their initial values (this behavior tends to annoy users).
    | 'button', // The button has no default behavior, and does nothing when pressed by default (use `onClick` callback).
  +'tint'?: 'default' | 'error' | 'success' | 'warning',
  +'isDisabled'?: boolean,
  +'data-testid'?: string,
};

export default function Button(props: Props): React.Element<'button'> {
  return (
    // eslint-disable-next-line react/forbid-elements
    <button
      // eslint-disable-next-line react/button-has-type
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.isDisabled === true}
      data-testid={props['data-testid']}
      className={sharedButtonStyles({
        buttonBase: true,
        buttonTintDefault: props.tint == null || props.tint === 'default',
        buttonTintError: props.tint === 'error',
        buttonTintSuccess: props.tint === 'success',
        buttonTintWarning: props.tint === 'warning',
        buttonDisabled: props.isDisabled === true,
      })}
    >
      {props.children}
    </button>
  );
}

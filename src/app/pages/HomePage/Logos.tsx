import { ReactComponent as CRALogo } from './assets/cra-logo.svg';
import { ReactComponent as RPLogo } from './assets/rp-logo.svg';
import { ReactComponent as PlusSign } from './assets/plus-sign.svg';

export function Logos() {
  return (
    <>
      <CRALogo className="logo" />
      <PlusSign className="sign" />
      <RPLogo className="logo" />
    </>
  );
}

import { FC, useEffect, ReactElement } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const ScrollToTop: FC<{ children: ReactElement } & RouteComponentProps> = ({
  children,
  location: { pathname },
}) => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);

  return children;
};

export default withRouter(ScrollToTop);

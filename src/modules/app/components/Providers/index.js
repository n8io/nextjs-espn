import { GlobalStyles } from "./GlobalStyles";

const Providers = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

export { Providers };

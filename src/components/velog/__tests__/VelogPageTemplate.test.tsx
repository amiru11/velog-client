import * as React from 'react';
import { render } from 'react-testing-library';
import VelogPageTemplate, {
  VelogPageTemplateProps,
} from '../VelogPageTemplate';
import renderWithRedux from '../../../lib/renderWithRedux';

describe('VelogPageTemplate', () => {
  const setup = (props: Partial<VelogPageTemplateProps> = {}) => {
    const initialProps: VelogPageTemplateProps = {};
    const utils = renderWithRedux(
      <VelogPageTemplate {...initialProps} {...props} />,
    );
    return {
      ...utils,
    };
  };
  it('renders Header', () => {
    const { getByTestId } = setup();
    getByTestId('Header');
  });
});
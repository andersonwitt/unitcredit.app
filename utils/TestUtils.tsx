import '@testing-library/jest-dom/extend-expect';
import {NavigationContainer} from '@react-navigation/native';
import {render, RenderOptions} from '@testing-library/react-native';
import React, { PropsWithChildren } from 'react';


const AllTheProvidersWithoutNavigation: React.FC<PropsWithChildren> = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

const renderPage = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions,
) => render(ui, {wrapper: AllTheProvidersWithoutNavigation, ...options});

export * from '@testing-library/react-native';

export {renderPage};

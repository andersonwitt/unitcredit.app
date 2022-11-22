import React, {PropsWithChildren, ReactElement} from 'react';
import {View as ViewNative} from 'react-native';

interface IViewNavitationProps {
  value: string;
  fullwidth?: boolean;
}

const View: React.FC<PropsWithChildren<IViewNavitationProps>> = ({
  children,
}) => <ViewNative>{children}</ViewNative>;

interface IContainerNavigationProps {
  currentStep: string;
  fullwidth?: boolean;
}

const Container: React.FC<PropsWithChildren<IContainerNavigationProps>> = ({
  children,
  currentStep,
  fullwidth,
}) => {
  return (
    <React.Fragment>
      {React.Children.map(children, child => {
        const item = child as ReactElement<
          PropsWithChildren<PropsWithChildren<IViewNavitationProps>>
        >;
        if (item.type === View && item.props.value === currentStep) {
          return (
            <ViewNative
              style={{
                width: fullwidth || item.props.fullwidth ? '100%' : 'auto',
              }}>
              {item}
            </ViewNative>
          );
        }
      })}
    </React.Fragment>
  );
};

const StepNavigation = {Container, View};

export default StepNavigation;

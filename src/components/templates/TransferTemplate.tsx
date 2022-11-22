import {StyleSheet, View, ToastAndroid} from 'react-native';
import React, {useContext, useState} from 'react';
import {TransferNavigationContext} from '../pages/Transfer';
import StepNavigation from '../atoms/StepNavigation';
import {TransferTotalStep} from '../molecules/TransferTotalStep';
import {TransferPersonStep} from '../molecules/TransferPersonStep';
import {TransferConfirmationStep} from '../molecules/TransferConfirmationStep';
import {TransferSuccessStep} from '../molecules/TransferSuccessStep';
import {
  TransferPayloadType,
  useTransferService,
} from '../services/TransferService';
import {TransferContext} from '../Providers/TransferProvider';

type StepType = 'total' | 'person' | 'confirmation' | 'success';

const TransferTemplate = () => {
  const [step, setStep] = useState<StepType>('total');
  const {payload, to} = useContext(TransferContext);
  const {navigation} = useContext(TransferNavigationContext);

  const {transferToUser} = useTransferService();

  const handleNavigateBack = () => {
    navigation?.goBack();
  };

  const handleStepChanged = (nextStep: StepType) => () => {
    setStep(nextStep);
  };

  const handleconfirmClicked = async () => {
    if (payload?.totalAsString && to?.id) {
      const payloadDTO = {
        toId: to.id,
        total: Number(
          payload.totalAsString.replace(/[R$|.]/gi, '').replace(',', '.'),
        ),
      } as TransferPayloadType;

      const response = await transferToUser(payloadDTO);

      if (response.isValid === true) {
        setStep('success');
      } else {
        ToastAndroid.show(response.message, ToastAndroid.SHORT);
      }
    }
  };

  return (
    <View style={styles.root}>
      <StepNavigation.Container currentStep={step}>
        <StepNavigation.View value="total">
          <TransferTotalStep
            onBackPress={handleNavigateBack}
            onConfirmPress={handleStepChanged('person')}
          />
        </StepNavigation.View>
        <StepNavigation.View value="person">
          <TransferPersonStep
            onBackPress={handleStepChanged('total')}
            onConfirmPress={handleStepChanged('confirmation')}
          />
        </StepNavigation.View>
        <StepNavigation.View value="confirmation">
          <TransferConfirmationStep
            onBackPress={handleStepChanged('person')}
            onConfirmPress={handleconfirmClicked}
          />
        </StepNavigation.View>
        <StepNavigation.View value="success">
          <TransferSuccessStep onConfirmPress={handleNavigateBack} />
        </StepNavigation.View>
      </StepNavigation.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    marginVertical: 15,
  },
  root: {
    margin: 15,
    flex: 1,
  },
});

export {TransferTemplate};

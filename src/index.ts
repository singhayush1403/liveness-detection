import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to FaceLivenessDetection.web.ts
// and on native platforms to FaceLivenessDetection.ts
import FaceLivenessDetectionModule from './FaceLivenessDetectionModule';
import FaceLivenessDetectionView from './FaceLivenessDetectionView';
import { ChangeEventPayload, FaceLivenessDetectionViewProps } from './FaceLivenessDetection.types';

// Get the native constant value.
export const PI = FaceLivenessDetectionModule.PI;

export function hello(): string {
  return FaceLivenessDetectionModule.hello();
}

export async function setValueAsync(value: string) {
  return await FaceLivenessDetectionModule.setValueAsync(value);
}

const emitter = new EventEmitter(FaceLivenessDetectionModule ?? NativeModulesProxy.FaceLivenessDetection);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { FaceLivenessDetectionView, FaceLivenessDetectionViewProps, ChangeEventPayload };

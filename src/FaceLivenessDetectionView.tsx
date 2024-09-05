import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { FaceLivenessDetectionViewProps } from './FaceLivenessDetection.types';

const NativeView: React.ComponentType<FaceLivenessDetectionViewProps> =
  requireNativeViewManager('FaceLivenessDetection');

export default function FaceLivenessDetectionView(props: FaceLivenessDetectionViewProps) {
  return <NativeView {...props} />;
}

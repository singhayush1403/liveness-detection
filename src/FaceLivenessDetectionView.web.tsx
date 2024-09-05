import * as React from 'react';

import { FaceLivenessDetectionViewProps } from './FaceLivenessDetection.types';

export default function FaceLivenessDetectionView(props: FaceLivenessDetectionViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

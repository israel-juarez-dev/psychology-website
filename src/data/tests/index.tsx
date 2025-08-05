// src/data/tests/index.ts
import { FunctionComponent } from 'react';
// import { TestMeta } from '../../types/TestTypes';

// Import all test metadata
import { gaMeta } from './ga';
import { depMeta } from './dep';
import { rosenbergMeta } from './rosenberg';
import { vocacionalMeta } from './vocacional';
import { inteligenciasMeta } from './inteligencias';
import { violentometroMeta } from './violentometro';

// Import all test components
import GaForm from '../../components/Tests/GaForm';
import DepForm from '../../components/Tests/DepForm';
import RosenbergForm from '../../components/Tests/RosenbergForm';
import VocacionalForm from '../../components/Tests/VocacionalForm';
import InteligenciasForm from '../../components/Tests/InteligenciasForm';
import ViolentometroForm from '../../components/Tests/ViolentometroForm';

// Type for test components
type TestComponent = FunctionComponent<{}>;

// Define test components mapping with proper typing
export const testComponents = {
  [gaMeta.id]: GaForm,
  [depMeta.id]: DepForm,
  [rosenbergMeta.id]: RosenbergForm,
  [vocacionalMeta.id]: VocacionalForm,
  [inteligenciasMeta.id]: InteligenciasForm,
  [violentometroMeta.id]: ViolentometroForm
} as const; // "as const" for literal type preservation

// Export all test metadata for listing
export const testMetadata = [
  gaMeta,
  depMeta,
  rosenbergMeta,
  vocacionalMeta,
  inteligenciasMeta,
  violentometroMeta
];

// Export question sets (if needed elsewhere)
export * from './ga';
export * from './dep';
export * from './rosenberg';
export * from './vocacional';
export * from './inteligencias';
export * from './violentometro';
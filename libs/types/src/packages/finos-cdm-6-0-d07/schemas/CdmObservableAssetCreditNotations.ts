import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditNotationSchema } from './CdmObservableAssetCreditNotation';
import { CdmObservableAssetMultipleCreditNotationsSchema } from './CdmObservableAssetMultipleCreditNotations';

const zod = z as any;

export const CdmObservableAssetCreditNotationsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditNotations']
)(
  zod.object({
    creditNotation: zod
      .lazy(() => CdmObservableAssetCreditNotationSchema)
      .optional(),
    creditNotations: zod
      .lazy(() => CdmObservableAssetMultipleCreditNotationsSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmObservableAssetCreditNotations = z.infer<
  typeof CdmObservableAssetCreditNotationsSchema
>;

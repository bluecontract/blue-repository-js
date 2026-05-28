import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditNotationSchema } from './CdmObservableAssetCreditNotation';
import { CdmObservableAssetMultipleCreditNotationsSchema } from './CdmObservableAssetMultipleCreditNotations';

export const CdmObservableAssetCreditNotationsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditNotations']
  )(
    z.object({
      creditNotation: z
        .lazy(() => CdmObservableAssetCreditNotationSchema)
        .optional(),
      creditNotations: z
        .lazy(() => CdmObservableAssetMultipleCreditNotationsSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetCreditNotations = z.infer<
  typeof CdmObservableAssetCreditNotationsSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantifierEnumSchema } from './CdmBaseMathQuantifierEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmObservableAssetMultipleDebtTypesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/MultipleDebtTypes']
  )(
    z.object({
      condition: z.lazy(() => CdmBaseMathQuantifierEnumSchema),
      debtType: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(2)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetMultipleDebtTypes = z.infer<
  typeof CdmObservableAssetMultipleDebtTypesSchema
>;

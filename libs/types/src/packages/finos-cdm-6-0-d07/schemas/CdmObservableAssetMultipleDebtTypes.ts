import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantifierEnumSchema } from './CdmBaseMathQuantifierEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmObservableAssetMultipleDebtTypesSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/MultipleDebtTypes']
)(
  zod.object({
    condition: zod.lazy(() => CdmBaseMathQuantifierEnumSchema),
    debtType: zod
      .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
      .min(2)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmObservableAssetMultipleDebtTypes = z.infer<
  typeof CdmObservableAssetMultipleDebtTypesSchema
>;

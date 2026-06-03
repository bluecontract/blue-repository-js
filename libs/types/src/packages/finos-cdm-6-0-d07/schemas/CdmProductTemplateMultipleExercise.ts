import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';

const zod = z as any;

export const CdmProductTemplateMultipleExerciseSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/MultipleExercise']
)(
  zod.object({
    description: zod.string().optional(),
    integralMultipleAmount: zod.number().optional(),
    maximumNotionalAmount: zod.number().optional(),
    maximumNumberOfOptions: zod.number().optional(),
    minimumNotionalAmount: zod.number().optional(),
    minimumNumberOfOptions: zod.number().optional(),
    name: zod.string().optional(),
    notionaReference: zod
      .lazy(() => CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema)
      .optional(),
  })
);

export type CdmProductTemplateMultipleExercise = z.infer<
  typeof CdmProductTemplateMultipleExerciseSchema
>;

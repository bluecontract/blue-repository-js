import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';

export const CdmProductTemplateMultipleExerciseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/MultipleExercise']
  )(
    z.object({
      description: z.string().optional(),
      integralMultipleAmount: z.number().optional(),
      maximumNotionalAmount: z.number().optional(),
      maximumNumberOfOptions: z.number().optional(),
      minimumNotionalAmount: z.number().optional(),
      minimumNumberOfOptions: z.number().optional(),
      name: z.string().optional(),
      notionaReference: z
        .lazy(() => CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema)
        .optional(),
    })
  );

export type CdmProductTemplateMultipleExercise = z.infer<
  typeof CdmProductTemplateMultipleExerciseSchema
>;

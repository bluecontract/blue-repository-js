import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';

const zod = z as any;

export const CdmProductTemplatePartialExerciseSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/PartialExercise']
)(
  zod.object({
    description: zod.string().optional(),
    integralMultipleAmount: zod.number().optional(),
    minimumNotionalAmount: zod.number().optional(),
    minimumNumberOfOptions: zod.number().optional(),
    name: zod.string().optional(),
    notionaReference: zod.lazy(
      () => CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema
    ),
  })
);

export type CdmProductTemplatePartialExercise = z.infer<
  typeof CdmProductTemplatePartialExerciseSchema
>;

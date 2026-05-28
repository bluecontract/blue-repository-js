import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductAssetStubFloatingRateSchema } from './CdmProductAssetStubFloatingRate';

export const CdmProductAssetStubValueSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/StubValue']
)(
  z.object({
    description: z.string().optional(),
    floatingRate: z
      .array(z.lazy(() => CdmProductAssetStubFloatingRateSchema))
      .min(0)
      .max(2)
      .optional(),
    name: z.string().optional(),
    stubAmount: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
    stubRate: z.number().optional(),
  })
);

export type CdmProductAssetStubValue = z.infer<
  typeof CdmProductAssetStubValueSchema
>;

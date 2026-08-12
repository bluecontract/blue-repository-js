import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductAssetStubFloatingRateSchema } from './CdmProductAssetStubFloatingRate';

const zod = z as any;

export const CdmProductAssetStubValueSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/StubValue']
)(
  zod.object({
    description: zod.string().optional(),
    floatingRate: zod
      .array(zod.lazy(() => CdmProductAssetStubFloatingRateSchema))
      .min(0)
      .max(2)
      .optional(),
    name: zod.string().optional(),
    stubAmount: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
    stubRate: zod.number().optional(),
  })
);

export type CdmProductAssetStubValue = z.infer<
  typeof CdmProductAssetStubValueSchema
>;

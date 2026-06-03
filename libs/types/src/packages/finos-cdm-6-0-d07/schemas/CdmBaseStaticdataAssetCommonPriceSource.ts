import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonPriceSourceSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/PriceSource']
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      pricePublisher: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      priceSourceHeading: zod.string().optional(),
      priceSourceLocation: zod.string().optional(),
      priceSourceTime: zod.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonPriceSource = z.infer<
  typeof CdmBaseStaticdataAssetCommonPriceSourceSchema
>;

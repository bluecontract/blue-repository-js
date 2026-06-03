import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmBaseStaticdataIdentifierLocationIdentifierSchema } from './CdmBaseStaticdataIdentifierLocationIdentifier';
import { CdmProductAssetAssetDeliveryPeriodsSchema } from './CdmProductAssetAssetDeliveryPeriods';

const zod = z as any;

export const CdmProductAssetAssetDeliveryInformationSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/AssetDeliveryInformation']
  )(
    zod.object({
      deliveryCapacity: zod.lazy(() => CdmBaseMathQuantitySchema).optional(),
      description: zod.string().optional(),
      location: zod
        .array(
          zod.lazy(() => CdmBaseStaticdataIdentifierLocationIdentifierSchema)
        )
        .min(0)
        .optional(),
      name: zod.string().optional(),
      periods: zod
        .lazy(() => CdmProductAssetAssetDeliveryPeriodsSchema)
        .optional(),
    })
  );

export type CdmProductAssetAssetDeliveryInformation = z.infer<
  typeof CdmProductAssetAssetDeliveryInformationSchema
>;

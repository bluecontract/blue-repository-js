import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmBaseStaticdataIdentifierLocationIdentifierSchema } from './CdmBaseStaticdataIdentifierLocationIdentifier';
import { CdmProductAssetAssetDeliveryPeriodsSchema } from './CdmProductAssetAssetDeliveryPeriods';

export const CdmProductAssetAssetDeliveryInformationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/AssetDeliveryInformation']
  )(
    z.object({
      deliveryCapacity: z.lazy(() => CdmBaseMathQuantitySchema).optional(),
      description: z.string().optional(),
      location: z
        .array(
          z.lazy(() => CdmBaseStaticdataIdentifierLocationIdentifierSchema)
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
      periods: z
        .lazy(() => CdmProductAssetAssetDeliveryPeriodsSchema)
        .optional(),
    })
  );

export type CdmProductAssetAssetDeliveryInformation = z.infer<
  typeof CdmProductAssetAssetDeliveryInformationSchema
>;

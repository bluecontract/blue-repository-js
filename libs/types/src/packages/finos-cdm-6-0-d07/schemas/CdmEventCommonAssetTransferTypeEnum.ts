import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonAssetTransferTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/AssetTransferTypeEnum']
  )(z.literal('FreeOfPayment') as unknown as z.ZodObject<any>);

export type CdmEventCommonAssetTransferTypeEnum = z.infer<
  typeof CdmEventCommonAssetTransferTypeEnumSchema
>;

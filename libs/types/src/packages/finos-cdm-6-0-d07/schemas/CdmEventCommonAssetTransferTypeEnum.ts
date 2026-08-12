import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonAssetTransferTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/AssetTransferTypeEnum']
)(zod.literal('FreeOfPayment') as unknown as z.ZodObject<any>);

export type CdmEventCommonAssetTransferTypeEnum = z.infer<
  typeof CdmEventCommonAssetTransferTypeEnumSchema
>;

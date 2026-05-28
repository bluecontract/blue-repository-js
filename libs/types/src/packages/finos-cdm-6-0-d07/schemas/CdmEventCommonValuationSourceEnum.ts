import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonValuationSourceEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ValuationSourceEnum']
  )(z.literal('CentralCounterparty') as unknown as z.ZodObject<any>);

export type CdmEventCommonValuationSourceEnum = z.infer<
  typeof CdmEventCommonValuationSourceEnumSchema
>;

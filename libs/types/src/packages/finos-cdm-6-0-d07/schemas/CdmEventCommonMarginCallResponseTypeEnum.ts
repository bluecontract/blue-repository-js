import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonMarginCallResponseTypeEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/MarginCallResponseTypeEnum']
  )(
    zod.enum(['AgreeinFull', 'Dispute', 'PartiallyAgree'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonMarginCallResponseTypeEnum = z.infer<
  typeof CdmEventCommonMarginCallResponseTypeEnumSchema
>;

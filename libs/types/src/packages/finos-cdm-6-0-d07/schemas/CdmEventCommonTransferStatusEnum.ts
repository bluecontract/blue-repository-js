import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonTransferStatusEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TransferStatusEnum']
  )(
    z.enum(['Disputed', 'Instructed', 'Netted', 'Pending', 'Settled'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonTransferStatusEnum = z.infer<
  typeof CdmEventCommonTransferStatusEnumSchema
>;

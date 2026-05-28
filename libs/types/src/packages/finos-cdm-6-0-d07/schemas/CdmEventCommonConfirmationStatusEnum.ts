import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonConfirmationStatusEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ConfirmationStatusEnum']
  )(
    z.enum(['Confirmed', 'Unconfirmed'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonConfirmationStatusEnum = z.infer<
  typeof CdmEventCommonConfirmationStatusEnumSchema
>;

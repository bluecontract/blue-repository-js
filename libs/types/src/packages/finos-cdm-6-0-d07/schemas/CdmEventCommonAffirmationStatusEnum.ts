import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonAffirmationStatusEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/AffirmationStatusEnum']
  )(
    z.enum(['Affirmed', 'Unaffirmed'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonAffirmationStatusEnum = z.infer<
  typeof CdmEventCommonAffirmationStatusEnumSchema
>;

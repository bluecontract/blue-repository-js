import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimeBusinessDayConventionEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/BusinessDayConventionEnum']
  )(
    zod.enum([
      'FOLLOWING',
      'FRN',
      'MODFOLLOWING',
      'MODPRECEDING',
      'NEAREST',
      'NONE',
      'NotApplicable',
      'PRECEDING',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseDatetimeBusinessDayConventionEnum = z.infer<
  typeof CdmBaseDatetimeBusinessDayConventionEnumSchema
>;

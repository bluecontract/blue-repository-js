import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonPositionEventIntentEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PositionEventIntentEnum']
  )(
    z.enum([
      'CorporateActionAdjustment',
      'Decrease',
      'Increase',
      'OptionExercise',
      'PositionCreation',
      'Transfer',
      'Valuation',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonPositionEventIntentEnum = z.infer<
  typeof CdmEventCommonPositionEventIntentEnumSchema
>;

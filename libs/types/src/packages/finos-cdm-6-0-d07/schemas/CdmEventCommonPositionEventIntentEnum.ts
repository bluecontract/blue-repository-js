import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonPositionEventIntentEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PositionEventIntentEnum']
)(
  zod.enum([
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

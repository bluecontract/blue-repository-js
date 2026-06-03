import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonCollateralStatusEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CollateralStatusEnum']
)(
  zod.enum(['FullAmount', 'InTransitAmount', 'SettledAmount'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonCollateralStatusEnum = z.infer<
  typeof CdmEventCommonCollateralStatusEnumSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonCallTypeEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CallTypeEnum']
)(
  z.enum(['ExpectedCall', 'MarginCall', 'Notification'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonCallTypeEnum = z.infer<
  typeof CdmEventCommonCallTypeEnumSchema
>;

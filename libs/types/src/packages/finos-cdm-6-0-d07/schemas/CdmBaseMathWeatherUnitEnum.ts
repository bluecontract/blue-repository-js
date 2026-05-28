import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathWeatherUnitEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/WeatherUnitEnum']
)(
  z.enum(['CDD', 'CPD', 'HDD'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseMathWeatherUnitEnum = z.infer<
  typeof CdmBaseMathWeatherUnitEnumSchema
>;

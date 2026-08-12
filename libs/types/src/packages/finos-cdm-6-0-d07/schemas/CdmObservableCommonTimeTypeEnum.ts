import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableCommonTimeTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/common/TimeTypeEnum']
)(
  zod.enum([
    'AsSpecifiedInMasterConfirmation',
    'Close',
    'DerivativesClose',
    'OSP',
    'Open',
    'SpecificTime',
    'XETRA',
  ] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmObservableCommonTimeTypeEnum = z.infer<
  typeof CdmObservableCommonTimeTypeEnumSchema
>;

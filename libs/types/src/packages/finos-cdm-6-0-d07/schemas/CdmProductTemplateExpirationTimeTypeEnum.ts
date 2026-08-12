import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateExpirationTimeTypeEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExpirationTimeTypeEnum']
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

export type CdmProductTemplateExpirationTimeTypeEnum = z.infer<
  typeof CdmProductTemplateExpirationTimeTypeEnumSchema
>;

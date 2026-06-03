import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationCommonGoverningLawEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/GoverningLawEnum']
  )(
    zod.enum([
      'AsSpecifiedInMasterAgreement',
      'BE',
      'CAAB',
      'CABC',
      'CAMN',
      'CAON',
      'CAQC',
      'DE',
      'FR',
      'GBEN',
      'GBGY',
      'GBIM',
      'GBJY',
      'GBSC',
      'IE',
      'JP',
      'LU',
      'RelatedMasterAgreement',
      'USCA',
      'USDE',
      'USIL',
      'USNY',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonGoverningLawEnum = z.infer<
  typeof CdmLegaldocumentationCommonGoverningLawEnumSchema
>;

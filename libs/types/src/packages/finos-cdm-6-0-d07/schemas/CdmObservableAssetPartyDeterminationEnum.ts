import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetPartyDeterminationEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PartyDeterminationEnum']
  )(
    zod.enum([
      'AsSpecifiedInMasterAgreement',
      'AsSpecifiedInStandardTermsSupplement',
      'Both',
      'ExercisingParty',
      'NonExercisingParty',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetPartyDeterminationEnum = z.infer<
  typeof CdmObservableAssetPartyDeterminationEnumSchema
>;

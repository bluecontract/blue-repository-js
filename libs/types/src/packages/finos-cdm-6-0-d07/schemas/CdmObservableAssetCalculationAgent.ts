import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmObservableAssetPartyDeterminationEnumSchema } from './CdmObservableAssetPartyDeterminationEnum';

const zod = z as any;

export const CdmObservableAssetCalculationAgentSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CalculationAgent']
)(
  zod.object({
    calculationAgentBusinessCenter: zod
      .lazy(() => CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema)
      .optional(),
    calculationAgentParty: zod
      .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
      .optional(),
    calculationAgentPartyEnum: zod
      .lazy(() => CdmObservableAssetPartyDeterminationEnumSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmObservableAssetCalculationAgent = z.infer<
  typeof CdmObservableAssetCalculationAgentSchema
>;

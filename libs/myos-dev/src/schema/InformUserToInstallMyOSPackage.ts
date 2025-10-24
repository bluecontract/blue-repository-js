import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MyOSPackageSchema } from './MyOSPackage';

export const InformUserToInstallMyOSPackageSchema = withTypeBlueId(
  blueIds['Inform User To Install MyOS Package']
)(
  z.object({
    description: z.string().optional(),
    message: z.unknown().optional(),
    name: z.string().optional(),
    package: MyOSPackageSchema.optional(),
    title: z.unknown().optional(),
  })
);

export type InformUserToInstallMyOSPackage = z.infer<
  typeof InformUserToInstallMyOSPackageSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const InformUserToInstallMyOSPackageSchema = withTypeBlueId(
  blueIds['Inform User To Install MyOS Package']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    package: z
      .object({
        type: z.string().optional(),
      })
      .optional(),
    title: z.string().optional(),
    message: z.string().optional(),
  })
);

export type InformUserToInstallMyOSPackage = z.infer<
  typeof InformUserToInstallMyOSPackageSchema
>;

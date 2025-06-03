import { describe, it, expect } from 'vitest';
import { transformToPackageName } from './transformToPackageName';

describe('transformToPackageName', () => {
  describe('original functionality', () => {
    it('should handle basic camelCase conversion', () => {
      expect(transformToPackageName('basic1')).toBe('basic1');
    });

    it('should handle camelCase with numbers', () => {
      expect(transformToPackageName('TestingJS')).toBe('testing-js');
    });

    it('should remove version strings', () => {
      expect(transformToPackageName('BlueContractsV0.4')).toBe(
        'blue-contracts'
      );
      expect(transformToPackageName('MyLibV1.0')).toBe('my-lib');
      expect(transformToPackageName('PackageV2.1.3')).toBe('package');
    });

    it('should handle mixed case strings', () => {
      expect(transformToPackageName('MyAwesomeLibrary')).toBe(
        'my-awesome-library'
      );
    });

    it('should handle consecutive uppercase letters', () => {
      expect(transformToPackageName('XMLParser')).toBe('xml-parser');
      expect(transformToPackageName('HTTPRequest')).toBe('http-request');
    });

    it('should handle special characters', () => {
      expect(transformToPackageName('my_package@name')).toBe('my_package-name');
      expect(transformToPackageName('package.name')).toBe('package.name');
    });

    it('should remove trailing hyphens', () => {
      expect(transformToPackageName('test-')).toBe('test');
      expect(transformToPackageName('test---')).toBe('test');
    });

    it('should handle leading and trailing hyphens', () => {
      expect(transformToPackageName('-test-')).toBe('test');
      expect(transformToPackageName('--test--')).toBe('test');
    });
  });

  describe('KEEP_TOGETHER patterns', () => {
    it('should keep predefined patterns together', () => {
      expect(transformToPackageName('MyOSDev')).toBe('myos-dev');
      expect(transformToPackageName('BlueOSKernel')).toBe('blue-os-kernel');
      expect(transformToPackageName('MyOSLibrary')).toBe('myos-library');
      expect(transformToPackageName('BlueOSService')).toBe('blue-os-service');
    });

    it('should handle patterns at different positions', () => {
      expect(transformToPackageName('MyOSManager')).toBe('myos-manager');
      expect(transformToPackageName('SuperMyOSClient')).toBe(
        'super-myos-client'
      );
      expect(transformToPackageName('MyOSDevTools')).toBe('myos-dev-tools');
    });

    it('should handle case insensitive patterns', () => {
      expect(transformToPackageName('MYOSDEV')).toBe('myos-dev');
      expect(transformToPackageName('myosdev')).toBe('myos-dev');
      expect(transformToPackageName('MyosClient')).toBe('myos-client');
    });

    it('should handle patterns with version strings', () => {
      expect(transformToPackageName('MyOSLibV1.0')).toBe('myos-lib');
      expect(transformToPackageName('BlueOSKernelV2.1')).toBe('blue-os-kernel');
    });
  });

  describe('edge cases', () => {
    it('should handle empty strings', () => {
      expect(transformToPackageName('')).toBe('');
    });

    it('should handle single characters', () => {
      expect(transformToPackageName('A')).toBe('a');
      expect(transformToPackageName('a')).toBe('a');
    });

    it('should handle numbers only', () => {
      expect(transformToPackageName('123')).toBe('123');
    });

    it('should handle all lowercase', () => {
      expect(transformToPackageName('alllowercase')).toBe('alllowercase');
    });

    it('should handle all uppercase', () => {
      expect(transformToPackageName('ALLUPPERCASE')).toBe('alluppercase');
    });

    it('should handle strings with only special characters', () => {
      expect(transformToPackageName('!@#$%')).toBe('');
    });

    it('should handle multiple consecutive hyphens', () => {
      expect(transformToPackageName('test---name')).toBe('test-name');
    });

    it('should handle dots in names', () => {
      expect(transformToPackageName('package.name.test')).toBe(
        'package.name.test'
      );
    });
  });

  describe('real-world examples', () => {
    it('should handle common library patterns', () => {
      expect(transformToPackageName('ReactHooks')).toBe('react-hooks');
      expect(transformToPackageName('VueComponents')).toBe('vue-components');
      expect(transformToPackageName('AngularServices')).toBe(
        'angular-services'
      );
    });

    it('should handle non-protected tech patterns normally', () => {
      expect(transformToPackageName('HTTPSServer')).toBe('https-server');
      expect(transformToPackageName('APIClient')).toBe('api-client');
      expect(transformToPackageName('XMLParser')).toBe('xml-parser');
    });

    it('should handle mixed protected and unprotected patterns', () => {
      expect(transformToPackageName('MyOSHttpServer')).toBe('myos-http-server');
      expect(transformToPackageName('BlueOSAPIClient')).toBe(
        'blue-os-api-client'
      );
    });
  });

  describe('backward compatibility', () => {
    it('should maintain backward compatibility for existing calls', () => {
      expect(transformToPackageName('TestCase')).toBe('test-case');
      expect(transformToPackageName('SomeLibrary')).toBe('some-library');
      expect(transformToPackageName('MyProjectV1.0')).toBe('my-project');
    });

    it('should handle the original MyOSDev example correctly', () => {
      expect(transformToPackageName('MyOSDev')).toBe('myos-dev');
    });
  });
});

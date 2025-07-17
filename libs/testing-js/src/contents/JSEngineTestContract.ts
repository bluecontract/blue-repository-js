export const jSEngineTestContract = {
  name: 'JS Engine Test Contract',
  type: {
    blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
  },
  workflows: {
    items: [
      {
        name: 'JS Main Test',
        steps: {
          items: [
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
                      },
                      value: true,
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/testStarted',
                    },
                  },
                ],
              },
            },
            {
              type: {
                blueId: 'CFKAD5Up8XpNyPHwRBEwiwSUdfFUoGqVVsW29k6te88p',
              },
              code: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value:
                  '// Run tests and return results\nconst testResults = {\n  passedTests: 0,\n  totalTests: 0,\n  errors: [],\n};\n\ntry {\n  const describe = (_, testSuite) => testSuite();\n  const test = (name, testFunc) => {\n    testResults.totalTests++;\n    try {\n      testFunc();\n      testResults.passedTests++;\n    } catch (error) {\n      testResults.errors.push(`${name}: ${error.message}`);\n    }\n  };\n  const expect = (actual) => ({\n    toBe: (expected) => {\n      if (actual !== expected)\n        throw new Error(`Expected ${expected}, but got ${actual}`);\n    },\n    toEqual: (expected) => {\n      if (JSON.stringify(actual) !== JSON.stringify(expected))\n        throw new Error(\n          `Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(\n            actual\n          )}`\n        );\n    },\n    toThrow: (expectedError) => {\n      try {\n        actual();\n        throw new Error(\n          `Expected function to throw "${expectedError}", but it didn\'t throw`\n        );\n      } catch (error) {\n        if (error.message !== expectedError)\n          throw new Error(\n            `Expected "${expectedError}", but got "${error.message}"`\n          );\n      }\n    },\n  });\n\n  describe("JavaScript Engine Test", () => {\n    test("Variables and data types", () => {\n      const num = 42;\n      const str = "Hello, world!";\n      const bool = true;\n      const arr = [1, 2, 3, 4, 5];\n      const obj = { key: "value", nested: { prop: 123 } };\n\n      expect(typeof num).toBe("number");\n      expect(typeof str).toBe("string");\n      expect(typeof bool).toBe("boolean");\n      expect(Array.isArray(arr)).toBe(true);\n      expect(typeof obj).toBe("object");\n    });\n\n    test("String concatenation", () => {\n      const str1 = "Hello";\n      const str2 = "world";\n      const result = str1 + " " + str2;\n      expect(result).toBe("Hello world");\n    });\n\n    test("Template literals", () => {\n      const num = 42;\n      const result = `The answer is ${num}`;\n      expect(result).toBe("The answer is 42");\n    });\n\n    test("Conversion between string and number", () => {\n      const str = "42";\n      const num = Number(str);\n      expect(num).toBe(42);\n    });\n\n    test("String and number comparison", () => {\n      const str = "42";\n      const num = 42;\n      expect(str == num).toBe(true);\n      expect(str === num).toBe(false);\n    });\n\n    test("String and number concatenation", () => {\n      const str = "42";\n      const num = 42;\n      const result = str + num;\n      expect(result).toBe("4242");\n    });\n\n    test("Arrow functions", () => {\n      const arrowFunc = (x, y) => x + y;\n      expect(arrowFunc(2, 3)).toBe(5);\n    });\n\n    test("Destructuring and spread operator", () => {\n      const obj = { key: "value", nested: { prop: 123 } };\n      const arr = [1, 2, 3, 4, 5];\n\n      const {\n        key,\n        nested: { prop },\n      } = obj;\n      expect(key).toBe("value");\n      expect(prop).toBe(123);\n\n      const newArr = [...arr, 6, 7];\n      expect(newArr).toEqual([1, 2, 3, 4, 5, 6, 7]);\n    });\n\n    test("Error handling", () => {\n      expect(() => {\n        throw new Error("Test error");\n      }).toThrow("Test error");\n    });\n\n    test("Control structures", () => {\n      const arr = [1, 2, 3, 4, 5];\n      let result = 0;\n      for (let i = 0; i < arr.length; i++) {\n        if (arr[i] % 2 === 0) {\n          result += arr[i];\n        } else {\n          continue;\n        }\n      }\n      expect(result).toBe(6);\n    });\n\n    test("Switch statement", () => {\n      const testSwitch = (num) => {\n        switch (num) {\n          case 41:\n            return "Wrong answer";\n          case 42:\n            return "Correct answer";\n          default:\n            return "Unknown answer";\n        }\n      };\n      expect(testSwitch(42)).toBe("Correct answer");\n    });\n\n    test("Object methods and this keyword", () => {\n      const testObject = {\n        value: 10,\n        increment() {\n          this.value++;\n        },\n        getValue() {\n          return this.value;\n        },\n      };\n      testObject.increment();\n      expect(testObject.getValue()).toBe(11);\n    });\n\n    test("JSON operations", () => {\n      const obj = { key: "value", nested: { prop: 123 } };\n      const jsonStr = JSON.stringify(obj);\n      const parsedObj = JSON.parse(jsonStr);\n      expect(parsedObj).toEqual(obj);\n    });\n\n    test("Regular expressions", () => {\n      const regex = /^[a-z]+$/i;\n      expect(regex.test("HelloWorld")).toBe(true);\n      expect(regex.test("Hello123")).toBe(false);\n    });\n\n    test("Math operations", () => {\n      const mathResult = Math.max(1, 5, 3, 2, 4);\n      expect(mathResult).toBe(5);\n    });\n  });\n\n  if (testResults.passedTests === testResults.totalTests) {\n    return { result: "JS Engine test completed successfully" };\n  } else {\n    throw new Error(\n      `JS Engine test failed: ${testResults.errors.join(", ")}`\n    );\n  }\n} catch (error) {\n  throw new TerminateContractWithErrorException(error.message);\n}\n',
              },
            },
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
                      },
                      value: true,
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/testMainCompleted',
                    },
                  },
                ],
              },
            },
          ],
        },
        trigger: {
          event: {
            type: {
              blueId: '3uzSCGkrdX4hTFGuLbyZES7NQmiuFskCpUy572GxNQuC',
            },
          },
        },
      },
      {
        name: 'JS Expression Test',
        steps: {
          items: [
            {
              name: 'AccessNestedPropertyWhichDoesNotExist',
              type: {
                blueId: 'CFKAD5Up8XpNyPHwRBEwiwSUdfFUoGqVVsW29k6te88p',
              },
              code: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value:
                  'const testValue = contract("/properties/nested/that/does/not/exist");\nif (testValue !== null) {\n  throw new TerminateContractWithErrorException("Expected null, but got " + testValue);\n}\nreturn { result: testValue };\n',
              },
            },
            {
              name: 'AccessNestedProperty',
              type: {
                blueId: 'CFKAD5Up8XpNyPHwRBEwiwSUdfFUoGqVVsW29k6te88p',
              },
              code: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value:
                  'const nestedPropValue = contract("/properties/nested/prop");\nreturn { value: nestedPropValue, name: "flatProp" };\n',
              },
            },
            {
              name: 'Save property to variable',
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${steps.AccessNestedProperty.value}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/flatProp',
                    },
                  },
                ],
              },
            },
            {
              name: 'Check result of property access',
              type: {
                blueId: 'CFKAD5Up8XpNyPHwRBEwiwSUdfFUoGqVVsW29k6te88p',
              },
              code: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value:
                  'const name = steps.AccessNestedProperty.name;\nconst testValue = contract("/properties/" + name);\n\n// Returns = testValue 123.0 object - why is it an object?\n// console.log("testValue", testValue, typeof testValue);\nif (testValue != 123) {\n  throw new TerminateContractWithErrorException("Expected 123, but got " + testValue);\n}\nreturn { result: testValue };\n',
              },
            },
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              condition: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value:
                  "${contract('/properties/' + steps.AccessNestedProperty.name) == 123}",
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
                      },
                      value: true,
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/testExpressionsCompleted',
                    },
                  },
                ],
              },
            },
          ],
        },
        trigger: {
          event: {
            type: {
              blueId: '3uzSCGkrdX4hTFGuLbyZES7NQmiuFskCpUy572GxNQuC',
            },
          },
        },
      },
    ],
  },
  properties: {
    nested: {
      prop: {
        type: {
          blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
        },
        value: 123,
      },
    },
    initialValue: {
      type: {
        blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
      },
      value: 42,
    },
  },
  messaging: {
    participants: {
      Tester: {
        timeline: {
          type: {
            blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
          },
          value: 100,
        },
      },
    },
  },
} as const;

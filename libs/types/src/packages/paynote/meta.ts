import blueIds from './blue-ids';

const meta: { name: string; typesMeta: Record<string, unknown> } = {
  name: 'PayNote',
  typesMeta: {
    C1rwze4jUCYuRxvCJg4gV3c8D3bWUARp95n7X8mj8XAp: {
      status: 'dev',
      name: 'Cancel Before Completion Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'C1rwze4jUCYuRxvCJg4gV3c8D3bWUARp95n7X8mj8XAp',
          attributesAdded: [],
        },
      ],
    },
    DD8bR9NDJgQRVkvsFgWUhCQ7i1NfM55jxhiuhj2QKGm: {
      status: 'stable',
      name: 'Capture Declined',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'FKmgCVJYnpqy9KJ2fNhEsiPUQHRyoG9oUunkdrwhG65t',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'DD8bR9NDJgQRVkvsFgWUhCQ7i1NfM55jxhiuhj2QKGm',
          attributesAdded: [],
        },
      ],
    },
    '3GqEaQb64A2UsJWDAYzR8Y94evNcTbYGrMMSkrV6jh66': {
      status: 'stable',
      name: 'Capture Failed',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '5KLJjeRj56sm2a1dj6guTWGKw533bwqNsiioSmntdSjg',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: '3GqEaQb64A2UsJWDAYzR8Y94evNcTbYGrMMSkrV6jh66',
          attributesAdded: [],
        },
      ],
    },
    GcDzvd7qyECoWSi5XazBjyWp8AGq5aQrTNg49xKD3SoF: {
      status: 'stable',
      name: 'Capture Funds Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'GcDzvd7qyECoWSi5XazBjyWp8AGq5aQrTNg49xKD3SoF',
          attributesAdded: [],
        },
      ],
    },
    '8Y3WD4MKxvq88zKDySGnW5cqLn5jJB3PweUSyemmBvoF': {
      status: 'dev',
      name: 'Card Charge Completed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '8Y3WD4MKxvq88zKDySGnW5cqLn5jJB3PweUSyemmBvoF',
          attributesAdded: [],
        },
      ],
    },
    '8r9J1CGqM1A3iuspzGef8BK6eQQ8SdxUxFDDNrQhoHL3': {
      status: 'dev',
      name: 'Card Charge Responded',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '8r9J1CGqM1A3iuspzGef8BK6eQQ8SdxUxFDDNrQhoHL3',
          attributesAdded: [],
        },
      ],
    },
    HmvA8ekVgFNVUGbUt5b7mCrcZVPs77hgYJvrCinK2Lwk: {
      status: 'dev',
      name: 'Card Transaction Capture Lock Change Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'HmvA8ekVgFNVUGbUt5b7mCrcZVPs77hgYJvrCinK2Lwk',
          attributesAdded: [],
        },
      ],
    },
    '3qvrrxbTzsbhUsRtbfQuj6ffc6SgKNzfSihRqgN7wNY4': {
      status: 'dev',
      name: 'Card Transaction Capture Lock Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '3qvrrxbTzsbhUsRtbfQuj6ffc6SgKNzfSihRqgN7wNY4',
          attributesAdded: [],
        },
      ],
    },
    '6Py2znvZpXUQqqLuNCd8GZ8VPNmc2XLQud4FejiLmwn4': {
      status: 'dev',
      name: 'Card Transaction Capture Locked',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '6Py2znvZpXUQqqLuNCd8GZ8VPNmc2XLQud4FejiLmwn4',
          attributesAdded: [],
        },
      ],
    },
    '83n64P9yoYMY7VNGrb1UKbmVsz3wwkZW8PAJqLz8AELJ': {
      status: 'dev',
      name: 'Card Transaction Capture Unlock Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '83n64P9yoYMY7VNGrb1UKbmVsz3wwkZW8PAJqLz8AELJ',
          attributesAdded: [],
        },
      ],
    },
    '8FNgHyEe5NQxjPGPcdM3FmfGGJkUHAZEP2vLXD4Acism': {
      status: 'dev',
      name: 'Card Transaction Capture Unlocked',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '8FNgHyEe5NQxjPGPcdM3FmfGGJkUHAZEP2vLXD4Acism',
          attributesAdded: [],
        },
      ],
    },
    DVykYmmbhDsjsNQCjETGqumKJW5doNkkk6K6R4xeFWTV: {
      status: 'dev',
      name: 'Card Transaction Details',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'DVykYmmbhDsjsNQCjETGqumKJW5doNkkk6K6R4xeFWTV',
          attributesAdded: [],
        },
      ],
    },
    '7jwuPsyHbqN5oQpxQoqsoUqXv7E9KYQnbv5ksQjysvnV': {
      status: 'dev',
      name: 'Card Transaction Monitoring Request Rejected',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '7jwuPsyHbqN5oQpxQoqsoUqXv7E9KYQnbv5ksQjysvnV',
          attributesAdded: [],
        },
      ],
    },
    '4aL3Eedbq7FQBp2GKABQkxd5uSDmTMjttLYRsiiA3aXf': {
      status: 'dev',
      name: 'Card Transaction Monitoring Started',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '4aL3Eedbq7FQBp2GKABQkxd5uSDmTMjttLYRsiiA3aXf',
          attributesAdded: [],
        },
      ],
    },
    '45LGaTEkpqKVCXfgjbdq4kEeQ64qV5TsgYVCiQev9J9n': {
      status: 'dev',
      name: 'Card Transaction Monitoring Stopped',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '45LGaTEkpqKVCXfgjbdq4kEeQ64qV5TsgYVCiQev9J9n',
          attributesAdded: [],
        },
      ],
    },
    '2nVsh9M7cDVU49yMKzG83dc217YcDtT3CchwKtG56sfx': {
      status: 'dev',
      name: 'Card Transaction PayNote',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '2nVsh9M7cDVU49yMKzG83dc217YcDtT3CchwKtG56sfx',
          attributesAdded: [],
        },
      ],
    },
    '2eNmDqhcQGV7Z7cJ6EJ9WnnpVKrqCuJrYfyiz1sfSPxC': {
      status: 'dev',
      name: 'Card Transaction Report',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '2eNmDqhcQGV7Z7cJ6EJ9WnnpVKrqCuJrYfyiz1sfSPxC',
          attributesAdded: [],
        },
      ],
    },
    '6KJJ8aRFozjWL2jATzUBeZ8bf6ffnVJYB1oYoJm8rtnv': {
      status: 'stable',
      name: 'Child PayNote Issuance Declined',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '5fW8b3vqSFGwaEvycu7CprBpmGEjW7QqT4vhmN6zX3sc',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: '6KJJ8aRFozjWL2jATzUBeZ8bf6ffnVJYB1oYoJm8rtnv',
          attributesAdded: [],
        },
      ],
    },
    '6Zkpg7wGfH7H58zxKT4hacHoQJtbstamHY6L3qVpLbRW': {
      status: 'stable',
      name: 'Child PayNote Issued',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'DB6iVUgsWh96zaypurZR5jT6EGdwELEteNPomRqo4ZY7',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: '6Zkpg7wGfH7H58zxKT4hacHoQJtbstamHY6L3qVpLbRW',
          attributesAdded: [],
        },
      ],
    },
    '8yMip2tqMRxoz6WvTAU7Hp4F5A285gMKPtvL6DX41Nqg': {
      status: 'dev',
      name: 'Complete Payment Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '8yMip2tqMRxoz6WvTAU7Hp4F5A285gMKPtvL6DX41Nqg',
          attributesAdded: [],
        },
      ],
    },
    '9Een3TcB61qehAjz4NcDdPeBGztoq78JGH6KuhfYjhsZ': {
      status: 'dev',
      name: 'Final Amount Resolution Rejected',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '9Een3TcB61qehAjz4NcDdPeBGztoq78JGH6KuhfYjhsZ',
          attributesAdded: [],
        },
      ],
    },
    Fz7b7rBDv2XZxFUHEgaYAFnVfrugVuDqkbaTpqvqEQKU: {
      status: 'dev',
      name: 'Final Amount Resolution Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'Fz7b7rBDv2XZxFUHEgaYAFnVfrugVuDqkbaTpqvqEQKU',
          attributesAdded: [],
        },
      ],
    },
    '6LmhFAV7hQwAAS1GFeDkuy6ZPhuSAedBoREUDiTLbS8M': {
      status: 'dev',
      name: 'Final Amount Resolved',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '6LmhFAV7hQwAAS1GFeDkuy6ZPhuSAedBoREUDiTLbS8M',
          attributesAdded: [],
        },
      ],
    },
    '4TN6BMNe4JV6eurzctJtHNd4qsNFPCYaqyXwWep8WosQ': {
      status: 'stable',
      name: 'Funds Captured',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '3j1NrjZiu7mn6pcTtqfFo7N2JEQGNWEh2dcxUDuSSVBS',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: '4TN6BMNe4JV6eurzctJtHNd4qsNFPCYaqyXwWep8WosQ',
          attributesAdded: [],
        },
      ],
    },
    '74nvQ2mXtTaqVVaRkY251t8pa8J7HKJz15rpG2YDTNCZ': {
      status: 'stable',
      name: 'Funds Reserved',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '4p216aqzABWnVNxJY1MkkTU8fZ511S93hQYo1wwHYpKi',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: '74nvQ2mXtTaqVVaRkY251t8pa8J7HKJz15rpG2YDTNCZ',
          attributesAdded: [],
        },
      ],
    },
    D4GFzYxsfR62ScEkmAAfM5EbRRvZWT3Sw6HjUjLLDugu: {
      status: 'dev',
      name: 'Funds Secured',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'D4GFzYxsfR62ScEkmAAfM5EbRRvZWT3Sw6HjUjLLDugu',
          attributesAdded: [],
        },
      ],
    },
    CBGbBbRr8BXEZeWeTHtNucALN7jcjHBsHgV8wCkqzgFg: {
      status: 'dev',
      name: 'Funds Securing Declined',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'CBGbBbRr8BXEZeWeTHtNucALN7jcjHBsHgV8wCkqzgFg',
          attributesAdded: [],
        },
      ],
    },
    AcV3s6B6heDQVQEMEA4xgtRY3VUtUxqKSVuioBt2pFLp: {
      status: 'dev',
      name: 'Funds Securing Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'AcV3s6B6heDQVQEMEA4xgtRY3VUtUxqKSVuioBt2pFLp',
          attributesAdded: [],
        },
      ],
    },
    '4paCVJn58VgBo65rXHr4SXHCnbjPa5zrrAxKW3HNRS7Q': {
      status: 'stable',
      name: 'Issue Child PayNote Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '4paCVJn58VgBo65rXHr4SXHCnbjPa5zrrAxKW3HNRS7Q',
          attributesAdded: [],
        },
      ],
    },
    CNeTiNQt2BgJ7GTVjPGrCxmiXLeTGxchmZNb6j4NRbtA: {
      status: 'dev',
      name: 'Linked Card Charge and Capture Immediately Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'CNeTiNQt2BgJ7GTVjPGrCxmiXLeTGxchmZNb6j4NRbtA',
          attributesAdded: [],
        },
      ],
    },
    C7CKgcCSaQqVjsmReDQvSyLkam6D1ACdHgm3phmccdUR: {
      status: 'dev',
      name: 'Linked Card Charge Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'C7CKgcCSaQqVjsmReDQvSyLkam6D1ACdHgm3phmccdUR',
          attributesAdded: [],
        },
      ],
    },
    '3RZadMqVG2EviCJh3Wn8oXt3oKcE3HxDyPhxPMwjThCH': {
      status: 'dev',
      name: 'Linked PayNote Start Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '3RZadMqVG2EviCJh3Wn8oXt3oKcE3HxDyPhxPMwjThCH',
          attributesAdded: [],
        },
      ],
    },
    H87zNkATo81RUE1xGUAePKv4hDGYU8xMWgFzCbTJKcxD: {
      status: 'dev',
      name: 'Linked PayNote Start Responded',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'H87zNkATo81RUE1xGUAePKv4hDGYU8xMWgFzCbTJKcxD',
          attributesAdded: [],
        },
      ],
    },
    A1Ra7o2G3gF5RCJzKax5ftXky5TQrPcvjPmMipvv3PA7: {
      status: 'dev',
      name: 'Linked PayNote Started',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'A1Ra7o2G3gF5RCJzKax5ftXky5TQrPcvjPmMipvv3PA7',
          attributesAdded: [],
        },
      ],
    },
    FCNBRG6pXurxfM9qaBYEQGBLYZEq8iLBf7qpmjf5nrHT: {
      status: 'dev',
      name: 'Merchant To Customer PayNote',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'FCNBRG6pXurxfM9qaBYEQGBLYZEq8iLBf7qpmjf5nrHT',
          attributesAdded: [],
        },
      ],
    },
    '2k1DzCTuqeUdyjxgw2zJRaK8JjVK9b6af5mVVp9ncKtS': {
      status: 'dev',
      name: 'Payee Assignment Confirmed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '2k1DzCTuqeUdyjxgw2zJRaK8JjVK9b6af5mVVp9ncKtS',
          attributesAdded: [],
        },
      ],
    },
    B9jHNiJW5Dm5vBR3mM9LDSeaYLGw67pKvwMVrrnrLUxq: {
      status: 'dev',
      name: 'Payee Assignment Rejected',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'B9jHNiJW5Dm5vBR3mM9LDSeaYLGw67pKvwMVrrnrLUxq',
          attributesAdded: [],
        },
      ],
    },
    BAQzcd8ik3X4PrWCMgJ48mVmXjv12Mi9a7RYURnEygrD: {
      status: 'stable',
      name: 'Payee Assignment Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'BAQzcd8ik3X4PrWCMgJ48mVmXjv12Mi9a7RYURnEygrD',
          attributesAdded: [],
        },
      ],
    },
    '3D5EMr4Yu2pD4z1CSUsj7kKPa28NGq6BDwU8jhFufZir': {
      status: 'dev',
      name: 'Payment Cancellation Declined',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '3D5EMr4Yu2pD4z1CSUsj7kKPa28NGq6BDwU8jhFufZir',
          attributesAdded: [],
        },
      ],
    },
    FzLb75BhpSDKvmnvLRp5VHC7WxszSJWhDUeLYFsG7kyK: {
      status: 'dev',
      name: 'Payment Cancellation Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'FzLb75BhpSDKvmnvLRp5VHC7WxszSJWhDUeLYFsG7kyK',
          attributesAdded: [],
        },
      ],
    },
    '9TqRBQi3CZa6npdsjk1xZmx3Fx8rNu3mLGdKRsUpPxyp': {
      status: 'dev',
      name: 'Payment Cancelled Before Completion',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '9TqRBQi3CZa6npdsjk1xZmx3Fx8rNu3mLGdKRsUpPxyp',
          attributesAdded: [],
        },
      ],
    },
    A6ju5jCNdPU83nB2EJ19VE2r3d1XPgWQygPcohuRzxMa: {
      status: 'dev',
      name: 'Payment Completed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'A6ju5jCNdPU83nB2EJ19VE2r3d1XPgWQygPcohuRzxMa',
          attributesAdded: [],
        },
      ],
    },
    Zi87ggCGvyvyC6BkE6fGfRApCKSEWvwZBzq6kr66Gxz: {
      status: 'dev',
      name: 'Payment Completion Declined',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'Zi87ggCGvyvyC6BkE6fGfRApCKSEWvwZBzq6kr66Gxz',
          attributesAdded: [],
        },
      ],
    },
    Ex5Js1G5Q28DiqxHpMkcnPg69efQZWJqUZmTy6Rkenit: {
      status: 'dev',
      name: 'Payment Completion Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'Ex5Js1G5Q28DiqxHpMkcnPg69efQZWJqUZmTy6Rkenit',
          attributesAdded: [],
        },
      ],
    },
    AUyPeDTYbjKsLYHVka8VzsH6mPR3wDDunfCFgzuimFTD: {
      status: 'dev',
      name: 'Payment Completion Lock Change Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'AUyPeDTYbjKsLYHVka8VzsH6mPR3wDDunfCFgzuimFTD',
          attributesAdded: [],
        },
      ],
    },
    CNUCbbLcR5bVJktXxLNFxziK781GPpASpHrZ3AbNbjF8: {
      status: 'dev',
      name: 'Payment Completion Lock Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'CNUCbbLcR5bVJktXxLNFxziK781GPpASpHrZ3AbNbjF8',
          attributesAdded: [],
        },
      ],
    },
    '5ay51sajCxDRM5w88w7vKqaFPQN2yqok2wMmFQynLLn': {
      status: 'dev',
      name: 'Payment Completion Locked',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '5ay51sajCxDRM5w88w7vKqaFPQN2yqok2wMmFQynLLn',
          attributesAdded: [],
        },
      ],
    },
    '5D8V9FiXun8bgUaNQapuvra3wvxLiHtoFEy7tzscSnR3': {
      status: 'dev',
      name: 'Payment Completion Unlock Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '5D8V9FiXun8bgUaNQapuvra3wvxLiHtoFEy7tzscSnR3',
          attributesAdded: [],
        },
      ],
    },
    '3CvQdp7L5VYsjdP9Wj4tjaobejkpv6VQCry4LoT2vMYw': {
      status: 'dev',
      name: 'Payment Completion Unlocked',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '3CvQdp7L5VYsjdP9Wj4tjaobejkpv6VQCry4LoT2vMYw',
          attributesAdded: [],
        },
      ],
    },
    '25WNYVoRMxNwVV1gBiMnBNgT1nQBpkC8wbqCTeR8SfLm': {
      status: 'dev',
      name: 'Payment Mandate',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '25WNYVoRMxNwVV1gBiMnBNgT1nQBpkC8wbqCTeR8SfLm',
          attributesAdded: [],
        },
      ],
    },
    Gs1jHaTTnb8cv6VH6GKwnDAzBPkRjH81wRj28zqkGtz7: {
      status: 'dev',
      name: 'Payment Mandate Attached',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'Gs1jHaTTnb8cv6VH6GKwnDAzBPkRjH81wRj28zqkGtz7',
          attributesAdded: [],
        },
      ],
    },
    Bini6FefW5nZTkMuiVtPCbxWPfATrtYWpSDfwEvEcXTp: {
      status: 'dev',
      name: 'Payment Mandate Attachment Failed',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'Bini6FefW5nZTkMuiVtPCbxWPfATrtYWpSDfwEvEcXTp',
          attributesAdded: [],
        },
      ],
    },
    '5c5mfwYpEs3LLawHVLWJVUFTgqdSMGBCHG6iPaTmqefJ': {
      status: 'dev',
      name: 'Payment Mandate Spend Authorization Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '5c5mfwYpEs3LLawHVLWJVUFTgqdSMGBCHG6iPaTmqefJ',
          attributesAdded: [],
        },
      ],
    },
    '3EntoP5XrNopV3NbvmE3G5JVTS2jEBJShutsCeFVpBqw': {
      status: 'dev',
      name: 'Payment Mandate Spend Authorization Responded',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '3EntoP5XrNopV3NbvmE3G5JVTS2jEBJShutsCeFVpBqw',
          attributesAdded: [],
        },
      ],
    },
    ENBm1kYyC3HHvnA59LZ8X7UDdZpS7875SpHmj8zBs35d: {
      status: 'dev',
      name: 'Payment Mandate Spend Settled',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'ENBm1kYyC3HHvnA59LZ8X7UDdZpS7875SpHmj8zBs35d',
          attributesAdded: [],
        },
      ],
    },
    Fms2mDEn9zx1eQgPKmTKcfYejFZ9SZrgNqP7eWVmReDi: {
      status: 'dev',
      name: 'Payment Mandate Spend Settlement Responded',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'Fms2mDEn9zx1eQgPKmTKcfYejFZ9SZrgNqP7eWVmReDi',
          attributesAdded: [],
        },
      ],
    },
    HBT721eA6MjEL4s9T3ZkmTR3GtSAMQ4yYpXQRt1v4Huh: {
      status: 'dev',
      name: 'Payment Reversal Declined',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'HBT721eA6MjEL4s9T3ZkmTR3GtSAMQ4yYpXQRt1v4Huh',
          attributesAdded: [],
        },
      ],
    },
    GodTmBkeiAhmTYR9gCF4zMnYYauDz2SgUFhwHGCFXRXU: {
      status: 'dev',
      name: 'Payment Reversal Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'GodTmBkeiAhmTYR9gCF4zMnYYauDz2SgUFhwHGCFXRXU',
          attributesAdded: [],
        },
      ],
    },
    FRi3kr6DcW6i7R65yh9YCDhVcU6mCyf2JkEVDkBkZsFa: {
      status: 'dev',
      name: 'Payment Reversal Lock Change Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'FRi3kr6DcW6i7R65yh9YCDhVcU6mCyf2JkEVDkBkZsFa',
          attributesAdded: [],
        },
      ],
    },
    B59nS1DoGFsTn13zqvfDFvLQ7j2G4NXTRGPByLFDNrFR: {
      status: 'dev',
      name: 'Payment Reversal Lock Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'B59nS1DoGFsTn13zqvfDFvLQ7j2G4NXTRGPByLFDNrFR',
          attributesAdded: [],
        },
      ],
    },
    '7HHy9Zt3Ma5w7HRFHJRLK87L2F3zZsC8rWYXjWjcuzS7': {
      status: 'dev',
      name: 'Payment Reversal Locked',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '7HHy9Zt3Ma5w7HRFHJRLK87L2F3zZsC8rWYXjWjcuzS7',
          attributesAdded: [],
        },
      ],
    },
    '6TbnGA2HDUY27gUaZzGnS7Ts6vZoBXEpWsBjEnxPnU8H': {
      status: 'dev',
      name: 'Payment Reversal Unlock Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '6TbnGA2HDUY27gUaZzGnS7Ts6vZoBXEpWsBjEnxPnU8H',
          attributesAdded: [],
        },
      ],
    },
    '2FrLTP891JHVyWKycAy5DkXS1VwAd8piEvX1vZvng2WF': {
      status: 'dev',
      name: 'Payment Reversal Unlocked',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '2FrLTP891JHVyWKycAy5DkXS1VwAd8piEvX1vZvng2WF',
          attributesAdded: [],
        },
      ],
    },
    J3JY5m2ZQL6nJpeT1fvWxpUb4iuLzrh19fSY1zzbWesE: {
      status: 'dev',
      name: 'Payment Reversed After Completion',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'J3JY5m2ZQL6nJpeT1fvWxpUb4iuLzrh19fSY1zzbWesE',
          attributesAdded: [],
        },
      ],
    },
    DivLdwvVivwHNakzhjFjoG8bpwZLcyxFMinziyEkpWc8: {
      status: 'dev',
      name: 'PayNote',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'DivLdwvVivwHNakzhjFjoG8bpwZLcyxFMinziyEkpWc8',
          attributesAdded: [],
        },
      ],
    },
    '2qhzWiZAVUTJvuAhexA8vRHrXWdWu7UGyAYPnfvEmTkV': {
      status: 'dev',
      name: 'PayNote Acceptance Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '2qhzWiZAVUTJvuAhexA8vRHrXWdWu7UGyAYPnfvEmTkV',
          attributesAdded: [],
        },
      ],
    },
    '5YLDihBUWvCz7kpaJgmhorvo7b5sdPv2AENZE7TQ7vSC': {
      status: 'dev',
      name: 'PayNote Accepted',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '5YLDihBUWvCz7kpaJgmhorvo7b5sdPv2AENZE7TQ7vSC',
          attributesAdded: [],
        },
      ],
    },
    '9ST1DLJxByDzvtdeJt8SFeZadSYokstVbWYcGVXnrEzk': {
      status: 'dev',
      name: 'PayNote Accepted By Client',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '9ST1DLJxByDzvtdeJt8SFeZadSYokstVbWYcGVXnrEzk',
          attributesAdded: [],
        },
      ],
    },
    JCohMWXJsPs5J9tmpx62U1yJUxxnmeXo7LVCWJm1HBxe: {
      status: 'stable',
      name: 'PayNote Approved',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '8DVJqK8XnidDVa8ToiHg2C67LzszVMrV57yircF3zzyM',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'JCohMWXJsPs5J9tmpx62U1yJUxxnmeXo7LVCWJm1HBxe',
          attributesAdded: [],
        },
      ],
    },
    '9VcJjyJbZEFyZmE8a2iPJGrr3DMtvmLzPLyoN7YpBFPr': {
      status: 'stable',
      name: 'PayNote Cancellation Rejected',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'AmVVqD9dehBLXhwmyRtfH9XhdMVbc9i9YEqhsMJrPnpN',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: '9VcJjyJbZEFyZmE8a2iPJGrr3DMtvmLzPLyoN7YpBFPr',
          attributesAdded: [],
        },
      ],
    },
    '2G6hwRBQbRA4D2n8vLPqD6hES44sGeh6kGF1uG88nn5R': {
      status: 'stable',
      name: 'PayNote Cancellation Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '2G6hwRBQbRA4D2n8vLPqD6hES44sGeh6kGF1uG88nn5R',
          attributesAdded: [],
        },
      ],
    },
    DHPD6TjPRGDbnXFfNwmjySBzANJtfFKy3YpnP3gRxrNp: {
      status: 'stable',
      name: 'PayNote Cancelled',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '29BnKeGGy1Z4ZQZk9tXccEtkjjjARP3xEw2sbxajtcn4',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'DHPD6TjPRGDbnXFfNwmjySBzANJtfFKy3YpnP3gRxrNp',
          attributesAdded: [],
        },
      ],
    },
    FR7p4QLk7jBBdXGzTwYN2KAeBx6gVGf9kTyF4pn45wLE: {
      status: 'dev',
      name: 'PayNote Client Decision Discarded',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'FR7p4QLk7jBBdXGzTwYN2KAeBx6gVGf9kTyF4pn45wLE',
          attributesAdded: [],
        },
      ],
    },
    B1P1db2a4FrXduvD2gU8Bipp48SpK19yFHw3JgKcJgqg: {
      status: 'dev',
      name: 'PayNote Delivery',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'B1P1db2a4FrXduvD2gU8Bipp48SpK19yFHw3JgKcJgqg',
          attributesAdded: [],
        },
      ],
    },
    GJhhepPZcpJxJjNrFscPYJCaUQN8EgvXVZDobduzhSKy: {
      status: 'dev',
      name: 'PayNote Delivery Failed',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'GJhhepPZcpJxJjNrFscPYJCaUQN8EgvXVZDobduzhSKy',
          attributesAdded: [],
        },
      ],
    },
    CoL6y3nodmB6mpWixGtNSiNCSQKQn7tJXouUE5Q9aaF: {
      status: 'stable',
      name: 'PayNote Rejected',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'FJqmEa4mSV4FrJkeZn9KLbTZMBeULqaBkzEhceuoaLJG',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'CoL6y3nodmB6mpWixGtNSiNCSQKQn7tJXouUE5Q9aaF',
          attributesAdded: [],
        },
      ],
    },
    '7jrHNe8HAs3LiLz5hmTZsAHCNwEaVNXQHf5ZomHVyVZC': {
      status: 'dev',
      name: 'PayNote Rejected By Client',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '7jrHNe8HAs3LiLz5hmTZsAHCNwEaVNXQHf5ZomHVyVZC',
          attributesAdded: [],
        },
      ],
    },
    '4RVCxhJGerHqGBUAHtbednRRuSimU65xQVzypH52ip3r': {
      status: 'stable',
      name: 'Reservation Declined',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'DhMGXZUUoZKjNmPbBKyY882k9rAnPK5F6Kup76KPLdKR',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: '4RVCxhJGerHqGBUAHtbednRRuSimU65xQVzypH52ip3r',
          attributesAdded: [],
        },
      ],
    },
    '6sJCbUQpaQxcBRSkTzKgMkmphhb6c3RoJERaZWvFTWex': {
      status: 'stable',
      name: 'Reservation Release Declined',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '2vV995BK1aDswPiZr8bXfwLvRbbprmFnhMa7aJGfg3Df',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: '6sJCbUQpaQxcBRSkTzKgMkmphhb6c3RoJERaZWvFTWex',
          attributesAdded: [],
        },
      ],
    },
    '3YBnYuYiQh1DtRuci5eZexXuEPuorJar4KefKAJQdPZr': {
      status: 'stable',
      name: 'Reservation Release Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '3YBnYuYiQh1DtRuci5eZexXuEPuorJar4KefKAJQdPZr',
          attributesAdded: [],
        },
      ],
    },
    '5BxbdjDKM6H1Gn6F2SDyeqJJRdViCEKJM8EwwocaR2hj': {
      status: 'stable',
      name: 'Reservation Released',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '36QzhH7XYNZRBqNotXqdoo7VGkgeZBUojDzADhd1e6RB',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: '5BxbdjDKM6H1Gn6F2SDyeqJJRdViCEKJM8EwwocaR2hj',
          attributesAdded: [],
        },
      ],
    },
    ECtoQipB9ayV1n8sHZgZy8U8z3rEsUbj8nBDwoueyfTU: {
      status: 'stable',
      name: 'Reserve Funds and Capture Immediately Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'ECtoQipB9ayV1n8sHZgZy8U8z3rEsUbj8nBDwoueyfTU',
          attributesAdded: [],
        },
      ],
    },
    C853sXni8pJeAfbHCtKB477n1BebwBAmL4SxiE3dy4fA: {
      status: 'stable',
      name: 'Reserve Funds Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'C853sXni8pJeAfbHCtKB477n1BebwBAmL4SxiE3dy4fA',
          attributesAdded: [],
        },
      ],
    },
    '7yCCQs9S2nns1nD3UG572QKvxUss5roACewUWbz5NLNv': {
      status: 'dev',
      name: 'Reverse After Completion Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '7yCCQs9S2nns1nD3UG572QKvxUss5roACewUWbz5NLNv',
          attributesAdded: [],
        },
      ],
    },
    '4yJfdAuMrzyVQPsopWMfw24CiW2xj31jC4oCwhXmPG8V': {
      status: 'dev',
      name: 'Reverse Card Charge and Capture Immediately Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '4yJfdAuMrzyVQPsopWMfw24CiW2xj31jC4oCwhXmPG8V',
          attributesAdded: [],
        },
      ],
    },
    '2Z77G9HMUNvJ6LRfvLMQBpshxbvGY3mCMskgpAEw4Rjo': {
      status: 'dev',
      name: 'Reverse Card Charge Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '2Z77G9HMUNvJ6LRfvLMQBpshxbvGY3mCMskgpAEw4Rjo',
          attributesAdded: [],
        },
      ],
    },
    FVosfv6GQeWk8zJCHiZtC4D6LFxwU8Y8ARAFYX1rsxzd: {
      status: 'dev',
      name: 'Secure Funds Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'FVosfv6GQeWk8zJCHiZtC4D6LFxwU8Y8ARAFYX1rsxzd',
          attributesAdded: [],
        },
      ],
    },
    '8Q5JVBmN6NJZHRHkkKQi2FViSNu17Fpuc4rn71ZLxzL': {
      status: 'stable',
      name: 'Settlement Amount Rejected',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'EqtTi4QsxYWoyLu4X2iptWAQTTAVHh77MUgdp8aUjtjC',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: '8Q5JVBmN6NJZHRHkkKQi2FViSNu17Fpuc4rn71ZLxzL',
          attributesAdded: [],
        },
      ],
    },
    AULn96cKLpm7hWzE6SZsXMrW1d4Ffy2ATpUWAHdzxbfh: {
      status: 'stable',
      name: 'Settlement Amount Specified',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '4dHGVnHSgn18Dj6VTYZE2359Ym67DLjfnwgDRcy5tHZH',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'AULn96cKLpm7hWzE6SZsXMrW1d4Ffy2ATpUWAHdzxbfh',
          attributesAdded: [],
        },
      ],
    },
    '248pKkeKj3v9HctkWpzcJ1E4E9enbJoS5csiPDRER62U': {
      status: 'dev',
      name: 'Start Card Transaction Monitoring Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '248pKkeKj3v9HctkWpzcJ1E4E9enbJoS5csiPDRER62U',
          attributesAdded: [],
        },
      ],
    },
    CLStrVwhFuEXAd4aurmgiHZgBH6RwzmGrN4VTkMA8t4U: {
      status: 'dev',
      name: 'Transaction Details Update Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'CLStrVwhFuEXAd4aurmgiHZgBH6RwzmGrN4VTkMA8t4U',
          attributesAdded: [],
        },
      ],
    },
    FdqDUfAWCuXX76FATG65canUKGYJChbbzhUfnx3U87eH: {
      status: 'dev',
      name: 'Transaction Details Update Lock Change Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'FdqDUfAWCuXX76FATG65canUKGYJChbbzhUfnx3U87eH',
          attributesAdded: [],
        },
      ],
    },
    '6TjBq3kF5mqXq8zHgr7LegNWUNJDLuN31z7ZrN5doY8G': {
      status: 'dev',
      name: 'Transaction Details Update Lock Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '6TjBq3kF5mqXq8zHgr7LegNWUNJDLuN31z7ZrN5doY8G',
          attributesAdded: [],
        },
      ],
    },
    '7eWohnCAiaeDM9w3Ta53HFzNfZ632TRi1QvEC4CWq5dp': {
      status: 'dev',
      name: 'Transaction Details Update Locked',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '7eWohnCAiaeDM9w3Ta53HFzNfZ632TRi1QvEC4CWq5dp',
          attributesAdded: [],
        },
      ],
    },
    J6Eku9sEFgBuG19nxYTWzvdyM9fDbxf59waQj5hz712H: {
      status: 'dev',
      name: 'Transaction Details Update Rejected',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'J6Eku9sEFgBuG19nxYTWzvdyM9fDbxf59waQj5hz712H',
          attributesAdded: [],
        },
      ],
    },
    G7U3e8x6XcUiy65g9MAh4LV2PRts5Vsk8KFJ9BrqmXao: {
      status: 'dev',
      name: 'Transaction Details Update Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'G7U3e8x6XcUiy65g9MAh4LV2PRts5Vsk8KFJ9BrqmXao',
          attributesAdded: [],
        },
      ],
    },
    HqD5YrGeruxAeibVpGJwpqXRcmCuoSNWN2j48iRaJdoU: {
      status: 'dev',
      name: 'Transaction Details Update Unlock Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'HqD5YrGeruxAeibVpGJwpqXRcmCuoSNWN2j48iRaJdoU',
          attributesAdded: [],
        },
      ],
    },
    '9Ly4TDBSioFwQGRYZjXFrYToUKYmFsK935PRcVTFwkqA': {
      status: 'dev',
      name: 'Transaction Details Update Unlocked',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '9Ly4TDBSioFwQGRYZjXFrYToUKYmFsK935PRcVTFwkqA',
          attributesAdded: [],
        },
      ],
    },
    '2PvRXbCWSaToP2BiFrEQHdTZ8W1F5TzNeCsK1rbhd4iE': {
      status: 'dev',
      name: 'Transaction Details Updated',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '2PvRXbCWSaToP2BiFrEQHdTZ8W1F5TzNeCsK1rbhd4iE',
          attributesAdded: [],
        },
      ],
    },
    '7zoVbzvzqxvKAcvdbSSxGPR4RxjQ9iNip3WhU52bRBtb': {
      status: 'dev',
      name: 'Transaction Identification Failed',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '7zoVbzvzqxvKAcvdbSSxGPR4RxjQ9iNip3WhU52bRBtb',
          attributesAdded: [],
        },
      ],
    },
    BDeXDAG91B72CFtoPcDUk3odhFMBhiueneS1RcM4nbPf: {
      status: 'dev',
      name: 'Transaction Identified',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'BDeXDAG91B72CFtoPcDUk3odhFMBhiueneS1RcM4nbPf',
          attributesAdded: [],
        },
      ],
    },
    '3u8MNZmeGVfDWPSDAy4YKrLvjGrKixetC82z5VCj5Nxh': {
      status: 'dev',
      name: 'Transaction Initiated',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: '3u8MNZmeGVfDWPSDAy4YKrLvjGrKixetC82z5VCj5Nxh',
          attributesAdded: [],
        },
      ],
    },
    GuqdDWWRhjXQaHEk45Gdfgia1m6Dp5FS3bEaYXCDe16y: {
      status: 'dev',
      name: 'Transaction Initiation Failed',
      versions: [
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'GuqdDWWRhjXQaHEk45Gdfgia1m6Dp5FS3bEaYXCDe16y',
          attributesAdded: [],
        },
      ],
    },
    DtMSkzcFRUytFjeQEB5ZSEnu1jewVNMuHbN6sDWKjQ7d: {
      status: 'dev',
      name: 'Transaction Status',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'DtMSkzcFRUytFjeQEB5ZSEnu1jewVNMuHbN6sDWKjQ7d',
          attributesAdded: [],
        },
      ],
    },
  },
};
const metaWithAliases: {
  name: string;
  typesMeta: Record<string, unknown>;
  aliases: Record<string, string>;
} = {
  ...meta,
  aliases: blueIds,
};

export default metaWithAliases;

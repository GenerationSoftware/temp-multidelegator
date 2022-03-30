export default [
  {
    abi: [
      {
        inputs: [
          {
            internalType: 'contract ITicket',
            name: '_ticket',
            type: 'address'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'promotionId',
            type: 'uint256'
          }
        ],
        name: 'PromotionCreated',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'promotionId',
            type: 'uint256'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'PromotionDestroyed',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'promotionId',
            type: 'uint256'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'epochNumber',
            type: 'uint8'
          }
        ],
        name: 'PromotionEnded',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'promotionId',
            type: 'uint256'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'numberOfEpochs',
            type: 'uint256'
          }
        ],
        name: 'PromotionExtended',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'promotionId',
            type: 'uint256'
          },
          {
            indexed: false,
            internalType: 'uint8[]',
            name: 'epochIds',
            type: 'uint8[]'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'RewardsClaimed',
        type: 'event'
      },
      {
        inputs: [],
        name: 'GRACE_PERIOD',
        outputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_user',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: '_promotionId',
            type: 'uint256'
          },
          {
            internalType: 'uint8[]',
            name: '_epochIds',
            type: 'uint8[]'
          }
        ],
        name: 'claimRewards',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'contract IERC20',
            name: '_token',
            type: 'address'
          },
          {
            internalType: 'uint64',
            name: '_startTimestamp',
            type: 'uint64'
          },
          {
            internalType: 'uint256',
            name: '_tokensPerEpoch',
            type: 'uint256'
          },
          {
            internalType: 'uint48',
            name: '_epochDuration',
            type: 'uint48'
          },
          {
            internalType: 'uint8',
            name: '_numberOfEpochs',
            type: 'uint8'
          }
        ],
        name: 'createPromotion',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_promotionId',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: '_to',
            type: 'address'
          }
        ],
        name: 'destroyPromotion',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_promotionId',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: '_to',
            type: 'address'
          }
        ],
        name: 'endPromotion',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_promotionId',
            type: 'uint256'
          },
          {
            internalType: 'uint8',
            name: '_numberOfEpochs',
            type: 'uint8'
          }
        ],
        name: 'extendPromotion',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_promotionId',
            type: 'uint256'
          }
        ],
        name: 'getCurrentEpochId',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_promotionId',
            type: 'uint256'
          }
        ],
        name: 'getPromotion',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'creator',
                type: 'address'
              },
              {
                internalType: 'uint64',
                name: 'startTimestamp',
                type: 'uint64'
              },
              {
                internalType: 'uint8',
                name: 'numberOfEpochs',
                type: 'uint8'
              },
              {
                internalType: 'uint48',
                name: 'epochDuration',
                type: 'uint48'
              },
              {
                internalType: 'uint48',
                name: 'createdAt',
                type: 'uint48'
              },
              {
                internalType: 'contract IERC20',
                name: 'token',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'tokensPerEpoch',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'rewardsUnclaimed',
                type: 'uint256'
              }
            ],
            internalType: 'struct ITwabRewards.Promotion',
            name: '',
            type: 'tuple'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_promotionId',
            type: 'uint256'
          }
        ],
        name: 'getRemainingRewards',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_user',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: '_promotionId',
            type: 'uint256'
          },
          {
            internalType: 'uint8[]',
            name: '_epochIds',
            type: 'uint8[]'
          }
        ],
        name: 'getRewardsAmount',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'ticket',
        outputs: [
          {
            internalType: 'contract ITicket',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      }
    ],
    transactionHash: '0xeac59dd8004f912f926d517da90359fc72461a272c7a5a61123124846013ab74',
    receipt: {
      to: null,
      from: '0x4D40eb12430A57965cEe3015348d490C6156dF20',
      contractAddress: '0xCa9adB15E33948199066f772C3cb02B62356d764',
      transactionIndex: 40,
      gasUsed: '1759010',
      logsBloom:
        '0x00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000040000000008000000000000000000000000000000000000000000000000000000000800000000000400000000100000000000000000000000000000000000000000000000000000000000080000000000000000000000000000002000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000004000000000000000000001000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000001100000',
      blockHash: '0x7c47431ac3d7db6a3bf3613c8495b164cbf7868c6df7998b11dff20da4f702e6',
      transactionHash: '0xeac59dd8004f912f926d517da90359fc72461a272c7a5a61123124846013ab74',
      logs: [
        {
          transactionIndex: 40,
          blockNumber: 24673959,
          transactionHash: '0xeac59dd8004f912f926d517da90359fc72461a272c7a5a61123124846013ab74',
          address: '0x0000000000000000000000000000000000001010',
          topics: [
            '0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63',
            '0x0000000000000000000000000000000000000000000000000000000000001010',
            '0x0000000000000000000000004d40eb12430a57965cee3015348d490c6156df20',
            '0x0000000000000000000000007c7379531b2aee82e4ca06d4175d13b9cbeafd49'
          ],
          data: '0x00000000000000000000000000000000000000000000000000c1ba1e56d3110200000000000000000000000000000000000000000000000029604f0e34560d1f00000000000000000000000000000000000000000000a299380e52251f04449b000000000000000000000000000000000000000000000000289e94efdd82fc1d00000000000000000000000000000000000000000000a29938d00c4375d7559d',
          logIndex: 162,
          blockHash: '0x7c47431ac3d7db6a3bf3613c8495b164cbf7868c6df7998b11dff20da4f702e6'
        }
      ],
      blockNumber: 24673959,
      cumulativeGasUsed: '9405155',
      status: 1,
      byzantium: true
    },
    args: ['0x6a304dFdb9f808741244b6bfEe65ca7B3b3A6076'],
    numDeployments: 1,
    solcInputHash: '9d2b1510a7a05cdcf74c28c8c70bacde',
    metadata:
      '{"compiler":{"version":"0.8.6+commit.11564f7e"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"contract ITicket","name":"_ticket","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"promotionId","type":"uint256"}],"name":"PromotionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"promotionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PromotionDestroyed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"promotionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"epochNumber","type":"uint8"}],"name":"PromotionEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"promotionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberOfEpochs","type":"uint256"}],"name":"PromotionExtended","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"promotionId","type":"uint256"},{"indexed":false,"internalType":"uint8[]","name":"epochIds","type":"uint8[]"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"inputs":[],"name":"GRACE_PERIOD","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_promotionId","type":"uint256"},{"internalType":"uint8[]","name":"_epochIds","type":"uint8[]"}],"name":"claimRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint64","name":"_startTimestamp","type":"uint64"},{"internalType":"uint256","name":"_tokensPerEpoch","type":"uint256"},{"internalType":"uint48","name":"_epochDuration","type":"uint48"},{"internalType":"uint8","name":"_numberOfEpochs","type":"uint8"}],"name":"createPromotion","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_promotionId","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"destroyPromotion","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_promotionId","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"endPromotion","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_promotionId","type":"uint256"},{"internalType":"uint8","name":"_numberOfEpochs","type":"uint8"}],"name":"extendPromotion","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_promotionId","type":"uint256"}],"name":"getCurrentEpochId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_promotionId","type":"uint256"}],"name":"getPromotion","outputs":[{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"uint8","name":"numberOfEpochs","type":"uint8"},{"internalType":"uint48","name":"epochDuration","type":"uint48"},{"internalType":"uint48","name":"createdAt","type":"uint48"},{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"tokensPerEpoch","type":"uint256"},{"internalType":"uint256","name":"rewardsUnclaimed","type":"uint256"}],"internalType":"struct ITwabRewards.Promotion","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_promotionId","type":"uint256"}],"name":"getRemainingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_promotionId","type":"uint256"},{"internalType":"uint8[]","name":"_epochIds","type":"uint8[]"}],"name":"getRewardsAmount","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ticket","outputs":[{"internalType":"contract ITicket","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"author":"PoolTogether Inc Team","details":"This contract supports only one prize pool ticket.This contract does not support the use of fee on transfer tokens.","events":{"PromotionCreated(uint256)":{"params":{"promotionId":"Id of the newly created promotion"}},"PromotionDestroyed(uint256,address,uint256)":{"params":{"amount":"Amount of tokens transferred to the recipient","promotionId":"Id of the promotion being destroyed","recipient":"Address of the recipient that will receive the unclaimed rewards"}},"PromotionEnded(uint256,address,uint256,uint8)":{"params":{"amount":"Amount of tokens transferred to the recipient","epochNumber":"Epoch number at which the promotion ended","promotionId":"Id of the promotion being ended","recipient":"Address of the recipient that will receive the remaining rewards"}},"PromotionExtended(uint256,uint256)":{"params":{"numberOfEpochs":"Number of epochs the promotion has been extended by","promotionId":"Id of the promotion being extended"}},"RewardsClaimed(uint256,uint8[],address,uint256)":{"params":{"amount":"Amount of tokens transferred to the recipient address","epochIds":"Ids of the epochs being claimed","promotionId":"Id of the promotion for which epoch rewards were claimed","user":"Address of the user for which the rewards were claimed"}}},"kind":"dev","methods":{"claimRewards(address,uint256,uint8[])":{"details":"Rewards can be claimed on behalf of a user.Rewards can only be claimed for a past epoch.","params":{"_epochIds":"Epoch ids to claim rewards for","_promotionId":"Id of the promotion to claim rewards for","_user":"Address of the user to claim rewards for"},"returns":{"_0":"Total amount of rewards claimed"}},"constructor":{"params":{"_ticket":"Prize Pool ticket address for which the promotions will be created"}},"createPromotion(address,uint64,uint256,uint48,uint8)":{"details":"For sake of simplicity, `msg.sender` will be the creator of the promotion.`_latestPromotionId` starts at 0 and is incremented by 1 for each new promotion. So the first promotion will have id 1, the second 2, etc.The transaction will revert if the amount of reward tokens provided is not equal to `_tokensPerEpoch * _numberOfEpochs`. This scenario could happen if the token supplied is a fee on transfer one.","params":{"_epochDuration":"Duration of one epoch in seconds","_numberOfEpochs":"Number of epochs the promotion will last for","_startTimestamp":"Timestamp at which the promotion starts","_token":"Address of the token to be distributed","_tokensPerEpoch":"Number of tokens to be distributed per epoch"},"returns":{"_0":"Id of the newly created promotion"}},"destroyPromotion(uint256,address)":{"details":"Will send back all the tokens that have not been claimed yet by users.This function will revert if the promotion is still active.This function will revert if the grace period is not over yet.","params":{"_promotionId":"Promotion id to destroy","_to":"Address that will receive the remaining tokens if there are any left"},"returns":{"_0":"True if operation was successful"}},"endPromotion(uint256,address)":{"details":"Will only send back tokens from the epochs that have not completed.","params":{"_promotionId":"Promotion id to end","_to":"Address that will receive the remaining tokens if there are any left"},"returns":{"_0":"true if operation was successful"}},"extendPromotion(uint256,uint8)":{"params":{"_numberOfEpochs":"Number of epochs to add","_promotionId":"Id of the promotion to extend"},"returns":{"_0":"True if the operation was successful"}},"getCurrentEpochId(uint256)":{"details":"Epoch ids and their boolean values are tightly packed and stored in a uint256, so epoch id starts at 0.","params":{"_promotionId":"Id of the promotion to get current epoch for"},"returns":{"_0":"Current epoch id of the promotion"}},"getPromotion(uint256)":{"params":{"_promotionId":"Id of the promotion to get settings for"},"returns":{"_0":"Promotion settings"}},"getRemainingRewards(uint256)":{"params":{"_promotionId":"Id of the promotion to get the total amount of tokens left to be rewarded for"},"returns":{"_0":"Amount of tokens left to be rewarded"}},"getRewardsAmount(address,uint256,uint8[])":{"details":"Rewards amount can only be retrieved for epochs that are over.Will revert if `_epochId` is over the total number of epochs or if epoch is not over.Will return 0 if the user average balance of tickets is 0.Will be 0 if user has already claimed rewards for the epoch.","params":{"_epochIds":"Epoch ids to get reward amount for","_promotionId":"Id of the promotion from which the epoch is","_user":"Address of the user to get amount of rewards for"},"returns":{"_0":"Amount of tokens per epoch to be rewarded"}}},"stateVariables":{"_claimedEpochs":{"details":"_claimedEpochs[promotionId][user] => claimedEpochsWe pack epochs claimed by a user into a uint256. So we can\'t store more than 256 epochs."},"_latestPromotionId":{"details":"Starts at 0 and is incremented by 1 for each new promotion. So the first promotion will have id 1, the second 2, etc."}},"title":"PoolTogether V4 TwabRewards","version":1},"userdoc":{"events":{"PromotionCreated(uint256)":{"notice":"Emitted when a promotion is created."},"PromotionDestroyed(uint256,address,uint256)":{"notice":"Emitted when a promotion is destroyed."},"PromotionEnded(uint256,address,uint256,uint8)":{"notice":"Emitted when a promotion is ended."},"PromotionExtended(uint256,uint256)":{"notice":"Emitted when a promotion is extended."},"RewardsClaimed(uint256,uint8[],address,uint256)":{"notice":"Emitted when rewards have been claimed."}},"kind":"user","methods":{"GRACE_PERIOD()":{"notice":"Period during which the promotion owner can\'t destroy a promotion."},"claimRewards(address,uint256,uint8[])":{"notice":"Claim rewards for a given promotion and epoch."},"constructor":{"notice":"Constructor of the contract."},"createPromotion(address,uint64,uint256,uint48,uint8)":{"notice":"Creates a new promotion."},"destroyPromotion(uint256,address)":{"notice":"Delete an inactive promotion and send promotion tokens back to the creator."},"endPromotion(uint256,address)":{"notice":"End currently active promotion and send promotion tokens back to the creator."},"extendPromotion(uint256,uint8)":{"notice":"Extend promotion by adding more epochs."},"getCurrentEpochId(uint256)":{"notice":"Get the current epoch id of a promotion."},"getPromotion(uint256)":{"notice":"Get settings for a specific promotion."},"getRemainingRewards(uint256)":{"notice":"Get the total amount of tokens left to be rewarded."},"getRewardsAmount(address,uint256,uint8[])":{"notice":"Get amount of tokens to be rewarded for a given epoch."},"ticket()":{"notice":"Prize pool ticket for which the promotions are created."}},"notice":"Contract to distribute rewards to depositors in a pool. This contract supports the creation of several promotions that can run simultaneously. In order to calculate user rewards, we use the TWAB (Time-Weighted Average Balance) from the Ticket contract. This way, users simply need to hold their tickets to be eligible to claim rewards. Rewards are calculated based on the average amount of tickets they hold during the epoch duration.","version":1}},"settings":{"compilationTarget":{"@pooltogether/v4-periphery/contracts/TwabRewards.sol":"TwabRewards"},"evmVersion":"berlin","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":true,"runs":2000},"remappings":[]},"sources":{"@openzeppelin/contracts/token/ERC20/IERC20.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller\'s account to `recipient`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender\'s allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\n     * allowance mechanism. `amount` is then deducted from the caller\'s\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n","keccak256":"0x61437cb513a887a1bbad006e7b1c8b414478427d33de47c5600af3c748f108da","license":"MIT"},"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/utils/SafeERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../IERC20.sol\\";\\nimport \\"../../../utils/Address.sol\\";\\n\\n/**\\n * @title SafeERC20\\n * @dev Wrappers around ERC20 operations that throw on failure (when the token\\n * contract returns false). Tokens that return no value (and instead revert or\\n * throw on failure) are also supported, non-reverting calls are assumed to be\\n * successful.\\n * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\\n */\\nlibrary SafeERC20 {\\n    using Address for address;\\n\\n    function safeTransfer(\\n        IERC20 token,\\n        address to,\\n        uint256 value\\n    ) internal {\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));\\n    }\\n\\n    function safeTransferFrom(\\n        IERC20 token,\\n        address from,\\n        address to,\\n        uint256 value\\n    ) internal {\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));\\n    }\\n\\n    /**\\n     * @dev Deprecated. This function has issues similar to the ones found in\\n     * {IERC20-approve}, and its usage is discouraged.\\n     *\\n     * Whenever possible, use {safeIncreaseAllowance} and\\n     * {safeDecreaseAllowance} instead.\\n     */\\n    function safeApprove(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        // safeApprove should only be called when setting an initial allowance,\\n        // or when resetting it to zero. To increase and decrease it, use\\n        // \'safeIncreaseAllowance\' and \'safeDecreaseAllowance\'\\n        require(\\n            (value == 0) || (token.allowance(address(this), spender) == 0),\\n            \\"SafeERC20: approve from non-zero to non-zero allowance\\"\\n        );\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));\\n    }\\n\\n    function safeIncreaseAllowance(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        uint256 newAllowance = token.allowance(address(this), spender) + value;\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n    }\\n\\n    function safeDecreaseAllowance(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        unchecked {\\n            uint256 oldAllowance = token.allowance(address(this), spender);\\n            require(oldAllowance >= value, \\"SafeERC20: decreased allowance below zero\\");\\n            uint256 newAllowance = oldAllowance - value;\\n            _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n        }\\n    }\\n\\n    /**\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\n     * @param token The token targeted by the call.\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\n     */\\n    function _callOptionalReturn(IERC20 token, bytes memory data) private {\\n        // We need to perform a low level call here, to bypass Solidity\'s return data size checking mechanism, since\\n        // we\'re implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that\\n        // the target address contains contract code and also asserts for success in the low-level call.\\n\\n        bytes memory returndata = address(token).functionCall(data, \\"SafeERC20: low-level call failed\\");\\n        if (returndata.length > 0) {\\n            // Return data is optional\\n            require(abi.decode(returndata, (bool)), \\"SafeERC20: ERC20 operation did not succeed\\");\\n        }\\n    }\\n}\\n","keccak256":"0xc3d946432c0ddbb1f846a0d3985be71299df331b91d06732152117f62f0be2b5","license":"MIT"},"@openzeppelin/contracts/utils/Address.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Address.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize, which returns 0 for contracts in\\n        // construction, since the code is only stored at the end of the\\n        // constructor execution.\\n\\n        uint256 size;\\n        assembly {\\n            size := extcodesize(account)\\n        }\\n        return size > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\"Address: insufficient balance\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\"\\");\\n        require(success, \\"Address: unable to send value, recipient may have reverted\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\"Address: low-level call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\"Address: low-level call with value failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\"Address: insufficient balance for call\\");\\n        require(isContract(target), \\"Address: call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\"Address: low-level static call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\"Address: static call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\"Address: low-level delegate call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(isContract(target), \\"Address: delegate call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n","keccak256":"0x51b758a8815ecc9596c66c37d56b1d33883a444631a3f916b9fe65cb863ef7c4","license":"MIT"},"@openzeppelin/contracts/utils/math/SafeCast.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/math/SafeCast.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Wrappers over Solidity\'s uintXX/intXX casting operators with added overflow\\n * checks.\\n *\\n * Downcasting from uint256/int256 in Solidity does not revert on overflow. This can\\n * easily result in undesired exploitation or bugs, since developers usually\\n * assume that overflows raise errors. `SafeCast` restores this intuition by\\n * reverting the transaction when such an operation overflows.\\n *\\n * Using this library instead of the unchecked operations eliminates an entire\\n * class of bugs, so it\'s recommended to use it always.\\n *\\n * Can be combined with {SafeMath} and {SignedSafeMath} to extend it to smaller types, by performing\\n * all math on `uint256` and `int256` and then downcasting.\\n */\\nlibrary SafeCast {\\n    /**\\n     * @dev Returns the downcasted uint224 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint224).\\n     *\\n     * Counterpart to Solidity\'s `uint224` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 224 bits\\n     */\\n    function toUint224(uint256 value) internal pure returns (uint224) {\\n        require(value <= type(uint224).max, \\"SafeCast: value doesn\'t fit in 224 bits\\");\\n        return uint224(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint128 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint128).\\n     *\\n     * Counterpart to Solidity\'s `uint128` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 128 bits\\n     */\\n    function toUint128(uint256 value) internal pure returns (uint128) {\\n        require(value <= type(uint128).max, \\"SafeCast: value doesn\'t fit in 128 bits\\");\\n        return uint128(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint96 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint96).\\n     *\\n     * Counterpart to Solidity\'s `uint96` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 96 bits\\n     */\\n    function toUint96(uint256 value) internal pure returns (uint96) {\\n        require(value <= type(uint96).max, \\"SafeCast: value doesn\'t fit in 96 bits\\");\\n        return uint96(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint64 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint64).\\n     *\\n     * Counterpart to Solidity\'s `uint64` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 64 bits\\n     */\\n    function toUint64(uint256 value) internal pure returns (uint64) {\\n        require(value <= type(uint64).max, \\"SafeCast: value doesn\'t fit in 64 bits\\");\\n        return uint64(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint32 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint32).\\n     *\\n     * Counterpart to Solidity\'s `uint32` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 32 bits\\n     */\\n    function toUint32(uint256 value) internal pure returns (uint32) {\\n        require(value <= type(uint32).max, \\"SafeCast: value doesn\'t fit in 32 bits\\");\\n        return uint32(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint16 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint16).\\n     *\\n     * Counterpart to Solidity\'s `uint16` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 16 bits\\n     */\\n    function toUint16(uint256 value) internal pure returns (uint16) {\\n        require(value <= type(uint16).max, \\"SafeCast: value doesn\'t fit in 16 bits\\");\\n        return uint16(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint8 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint8).\\n     *\\n     * Counterpart to Solidity\'s `uint8` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 8 bits.\\n     */\\n    function toUint8(uint256 value) internal pure returns (uint8) {\\n        require(value <= type(uint8).max, \\"SafeCast: value doesn\'t fit in 8 bits\\");\\n        return uint8(value);\\n    }\\n\\n    /**\\n     * @dev Converts a signed int256 into an unsigned uint256.\\n     *\\n     * Requirements:\\n     *\\n     * - input must be greater than or equal to 0.\\n     */\\n    function toUint256(int256 value) internal pure returns (uint256) {\\n        require(value >= 0, \\"SafeCast: value must be positive\\");\\n        return uint256(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int128 from int256, reverting on\\n     * overflow (when the input is less than smallest int128 or\\n     * greater than largest int128).\\n     *\\n     * Counterpart to Solidity\'s `int128` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 128 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt128(int256 value) internal pure returns (int128) {\\n        require(value >= type(int128).min && value <= type(int128).max, \\"SafeCast: value doesn\'t fit in 128 bits\\");\\n        return int128(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int64 from int256, reverting on\\n     * overflow (when the input is less than smallest int64 or\\n     * greater than largest int64).\\n     *\\n     * Counterpart to Solidity\'s `int64` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 64 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt64(int256 value) internal pure returns (int64) {\\n        require(value >= type(int64).min && value <= type(int64).max, \\"SafeCast: value doesn\'t fit in 64 bits\\");\\n        return int64(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int32 from int256, reverting on\\n     * overflow (when the input is less than smallest int32 or\\n     * greater than largest int32).\\n     *\\n     * Counterpart to Solidity\'s `int32` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 32 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt32(int256 value) internal pure returns (int32) {\\n        require(value >= type(int32).min && value <= type(int32).max, \\"SafeCast: value doesn\'t fit in 32 bits\\");\\n        return int32(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int16 from int256, reverting on\\n     * overflow (when the input is less than smallest int16 or\\n     * greater than largest int16).\\n     *\\n     * Counterpart to Solidity\'s `int16` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 16 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt16(int256 value) internal pure returns (int16) {\\n        require(value >= type(int16).min && value <= type(int16).max, \\"SafeCast: value doesn\'t fit in 16 bits\\");\\n        return int16(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int8 from int256, reverting on\\n     * overflow (when the input is less than smallest int8 or\\n     * greater than largest int8).\\n     *\\n     * Counterpart to Solidity\'s `int8` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 8 bits.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt8(int256 value) internal pure returns (int8) {\\n        require(value >= type(int8).min && value <= type(int8).max, \\"SafeCast: value doesn\'t fit in 8 bits\\");\\n        return int8(value);\\n    }\\n\\n    /**\\n     * @dev Converts an unsigned uint256 into a signed int256.\\n     *\\n     * Requirements:\\n     *\\n     * - input must be less than or equal to maxInt256.\\n     */\\n    function toInt256(uint256 value) internal pure returns (int256) {\\n        // Note: Unsafe cast below is okay because `type(int256).max` is guaranteed to be positive\\n        require(value <= uint256(type(int256).max), \\"SafeCast: value doesn\'t fit in an int256\\");\\n        return int256(value);\\n    }\\n}\\n","keccak256":"0x5c6caab697d302ad7eb59c234a4d2dbc965c1bae87709bd2850060b7695b28c7","license":"MIT"},"@pooltogether/v4-core/contracts/interfaces/IControlledToken.sol":{"content":"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\";\\n\\n/** @title IControlledToken\\n  * @author PoolTogether Inc Team\\n  * @notice ERC20 Tokens with a controller for minting & burning.\\n*/\\ninterface IControlledToken is IERC20 {\\n\\n    /** \\n        @notice Interface to the contract responsible for controlling mint/burn\\n    */\\n    function controller() external view returns (address);\\n\\n    /** \\n      * @notice Allows the controller to mint tokens for a user account\\n      * @dev May be overridden to provide more granular control over minting\\n      * @param user Address of the receiver of the minted tokens\\n      * @param amount Amount of tokens to mint\\n    */\\n    function controllerMint(address user, uint256 amount) external;\\n\\n    /** \\n      * @notice Allows the controller to burn tokens from a user account\\n      * @dev May be overridden to provide more granular control over burning\\n      * @param user Address of the holder account to burn tokens from\\n      * @param amount Amount of tokens to burn\\n    */\\n    function controllerBurn(address user, uint256 amount) external;\\n\\n    /** \\n      * @notice Allows an operator via the controller to burn tokens on behalf of a user account\\n      * @dev May be overridden to provide more granular control over operator-burning\\n      * @param operator Address of the operator performing the burn action via the controller contract\\n      * @param user Address of the holder account to burn tokens from\\n      * @param amount Amount of tokens to burn\\n    */\\n    function controllerBurnFrom(\\n        address operator,\\n        address user,\\n        uint256 amount\\n    ) external;\\n}\\n","keccak256":"0x90dceeec1eea6e49021e8db88b084f3f0c503c60b6f7e0bbecd2529ffde87ef3","license":"GPL-3.0"},"@pooltogether/v4-core/contracts/interfaces/ITicket.sol":{"content":"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\"../libraries/TwabLib.sol\\";\\nimport \\"./IControlledToken.sol\\";\\n\\ninterface ITicket is IControlledToken {\\n    /**\\n     * @notice A struct containing details for an Account.\\n     * @param balance The current balance for an Account.\\n     * @param nextTwabIndex The next available index to store a new twab.\\n     * @param cardinality The number of recorded twabs (plus one!).\\n     */\\n    struct AccountDetails {\\n        uint224 balance;\\n        uint16 nextTwabIndex;\\n        uint16 cardinality;\\n    }\\n\\n    /**\\n     * @notice Combines account details with their twab history.\\n     * @param details The account details.\\n     * @param twabs The history of twabs for this account.\\n     */\\n    struct Account {\\n        AccountDetails details;\\n        ObservationLib.Observation[65535] twabs;\\n    }\\n\\n    /**\\n     * @notice Emitted when TWAB balance has been delegated to another user.\\n     * @param delegator Address of the delegator.\\n     * @param delegate Address of the delegate.\\n     */\\n    event Delegated(address indexed delegator, address indexed delegate);\\n\\n    /**\\n     * @notice Emitted when ticket is initialized.\\n     * @param name Ticket name (eg: PoolTogether Dai Ticket (Compound)).\\n     * @param symbol Ticket symbol (eg: PcDAI).\\n     * @param decimals Ticket decimals.\\n     * @param controller Token controller address.\\n     */\\n    event TicketInitialized(string name, string symbol, uint8 decimals, address indexed controller);\\n\\n    /**\\n     * @notice Emitted when a new TWAB has been recorded.\\n     * @param delegate The recipient of the ticket power (may be the same as the user).\\n     * @param newTwab Updated TWAB of a ticket holder after a successful TWAB recording.\\n     */\\n    event NewUserTwab(\\n        address indexed delegate,\\n        ObservationLib.Observation newTwab\\n    );\\n\\n    /**\\n     * @notice Emitted when a new total supply TWAB has been recorded.\\n     * @param newTotalSupplyTwab Updated TWAB of tickets total supply after a successful total supply TWAB recording.\\n     */\\n    event NewTotalSupplyTwab(ObservationLib.Observation newTotalSupplyTwab);\\n\\n    /**\\n     * @notice Retrieves the address of the delegate to whom `user` has delegated their tickets.\\n     * @dev Address of the delegate will be the zero address if `user` has not delegated their tickets.\\n     * @param user Address of the delegator.\\n     * @return Address of the delegate.\\n     */\\n    function delegateOf(address user) external view returns (address);\\n\\n    /**\\n    * @notice Delegate time-weighted average balances to an alternative address.\\n    * @dev    Transfers (including mints) trigger the storage of a TWAB in delegate(s) account, instead of the\\n              targetted sender and/or recipient address(s).\\n    * @dev    To reset the delegate, pass the zero address (0x000.000) as `to` parameter.\\n    * @dev Current delegate address should be different from the new delegate address `to`.\\n    * @param  to Recipient of delegated TWAB.\\n    */\\n    function delegate(address to) external;\\n\\n    /**\\n     * @notice Allows the controller to delegate on a users behalf.\\n     * @param user The user for whom to delegate\\n     * @param delegate The new delegate\\n     */\\n    function controllerDelegateFor(address user, address delegate) external;\\n\\n    /**\\n     * @notice Allows a user to delegate via signature\\n     * @param user The user who is delegating\\n     * @param delegate The new delegate\\n     * @param deadline The timestamp by which this must be submitted\\n     * @param v The v portion of the ECDSA sig\\n     * @param r The r portion of the ECDSA sig\\n     * @param s The s portion of the ECDSA sig\\n     */\\n    function delegateWithSignature(\\n        address user,\\n        address delegate,\\n        uint256 deadline,\\n        uint8 v,\\n        bytes32 r,\\n        bytes32 s\\n    ) external;\\n\\n    /**\\n     * @notice Gets a users twab context.  This is a struct with their balance, next twab index, and cardinality.\\n     * @param user The user for whom to fetch the TWAB context.\\n     * @return The TWAB context, which includes { balance, nextTwabIndex, cardinality }\\n     */\\n    function getAccountDetails(address user) external view returns (TwabLib.AccountDetails memory);\\n\\n    /**\\n     * @notice Gets the TWAB at a specific index for a user.\\n     * @param user The user for whom to fetch the TWAB.\\n     * @param index The index of the TWAB to fetch.\\n     * @return The TWAB, which includes the twab amount and the timestamp.\\n     */\\n    function getTwab(address user, uint16 index)\\n        external\\n        view\\n        returns (ObservationLib.Observation memory);\\n\\n    /**\\n     * @notice Retrieves `user` TWAB balance.\\n     * @param user Address of the user whose TWAB is being fetched.\\n     * @param timestamp Timestamp at which we want to retrieve the TWAB balance.\\n     * @return The TWAB balance at the given timestamp.\\n     */\\n    function getBalanceAt(address user, uint64 timestamp) external view returns (uint256);\\n\\n    /**\\n     * @notice Retrieves `user` TWAB balances.\\n     * @param user Address of the user whose TWABs are being fetched.\\n     * @param timestamps Timestamps range at which we want to retrieve the TWAB balances.\\n     * @return `user` TWAB balances.\\n     */\\n    function getBalancesAt(address user, uint64[] calldata timestamps)\\n        external\\n        view\\n        returns (uint256[] memory);\\n\\n    /**\\n     * @notice Retrieves the average balance held by a user for a given time frame.\\n     * @param user The user whose balance is checked.\\n     * @param startTime The start time of the time frame.\\n     * @param endTime The end time of the time frame.\\n     * @return The average balance that the user held during the time frame.\\n     */\\n    function getAverageBalanceBetween(\\n        address user,\\n        uint64 startTime,\\n        uint64 endTime\\n    ) external view returns (uint256);\\n\\n    /**\\n     * @notice Retrieves the average balances held by a user for a given time frame.\\n     * @param user The user whose balance is checked.\\n     * @param startTimes The start time of the time frame.\\n     * @param endTimes The end time of the time frame.\\n     * @return The average balance that the user held during the time frame.\\n     */\\n    function getAverageBalancesBetween(\\n        address user,\\n        uint64[] calldata startTimes,\\n        uint64[] calldata endTimes\\n    ) external view returns (uint256[] memory);\\n\\n    /**\\n     * @notice Retrieves the total supply TWAB balance at the given timestamp.\\n     * @param timestamp Timestamp at which we want to retrieve the total supply TWAB balance.\\n     * @return The total supply TWAB balance at the given timestamp.\\n     */\\n    function getTotalSupplyAt(uint64 timestamp) external view returns (uint256);\\n\\n    /**\\n     * @notice Retrieves the total supply TWAB balance between the given timestamps range.\\n     * @param timestamps Timestamps range at which we want to retrieve the total supply TWAB balance.\\n     * @return Total supply TWAB balances.\\n     */\\n    function getTotalSuppliesAt(uint64[] calldata timestamps)\\n        external\\n        view\\n        returns (uint256[] memory);\\n\\n    /**\\n     * @notice Retrieves the average total supply balance for a set of given time frames.\\n     * @param startTimes Array of start times.\\n     * @param endTimes Array of end times.\\n     * @return The average total supplies held during the time frame.\\n     */\\n    function getAverageTotalSuppliesBetween(\\n        uint64[] calldata startTimes,\\n        uint64[] calldata endTimes\\n    ) external view returns (uint256[] memory);\\n}\\n","keccak256":"0xb9f6423a8a9c7394941cb84723b82cc66c5f815d689dc0562e612ae4d9f1cc27","license":"GPL-3.0"},"@pooltogether/v4-core/contracts/libraries/ExtendedSafeCastLib.sol":{"content":"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\n/**\\n * @dev Wrappers over Solidity\'s uintXX/intXX casting operators with added overflow\\n * checks.\\n *\\n * Downcasting from uint256/int256 in Solidity does not revert on overflow. This can\\n * easily result in undesired exploitation or bugs, since developers usually\\n * assume that overflows raise errors. `SafeCast` restores this intuition by\\n * reverting the transaction when such an operation overflows.\\n *\\n * Using this library instead of the unchecked operations eliminates an entire\\n * class of bugs, so it\'s recommended to use it always.\\n *\\n * Can be combined with {SafeMath} and {SignedSafeMath} to extend it to smaller types, by performing\\n * all math on `uint256` and `int256` and then downcasting.\\n */\\nlibrary ExtendedSafeCastLib {\\n\\n    /**\\n     * @dev Returns the downcasted uint104 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint104).\\n     *\\n     * Counterpart to Solidity\'s `uint104` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 104 bits\\n     */\\n    function toUint104(uint256 _value) internal pure returns (uint104) {\\n        require(_value <= type(uint104).max, \\"SafeCast: value doesn\'t fit in 104 bits\\");\\n        return uint104(_value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint208 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint208).\\n     *\\n     * Counterpart to Solidity\'s `uint208` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 208 bits\\n     */\\n    function toUint208(uint256 _value) internal pure returns (uint208) {\\n        require(_value <= type(uint208).max, \\"SafeCast: value doesn\'t fit in 208 bits\\");\\n        return uint208(_value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint224 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint224).\\n     *\\n     * Counterpart to Solidity\'s `uint224` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 224 bits\\n     */\\n    function toUint224(uint256 _value) internal pure returns (uint224) {\\n        require(_value <= type(uint224).max, \\"SafeCast: value doesn\'t fit in 224 bits\\");\\n        return uint224(_value);\\n    }\\n}\\n","keccak256":"0x1e8add7802f19dbf5957b4d921b2d7b5277f39c9e44505c0375e52f02134e434","license":"GPL-3.0"},"@pooltogether/v4-core/contracts/libraries/ObservationLib.sol":{"content":"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\"@openzeppelin/contracts/utils/math/SafeCast.sol\\";\\n\\nimport \\"./OverflowSafeComparatorLib.sol\\";\\nimport \\"./RingBufferLib.sol\\";\\n\\n/**\\n* @title Observation Library\\n* @notice This library allows one to store an array of timestamped values and efficiently binary search them.\\n* @dev Largely pulled from Uniswap V3 Oracle.sol: https://github.com/Uniswap/v3-core/blob/c05a0e2c8c08c460fb4d05cfdda30b3ad8deeaac/contracts/libraries/Oracle.sol\\n* @author PoolTogether Inc.\\n*/\\nlibrary ObservationLib {\\n    using OverflowSafeComparatorLib for uint32;\\n    using SafeCast for uint256;\\n\\n    /// @notice The maximum number of observations\\n    uint24 public constant MAX_CARDINALITY = 16777215; // 2**24\\n\\n    /**\\n    * @notice Observation, which includes an amount and timestamp.\\n    * @param amount `amount` at `timestamp`.\\n    * @param timestamp Recorded `timestamp`.\\n    */\\n    struct Observation {\\n        uint224 amount;\\n        uint32 timestamp;\\n    }\\n\\n    /**\\n    * @notice Fetches Observations `beforeOrAt` and `atOrAfter` a `_target`, eg: where [`beforeOrAt`, `atOrAfter`] is satisfied.\\n    * The result may be the same Observation, or adjacent Observations.\\n    * @dev The answer must be contained in the array used when the target is located within the stored Observation.\\n    * boundaries: older than the most recent Observation and younger, or the same age as, the oldest Observation.\\n    * @dev  If `_newestObservationIndex` is less than `_oldestObservationIndex`, it means that we\'ve wrapped around the circular buffer.\\n    *       So the most recent observation will be at `_oldestObservationIndex + _cardinality - 1`, at the beginning of the circular buffer.\\n    * @param _observations List of Observations to search through.\\n    * @param _newestObservationIndex Index of the newest Observation. Right side of the circular buffer.\\n    * @param _oldestObservationIndex Index of the oldest Observation. Left side of the circular buffer.\\n    * @param _target Timestamp at which we are searching the Observation.\\n    * @param _cardinality Cardinality of the circular buffer we are searching through.\\n    * @param _time Timestamp at which we perform the binary search.\\n    * @return beforeOrAt Observation recorded before, or at, the target.\\n    * @return atOrAfter Observation recorded at, or after, the target.\\n    */\\n    function binarySearch(\\n        Observation[MAX_CARDINALITY] storage _observations,\\n        uint24 _newestObservationIndex,\\n        uint24 _oldestObservationIndex,\\n        uint32 _target,\\n        uint24 _cardinality,\\n        uint32 _time\\n    ) internal view returns (Observation memory beforeOrAt, Observation memory atOrAfter) {\\n        uint256 leftSide = _oldestObservationIndex;\\n        uint256 rightSide = _newestObservationIndex < leftSide\\n            ? leftSide + _cardinality - 1\\n            : _newestObservationIndex;\\n        uint256 currentIndex;\\n\\n        while (true) {\\n            // We start our search in the middle of the `leftSide` and `rightSide`.\\n            // After each iteration, we narrow down the search to the left or the right side while still starting our search in the middle.\\n            currentIndex = (leftSide + rightSide) / 2;\\n\\n            beforeOrAt = _observations[uint24(RingBufferLib.wrap(currentIndex, _cardinality))];\\n            uint32 beforeOrAtTimestamp = beforeOrAt.timestamp;\\n\\n            // We\'ve landed on an uninitialized timestamp, keep searching higher (more recently).\\n            if (beforeOrAtTimestamp == 0) {\\n                leftSide = currentIndex + 1;\\n                continue;\\n            }\\n\\n            atOrAfter = _observations[uint24(RingBufferLib.nextIndex(currentIndex, _cardinality))];\\n\\n            bool targetAtOrAfter = beforeOrAtTimestamp.lte(_target, _time);\\n\\n            // Check if we\'ve found the corresponding Observation.\\n            if (targetAtOrAfter && _target.lte(atOrAfter.timestamp, _time)) {\\n                break;\\n            }\\n\\n            // If `beforeOrAtTimestamp` is greater than `_target`, then we keep searching lower. To the left of the current index.\\n            if (!targetAtOrAfter) {\\n                rightSide = currentIndex - 1;\\n            } else {\\n                // Otherwise, we keep searching higher. To the left of the current index.\\n                leftSide = currentIndex + 1;\\n            }\\n        }\\n    }\\n}\\n","keccak256":"0x225592b42013fc0af60822e75bc047d53b42a5fcf15f2173cdc3b50bea334b0a","license":"GPL-3.0"},"@pooltogether/v4-core/contracts/libraries/OverflowSafeComparatorLib.sol":{"content":"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\n/// @title OverflowSafeComparatorLib library to share comparator functions between contracts\\n/// @dev Code taken from Uniswap V3 Oracle.sol: https://github.com/Uniswap/v3-core/blob/3e88af408132fc957e3e406f65a0ce2b1ca06c3d/contracts/libraries/Oracle.sol\\n/// @author PoolTogether Inc.\\nlibrary OverflowSafeComparatorLib {\\n    /// @notice 32-bit timestamps comparator.\\n    /// @dev safe for 0 or 1 overflows, `_a` and `_b` must be chronologically before or equal to time.\\n    /// @param _a A comparison timestamp from which to determine the relative position of `_timestamp`.\\n    /// @param _b Timestamp to compare against `_a`.\\n    /// @param _timestamp A timestamp truncated to 32 bits.\\n    /// @return bool Whether `_a` is chronologically < `_b`.\\n    function lt(\\n        uint32 _a,\\n        uint32 _b,\\n        uint32 _timestamp\\n    ) internal pure returns (bool) {\\n        // No need to adjust if there hasn\'t been an overflow\\n        if (_a <= _timestamp && _b <= _timestamp) return _a < _b;\\n\\n        uint256 aAdjusted = _a > _timestamp ? _a : _a + 2**32;\\n        uint256 bAdjusted = _b > _timestamp ? _b : _b + 2**32;\\n\\n        return aAdjusted < bAdjusted;\\n    }\\n\\n    /// @notice 32-bit timestamps comparator.\\n    /// @dev safe for 0 or 1 overflows, `_a` and `_b` must be chronologically before or equal to time.\\n    /// @param _a A comparison timestamp from which to determine the relative position of `_timestamp`.\\n    /// @param _b Timestamp to compare against `_a`.\\n    /// @param _timestamp A timestamp truncated to 32 bits.\\n    /// @return bool Whether `_a` is chronologically <= `_b`.\\n    function lte(\\n        uint32 _a,\\n        uint32 _b,\\n        uint32 _timestamp\\n    ) internal pure returns (bool) {\\n\\n        // No need to adjust if there hasn\'t been an overflow\\n        if (_a <= _timestamp && _b <= _timestamp) return _a <= _b;\\n\\n        uint256 aAdjusted = _a > _timestamp ? _a : _a + 2**32;\\n        uint256 bAdjusted = _b > _timestamp ? _b : _b + 2**32;\\n\\n        return aAdjusted <= bAdjusted;\\n    }\\n\\n    /// @notice 32-bit timestamp subtractor\\n    /// @dev safe for 0 or 1 overflows, where `_a` and `_b` must be chronologically before or equal to time\\n    /// @param _a The subtraction left operand\\n    /// @param _b The subtraction right operand\\n    /// @param _timestamp The current time.  Expected to be chronologically after both.\\n    /// @return The difference between a and b, adjusted for overflow\\n    function checkedSub(\\n        uint32 _a,\\n        uint32 _b,\\n        uint32 _timestamp\\n    ) internal pure returns (uint32) {\\n        // No need to adjust if there hasn\'t been an overflow\\n\\n        if (_a <= _timestamp && _b <= _timestamp) return _a - _b;\\n\\n        uint256 aAdjusted = _a > _timestamp ? _a : _a + 2**32;\\n        uint256 bAdjusted = _b > _timestamp ? _b : _b + 2**32;\\n\\n        return uint32(aAdjusted - bAdjusted);\\n    }\\n}\\n","keccak256":"0x20630cf89e7b92462946defe979fd0e69fa119841d55886121948ad810778c74","license":"GPL-3.0"},"@pooltogether/v4-core/contracts/libraries/RingBufferLib.sol":{"content":"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nlibrary RingBufferLib {\\n    /**\\n    * @notice Returns wrapped TWAB index.\\n    * @dev  In order to navigate the TWAB circular buffer, we need to use the modulo operator.\\n    * @dev  For example, if `_index` is equal to 32 and the TWAB circular buffer is of `_cardinality` 32,\\n    *       it will return 0 and will point to the first element of the array.\\n    * @param _index Index used to navigate through the TWAB circular buffer.\\n    * @param _cardinality TWAB buffer cardinality.\\n    * @return TWAB index.\\n    */\\n    function wrap(uint256 _index, uint256 _cardinality) internal pure returns (uint256) {\\n        return _index % _cardinality;\\n    }\\n\\n    /**\\n    * @notice Computes the negative offset from the given index, wrapped by the cardinality.\\n    * @dev  We add `_cardinality` to `_index` to be able to offset even if `_amount` is superior to `_cardinality`.\\n    * @param _index The index from which to offset\\n    * @param _amount The number of indices to offset.  This is subtracted from the given index.\\n    * @param _cardinality The number of elements in the ring buffer\\n    * @return Offsetted index.\\n     */\\n    function offset(\\n        uint256 _index,\\n        uint256 _amount,\\n        uint256 _cardinality\\n    ) internal pure returns (uint256) {\\n        return wrap(_index + _cardinality - _amount, _cardinality);\\n    }\\n\\n    /// @notice Returns the index of the last recorded TWAB\\n    /// @param _nextIndex The next available twab index.  This will be recorded to next.\\n    /// @param _cardinality The cardinality of the TWAB history.\\n    /// @return The index of the last recorded TWAB\\n    function newestIndex(uint256 _nextIndex, uint256 _cardinality)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        if (_cardinality == 0) {\\n            return 0;\\n        }\\n\\n        return wrap(_nextIndex + _cardinality - 1, _cardinality);\\n    }\\n\\n    /// @notice Computes the ring buffer index that follows the given one, wrapped by cardinality\\n    /// @param _index The index to increment\\n    /// @param _cardinality The number of elements in the Ring Buffer\\n    /// @return The next index relative to the given index.  Will wrap around to 0 if the next index == cardinality\\n    function nextIndex(uint256 _index, uint256 _cardinality)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        return wrap(_index + 1, _cardinality);\\n    }\\n}\\n","keccak256":"0x052e3bf6bfb30f32950e322c853589a8d153cf34f4b1ee292b17eb46f2ae656c","license":"GPL-3.0"},"@pooltogether/v4-core/contracts/libraries/TwabLib.sol":{"content":"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\"./ExtendedSafeCastLib.sol\\";\\nimport \\"./OverflowSafeComparatorLib.sol\\";\\nimport \\"./RingBufferLib.sol\\";\\nimport \\"./ObservationLib.sol\\";\\n\\n/**\\n  * @title  PoolTogether V4 TwabLib (Library)\\n  * @author PoolTogether Inc Team\\n  * @dev    Time-Weighted Average Balance Library for ERC20 tokens.\\n  * @notice This TwabLib adds on-chain historical lookups to a user(s) time-weighted average balance.\\n            Each user is mapped to an Account struct containing the TWAB history (ring bufffer) and\\n            ring buffer parameters. Every token.transfer() creates a new TWAB checkpoint. The new TWAB\\n            checkpoint is stored in the circular ring buffer, as either a new checkpoint or rewriting\\n            a previous checkpoint with new parameters. The TwabLib (using existing blocktimes 1block/15sec)\\n            guarantees minimum 7.4 years of search history.\\n */\\nlibrary TwabLib {\\n    using OverflowSafeComparatorLib for uint32;\\n    using ExtendedSafeCastLib for uint256;\\n\\n    /**\\n      * @notice Sets max ring buffer length in the Account.twabs Observation list.\\n                As users transfer/mint/burn tickets new Observation checkpoints are\\n                recorded. The current max cardinality guarantees a six month minimum,\\n                of historical accurate lookups with current estimates of 1 new block\\n                every 15 seconds - the of course contain a transfer to trigger an\\n                observation write to storage.\\n      * @dev    The user Account.AccountDetails.cardinality parameter can NOT exceed\\n                the max cardinality variable. Preventing \\"corrupted\\" ring buffer lookup\\n                pointers and new observation checkpoints.\\n\\n                The MAX_CARDINALITY in fact guarantees at least 7.4 years of records:\\n                If 14 = block time in seconds\\n                (2**24) * 14 = 234881024 seconds of history\\n                234881024 / (365 * 24 * 60 * 60) ~= 7.44 years\\n    */\\n    uint24 public constant MAX_CARDINALITY = 16777215; // 2**24\\n\\n    /** @notice Struct ring buffer parameters for single user Account\\n      * @param balance       Current balance for an Account\\n      * @param nextTwabIndex Next uninitialized or updatable ring buffer checkpoint storage slot\\n      * @param cardinality   Current total \\"initialized\\" ring buffer checkpoints for single user AccountDetails.\\n                             Used to set initial boundary conditions for an efficient binary search.\\n    */\\n    struct AccountDetails {\\n        uint208 balance;\\n        uint24 nextTwabIndex;\\n        uint24 cardinality;\\n    }\\n\\n    /// @notice Combines account details with their twab history\\n    /// @param details The account details\\n    /// @param twabs The history of twabs for this account\\n    struct Account {\\n        AccountDetails details;\\n        ObservationLib.Observation[MAX_CARDINALITY] twabs;\\n    }\\n\\n    /// @notice Increases an account\'s balance and records a new twab.\\n    /// @param _account The account whose balance will be increased\\n    /// @param _amount The amount to increase the balance by\\n    /// @param _currentTime The current time\\n    /// @return accountDetails The new AccountDetails\\n    /// @return twab The user\'s latest TWAB\\n    /// @return isNew Whether the TWAB is new\\n    function increaseBalance(\\n        Account storage _account,\\n        uint208 _amount,\\n        uint32 _currentTime\\n    )\\n        internal\\n        returns (\\n            AccountDetails memory accountDetails,\\n            ObservationLib.Observation memory twab,\\n            bool isNew\\n        )\\n    {\\n        AccountDetails memory _accountDetails = _account.details;\\n        (accountDetails, twab, isNew) = _nextTwab(_account.twabs, _accountDetails, _currentTime);\\n        accountDetails.balance = _accountDetails.balance + _amount;\\n    }\\n\\n    /** @notice Calculates the next TWAB checkpoint for an account with a decreasing balance.\\n     * @dev    With Account struct and amount decreasing calculates the next TWAB observable checkpoint.\\n     * @param _account        Account whose balance will be decreased\\n     * @param _amount         Amount to decrease the balance by\\n     * @param _revertMessage  Revert message for insufficient balance\\n     * @return accountDetails Updated Account.details struct\\n     * @return twab           TWAB observation (with decreasing average)\\n     * @return isNew          Whether TWAB is new or calling twice in the same block\\n     */\\n    function decreaseBalance(\\n        Account storage _account,\\n        uint208 _amount,\\n        string memory _revertMessage,\\n        uint32 _currentTime\\n    )\\n        internal\\n        returns (\\n            AccountDetails memory accountDetails,\\n            ObservationLib.Observation memory twab,\\n            bool isNew\\n        )\\n    {\\n        AccountDetails memory _accountDetails = _account.details;\\n\\n        require(_accountDetails.balance >= _amount, _revertMessage);\\n\\n        (accountDetails, twab, isNew) = _nextTwab(_account.twabs, _accountDetails, _currentTime);\\n        unchecked {\\n            accountDetails.balance -= _amount;\\n        }\\n    }\\n\\n    /** @notice Calculates the average balance held by a user for a given time frame.\\n      * @dev    Finds the average balance between start and end timestamp epochs.\\n                Validates the supplied end time is within the range of elapsed time i.e. less then timestamp of now.\\n      * @param _twabs          Individual user Observation recorded checkpoints passed as storage pointer\\n      * @param _accountDetails User AccountDetails struct loaded in memory\\n      * @param _startTime      Start of timestamp range as an epoch\\n      * @param _endTime        End of timestamp range as an epoch\\n      * @param _currentTime    Block.timestamp\\n      * @return Average balance of user held between epoch timestamps start and end\\n    */\\n    function getAverageBalanceBetween(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        uint32 _startTime,\\n        uint32 _endTime,\\n        uint32 _currentTime\\n    ) internal view returns (uint256) {\\n        uint32 endTime = _endTime > _currentTime ? _currentTime : _endTime;\\n\\n        return\\n            _getAverageBalanceBetween(_twabs, _accountDetails, _startTime, endTime, _currentTime);\\n    }\\n\\n    /// @notice Retrieves the oldest TWAB\\n    /// @param _twabs The storage array of twabs\\n    /// @param _accountDetails The TWAB account details\\n    /// @return index The index of the oldest TWAB in the twabs array\\n    /// @return twab The oldest TWAB\\n    function oldestTwab(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails\\n    ) internal view returns (uint24 index, ObservationLib.Observation memory twab) {\\n        index = _accountDetails.nextTwabIndex;\\n        twab = _twabs[index];\\n\\n        // If the TWAB is not initialized we go to the beginning of the TWAB circular buffer at index 0\\n        if (twab.timestamp == 0) {\\n            index = 0;\\n            twab = _twabs[0];\\n        }\\n    }\\n\\n    /// @notice Retrieves the newest TWAB\\n    /// @param _twabs The storage array of twabs\\n    /// @param _accountDetails The TWAB account details\\n    /// @return index The index of the newest TWAB in the twabs array\\n    /// @return twab The newest TWAB\\n    function newestTwab(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails\\n    ) internal view returns (uint24 index, ObservationLib.Observation memory twab) {\\n        index = uint24(RingBufferLib.newestIndex(_accountDetails.nextTwabIndex, MAX_CARDINALITY));\\n        twab = _twabs[index];\\n    }\\n\\n    /// @notice Retrieves amount at `_targetTime` timestamp\\n    /// @param _twabs List of TWABs to search through.\\n    /// @param _accountDetails Accounts details\\n    /// @param _targetTime Timestamp at which the reserved TWAB should be for.\\n    /// @return uint256 TWAB amount at `_targetTime`.\\n    function getBalanceAt(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        uint32 _targetTime,\\n        uint32 _currentTime\\n    ) internal view returns (uint256) {\\n        uint32 timeToTarget = _targetTime > _currentTime ? _currentTime : _targetTime;\\n        return _getBalanceAt(_twabs, _accountDetails, timeToTarget, _currentTime);\\n    }\\n\\n    /// @notice Calculates the average balance held by a user for a given time frame.\\n    /// @param _startTime The start time of the time frame.\\n    /// @param _endTime The end time of the time frame.\\n    /// @return The average balance that the user held during the time frame.\\n    function _getAverageBalanceBetween(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        uint32 _startTime,\\n        uint32 _endTime,\\n        uint32 _currentTime\\n    ) private view returns (uint256) {\\n        (uint24 oldestTwabIndex, ObservationLib.Observation memory oldTwab) = oldestTwab(\\n            _twabs,\\n            _accountDetails\\n        );\\n\\n        (uint24 newestTwabIndex, ObservationLib.Observation memory newTwab) = newestTwab(\\n            _twabs,\\n            _accountDetails\\n        );\\n\\n        ObservationLib.Observation memory startTwab = _calculateTwab(\\n            _twabs,\\n            _accountDetails,\\n            newTwab,\\n            oldTwab,\\n            newestTwabIndex,\\n            oldestTwabIndex,\\n            _startTime,\\n            _currentTime\\n        );\\n\\n        ObservationLib.Observation memory endTwab = _calculateTwab(\\n            _twabs,\\n            _accountDetails,\\n            newTwab,\\n            oldTwab,\\n            newestTwabIndex,\\n            oldestTwabIndex,\\n            _endTime,\\n            _currentTime\\n        );\\n\\n        // Difference in amount / time\\n        return (endTwab.amount - startTwab.amount) / OverflowSafeComparatorLib.checkedSub(endTwab.timestamp, startTwab.timestamp, _currentTime);\\n    }\\n\\n    /** @notice Searches TWAB history and calculate the difference between amount(s)/timestamp(s) to return average balance\\n                between the Observations closes to the supplied targetTime.\\n      * @param _twabs          Individual user Observation recorded checkpoints passed as storage pointer\\n      * @param _accountDetails User AccountDetails struct loaded in memory\\n      * @param _targetTime     Target timestamp to filter Observations in the ring buffer binary search\\n      * @param _currentTime    Block.timestamp\\n      * @return uint256 Time-weighted average amount between two closest observations.\\n    */\\n    function _getBalanceAt(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        uint32 _targetTime,\\n        uint32 _currentTime\\n    ) private view returns (uint256) {\\n        uint24 newestTwabIndex;\\n        ObservationLib.Observation memory afterOrAt;\\n        ObservationLib.Observation memory beforeOrAt;\\n        (newestTwabIndex, beforeOrAt) = newestTwab(_twabs, _accountDetails);\\n\\n        // If `_targetTime` is chronologically after the newest TWAB, we can simply return the current balance\\n        if (beforeOrAt.timestamp.lte(_targetTime, _currentTime)) {\\n            return _accountDetails.balance;\\n        }\\n\\n        uint24 oldestTwabIndex;\\n        // Now, set before to the oldest TWAB\\n        (oldestTwabIndex, beforeOrAt) = oldestTwab(_twabs, _accountDetails);\\n\\n        // If `_targetTime` is chronologically before the oldest TWAB, we can early return\\n        if (_targetTime.lt(beforeOrAt.timestamp, _currentTime)) {\\n            return 0;\\n        }\\n\\n        // Otherwise, we perform the `binarySearch`\\n        (beforeOrAt, afterOrAt) = ObservationLib.binarySearch(\\n            _twabs,\\n            newestTwabIndex,\\n            oldestTwabIndex,\\n            _targetTime,\\n            _accountDetails.cardinality,\\n            _currentTime\\n        );\\n\\n        // Sum the difference in amounts and divide by the difference in timestamps.\\n        // The time-weighted average balance uses time measured between two epoch timestamps as\\n        // a constaint on the measurement when calculating the time weighted average balance.\\n        return\\n            (afterOrAt.amount - beforeOrAt.amount) / OverflowSafeComparatorLib.checkedSub(afterOrAt.timestamp, beforeOrAt.timestamp, _currentTime);\\n    }\\n\\n    /** @notice Calculates a user TWAB for a target timestamp using the historical TWAB records.\\n                The balance is linearly interpolated: amount differences / timestamp differences\\n                using the simple (after.amount - before.amount / end.timestamp - start.timestamp) formula.\\n    /** @dev    Binary search in _calculateTwab fails when searching out of bounds. Thus, before\\n                searching we exclude target timestamps out of range of newest/oldest TWAB(s).\\n                IF a search is before or after the range we \\"extrapolate\\" a Observation from the expected state.\\n      * @param _twabs           Individual user Observation recorded checkpoints passed as storage pointer\\n      * @param _accountDetails  User AccountDetails struct loaded in memory\\n      * @param _newestTwab      Newest TWAB in history (end of ring buffer)\\n      * @param _oldestTwab      Olderst TWAB in history (end of ring buffer)\\n      * @param _newestTwabIndex Pointer in ring buffer to newest TWAB\\n      * @param _oldestTwabIndex Pointer in ring buffer to oldest TWAB\\n      * @param _targetTimestamp Epoch timestamp to calculate for time (T) in the TWAB\\n      * @param _time            Block.timestamp\\n      * @return accountDetails Updated Account.details struct\\n    */\\n    function _calculateTwab(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        ObservationLib.Observation memory _newestTwab,\\n        ObservationLib.Observation memory _oldestTwab,\\n        uint24 _newestTwabIndex,\\n        uint24 _oldestTwabIndex,\\n        uint32 _targetTimestamp,\\n        uint32 _time\\n    ) private view returns (ObservationLib.Observation memory) {\\n        // If `_targetTimestamp` is chronologically after the newest TWAB, we extrapolate a new one\\n        if (_newestTwab.timestamp.lt(_targetTimestamp, _time)) {\\n            return _computeNextTwab(_newestTwab, _accountDetails.balance, _targetTimestamp);\\n        }\\n\\n        if (_newestTwab.timestamp == _targetTimestamp) {\\n            return _newestTwab;\\n        }\\n\\n        if (_oldestTwab.timestamp == _targetTimestamp) {\\n            return _oldestTwab;\\n        }\\n\\n        // If `_targetTimestamp` is chronologically before the oldest TWAB, we create a zero twab\\n        if (_targetTimestamp.lt(_oldestTwab.timestamp, _time)) {\\n            return ObservationLib.Observation({ amount: 0, timestamp: _targetTimestamp });\\n        }\\n\\n        // Otherwise, both timestamps must be surrounded by twabs.\\n        (\\n            ObservationLib.Observation memory beforeOrAtStart,\\n            ObservationLib.Observation memory afterOrAtStart\\n        ) = ObservationLib.binarySearch(\\n                _twabs,\\n                _newestTwabIndex,\\n                _oldestTwabIndex,\\n                _targetTimestamp,\\n                _accountDetails.cardinality,\\n                _time\\n            );\\n\\n        uint224 heldBalance = (afterOrAtStart.amount - beforeOrAtStart.amount) /\\n            OverflowSafeComparatorLib.checkedSub(afterOrAtStart.timestamp, beforeOrAtStart.timestamp, _time);\\n\\n        return _computeNextTwab(beforeOrAtStart, heldBalance, _targetTimestamp);\\n    }\\n\\n    /**\\n     * @notice Calculates the next TWAB using the newestTwab and updated balance.\\n     * @dev    Storage of the TWAB obersation is managed by the calling function and not _computeNextTwab.\\n     * @param _currentTwab    Newest Observation in the Account.twabs list\\n     * @param _currentBalance User balance at time of most recent (newest) checkpoint write\\n     * @param _time           Current block.timestamp\\n     * @return TWAB Observation\\n     */\\n    function _computeNextTwab(\\n        ObservationLib.Observation memory _currentTwab,\\n        uint224 _currentBalance,\\n        uint32 _time\\n    ) private pure returns (ObservationLib.Observation memory) {\\n        // New twab amount = last twab amount (or zero) + (current amount * elapsed seconds)\\n        return\\n            ObservationLib.Observation({\\n                amount: _currentTwab.amount +\\n                    _currentBalance *\\n                    (_time.checkedSub(_currentTwab.timestamp, _time)),\\n                timestamp: _time\\n            });\\n    }\\n\\n    /// @notice Sets a new TWAB Observation at the next available index and returns the new account details.\\n    /// @dev Note that if _currentTime is before the last observation timestamp, it appears as an overflow\\n    /// @param _twabs The twabs array to insert into\\n    /// @param _accountDetails The current account details\\n    /// @param _currentTime The current time\\n    /// @return accountDetails The new account details\\n    /// @return twab The newest twab (may or may not be brand-new)\\n    /// @return isNew Whether the newest twab was created by this call\\n    function _nextTwab(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        uint32 _currentTime\\n    )\\n        private\\n        returns (\\n            AccountDetails memory accountDetails,\\n            ObservationLib.Observation memory twab,\\n            bool isNew\\n        )\\n    {\\n        (, ObservationLib.Observation memory _newestTwab) = newestTwab(_twabs, _accountDetails);\\n\\n        // if we\'re in the same block, return\\n        if (_newestTwab.timestamp == _currentTime) {\\n            return (_accountDetails, _newestTwab, false);\\n        }\\n\\n        ObservationLib.Observation memory newTwab = _computeNextTwab(\\n            _newestTwab,\\n            _accountDetails.balance,\\n            _currentTime\\n        );\\n\\n        _twabs[_accountDetails.nextTwabIndex] = newTwab;\\n\\n        AccountDetails memory nextAccountDetails = push(_accountDetails);\\n\\n        return (nextAccountDetails, newTwab, true);\\n    }\\n\\n    /// @notice \\"Pushes\\" a new element on the AccountDetails ring buffer, and returns the new AccountDetails\\n    /// @param _accountDetails The account details from which to pull the cardinality and next index\\n    /// @return The new AccountDetails\\n    function push(AccountDetails memory _accountDetails)\\n        internal\\n        pure\\n        returns (AccountDetails memory)\\n    {\\n        _accountDetails.nextTwabIndex = uint24(\\n            RingBufferLib.nextIndex(_accountDetails.nextTwabIndex, MAX_CARDINALITY)\\n        );\\n\\n        // Prevent the Account specific cardinality from exceeding the MAX_CARDINALITY.\\n        // The ring buffer length is limited by MAX_CARDINALITY. IF the account.cardinality\\n        // exceeds the max cardinality, new observations would be incorrectly set or the\\n        // observation would be out of \\"bounds\\" of the ring buffer. Once reached the\\n        // AccountDetails.cardinality will continue to be equal to max cardinality.\\n        if (_accountDetails.cardinality < MAX_CARDINALITY) {\\n            _accountDetails.cardinality += 1;\\n        }\\n\\n        return _accountDetails;\\n    }\\n}\\n","keccak256":"0xa9cd1103707325d2eaba038d7c0f2b271d934448b8782b82f922653eccb8c90a","license":"GPL-3.0"},"@pooltogether/v4-periphery/contracts/TwabRewards.sol":{"content":"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\";\\nimport \\"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol\\";\\nimport \\"@pooltogether/v4-core/contracts/interfaces/ITicket.sol\\";\\n\\nimport \\"./interfaces/ITwabRewards.sol\\";\\n\\n/**\\n * @title PoolTogether V4 TwabRewards\\n * @author PoolTogether Inc Team\\n * @notice Contract to distribute rewards to depositors in a pool.\\n * This contract supports the creation of several promotions that can run simultaneously.\\n * In order to calculate user rewards, we use the TWAB (Time-Weighted Average Balance) from the Ticket contract.\\n * This way, users simply need to hold their tickets to be eligible to claim rewards.\\n * Rewards are calculated based on the average amount of tickets they hold during the epoch duration.\\n * @dev This contract supports only one prize pool ticket.\\n * @dev This contract does not support the use of fee on transfer tokens.\\n */\\ncontract TwabRewards is ITwabRewards {\\n    using SafeERC20 for IERC20;\\n\\n    /* ============ Global Variables ============ */\\n\\n    /// @notice Prize pool ticket for which the promotions are created.\\n    ITicket public immutable ticket;\\n\\n    /// @notice Period during which the promotion owner can\'t destroy a promotion.\\n    uint32 public constant GRACE_PERIOD = 60 days;\\n\\n    /// @notice Settings of each promotion.\\n    mapping(uint256 => Promotion) internal _promotions;\\n\\n    /**\\n     * @notice Latest recorded promotion id.\\n     * @dev Starts at 0 and is incremented by 1 for each new promotion. So the first promotion will have id 1, the second 2, etc.\\n     */\\n    uint256 internal _latestPromotionId;\\n\\n    /**\\n     * @notice Keeps track of claimed rewards per user.\\n     * @dev _claimedEpochs[promotionId][user] => claimedEpochs\\n     * @dev We pack epochs claimed by a user into a uint256. So we can\'t store more than 256 epochs.\\n     */\\n    mapping(uint256 => mapping(address => uint256)) internal _claimedEpochs;\\n\\n    /* ============ Events ============ */\\n\\n    /**\\n     * @notice Emitted when a promotion is created.\\n     * @param promotionId Id of the newly created promotion\\n     */\\n    event PromotionCreated(uint256 indexed promotionId);\\n\\n    /**\\n     * @notice Emitted when a promotion is ended.\\n     * @param promotionId Id of the promotion being ended\\n     * @param recipient Address of the recipient that will receive the remaining rewards\\n     * @param amount Amount of tokens transferred to the recipient\\n     * @param epochNumber Epoch number at which the promotion ended\\n     */\\n    event PromotionEnded(\\n        uint256 indexed promotionId,\\n        address indexed recipient,\\n        uint256 amount,\\n        uint8 epochNumber\\n    );\\n\\n    /**\\n     * @notice Emitted when a promotion is destroyed.\\n     * @param promotionId Id of the promotion being destroyed\\n     * @param recipient Address of the recipient that will receive the unclaimed rewards\\n     * @param amount Amount of tokens transferred to the recipient\\n     */\\n    event PromotionDestroyed(\\n        uint256 indexed promotionId,\\n        address indexed recipient,\\n        uint256 amount\\n    );\\n\\n    /**\\n     * @notice Emitted when a promotion is extended.\\n     * @param promotionId Id of the promotion being extended\\n     * @param numberOfEpochs Number of epochs the promotion has been extended by\\n     */\\n    event PromotionExtended(uint256 indexed promotionId, uint256 numberOfEpochs);\\n\\n    /**\\n     * @notice Emitted when rewards have been claimed.\\n     * @param promotionId Id of the promotion for which epoch rewards were claimed\\n     * @param epochIds Ids of the epochs being claimed\\n     * @param user Address of the user for which the rewards were claimed\\n     * @param amount Amount of tokens transferred to the recipient address\\n     */\\n    event RewardsClaimed(\\n        uint256 indexed promotionId,\\n        uint8[] epochIds,\\n        address indexed user,\\n        uint256 amount\\n    );\\n\\n    /* ============ Constructor ============ */\\n\\n    /**\\n     * @notice Constructor of the contract.\\n     * @param _ticket Prize Pool ticket address for which the promotions will be created\\n     */\\n    constructor(ITicket _ticket) {\\n        _requireTicket(_ticket);\\n        ticket = _ticket;\\n    }\\n\\n    /* ============ External Functions ============ */\\n\\n    /// @inheritdoc ITwabRewards\\n    function createPromotion(\\n        IERC20 _token,\\n        uint64 _startTimestamp,\\n        uint256 _tokensPerEpoch,\\n        uint48 _epochDuration,\\n        uint8 _numberOfEpochs\\n    ) external override returns (uint256) {\\n        require(_tokensPerEpoch > 0, \\"TwabRewards/tokens-not-zero\\");\\n        require(_epochDuration > 0, \\"TwabRewards/duration-not-zero\\");\\n        _requireNumberOfEpochs(_numberOfEpochs);\\n\\n        uint256 _nextPromotionId = _latestPromotionId + 1;\\n        _latestPromotionId = _nextPromotionId;\\n\\n        uint256 _amount = _tokensPerEpoch * _numberOfEpochs;\\n\\n        _promotions[_nextPromotionId] = Promotion({\\n            creator: msg.sender,\\n            startTimestamp: _startTimestamp,\\n            numberOfEpochs: _numberOfEpochs,\\n            epochDuration: _epochDuration,\\n            createdAt: uint48(block.timestamp),\\n            token: _token,\\n            tokensPerEpoch: _tokensPerEpoch,\\n            rewardsUnclaimed: _amount\\n        });\\n\\n        uint256 _beforeBalance = _token.balanceOf(address(this));\\n\\n        _token.safeTransferFrom(msg.sender, address(this), _amount);\\n\\n        uint256 _afterBalance = _token.balanceOf(address(this));\\n\\n        require(_beforeBalance + _amount == _afterBalance, \\"TwabRewards/promo-amount-diff\\");\\n\\n        emit PromotionCreated(_nextPromotionId);\\n\\n        return _nextPromotionId;\\n    }\\n\\n    /// @inheritdoc ITwabRewards\\n    function endPromotion(uint256 _promotionId, address _to) external override returns (bool) {\\n        require(_to != address(0), \\"TwabRewards/payee-not-zero-addr\\");\\n\\n        Promotion memory _promotion = _getPromotion(_promotionId);\\n        _requirePromotionCreator(_promotion);\\n        _requirePromotionActive(_promotion);\\n\\n        uint8 _epochNumber = uint8(_getCurrentEpochId(_promotion));\\n        _promotions[_promotionId].numberOfEpochs = _epochNumber;\\n\\n        uint256 _remainingRewards = _getRemainingRewards(_promotion);\\n        _promotion.token.safeTransfer(_to, _remainingRewards);\\n\\n        emit PromotionEnded(_promotionId, _to, _remainingRewards, _epochNumber);\\n\\n        return true;\\n    }\\n\\n    /// @inheritdoc ITwabRewards\\n    function destroyPromotion(uint256 _promotionId, address _to) external override returns (bool) {\\n        require(_to != address(0), \\"TwabRewards/payee-not-zero-addr\\");\\n\\n        Promotion memory _promotion = _getPromotion(_promotionId);\\n        _requirePromotionCreator(_promotion);\\n\\n        uint256 _promotionEndTimestamp = _getPromotionEndTimestamp(_promotion);\\n        uint256 _promotionCreatedAt = _promotion.createdAt;\\n\\n        uint256 _gracePeriodEndTimestamp = (\\n            _promotionEndTimestamp < _promotionCreatedAt\\n                ? _promotionCreatedAt\\n                : _promotionEndTimestamp\\n        ) + GRACE_PERIOD;\\n\\n        require(block.timestamp >= _gracePeriodEndTimestamp, \\"TwabRewards/grace-period-active\\");\\n\\n        uint256 _rewardsUnclaimed = _promotion.rewardsUnclaimed;\\n        delete _promotions[_promotionId];\\n\\n        _promotion.token.safeTransfer(_to, _rewardsUnclaimed);\\n\\n        emit PromotionDestroyed(_promotionId, _to, _rewardsUnclaimed);\\n\\n        return true;\\n    }\\n\\n    /// @inheritdoc ITwabRewards\\n    function extendPromotion(uint256 _promotionId, uint8 _numberOfEpochs)\\n        external\\n        override\\n        returns (bool)\\n    {\\n        _requireNumberOfEpochs(_numberOfEpochs);\\n\\n        Promotion memory _promotion = _getPromotion(_promotionId);\\n        _requirePromotionActive(_promotion);\\n\\n        uint8 _currentNumberOfEpochs = _promotion.numberOfEpochs;\\n\\n        require(\\n            _numberOfEpochs <= (type(uint8).max - _currentNumberOfEpochs),\\n            \\"TwabRewards/epochs-over-limit\\"\\n        );\\n\\n        _promotions[_promotionId].numberOfEpochs = _currentNumberOfEpochs + _numberOfEpochs;\\n\\n        uint256 _amount = _numberOfEpochs * _promotion.tokensPerEpoch;\\n\\n        _promotions[_promotionId].rewardsUnclaimed += _amount;\\n        _promotion.token.safeTransferFrom(msg.sender, address(this), _amount);\\n\\n        emit PromotionExtended(_promotionId, _numberOfEpochs);\\n\\n        return true;\\n    }\\n\\n    /// @inheritdoc ITwabRewards\\n    function claimRewards(\\n        address _user,\\n        uint256 _promotionId,\\n        uint8[] calldata _epochIds\\n    ) external override returns (uint256) {\\n        Promotion memory _promotion = _getPromotion(_promotionId);\\n\\n        uint256 _rewardsAmount;\\n        uint256 _userClaimedEpochs = _claimedEpochs[_promotionId][_user];\\n        uint256 _epochIdsLength = _epochIds.length;\\n\\n        for (uint256 index = 0; index < _epochIdsLength; index++) {\\n            uint8 _epochId = _epochIds[index];\\n\\n            require(!_isClaimedEpoch(_userClaimedEpochs, _epochId), \\"TwabRewards/rewards-claimed\\");\\n\\n            _rewardsAmount += _calculateRewardAmount(_user, _promotion, _epochId);\\n            _userClaimedEpochs = _updateClaimedEpoch(_userClaimedEpochs, _epochId);\\n        }\\n\\n        _claimedEpochs[_promotionId][_user] = _userClaimedEpochs;\\n        _promotions[_promotionId].rewardsUnclaimed -= _rewardsAmount;\\n\\n        _promotion.token.safeTransfer(_user, _rewardsAmount);\\n\\n        emit RewardsClaimed(_promotionId, _epochIds, _user, _rewardsAmount);\\n\\n        return _rewardsAmount;\\n    }\\n\\n    /// @inheritdoc ITwabRewards\\n    function getPromotion(uint256 _promotionId) external view override returns (Promotion memory) {\\n        return _getPromotion(_promotionId);\\n    }\\n\\n    /// @inheritdoc ITwabRewards\\n    function getCurrentEpochId(uint256 _promotionId) external view override returns (uint256) {\\n        return _getCurrentEpochId(_getPromotion(_promotionId));\\n    }\\n\\n    /// @inheritdoc ITwabRewards\\n    function getRemainingRewards(uint256 _promotionId) external view override returns (uint256) {\\n        return _getRemainingRewards(_getPromotion(_promotionId));\\n    }\\n\\n    /// @inheritdoc ITwabRewards\\n    function getRewardsAmount(\\n        address _user,\\n        uint256 _promotionId,\\n        uint8[] calldata _epochIds\\n    ) external view override returns (uint256[] memory) {\\n        Promotion memory _promotion = _getPromotion(_promotionId);\\n\\n        uint256 _epochIdsLength = _epochIds.length;\\n        uint256[] memory _rewardsAmount = new uint256[](_epochIdsLength);\\n\\n        for (uint256 index = 0; index < _epochIdsLength; index++) {\\n            if (_isClaimedEpoch(_claimedEpochs[_promotionId][_user], uint8(index))) {\\n                _rewardsAmount[index] = 0;\\n            } else {\\n                _rewardsAmount[index] = _calculateRewardAmount(_user, _promotion, _epochIds[index]);\\n            }\\n        }\\n\\n        return _rewardsAmount;\\n    }\\n\\n    /* ============ Internal Functions ============ */\\n\\n    /**\\n     * @notice Determine if address passed is actually a ticket.\\n     * @param _ticket Address to check\\n     */\\n    function _requireTicket(ITicket _ticket) internal view {\\n        require(address(_ticket) != address(0), \\"TwabRewards/ticket-not-zero-addr\\");\\n\\n        (bool succeeded, bytes memory data) = address(_ticket).staticcall(\\n            abi.encodePacked(_ticket.controller.selector)\\n        );\\n\\n        require(\\n            succeeded && data.length > 0 && abi.decode(data, (uint160)) != 0,\\n            \\"TwabRewards/invalid-ticket\\"\\n        );\\n    }\\n\\n    /**\\n     * @notice Allow a promotion to be created or extended only by a positive number of epochs.\\n     * @param _numberOfEpochs Number of epochs to check\\n     */\\n    function _requireNumberOfEpochs(uint8 _numberOfEpochs) internal pure {\\n        require(_numberOfEpochs > 0, \\"TwabRewards/epochs-not-zero\\");\\n    }\\n\\n    /**\\n     * @notice Determine if a promotion is active.\\n     * @param _promotion Promotion to check\\n     */\\n    function _requirePromotionActive(Promotion memory _promotion) internal view {\\n        require(\\n            _getPromotionEndTimestamp(_promotion) > block.timestamp,\\n            \\"TwabRewards/promotion-inactive\\"\\n        );\\n    }\\n\\n    /**\\n     * @notice Determine if msg.sender is the promotion creator.\\n     * @param _promotion Promotion to check\\n     */\\n    function _requirePromotionCreator(Promotion memory _promotion) internal view {\\n        require(msg.sender == _promotion.creator, \\"TwabRewards/only-promo-creator\\");\\n    }\\n\\n    /**\\n     * @notice Get settings for a specific promotion.\\n     * @dev Will revert if the promotion does not exist.\\n     * @param _promotionId Promotion id to get settings for\\n     * @return Promotion settings\\n     */\\n    function _getPromotion(uint256 _promotionId) internal view returns (Promotion memory) {\\n        Promotion memory _promotion = _promotions[_promotionId];\\n        require(_promotion.creator != address(0), \\"TwabRewards/invalid-promotion\\");\\n        return _promotion;\\n    }\\n\\n    /**\\n     * @notice Compute promotion end timestamp.\\n     * @param _promotion Promotion to compute end timestamp for\\n     * @return Promotion end timestamp\\n     */\\n    function _getPromotionEndTimestamp(Promotion memory _promotion)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        unchecked {\\n            return\\n                _promotion.startTimestamp + (_promotion.epochDuration * _promotion.numberOfEpochs);\\n        }\\n    }\\n\\n    /**\\n     * @notice Get the current epoch id of a promotion.\\n     * @dev Epoch ids and their boolean values are tightly packed and stored in a uint256, so epoch id starts at 0.\\n     * @dev We return the current epoch id if the promotion has not ended.\\n     * If the current timestamp is before the promotion start timestamp, we return 0.\\n     * Otherwise, we return the epoch id at the current timestamp. This could be greater than the number of epochs of the promotion.\\n     * @param _promotion Promotion to get current epoch for\\n     * @return Epoch id\\n     */\\n    function _getCurrentEpochId(Promotion memory _promotion) internal view returns (uint256) {\\n        uint256 _currentEpochId;\\n\\n        if (block.timestamp > _promotion.startTimestamp) {\\n            unchecked {\\n                _currentEpochId =\\n                    (block.timestamp - _promotion.startTimestamp) /\\n                    _promotion.epochDuration;\\n            }\\n        }\\n\\n        return _currentEpochId;\\n    }\\n\\n    /**\\n     * @notice Get reward amount for a specific user.\\n     * @dev Rewards can only be calculated once the epoch is over.\\n     * @dev Will revert if `_epochId` is over the total number of epochs or if epoch is not over.\\n     * @dev Will return 0 if the user average balance of tickets is 0.\\n     * @param _user User to get reward amount for\\n     * @param _promotion Promotion from which the epoch is\\n     * @param _epochId Epoch id to get reward amount for\\n     * @return Reward amount\\n     */\\n    function _calculateRewardAmount(\\n        address _user,\\n        Promotion memory _promotion,\\n        uint8 _epochId\\n    ) internal view returns (uint256) {\\n        uint64 _epochDuration = _promotion.epochDuration;\\n        uint64 _epochStartTimestamp = _promotion.startTimestamp + (_epochDuration * _epochId);\\n        uint64 _epochEndTimestamp = _epochStartTimestamp + _epochDuration;\\n\\n        require(block.timestamp >= _epochEndTimestamp, \\"TwabRewards/epoch-not-over\\");\\n        require(_epochId < _promotion.numberOfEpochs, \\"TwabRewards/invalid-epoch-id\\");\\n\\n        uint256 _averageBalance = ticket.getAverageBalanceBetween(\\n            _user,\\n            _epochStartTimestamp,\\n            _epochEndTimestamp\\n        );\\n\\n        if (_averageBalance > 0) {\\n            uint64[] memory _epochStartTimestamps = new uint64[](1);\\n            _epochStartTimestamps[0] = _epochStartTimestamp;\\n\\n            uint64[] memory _epochEndTimestamps = new uint64[](1);\\n            _epochEndTimestamps[0] = _epochEndTimestamp;\\n\\n            uint256 _averageTotalSupply = ticket.getAverageTotalSuppliesBetween(\\n                _epochStartTimestamps,\\n                _epochEndTimestamps\\n            )[0];\\n\\n            return (_promotion.tokensPerEpoch * _averageBalance) / _averageTotalSupply;\\n        }\\n\\n        return 0;\\n    }\\n\\n    /**\\n     * @notice Get the total amount of tokens left to be rewarded.\\n     * @param _promotion Promotion to get the total amount of tokens left to be rewarded for\\n     * @return Amount of tokens left to be rewarded\\n     */\\n    function _getRemainingRewards(Promotion memory _promotion) internal view returns (uint256) {\\n        if (block.timestamp > _getPromotionEndTimestamp(_promotion)) {\\n            return 0;\\n        }\\n\\n        return\\n            _promotion.tokensPerEpoch *\\n            (_promotion.numberOfEpochs - _getCurrentEpochId(_promotion));\\n    }\\n\\n    /**\\n    * @notice Set boolean value for a specific epoch.\\n    * @dev Bits are stored in a uint256 from right to left.\\n        Let\'s take the example of the following 8 bits word. 0110 0011\\n        To set the boolean value to 1 for the epoch id 2, we need to create a mask by shifting 1 to the left by 2 bits.\\n        We get: 0000 0001 << 2 = 0000 0100\\n        We then OR the mask with the word to set the value.\\n        We get: 0110 0011 | 0000 0100 = 0110 0111\\n    * @param _userClaimedEpochs Tightly packed epoch ids with their boolean values\\n    * @param _epochId Id of the epoch to set the boolean for\\n    * @return Tightly packed epoch ids with the newly boolean value set\\n    */\\n    function _updateClaimedEpoch(uint256 _userClaimedEpochs, uint8 _epochId)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        return _userClaimedEpochs | (uint256(1) << _epochId);\\n    }\\n\\n    /**\\n    * @notice Check if rewards of an epoch for a given promotion have already been claimed by the user.\\n    * @dev Bits are stored in a uint256 from right to left.\\n        Let\'s take the example of the following 8 bits word. 0110 0111\\n        To retrieve the boolean value for the epoch id 2, we need to shift the word to the right by 2 bits.\\n        We get: 0110 0111 >> 2 = 0001 1001\\n        We then get the value of the last bit by masking with 1.\\n        We get: 0001 1001 & 0000 0001 = 0000 0001 = 1\\n        We then return the boolean value true since the last bit is 1.\\n    * @param _userClaimedEpochs Record of epochs already claimed by the user\\n    * @param _epochId Epoch id to check\\n    * @return true if the rewards have already been claimed for the given epoch, false otherwise\\n     */\\n    function _isClaimedEpoch(uint256 _userClaimedEpochs, uint8 _epochId)\\n        internal\\n        pure\\n        returns (bool)\\n    {\\n        return (_userClaimedEpochs >> _epochId) & uint256(1) == 1;\\n    }\\n}\\n","keccak256":"0x3700cb7657174461ff5b496bbb3aa481275b6aa692dd62f33e726f1255d39d0b","license":"GPL-3.0"},"@pooltogether/v4-periphery/contracts/interfaces/ITwabRewards.sol":{"content":"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\";\\n\\n/**\\n * @title  PoolTogether V4 ITwabRewards\\n * @author PoolTogether Inc Team\\n * @notice TwabRewards contract interface.\\n */\\ninterface ITwabRewards {\\n    /**\\n     * @notice Struct to keep track of each promotion\'s settings.\\n     * @param creator Addresss of the promotion creator\\n     * @param startTimestamp Timestamp at which the promotion starts\\n     * @param numberOfEpochs Number of epochs the promotion will last for\\n     * @param epochDuration Duration of one epoch in seconds\\n     * @param createdAt Timestamp at which the promotion was created\\n     * @param token Address of the token to be distributed as reward\\n     * @param tokensPerEpoch Number of tokens to be distributed per epoch\\n     * @param rewardsUnclaimed Amount of rewards that have not been claimed yet\\n     */\\n    struct Promotion {\\n        address creator;\\n        uint64 startTimestamp;\\n        uint8 numberOfEpochs;\\n        uint48 epochDuration;\\n        uint48 createdAt;\\n        IERC20 token;\\n        uint256 tokensPerEpoch;\\n        uint256 rewardsUnclaimed;\\n    }\\n\\n    /**\\n     * @notice Creates a new promotion.\\n     * @dev For sake of simplicity, `msg.sender` will be the creator of the promotion.\\n     * @dev `_latestPromotionId` starts at 0 and is incremented by 1 for each new promotion.\\n     * So the first promotion will have id 1, the second 2, etc.\\n     * @dev The transaction will revert if the amount of reward tokens provided is not equal to `_tokensPerEpoch * _numberOfEpochs`.\\n     * This scenario could happen if the token supplied is a fee on transfer one.\\n     * @param _token Address of the token to be distributed\\n     * @param _startTimestamp Timestamp at which the promotion starts\\n     * @param _tokensPerEpoch Number of tokens to be distributed per epoch\\n     * @param _epochDuration Duration of one epoch in seconds\\n     * @param _numberOfEpochs Number of epochs the promotion will last for\\n     * @return Id of the newly created promotion\\n     */\\n    function createPromotion(\\n        IERC20 _token,\\n        uint64 _startTimestamp,\\n        uint256 _tokensPerEpoch,\\n        uint48 _epochDuration,\\n        uint8 _numberOfEpochs\\n    ) external returns (uint256);\\n\\n    /**\\n     * @notice End currently active promotion and send promotion tokens back to the creator.\\n     * @dev Will only send back tokens from the epochs that have not completed.\\n     * @param _promotionId Promotion id to end\\n     * @param _to Address that will receive the remaining tokens if there are any left\\n     * @return true if operation was successful\\n     */\\n    function endPromotion(uint256 _promotionId, address _to) external returns (bool);\\n\\n    /**\\n     * @notice Delete an inactive promotion and send promotion tokens back to the creator.\\n     * @dev Will send back all the tokens that have not been claimed yet by users.\\n     * @dev This function will revert if the promotion is still active.\\n     * @dev This function will revert if the grace period is not over yet.\\n     * @param _promotionId Promotion id to destroy\\n     * @param _to Address that will receive the remaining tokens if there are any left\\n     * @return True if operation was successful\\n     */\\n    function destroyPromotion(uint256 _promotionId, address _to) external returns (bool);\\n\\n    /**\\n     * @notice Extend promotion by adding more epochs.\\n     * @param _promotionId Id of the promotion to extend\\n     * @param _numberOfEpochs Number of epochs to add\\n     * @return True if the operation was successful\\n     */\\n    function extendPromotion(uint256 _promotionId, uint8 _numberOfEpochs) external returns (bool);\\n\\n    /**\\n     * @notice Claim rewards for a given promotion and epoch.\\n     * @dev Rewards can be claimed on behalf of a user.\\n     * @dev Rewards can only be claimed for a past epoch.\\n     * @param _user Address of the user to claim rewards for\\n     * @param _promotionId Id of the promotion to claim rewards for\\n     * @param _epochIds Epoch ids to claim rewards for\\n     * @return Total amount of rewards claimed\\n     */\\n    function claimRewards(\\n        address _user,\\n        uint256 _promotionId,\\n        uint8[] calldata _epochIds\\n    ) external returns (uint256);\\n\\n    /**\\n     * @notice Get settings for a specific promotion.\\n     * @param _promotionId Id of the promotion to get settings for\\n     * @return Promotion settings\\n     */\\n    function getPromotion(uint256 _promotionId) external view returns (Promotion memory);\\n\\n    /**\\n     * @notice Get the current epoch id of a promotion.\\n     * @dev Epoch ids and their boolean values are tightly packed and stored in a uint256, so epoch id starts at 0.\\n     * @param _promotionId Id of the promotion to get current epoch for\\n     * @return Current epoch id of the promotion\\n     */\\n    function getCurrentEpochId(uint256 _promotionId) external view returns (uint256);\\n\\n    /**\\n     * @notice Get the total amount of tokens left to be rewarded.\\n     * @param _promotionId Id of the promotion to get the total amount of tokens left to be rewarded for\\n     * @return Amount of tokens left to be rewarded\\n     */\\n    function getRemainingRewards(uint256 _promotionId) external view returns (uint256);\\n\\n    /**\\n     * @notice Get amount of tokens to be rewarded for a given epoch.\\n     * @dev Rewards amount can only be retrieved for epochs that are over.\\n     * @dev Will revert if `_epochId` is over the total number of epochs or if epoch is not over.\\n     * @dev Will return 0 if the user average balance of tickets is 0.\\n     * @dev Will be 0 if user has already claimed rewards for the epoch.\\n     * @param _user Address of the user to get amount of rewards for\\n     * @param _promotionId Id of the promotion from which the epoch is\\n     * @param _epochIds Epoch ids to get reward amount for\\n     * @return Amount of tokens per epoch to be rewarded\\n     */\\n    function getRewardsAmount(\\n        address _user,\\n        uint256 _promotionId,\\n        uint8[] calldata _epochIds\\n    ) external view returns (uint256[] memory);\\n}\\n","keccak256":"0xbd96f3c1f80c16b2dcfbe0e9c3fd281044fef93c1db4d4c9d56dc3e2bf7ec47d","license":"GPL-3.0"}},"version":1}',
    bytecode:
      '0x60a06040523480156200001157600080fd5b5060405162002123380380620021238339810160408190526200003491620001c3565b6200003f8162000055565b60601b6001600160601b03191660805262000241565b6001600160a01b038116620000b15760405162461bcd60e51b815260206004820181905260248201527f54776162526577617264732f7469636b65742d6e6f742d7a65726f2d6164647260448201526064015b60405180910390fd5b60405163f77c479160e01b602082015260009081906001600160a01b0384169060240160408051601f1981840301815290829052620000f091620001ea565b600060405180830381855afa9150503d80600081146200012d576040519150601f19603f3d011682016040523d82523d6000602084013e62000132565b606091505b509150915081801562000146575060008151115b801562000170575080806020019051810190620001649190620001c3565b6001600160a01b031615155b620001be5760405162461bcd60e51b815260206004820152601a60248201527f54776162526577617264732f696e76616c69642d7469636b65740000000000006044820152606401620000a8565b505050565b600060208284031215620001d657600080fd5b8151620001e38162000228565b9392505050565b6000825160005b818110156200020d5760208186018101518583015201620001f1565b818111156200021d576000828501525b509190910192915050565b6001600160a01b03811681146200023e57600080fd5b50565b60805160601c611eb56200026e600039600081816101820152818161121a01526113720152611eb56000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c806366cfae5e11610081578063b2456c3a1161005b578063b2456c3a146101cf578063c1a287e2146101e2578063f824d0fb1461020157600080fd5b806366cfae5e1461015c5780636cc25db71461017d578063a4958845146101bc57600080fd5b8063120468a0116100b2578063120468a01461011657806314fdecca1461012957806320555db11461014957600080fd5b8063096fe668146100ce5780630b011a16146100f6575b600080fd5b6100e16100dc366004611a84565b610214565b60405190151581526020015b60405180910390f35b610109610104366004611833565b610386565b6040516100ed9190611b2c565b6100e1610124366004611a54565b6104ae565b61013c610137366004611a22565b6105eb565b6040516100ed9190611c1f565b6100e1610157366004611a54565b61063b565b61016f61016a3660046119a6565b61080b565b6040519081526020016100ed565b6101a47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ed565b61016f6101ca366004611a22565b610c42565b61016f6101dd366004611833565b610c55565b6101ec624f1a0081565b60405163ffffffff90911681526020016100ed565b61016f61020f366004611a22565b610e00565b600061021f82610e13565b600061022a84610e69565b905061023581610fa9565b60408101516102458160ff611da8565b60ff168460ff16111561029f5760405162461bcd60e51b815260206004820152601d60248201527f54776162526577617264732f65706f6368732d6f7665722d6c696d697400000060448201526064015b60405180910390fd5b6102a98482611cfb565b600086815260208190526040812080547fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160e01b60ff9485160217905560c084015190916102fc91908716611d42565b90508060008088815260200190815260200160002060030160008282546103239190611cb7565b909155505060a0830151610342906001600160a01b0316333084611020565b60405160ff8616815286907fa9527ed49c1c2ab5449cfef5b611076ce228a0a0de4534874963b83abb6e7b469060200160405180910390a250600195945050505050565b6060600061039385610e69565b90508260008167ffffffffffffffff8111156103b1576103b1611e54565b6040519080825280602002602001820160405280156103da578160200160208202803683370190505b50905060005b828110156104a25760008881526002602090815260408083206001600160a01b038d16845290915290205460ff82161c6001908116141561044057600082828151811061042f5761042f611e3e565b602002602001018181525050610490565b610471898589898581811061045757610457611e3e565b905060200201602081019061046c9190611ab0565b6110d7565b82828151811061048357610483611e3e565b6020026020010181815250505b8061049a81611df7565b9150506103e0565b50979650505050505050565b60006001600160a01b0382166105065760405162461bcd60e51b815260206004820152601f60248201527f54776162526577617264732f70617965652d6e6f742d7a65726f2d61646472006044820152606401610296565b600061051184610e69565b905061051c81611452565b61052581610fa9565b6000610530826114ab565b600086815260208190526040812080547fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160e01b60ff85160217905590915061057b836114f7565b60a0840151909150610597906001600160a01b0316868361155b565b6040805182815260ff841660208201526001600160a01b0387169188917f98f89153fa6ee40b2edcd2e1ce4a5a9edfb2f74818016fc24e6cfe7b6fcd12a9910160405180910390a350600195945050505050565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915261063582610e69565b92915050565b60006001600160a01b0382166106935760405162461bcd60e51b815260206004820152601f60248201527f54776162526577617264732f70617965652d6e6f742d7a65726f2d61646472006044820152606401610296565b600061069e84610e69565b90506106a981611452565b60408101516060820151602083015160009260ff1690910265ffffffffffff160167ffffffffffffffff16608083015190915065ffffffffffff166000624f1a008284106106f757836106f9565b825b6107039190611cb7565b9050804210156107555760405162461bcd60e51b815260206004820152601f60248201527f54776162526577617264732f67726163652d706572696f642d616374697665006044820152606401610296565b60e0840151600088815260208190526040812080547fffffff000000000000000000000000000000000000000000000000000000000016815560018101829055600281018290556003015560a08501516107b9906001600160a01b0316888361155b565b866001600160a01b0316887f6f804f2ef186cd4b2a6740c084b86f557a497a1fcf3a6b073068a55c51187b6f836040516107f591815260200190565b60405180910390a3506001979650505050505050565b600080841161085c5760405162461bcd60e51b815260206004820152601b60248201527f54776162526577617264732f746f6b656e732d6e6f742d7a65726f00000000006044820152606401610296565b60008365ffffffffffff16116108b45760405162461bcd60e51b815260206004820152601d60248201527f54776162526577617264732f6475726174696f6e2d6e6f742d7a65726f0000006044820152606401610296565b6108bd82610e13565b600060015460016108ce9190611cb7565b6001819055905060006108e460ff851687611d42565b9050604051806101000160405280336001600160a01b031681526020018867ffffffffffffffff1681526020018560ff1681526020018665ffffffffffff1681526020014265ffffffffffff168152602001896001600160a01b031681526020018781526020018281525060008084815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550604082015181600001601c6101000a81548160ff021916908360ff16021790555060608201518160010160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060808201518160010160066101000a81548165ffffffffffff021916908365ffffffffffff16021790555060a082015181600101600c6101000a8154816001600160a01b0302191690836001600160a01b0316021790555060c0820151816002015560e082015181600301559050506000886001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610ab591906001600160a01b0391909116815260200190565b60206040518083038186803b158015610acd57600080fd5b505afa158015610ae1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b059190611a3b565b9050610b1c6001600160a01b038a16333085611020565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000906001600160a01b038b16906370a082319060240160206040518083038186803b158015610b7757600080fd5b505afa158015610b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baf9190611a3b565b905080610bbc8484611cb7565b14610c095760405162461bcd60e51b815260206004820152601d60248201527f54776162526577617264732f70726f6d6f2d616d6f756e742d646966660000006044820152606401610296565b60405184907faedc1797e973574eb0e43205c473287ca44eb1c9d0f677dbb0ec8cfc72bb68f390600090a2509198975050505050505050565b6000610635610c5083610e69565b6114f7565b600080610c6185610e69565b60008681526002602090815260408083206001600160a01b038b1684529091528120549192509084825b81811015610d4d576000888883818110610ca757610ca7611e3e565b9050602002016020810190610cbc9190611ab0565b9050600160ff821685901c81161415610d175760405162461bcd60e51b815260206004820152601b60248201527f54776162526577617264732f726577617264732d636c61696d656400000000006044820152606401610296565b610d228b87836110d7565b610d2c9086611cb7565b9450600160ff82161b84179350508080610d4590611df7565b915050610c8b565b5060008881526002602090815260408083206001600160a01b038d16845282528083208590558a83529082905281206003018054859290610d8f908490611d91565b909155505060a0840151610dad906001600160a01b03168a8561155b565b886001600160a01b0316887f446a5bb69110f4fa9a5802e85237a4281d1d27dbe989b22da4a75d9deae8c778898987604051610deb93929190611b9e565b60405180910390a35090979650505050505050565b6000610635610e0e83610e69565b6114ab565b60008160ff1611610e665760405162461bcd60e51b815260206004820152601b60248201527f54776162526577617264732f65706f6368732d6e6f742d7a65726f00000000006044820152606401610296565b50565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091526000828152602081815260409182902082516101008101845281546001600160a01b0380821680845274010000000000000000000000000000000000000000830467ffffffffffffffff1695840195909552600160e01b90910460ff1694820194909452600182015465ffffffffffff8082166060840152660100000000000082041660808301526c01000000000000000000000000900490931660a0840152600281015460c08401526003015460e08301526106355760405162461bcd60e51b815260206004820152601d60248201527f54776162526577617264732f696e76616c69642d70726f6d6f74696f6e0000006044820152606401610296565b604081015160608201516020830151429260ff1690910265ffffffffffff160167ffffffffffffffff1611610e665760405162461bcd60e51b815260206004820152601e60248201527f54776162526577617264732f70726f6d6f74696f6e2d696e61637469766500006044820152606401610296565b6040516001600160a01b03808516602483015283166044820152606481018290526110d19085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526115a9565b50505050565b606082015160009065ffffffffffff16816110f560ff851683611d61565b85602001516111049190611ccf565b905060006111128383611ccf565b90508067ffffffffffffffff1642101561116e5760405162461bcd60e51b815260206004820152601a60248201527f54776162526577617264732f65706f63682d6e6f742d6f7665720000000000006044820152606401610296565b856040015160ff168560ff16106111c75760405162461bcd60e51b815260206004820152601c60248201527f54776162526577617264732f696e76616c69642d65706f63682d6964000000006044820152606401610296565b6040517f98b16f360000000000000000000000000000000000000000000000000000000081526001600160a01b03888116600483015267ffffffffffffffff8085166024840152831660448301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906398b16f369060640160206040518083038186803b15801561125e57600080fd5b505afa158015611272573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112969190611a3b565b90508015611442576040805160018082528183019092526000916020808301908036833701905050905083816000815181106112d4576112d4611e3e565b67ffffffffffffffff9290921660209283029190910190910152604080516001808252818301909252600091816020016020820280368337019050509050838160008151811061132657611326611e3e565b67ffffffffffffffff909216602092830291909101909101526040517f8e6d536a0000000000000000000000000000000000000000000000000000000081526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638e6d536a906113a99086908690600401611b70565b60006040518083038186803b1580156113c157600080fd5b505afa1580156113d5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113fd91908101906118bf565b60008151811061140f5761140f611e3e565b6020026020010151905080848b60c0015161142a9190611d42565b6114349190611d20565b97505050505050505061144b565b60009450505050505b9392505050565b80516001600160a01b03163314610e665760405162461bcd60e51b815260206004820152601e60248201527f54776162526577617264732f6f6e6c792d70726f6d6f2d63726561746f7200006044820152606401610296565b600080826020015167ffffffffffffffff1642111561063557826060015165ffffffffffff16836020015167ffffffffffffffff164203816114ef576114ef611e28565b049392505050565b60408101516060820151602083015160009260ff1690910265ffffffffffff160167ffffffffffffffff1642111561153157506000919050565b61153a826114ab565b826040015160ff1661154c9190611d91565b8260c001516106359190611d42565b6040516001600160a01b0383166024820152604481018290526115a49084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161106d565b505050565b60006115fe826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661168e9092919063ffffffff16565b8051909150156115a4578080602001905181019061161c9190611984565b6115a45760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610296565b606061169d84846000856116a5565b949350505050565b60608247101561171d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610296565b843b61176b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610296565b600080866001600160a01b031685876040516117879190611b10565b60006040518083038185875af1925050503d80600081146117c4576040519150601f19603f3d011682016040523d82523d6000602084013e6117c9565b606091505b50915091506117d98282866117e4565b979650505050505050565b606083156117f357508161144b565b8251156118035782518084602001fd5b8160405162461bcd60e51b81526004016102969190611bec565b803560ff8116811461182e57600080fd5b919050565b6000806000806060858703121561184957600080fd5b843561185481611e6a565b935060208501359250604085013567ffffffffffffffff8082111561187857600080fd5b818701915087601f83011261188c57600080fd5b81358181111561189b57600080fd5b8860208260051b85010111156118b057600080fd5b95989497505060200194505050565b600060208083850312156118d257600080fd5b825167ffffffffffffffff808211156118ea57600080fd5b818501915085601f8301126118fe57600080fd5b81518181111561191057611910611e54565b8060051b604051601f19603f8301168101818110858211171561193557611935611e54565b604052828152858101935084860182860187018a101561195457600080fd5b600095505b83861015611977578051855260019590950194938601938601611959565b5098975050505050505050565b60006020828403121561199657600080fd5b8151801515811461144b57600080fd5b600080600080600060a086880312156119be57600080fd5b85356119c981611e6a565b9450602086013567ffffffffffffffff811681146119e657600080fd5b935060408601359250606086013565ffffffffffff81168114611a0857600080fd5b9150611a166080870161181d565b90509295509295909350565b600060208284031215611a3457600080fd5b5035919050565b600060208284031215611a4d57600080fd5b5051919050565b60008060408385031215611a6757600080fd5b823591506020830135611a7981611e6a565b809150509250929050565b60008060408385031215611a9757600080fd5b82359150611aa76020840161181d565b90509250929050565b600060208284031215611ac257600080fd5b61144b8261181d565b600081518084526020808501945080840160005b83811015611b0557815167ffffffffffffffff1687529582019590820190600101611adf565b509495945050505050565b60008251611b22818460208701611dcb565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015611b6457835183529284019291840191600101611b48565b50909695505050505050565b604081526000611b836040830185611acb565b8281036020840152611b958185611acb565b95945050505050565b6040808252810183905260008460608301825b86811015611bd95760ff611bc48461181d565b16825260209283019290910190600101611bb1565b5060209390930193909352509392505050565b6020815260008251806020840152611c0b816040850160208701611dcb565b601f01601f19169190910160400192915050565b6000610100820190506001600160a01b03835116825267ffffffffffffffff602084015116602083015260ff604084015116604083015265ffffffffffff60608401511660608301526080830151611c81608084018265ffffffffffff169052565b5060a0830151611c9c60a08401826001600160a01b03169052565b5060c083015160c083015260e083015160e083015292915050565b60008219821115611cca57611cca611e12565b500190565b600067ffffffffffffffff808316818516808303821115611cf257611cf2611e12565b01949350505050565b600060ff821660ff84168060ff03821115611d1857611d18611e12565b019392505050565b600082611d3d57634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611d5c57611d5c611e12565b500290565b600067ffffffffffffffff80831681851681830481118215151615611d8857611d88611e12565b02949350505050565b600082821015611da357611da3611e12565b500390565b600060ff821660ff841680821015611dc257611dc2611e12565b90039392505050565b60005b83811015611de6578181015183820152602001611dce565b838111156110d15750506000910152565b6000600019821415611e0b57611e0b611e12565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610e6657600080fdfea264697066735822122093aebe8126842f77adfcf2f93bf5a68a510897332a4a90f97601a16656e11e6a64736f6c63430008060033',
    deployedBytecode:
      '0x608060405234801561001057600080fd5b50600436106100c95760003560e01c806366cfae5e11610081578063b2456c3a1161005b578063b2456c3a146101cf578063c1a287e2146101e2578063f824d0fb1461020157600080fd5b806366cfae5e1461015c5780636cc25db71461017d578063a4958845146101bc57600080fd5b8063120468a0116100b2578063120468a01461011657806314fdecca1461012957806320555db11461014957600080fd5b8063096fe668146100ce5780630b011a16146100f6575b600080fd5b6100e16100dc366004611a84565b610214565b60405190151581526020015b60405180910390f35b610109610104366004611833565b610386565b6040516100ed9190611b2c565b6100e1610124366004611a54565b6104ae565b61013c610137366004611a22565b6105eb565b6040516100ed9190611c1f565b6100e1610157366004611a54565b61063b565b61016f61016a3660046119a6565b61080b565b6040519081526020016100ed565b6101a47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ed565b61016f6101ca366004611a22565b610c42565b61016f6101dd366004611833565b610c55565b6101ec624f1a0081565b60405163ffffffff90911681526020016100ed565b61016f61020f366004611a22565b610e00565b600061021f82610e13565b600061022a84610e69565b905061023581610fa9565b60408101516102458160ff611da8565b60ff168460ff16111561029f5760405162461bcd60e51b815260206004820152601d60248201527f54776162526577617264732f65706f6368732d6f7665722d6c696d697400000060448201526064015b60405180910390fd5b6102a98482611cfb565b600086815260208190526040812080547fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160e01b60ff9485160217905560c084015190916102fc91908716611d42565b90508060008088815260200190815260200160002060030160008282546103239190611cb7565b909155505060a0830151610342906001600160a01b0316333084611020565b60405160ff8616815286907fa9527ed49c1c2ab5449cfef5b611076ce228a0a0de4534874963b83abb6e7b469060200160405180910390a250600195945050505050565b6060600061039385610e69565b90508260008167ffffffffffffffff8111156103b1576103b1611e54565b6040519080825280602002602001820160405280156103da578160200160208202803683370190505b50905060005b828110156104a25760008881526002602090815260408083206001600160a01b038d16845290915290205460ff82161c6001908116141561044057600082828151811061042f5761042f611e3e565b602002602001018181525050610490565b610471898589898581811061045757610457611e3e565b905060200201602081019061046c9190611ab0565b6110d7565b82828151811061048357610483611e3e565b6020026020010181815250505b8061049a81611df7565b9150506103e0565b50979650505050505050565b60006001600160a01b0382166105065760405162461bcd60e51b815260206004820152601f60248201527f54776162526577617264732f70617965652d6e6f742d7a65726f2d61646472006044820152606401610296565b600061051184610e69565b905061051c81611452565b61052581610fa9565b6000610530826114ab565b600086815260208190526040812080547fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160e01b60ff85160217905590915061057b836114f7565b60a0840151909150610597906001600160a01b0316868361155b565b6040805182815260ff841660208201526001600160a01b0387169188917f98f89153fa6ee40b2edcd2e1ce4a5a9edfb2f74818016fc24e6cfe7b6fcd12a9910160405180910390a350600195945050505050565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915261063582610e69565b92915050565b60006001600160a01b0382166106935760405162461bcd60e51b815260206004820152601f60248201527f54776162526577617264732f70617965652d6e6f742d7a65726f2d61646472006044820152606401610296565b600061069e84610e69565b90506106a981611452565b60408101516060820151602083015160009260ff1690910265ffffffffffff160167ffffffffffffffff16608083015190915065ffffffffffff166000624f1a008284106106f757836106f9565b825b6107039190611cb7565b9050804210156107555760405162461bcd60e51b815260206004820152601f60248201527f54776162526577617264732f67726163652d706572696f642d616374697665006044820152606401610296565b60e0840151600088815260208190526040812080547fffffff000000000000000000000000000000000000000000000000000000000016815560018101829055600281018290556003015560a08501516107b9906001600160a01b0316888361155b565b866001600160a01b0316887f6f804f2ef186cd4b2a6740c084b86f557a497a1fcf3a6b073068a55c51187b6f836040516107f591815260200190565b60405180910390a3506001979650505050505050565b600080841161085c5760405162461bcd60e51b815260206004820152601b60248201527f54776162526577617264732f746f6b656e732d6e6f742d7a65726f00000000006044820152606401610296565b60008365ffffffffffff16116108b45760405162461bcd60e51b815260206004820152601d60248201527f54776162526577617264732f6475726174696f6e2d6e6f742d7a65726f0000006044820152606401610296565b6108bd82610e13565b600060015460016108ce9190611cb7565b6001819055905060006108e460ff851687611d42565b9050604051806101000160405280336001600160a01b031681526020018867ffffffffffffffff1681526020018560ff1681526020018665ffffffffffff1681526020014265ffffffffffff168152602001896001600160a01b031681526020018781526020018281525060008084815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550604082015181600001601c6101000a81548160ff021916908360ff16021790555060608201518160010160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060808201518160010160066101000a81548165ffffffffffff021916908365ffffffffffff16021790555060a082015181600101600c6101000a8154816001600160a01b0302191690836001600160a01b0316021790555060c0820151816002015560e082015181600301559050506000886001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610ab591906001600160a01b0391909116815260200190565b60206040518083038186803b158015610acd57600080fd5b505afa158015610ae1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b059190611a3b565b9050610b1c6001600160a01b038a16333085611020565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000906001600160a01b038b16906370a082319060240160206040518083038186803b158015610b7757600080fd5b505afa158015610b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baf9190611a3b565b905080610bbc8484611cb7565b14610c095760405162461bcd60e51b815260206004820152601d60248201527f54776162526577617264732f70726f6d6f2d616d6f756e742d646966660000006044820152606401610296565b60405184907faedc1797e973574eb0e43205c473287ca44eb1c9d0f677dbb0ec8cfc72bb68f390600090a2509198975050505050505050565b6000610635610c5083610e69565b6114f7565b600080610c6185610e69565b60008681526002602090815260408083206001600160a01b038b1684529091528120549192509084825b81811015610d4d576000888883818110610ca757610ca7611e3e565b9050602002016020810190610cbc9190611ab0565b9050600160ff821685901c81161415610d175760405162461bcd60e51b815260206004820152601b60248201527f54776162526577617264732f726577617264732d636c61696d656400000000006044820152606401610296565b610d228b87836110d7565b610d2c9086611cb7565b9450600160ff82161b84179350508080610d4590611df7565b915050610c8b565b5060008881526002602090815260408083206001600160a01b038d16845282528083208590558a83529082905281206003018054859290610d8f908490611d91565b909155505060a0840151610dad906001600160a01b03168a8561155b565b886001600160a01b0316887f446a5bb69110f4fa9a5802e85237a4281d1d27dbe989b22da4a75d9deae8c778898987604051610deb93929190611b9e565b60405180910390a35090979650505050505050565b6000610635610e0e83610e69565b6114ab565b60008160ff1611610e665760405162461bcd60e51b815260206004820152601b60248201527f54776162526577617264732f65706f6368732d6e6f742d7a65726f00000000006044820152606401610296565b50565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091526000828152602081815260409182902082516101008101845281546001600160a01b0380821680845274010000000000000000000000000000000000000000830467ffffffffffffffff1695840195909552600160e01b90910460ff1694820194909452600182015465ffffffffffff8082166060840152660100000000000082041660808301526c01000000000000000000000000900490931660a0840152600281015460c08401526003015460e08301526106355760405162461bcd60e51b815260206004820152601d60248201527f54776162526577617264732f696e76616c69642d70726f6d6f74696f6e0000006044820152606401610296565b604081015160608201516020830151429260ff1690910265ffffffffffff160167ffffffffffffffff1611610e665760405162461bcd60e51b815260206004820152601e60248201527f54776162526577617264732f70726f6d6f74696f6e2d696e61637469766500006044820152606401610296565b6040516001600160a01b03808516602483015283166044820152606481018290526110d19085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526115a9565b50505050565b606082015160009065ffffffffffff16816110f560ff851683611d61565b85602001516111049190611ccf565b905060006111128383611ccf565b90508067ffffffffffffffff1642101561116e5760405162461bcd60e51b815260206004820152601a60248201527f54776162526577617264732f65706f63682d6e6f742d6f7665720000000000006044820152606401610296565b856040015160ff168560ff16106111c75760405162461bcd60e51b815260206004820152601c60248201527f54776162526577617264732f696e76616c69642d65706f63682d6964000000006044820152606401610296565b6040517f98b16f360000000000000000000000000000000000000000000000000000000081526001600160a01b03888116600483015267ffffffffffffffff8085166024840152831660448301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906398b16f369060640160206040518083038186803b15801561125e57600080fd5b505afa158015611272573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112969190611a3b565b90508015611442576040805160018082528183019092526000916020808301908036833701905050905083816000815181106112d4576112d4611e3e565b67ffffffffffffffff9290921660209283029190910190910152604080516001808252818301909252600091816020016020820280368337019050509050838160008151811061132657611326611e3e565b67ffffffffffffffff909216602092830291909101909101526040517f8e6d536a0000000000000000000000000000000000000000000000000000000081526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638e6d536a906113a99086908690600401611b70565b60006040518083038186803b1580156113c157600080fd5b505afa1580156113d5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113fd91908101906118bf565b60008151811061140f5761140f611e3e565b6020026020010151905080848b60c0015161142a9190611d42565b6114349190611d20565b97505050505050505061144b565b60009450505050505b9392505050565b80516001600160a01b03163314610e665760405162461bcd60e51b815260206004820152601e60248201527f54776162526577617264732f6f6e6c792d70726f6d6f2d63726561746f7200006044820152606401610296565b600080826020015167ffffffffffffffff1642111561063557826060015165ffffffffffff16836020015167ffffffffffffffff164203816114ef576114ef611e28565b049392505050565b60408101516060820151602083015160009260ff1690910265ffffffffffff160167ffffffffffffffff1642111561153157506000919050565b61153a826114ab565b826040015160ff1661154c9190611d91565b8260c001516106359190611d42565b6040516001600160a01b0383166024820152604481018290526115a49084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161106d565b505050565b60006115fe826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661168e9092919063ffffffff16565b8051909150156115a4578080602001905181019061161c9190611984565b6115a45760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610296565b606061169d84846000856116a5565b949350505050565b60608247101561171d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610296565b843b61176b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610296565b600080866001600160a01b031685876040516117879190611b10565b60006040518083038185875af1925050503d80600081146117c4576040519150601f19603f3d011682016040523d82523d6000602084013e6117c9565b606091505b50915091506117d98282866117e4565b979650505050505050565b606083156117f357508161144b565b8251156118035782518084602001fd5b8160405162461bcd60e51b81526004016102969190611bec565b803560ff8116811461182e57600080fd5b919050565b6000806000806060858703121561184957600080fd5b843561185481611e6a565b935060208501359250604085013567ffffffffffffffff8082111561187857600080fd5b818701915087601f83011261188c57600080fd5b81358181111561189b57600080fd5b8860208260051b85010111156118b057600080fd5b95989497505060200194505050565b600060208083850312156118d257600080fd5b825167ffffffffffffffff808211156118ea57600080fd5b818501915085601f8301126118fe57600080fd5b81518181111561191057611910611e54565b8060051b604051601f19603f8301168101818110858211171561193557611935611e54565b604052828152858101935084860182860187018a101561195457600080fd5b600095505b83861015611977578051855260019590950194938601938601611959565b5098975050505050505050565b60006020828403121561199657600080fd5b8151801515811461144b57600080fd5b600080600080600060a086880312156119be57600080fd5b85356119c981611e6a565b9450602086013567ffffffffffffffff811681146119e657600080fd5b935060408601359250606086013565ffffffffffff81168114611a0857600080fd5b9150611a166080870161181d565b90509295509295909350565b600060208284031215611a3457600080fd5b5035919050565b600060208284031215611a4d57600080fd5b5051919050565b60008060408385031215611a6757600080fd5b823591506020830135611a7981611e6a565b809150509250929050565b60008060408385031215611a9757600080fd5b82359150611aa76020840161181d565b90509250929050565b600060208284031215611ac257600080fd5b61144b8261181d565b600081518084526020808501945080840160005b83811015611b0557815167ffffffffffffffff1687529582019590820190600101611adf565b509495945050505050565b60008251611b22818460208701611dcb565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015611b6457835183529284019291840191600101611b48565b50909695505050505050565b604081526000611b836040830185611acb565b8281036020840152611b958185611acb565b95945050505050565b6040808252810183905260008460608301825b86811015611bd95760ff611bc48461181d565b16825260209283019290910190600101611bb1565b5060209390930193909352509392505050565b6020815260008251806020840152611c0b816040850160208701611dcb565b601f01601f19169190910160400192915050565b6000610100820190506001600160a01b03835116825267ffffffffffffffff602084015116602083015260ff604084015116604083015265ffffffffffff60608401511660608301526080830151611c81608084018265ffffffffffff169052565b5060a0830151611c9c60a08401826001600160a01b03169052565b5060c083015160c083015260e083015160e083015292915050565b60008219821115611cca57611cca611e12565b500190565b600067ffffffffffffffff808316818516808303821115611cf257611cf2611e12565b01949350505050565b600060ff821660ff84168060ff03821115611d1857611d18611e12565b019392505050565b600082611d3d57634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611d5c57611d5c611e12565b500290565b600067ffffffffffffffff80831681851681830481118215151615611d8857611d88611e12565b02949350505050565b600082821015611da357611da3611e12565b500390565b600060ff821660ff841680821015611dc257611dc2611e12565b90039392505050565b60005b83811015611de6578181015183820152602001611dce565b838111156110d15750506000910152565b6000600019821415611e0b57611e0b611e12565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610e6657600080fdfea264697066735822122093aebe8126842f77adfcf2f93bf5a68a510897332a4a90f97601a16656e11e6a64736f6c63430008060033',
    devdoc: {
      author: 'PoolTogether Inc Team',
      details:
        'This contract supports only one prize pool ticket.This contract does not support the use of fee on transfer tokens.',
      events: {
        'PromotionCreated(uint256)': {
          params: {
            promotionId: 'Id of the newly created promotion'
          }
        },
        'PromotionDestroyed(uint256,address,uint256)': {
          params: {
            amount: 'Amount of tokens transferred to the recipient',
            promotionId: 'Id of the promotion being destroyed',
            recipient: 'Address of the recipient that will receive the unclaimed rewards'
          }
        },
        'PromotionEnded(uint256,address,uint256,uint8)': {
          params: {
            amount: 'Amount of tokens transferred to the recipient',
            epochNumber: 'Epoch number at which the promotion ended',
            promotionId: 'Id of the promotion being ended',
            recipient: 'Address of the recipient that will receive the remaining rewards'
          }
        },
        'PromotionExtended(uint256,uint256)': {
          params: {
            numberOfEpochs: 'Number of epochs the promotion has been extended by',
            promotionId: 'Id of the promotion being extended'
          }
        },
        'RewardsClaimed(uint256,uint8[],address,uint256)': {
          params: {
            amount: 'Amount of tokens transferred to the recipient address',
            epochIds: 'Ids of the epochs being claimed',
            promotionId: 'Id of the promotion for which epoch rewards were claimed',
            user: 'Address of the user for which the rewards were claimed'
          }
        }
      },
      kind: 'dev',
      methods: {
        'claimRewards(address,uint256,uint8[])': {
          details:
            'Rewards can be claimed on behalf of a user.Rewards can only be claimed for a past epoch.',
          params: {
            _epochIds: 'Epoch ids to claim rewards for',
            _promotionId: 'Id of the promotion to claim rewards for',
            _user: 'Address of the user to claim rewards for'
          },
          returns: {
            _0: 'Total amount of rewards claimed'
          }
        },
        'constructor': {
          params: {
            _ticket: 'Prize Pool ticket address for which the promotions will be created'
          }
        },
        'createPromotion(address,uint64,uint256,uint48,uint8)': {
          details:
            'For sake of simplicity, `msg.sender` will be the creator of the promotion.`_latestPromotionId` starts at 0 and is incremented by 1 for each new promotion. So the first promotion will have id 1, the second 2, etc.The transaction will revert if the amount of reward tokens provided is not equal to `_tokensPerEpoch * _numberOfEpochs`. This scenario could happen if the token supplied is a fee on transfer one.',
          params: {
            _epochDuration: 'Duration of one epoch in seconds',
            _numberOfEpochs: 'Number of epochs the promotion will last for',
            _startTimestamp: 'Timestamp at which the promotion starts',
            _token: 'Address of the token to be distributed',
            _tokensPerEpoch: 'Number of tokens to be distributed per epoch'
          },
          returns: {
            _0: 'Id of the newly created promotion'
          }
        },
        'destroyPromotion(uint256,address)': {
          details:
            'Will send back all the tokens that have not been claimed yet by users.This function will revert if the promotion is still active.This function will revert if the grace period is not over yet.',
          params: {
            _promotionId: 'Promotion id to destroy',
            _to: 'Address that will receive the remaining tokens if there are any left'
          },
          returns: {
            _0: 'True if operation was successful'
          }
        },
        'endPromotion(uint256,address)': {
          details: 'Will only send back tokens from the epochs that have not completed.',
          params: {
            _promotionId: 'Promotion id to end',
            _to: 'Address that will receive the remaining tokens if there are any left'
          },
          returns: {
            _0: 'true if operation was successful'
          }
        },
        'extendPromotion(uint256,uint8)': {
          params: {
            _numberOfEpochs: 'Number of epochs to add',
            _promotionId: 'Id of the promotion to extend'
          },
          returns: {
            _0: 'True if the operation was successful'
          }
        },
        'getCurrentEpochId(uint256)': {
          details:
            'Epoch ids and their boolean values are tightly packed and stored in a uint256, so epoch id starts at 0.',
          params: {
            _promotionId: 'Id of the promotion to get current epoch for'
          },
          returns: {
            _0: 'Current epoch id of the promotion'
          }
        },
        'getPromotion(uint256)': {
          params: {
            _promotionId: 'Id of the promotion to get settings for'
          },
          returns: {
            _0: 'Promotion settings'
          }
        },
        'getRemainingRewards(uint256)': {
          params: {
            _promotionId:
              'Id of the promotion to get the total amount of tokens left to be rewarded for'
          },
          returns: {
            _0: 'Amount of tokens left to be rewarded'
          }
        },
        'getRewardsAmount(address,uint256,uint8[])': {
          details:
            'Rewards amount can only be retrieved for epochs that are over.Will revert if `_epochId` is over the total number of epochs or if epoch is not over.Will return 0 if the user average balance of tickets is 0.Will be 0 if user has already claimed rewards for the epoch.',
          params: {
            _epochIds: 'Epoch ids to get reward amount for',
            _promotionId: 'Id of the promotion from which the epoch is',
            _user: 'Address of the user to get amount of rewards for'
          },
          returns: {
            _0: 'Amount of tokens per epoch to be rewarded'
          }
        }
      },
      stateVariables: {
        _claimedEpochs: {
          details:
            "_claimedEpochs[promotionId][user] => claimedEpochsWe pack epochs claimed by a user into a uint256. So we can't store more than 256 epochs."
        },
        _latestPromotionId: {
          details:
            'Starts at 0 and is incremented by 1 for each new promotion. So the first promotion will have id 1, the second 2, etc.'
        }
      },
      title: 'PoolTogether V4 TwabRewards',
      version: 1
    },
    userdoc: {
      events: {
        'PromotionCreated(uint256)': {
          notice: 'Emitted when a promotion is created.'
        },
        'PromotionDestroyed(uint256,address,uint256)': {
          notice: 'Emitted when a promotion is destroyed.'
        },
        'PromotionEnded(uint256,address,uint256,uint8)': {
          notice: 'Emitted when a promotion is ended.'
        },
        'PromotionExtended(uint256,uint256)': {
          notice: 'Emitted when a promotion is extended.'
        },
        'RewardsClaimed(uint256,uint8[],address,uint256)': {
          notice: 'Emitted when rewards have been claimed.'
        }
      },
      kind: 'user',
      methods: {
        'GRACE_PERIOD()': {
          notice: "Period during which the promotion owner can't destroy a promotion."
        },
        'claimRewards(address,uint256,uint8[])': {
          notice: 'Claim rewards for a given promotion and epoch.'
        },
        'constructor': {
          notice: 'Constructor of the contract.'
        },
        'createPromotion(address,uint64,uint256,uint48,uint8)': {
          notice: 'Creates a new promotion.'
        },
        'destroyPromotion(uint256,address)': {
          notice: 'Delete an inactive promotion and send promotion tokens back to the creator.'
        },
        'endPromotion(uint256,address)': {
          notice: 'End currently active promotion and send promotion tokens back to the creator.'
        },
        'extendPromotion(uint256,uint8)': {
          notice: 'Extend promotion by adding more epochs.'
        },
        'getCurrentEpochId(uint256)': {
          notice: 'Get the current epoch id of a promotion.'
        },
        'getPromotion(uint256)': {
          notice: 'Get settings for a specific promotion.'
        },
        'getRemainingRewards(uint256)': {
          notice: 'Get the total amount of tokens left to be rewarded.'
        },
        'getRewardsAmount(address,uint256,uint8[])': {
          notice: 'Get amount of tokens to be rewarded for a given epoch.'
        },
        'ticket()': {
          notice: 'Prize pool ticket for which the promotions are created.'
        }
      },
      notice:
        'Contract to distribute rewards to depositors in a pool. This contract supports the creation of several promotions that can run simultaneously. In order to calculate user rewards, we use the TWAB (Time-Weighted Average Balance) from the Ticket contract. This way, users simply need to hold their tickets to be eligible to claim rewards. Rewards are calculated based on the average amount of tickets they hold during the epoch duration.',
      version: 1
    },
    storageLayout: {
      storage: [
        {
          astId: 15925,
          contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
          label: '_promotions',
          offset: 0,
          slot: '0',
          type: 't_mapping(t_uint256,t_struct(Promotion)17216_storage)'
        },
        {
          astId: 15928,
          contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
          label: '_latestPromotionId',
          offset: 0,
          slot: '1',
          type: 't_uint256'
        },
        {
          astId: 15935,
          contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
          label: '_claimedEpochs',
          offset: 0,
          slot: '2',
          type: 't_mapping(t_uint256,t_mapping(t_address,t_uint256))'
        }
      ],
      types: {
        't_address': {
          encoding: 'inplace',
          label: 'address',
          numberOfBytes: '20'
        },
        't_contract(IERC20)663': {
          encoding: 'inplace',
          label: 'contract IERC20',
          numberOfBytes: '20'
        },
        't_mapping(t_address,t_uint256)': {
          encoding: 'mapping',
          key: 't_address',
          label: 'mapping(address => uint256)',
          numberOfBytes: '32',
          value: 't_uint256'
        },
        't_mapping(t_uint256,t_mapping(t_address,t_uint256))': {
          encoding: 'mapping',
          key: 't_uint256',
          label: 'mapping(uint256 => mapping(address => uint256))',
          numberOfBytes: '32',
          value: 't_mapping(t_address,t_uint256)'
        },
        't_mapping(t_uint256,t_struct(Promotion)17216_storage)': {
          encoding: 'mapping',
          key: 't_uint256',
          label: 'mapping(uint256 => struct ITwabRewards.Promotion)',
          numberOfBytes: '32',
          value: 't_struct(Promotion)17216_storage'
        },
        't_struct(Promotion)17216_storage': {
          encoding: 'inplace',
          label: 'struct ITwabRewards.Promotion',
          members: [
            {
              astId: 17200,
              contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
              label: 'creator',
              offset: 0,
              slot: '0',
              type: 't_address'
            },
            {
              astId: 17202,
              contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
              label: 'startTimestamp',
              offset: 20,
              slot: '0',
              type: 't_uint64'
            },
            {
              astId: 17204,
              contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
              label: 'numberOfEpochs',
              offset: 28,
              slot: '0',
              type: 't_uint8'
            },
            {
              astId: 17206,
              contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
              label: 'epochDuration',
              offset: 0,
              slot: '1',
              type: 't_uint48'
            },
            {
              astId: 17208,
              contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
              label: 'createdAt',
              offset: 6,
              slot: '1',
              type: 't_uint48'
            },
            {
              astId: 17211,
              contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
              label: 'token',
              offset: 12,
              slot: '1',
              type: 't_contract(IERC20)663'
            },
            {
              astId: 17213,
              contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
              label: 'tokensPerEpoch',
              offset: 0,
              slot: '2',
              type: 't_uint256'
            },
            {
              astId: 17215,
              contract: '@pooltogether/v4-periphery/contracts/TwabRewards.sol:TwabRewards',
              label: 'rewardsUnclaimed',
              offset: 0,
              slot: '3',
              type: 't_uint256'
            }
          ],
          numberOfBytes: '128'
        },
        't_uint256': {
          encoding: 'inplace',
          label: 'uint256',
          numberOfBytes: '32'
        },
        't_uint48': {
          encoding: 'inplace',
          label: 'uint48',
          numberOfBytes: '6'
        },
        't_uint64': {
          encoding: 'inplace',
          label: 'uint64',
          numberOfBytes: '8'
        },
        't_uint8': {
          encoding: 'inplace',
          label: 'uint8',
          numberOfBytes: '1'
        }
      }
    }
  }
]

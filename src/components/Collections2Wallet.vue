<template>
  <div class="text-center mx-auto max-w-2xl py-4 mb-12">
    <form action="" @submit.prevent="formSubmit">
        <div class="my-4 py-4 px-6 bg-sky-100 rounded-2xl text-sky-900"
             v-for="(form, index) in formData" :key="index">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-5">
              <!--      select-->
              <div>
                <label for="collections" class="tailwind-label">Collections</label>
                <select v-model="form.selectedCollection"
                        @change="onChange($event, index)"
                        id="collections" name="location" class="mt-1 tailwind-input">
                  <template v-for="(item, index) in collections" :key="index">
                    <option :value="item.collection">
                      {{ item.data[0].data.symbol || item.data[0].data.name.substring(0, item.data[0].data.name.lastIndexOf(' ')) }}
                    </option>
                  </template>
                </select>
              </div>
            </div>
            <div class="col-span-3 md:col-span-2">
              <label for="quantity" class="tailwind-label">Quantity</label>
              <div>
                <input type="number" name="quantity" id="quantity" class="mt-1 tailwind-input"
                       min="1" :max="form.quantityMax"
                       v-model.number="form.quantity"
                />
                <p v-if="form.quantityDescription" class="mt-2 text-sm text-gray-500" id="quantity-description">
                  {{ form.quantityDescription }}
                </p>
              </div>
            </div>
            <div class="col-span-8 md:col-span-4">
              <label for="wallet" class="tailwind-label">Wallet</label>
              <div>
                <input
                  v-model="form.wallet_to_send"
                  @input="onInput(index)"
                  type="text" name="wallet" id="wallet" class="mt-1 tailwind-input"/>
              </div>
              <p class="mt-2 text-sm text-red-500" id="wallet-error" v-if="form.walletErrorText">
                {{ form.walletErrorText }}
              </p>
            </div>
            <div class="col-span-1 md:col-span-1 flex">
              <span class="mt-7" @click="onDeleteEntry(index)">
                <TrashIcon class="w-6 h-6 cursor-pointer text-red-600 hover:text-red-800" />
              </span>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <button type="button" @click.prevent="onAddMore" :disabled="addMoreDisabled"
                  class="inline-flex items-center px-6 py-3 text-base font-medium
                  rounded-md shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
                  text-cyan-50 bg-gradient-to-r from-cyan-500 to-sky-500
                  hover:from-sky-500 hover:to-cyan-500"
                  :class="addMoreDisabled ? 'disabled:opacity-50' : '' "
          >
            Add More
          </button>
          <button type="submit"
                  class="ml-4 inline-flex items-center px-6 py-3 text-base font-medium
                  rounded-md shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700
                  text-green-50 bg-gradient-to-r from-green-500 to-teal-700
                  hover:from-teal-700 hover:to-green-500
                  ">
            Send
          </button>
        </div>
      </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { TrashIcon } from "@heroicons/vue/outline";
export default {
  name: "Collections2Wallet",
  components: { TrashIcon },
  setup() {
    const obj = [
      {
        "key": 4,
        "updateAuthority": "27yh2L9qvaEtEjS2hmqp3pJcdc1pjYhniWkcnZLCqFsE",
        "mint": "9hnHr8CD7fAmP9zhNRQHo522zK2jKNZuJLSNA74U4GhR",
        "data": {
          "name": "Posh Platypus #56",
          "symbol": "PPP",
          "uri": "https://arweave.net/or3IBpG7GvLu6L8Z4Ze5c8awtxnq7u8JY-0caaUFUuk",
          "sellerFeeBasisPoints": 500,
          "creators": [
            {
              "address": "4fcDkzSKfj49pTPUpAjPaxCVqXcPjRuyDK9xdCffSdLE",
              "verified": 1,
              "share": 0
            },
            {
              "address": "5ri5fGm9i8Kthx6n2p48on7Zoa7Bj8DFcks6LWZtCYet",
              "verified": 0,
              "share": 100
            }
          ]
        },
        "primarySaleHappened": 1,
        "isMutable": 0,
        "editionNonce": null
      },
      {
        "key": 4,
        "updateAuthority": "85wCamHhqkfRLK827wsvnma2teCoGuq5vfDhbe3yAZ6",
        "mint": "7oVz8BM34V8bEEp1aSPMYZTfB3gJDH66cXTJuSQGjruj",
        "data": {
          "name": "AutoSol #183",
          "symbol": "AuSo",
          "uri": "https://arweave.net/wvOu37BFP4Az3unmerj42CF4o84N97ihEkisosuNFhw",
          "sellerFeeBasisPoints": 700,
          "creators": [
            {
              "address": "FAM6HYSoJpRfY58sksjsQe3ugjT28cNxqQXJ18kiVinC",
              "verified": 1,
              "share": 0
            },
            {
              "address": "ExBkQ7BMgheBXvfoZ7jgmSCx2pkZ6oYd92Mberf8iSTe",
              "verified": 0,
              "share": 30
            },
            {
              "address": "4QF6WzLpnnvSZseguVuz12J7ZCjG7f6bV7TwNZnxQ1uG",
              "verified": 0,
              "share": 30
            },
            {
              "address": "HX5WRkVJ8u8wzsKbthQHmp1GcK3uFLKbk93aCeJyWGhe",
              "verified": 0,
              "share": 30
            },
            {
              "address": "8dngin1RSX4oE34XehdbEs8MnDTBzZZk4ENDNgYAbvAg",
              "verified": 0,
              "share": 10
            }
          ]
        },
        "primarySaleHappened": 1,
        "isMutable": 1,
        "editionNonce": null
      },
      {
        "key": 4,
        "updateAuthority": "85wCamHhqkfRLK827wsvnma2teCoGuq5vfDhbe3yAZ6",
        "mint": "EjABgtDfPKyG5959ghV8jHbgbmK5Ys6r4wZnYMgpktNK",
        "data": {
          "name": "AutoSol #259",
          "symbol": "AuSo",
          "uri": "https://arweave.net/IGxbf2pHth7xS7YLNdfS_DpKTAtMeJFVoFraByDqkwo",
          "sellerFeeBasisPoints": 700,
          "creators": [
            {
              "address": "FAM6HYSoJpRfY58sksjsQe3ugjT28cNxqQXJ18kiVinC",
              "verified": 1,
              "share": 0
            },
            {
              "address": "ExBkQ7BMgheBXvfoZ7jgmSCx2pkZ6oYd92Mberf8iSTe",
              "verified": 0,
              "share": 30
            },
            {
              "address": "4QF6WzLpnnvSZseguVuz12J7ZCjG7f6bV7TwNZnxQ1uG",
              "verified": 0,
              "share": 30
            },
            {
              "address": "HX5WRkVJ8u8wzsKbthQHmp1GcK3uFLKbk93aCeJyWGhe",
              "verified": 0,
              "share": 30
            },
            {
              "address": "8dngin1RSX4oE34XehdbEs8MnDTBzZZk4ENDNgYAbvAg",
              "verified": 0,
              "share": 10
            }
          ]
        },
        "primarySaleHappened": 1,
        "isMutable": 1,
        "editionNonce": null
      },
      {
        "key": 4,
        "updateAuthority": "85wCamHhqkfRLK827wsvnma2teCoGuq5vfDhbe3yAZ6",
        "mint": "AfPbLF1jy3v747iTQAVZVZxETpmkuBiBowEtCSSVg8o8",
        "data": {
          "name": "AutoSol #98",
          "symbol": "AuSo",
          "uri": "https://arweave.net/1d8YXE14WD03vR8aZ7VJXBxCwexwotsR1SAwW2Fj36Q",
          "sellerFeeBasisPoints": 700,
          "creators": [
            {
              "address": "FAM6HYSoJpRfY58sksjsQe3ugjT28cNxqQXJ18kiVinC",
              "verified": 1,
              "share": 0
            },
            {
              "address": "ExBkQ7BMgheBXvfoZ7jgmSCx2pkZ6oYd92Mberf8iSTe",
              "verified": 0,
              "share": 30
            },
            {
              "address": "4QF6WzLpnnvSZseguVuz12J7ZCjG7f6bV7TwNZnxQ1uG",
              "verified": 0,
              "share": 30
            },
            {
              "address": "HX5WRkVJ8u8wzsKbthQHmp1GcK3uFLKbk93aCeJyWGhe",
              "verified": 0,
              "share": 30
            },
            {
              "address": "8dngin1RSX4oE34XehdbEs8MnDTBzZZk4ENDNgYAbvAg",
              "verified": 0,
              "share": 10
            }
          ]
        },
        "primarySaleHappened": 1,
        "isMutable": 1,
        "editionNonce": null
      },
      {
        "key": 4,
        "updateAuthority": "CLPQEAPyYKKRF38HmFTuhPKttdRaVNxetB5j5cYZ8fUz",
        "mint": "3gd4RP93YtpXmkVSWjGF36KRfxGPUhuyyLqR6KTfcsAR",
        "data": {
          "name": "TEST NFT",
          "symbol": "",
          "uri": "https://arweave.net/nZb_RAEVHi_xdVlPo8IVRR_SPx1PvOcNkYKljsfHNPM",
          "sellerFeeBasisPoints": 10000,
          "creators": [
            {
              "address": "Ej9K6JjrPpAszUBWjnG2ohduRrg7eW75X1KapBBsvubi",
              "verified": 1,
              "share": 0
            },
            {
              "address": "HnRhVs3iiSWcVw4RgUAELAVVwnMtS58F6AMWG3yYLVyV",
              "verified": 0,
              "share": 100
            }
          ]
        },
        "primarySaleHappened": 1,
        "isMutable": 1,
        "editionNonce": null
      },
      {
        "key": 4,
        "updateAuthority": "H6CWQ1jVGQGTGQUGqhgeedrVC8jufRztakKxEf4uxsn6",
        "mint": "BtDmwb6AXe7Th2PmWWyvnRZu3NLvRkkLU8SMVPVhqaif",
        "data": {
          "name": "Pixel Titz #687",
          "symbol": "TITZ",
          "uri": "https://arweave.net/S9geAX2VyC3148l_Jaze2ZxuM6vhGe3fQoh4hM_46eg",
          "sellerFeeBasisPoints": 1500,
          "creators": [
            {
              "address": "DGVpp1n361FKVnCTew52AA3eAgV7zBgjs7cC2QNhzfuP",
              "verified": 1,
              "share": 0
            },
            {
              "address": "FGDtH76rrcnSELfgjWXfWgQ64dZsmHugoGka3DUkyz7Y",
              "verified": 0,
              "share": 100
            }
          ]
        },
        "primarySaleHappened": 1,
        "isMutable": 1,
        "editionNonce": null
      },
      {
        "key": 4,
        "updateAuthority": "MnsTrZvprZrmqxFVmQMBNETgF1h4uxijPTXTvY91zZo",
        "mint": "4Gts38cGT1RyqUwqvxbxxhk9rgTRFx9sBF2fRvg3AbSS",
        "data": {
          "name": "Monsterz #2374",
          "symbol": "MNSTRZ",
          "uri": "https://arweave.net/7koduwr9hjoQf_nPuiBzhroG2aEK0JPEWR6cWV1rwz0",
          "sellerFeeBasisPoints": 1000,
          "creators": [
            {
              "address": "CSb762GTTNYNkFavFwN4bCaoqeET4WShT7zWeeF2eiWy",
              "verified": 1,
              "share": 0
            },
            {
              "address": "mNstrZc7FLny87TF4nWCNVWB5he9zGigBm2LEG7CRAQ",
              "verified": 0,
              "share": 15
            },
            {
              "address": "mnstrzQBEgTeeiLbMzJnV4u7sbgeEgorU9TrfcHWP3a",
              "verified": 0,
              "share": 85
            }
          ]
        },
        "primarySaleHappened": 1,
        "isMutable": 1,
        "editionNonce": null
      }
    ];
    let collections = [];
    let updateAuthorities = [];
    const formData = reactive([{
      quantity: 1,
      selectedCollection: '',
      quantityDescription: 'max 1',
      quantityMax: 1,
      walletErrorText: '',
      collection: '',
      wallet_to_send: '',
      mints: [],
    }])
    const addMoreDisabled = ref(false)
    const isFormValid = ref(true)

    //functions
    const makeCollections = (() => {
      for (let item of obj) {
        updateAuthorities.push(item.updateAuthority);
      }

      const updateAuthoritiesUnique = [...new Set(updateAuthorities)];

      for (let i = 0; i < updateAuthoritiesUnique.length; i++) {
        let data = obj.filter(item => item.updateAuthority === updateAuthoritiesUnique[i]);
        collections.push({
          collection: updateAuthoritiesUnique[i],
          data: data
        });
      }

      return collections
    })
    const onDeleteEntry = ((index) => {
      if (formData.length > 1) {
        formData.splice(index, 1);

        //disable button if we can't add more
        addMoreDisabled.value = formData.length === collections.length;
      }
    })
    const onAddMore = (() => {
      if (formData.length < collections.length) {
        formData.push({
          quantity: 1,
          wallet_to_send: '',
          selectedCollection: collections[0].collection,
          quantityDescription: 'max 1',
          quantityMax: 1,
          collection: collections[0].collection,
          walletErrorText: '',
          mints: [],
        });
      }

      //disable button if we can't add more
      addMoreDisabled.value = formData.length === collections.length;
    })
    const createMints = ((form) => {
      const collectionObj = collections.find(item => item.collection === form.selectedCollection);
      if (!collectionObj) {
        console.error(`Original collection object for collection ID "${form.selectedCollection}" was not found in collections array.`, {
          collections: collections
        });
        return;
      }

      //get array with random
      const arrayOfRandomIndexes = [];
      if (form.quantity === form.quantityMax) {
        form.mints = collectionObj.data.map(item => item.mint);
      } else {
        while (arrayOfRandomIndexes.length < form.quantity) {
          let r = Math.floor(Math.random() * (form.quantity + 1));
          if (arrayOfRandomIndexes.indexOf(r) === -1) arrayOfRandomIndexes.push(r);
        }
        form.mints = arrayOfRandomIndexes.map(index => collectionObj.data[index].mint);
      }
    })
    const onChange = ((event, index) => {
      const name = event.target.value;
      const collection = collections.filter(item => item.collection === name);
      const amount = collection[0].data.length;
      formData[index].collection = name;
      formData[index].quantityMax = amount;
      formData[index].quantityDescription = `max ${amount}`;
    })
    const onInput = ((index) => {
      return formData[index].walletErrorText = ''
    })
    const formSubmit = (() => {
      //check wallet input
      formData.forEach( (form) => {
        if (form.wallet_to_send === '') {
          form.walletErrorText = 'Please, fill the field';
          isFormValid.value = false;
        } else {
          isFormValid.value = true;
        }
      })

      if (!isFormValid.value) return false

      //create mints
      formData.forEach( (form) => { createMints(form) });

      //remove unused fields
      formData.forEach( (form) => {
        delete form.quantity;
        delete form.selectedCollection;
        delete form.quantityDescription;
        delete form.quantityMax;
        delete form.walletErrorText;
      });
    })
    const init = (() => {
      makeCollections();
      formData[0].collection = collections[0].collection;
      formData[0].selectedCollection = collections[0].collection;
    })

    init();

    return {
      obj, collections, formData,
      addMoreDisabled,
      onDeleteEntry, onAddMore, onChange, onInput, formSubmit,
    };
  },
};
</script>

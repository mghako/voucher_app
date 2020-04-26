<template>
  <div class="print">
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1">
            <div class="w-full flex">
                <div class="w-1/4"><label for="" class="w-1/2">ယနေ့စျေနှုန်း: (ကျပ်)</label></div>
                <div class="w-3/4">
                  <input v-model="price" type="text" class="ml-3 px-2 shadow-outline mb-3 mr-2" placeholder="450">
                  <!-- <button class="bg-blue-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">Save</button> -->
                </div>
                
            </div>
            <hr class="my-6">
            <div class="flex flex-col justify-between">
              <div class="w-full flex">
                <div class="w-1/4"><label for="" class="w-1/2">Vehicle Number:</label></div>
                <div class="w-3/4"><input v-model="car_number" type="text" class="ml-3 px-2 shadow-outline mb-3 mr-3" name="" id="" placeholder="1P/1234"><span class="text-gray-400">1P/1234</span></div>
              </div>
              <div class="w-full flex">
                <div class="w-1/4"><label for="" class="w-1/2">Date:</label></div>
                <div class="w-3/4">
                <input v-model="date" type="text" class="ml-3 px-2 shadow-outline mb-3 mr-3" name="" id="" placeholder="07/04/2020 17:39"><span class="text-gray-400">07/04/2020 17:39</span>
                </div>
              </div>
              <div class="w-full flex">
                <div class="w-1/4"><label for="" class="w-1/2">Amount:</label></div>
                <div class="w-3/4">
                <input v-model="amount" type="text" class="ml-3 px-2 shadow-outline mb-3" name="" id="" placeholder="25000">
                </div>
              </div>
              <div class="w-full flex">
                <div class="w-1/4"><label for="" class="w-1/2">Litre:</label></div>
                <div class="w-3/4">
                <input type="text" v-model="getLitre" class="ml-3 px-2 shadow-outline mb-3" name="" id="" placeholder="">
                </div>
              </div>
            </div>
            <div class="flex mt-5 w-full">
              <div class="shadow p-5 w-1/4 text-center m-2">
                <h5 class="font-bold">Litre</h5>
                <p>{{ getLitre }}</p>
              </div>
              <div class="shadow p-5 w-1/4 text-center m-2">
                <h5 class="font-bold">Gallons</h5>
                <p>{{ getGallon }}</p>
              </div>
              <div class="shadow p-5 w-1/4 text-center m-2">
                <h5 class="font-bold">Slip Number</h5>
                <p>{{ getSlipNumber }}</p>
              </div>
            </div>
          </div>
          <div id="printMe" class="col-span-1 subpixel-antialiased border pt-20 px-1">
            <p class="text-center text-sm">မြဝတီစက်သုံးဆီအရောင်းဆိုင်(010)</p>
            <p class="text-center text-sm mt-3 mb-2">နေပြည်တော် (မြို့မစျေး) </p>
            <p class="text-center text-sm font-medium mb-2">Octane (92-Ron)</p>
            <p class="text-xs">VehicleNo: <span v-html="car_number" class="font-medium"></span></p>
            <div class="grid grid-cols-4 gap-1 text-xs mt-2 ">
              <div class="col-span-2 mb-2 border-b-2 border-dotted border-gray-600">
                <span class="font-medium" >Date:</span> <span v-html="date"></span>
              </div>
              <div class="col-span-2 mb-2 border-b-2 border-dotted border-gray-600">
                <span class="font-medium">Slip:</span> <span v-html="'MWD'+getSlipNumber"></span>
              </div>
              <div class="col-span-1 border-b-2 border-dotted border-gray-600 pb-2 font-medium">Gallon</div>
              <div class="col-span-1 border-b-2 border-dotted border-gray-600 pb-2 font-medium">Liter</div>
              <div class="col-span-1 border-b-2 border-dotted border-gray-600 pb-2 font-medium">Price</div>
              <div class="col-span-1 border-b-2 border-dotted border-gray-600 pb-2 font-medium">Amount</div>
              
              <div class="col-span-1 border-b-2 border-dotted border-gray-600 pb-3">{{ getGallon }}</div>
              <div class="col-span-1 border-b-2 border-dotted border-gray-600 pb-3">{{ getLitre }}</div>
              <div class="col-span-1 border-b-2 border-dotted border-gray-600 pb-3">{{ price }}</div>
              <div class="col-span-1 border-b-2 border-dotted border-gray-600 pb-3">{{amount}}</div>

              <div class="col-span-3 mb-2 border-b-2 border-dotted border-gray-600">
                Total Amount
              </div>
              <div class="col-span-1 mb-2 border-b-2 border-dotted border-gray-600">
                {{ amount }}
              </div>
 
              <div class="col-span-4 mb-2 border-b-2 border-dotted border-gray-600 font-medium">
                Discount Amount ( - )
              </div>

              <div class="col-span-3 mb-2 border-b-2 border-dotted border-gray-600 font-medium">
                Net Amount
              </div>
              <div class="col-span-1 mb-2 border-b-2 border-dotted border-gray-600">
                {{amount}}
              </div>

              <div class="col-span-3 mb-2 border-b-2 border-dotted border-gray-600 font-medium">
                Received
              </div>
              <div class="col-span-1 mb-2 border-b-2 border-dotted border-gray-600">
                {{amount}}
              </div>

              <div class="col-span-3 mb-2 border-b-2 border-dotted border-gray-600 font-medium">
                Changed
              </div>
              <div class="col-span-1 mb-2 border-b-2 border-dotted border-gray-600">
                0
              </div>

              <div class="col-span-4">
                <p class="text-center text-sm">
                  Thanks! Please Come Again
                </p>
              </div>
              
            </div>
            
          </div>
      </div>
    <button v-print="'#printMe'" class="bg-green-500 text-white p-2 hover:bg-green-400 focus:outline-none focus:shadow-outline rounded">Print Voucher</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
        min: 101010989898,
        max: 101010020202,
        price: 435,
        date: '07/04/2020 17:39',
        amount: 15000,
        car_number: '',
        slip_number: '',
        gallon: '',
          printObj: {
            id: "printMe",
            // popTitle: 'good print',
            // extraCss: 'https://www.google.com,https://www.google.com',
            // extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
          }
      };
  },
  crerated() {
    this.getSlipNumber
  },
  computed: {
    getSlipNumber: function() {
      return  Math.floor(Math.random() * this.max ) + this.min;
    },
    getLitre: function() {
      let result = this.amount / this.price
      
      return (++result).toFixed(4)
    },
    getGallon: function() {
      let result = this.getLitre / 3.785
      
      return result.toFixed(4)
    }
  },
  watch: {
    getLitre: function() {
      
    }
  },
  
}
</script>

<style>

</style>
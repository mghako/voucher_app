<template>
  <div class="denko-npt">
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
              <div class="flex">
                  <div class="w-1/4 denko-logo">
                      <div>
                          <img src="../assets/images/denko.png" class="w-full" >
                            <!-- <img src="../assets/images/denkotext.png" class="inline-block w-4/6 ml-2 -mt-4" > -->
                            <p class="font-medium -mt-2">DENKO</p>
                      </div>
                      
                  </div>
                  <div class="w-3/4">
                    <p>NAYPYIDAW (1) STATION</p>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .denko-logo {
        display: block;
        width: 60px;
        height: 60px;
    }
</style>
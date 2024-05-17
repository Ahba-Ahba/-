<template>
    <div class="!px-[3vw] bg-[#F7F9FC]">
        <div class="flex items-center w-[94vw]">
            <van-icon class="!text-[5vw]" name="arrow-left" />
            <span class="text-[5vw] !ml-[35vw]">排行榜</span>
        </div>
        <van-tabs background="#F7F9FC" color="#EB4D44" line-width="30" v-model:active="active">
            <van-tab title="官方"></van-tab>
            <van-tab title="精选"></van-tab>
            <van-tab title="曲风"></van-tab>
            <van-tab title="全球"></van-tab>
            <van-tab title="语种"></van-tab>
        </van-tabs>
        <div>
            <h2 class="text-[#303546] text-[6vw]">榜单推荐</h2>
            <div class="flex justify-between">
                <div :style="{
                    backgroundImage: `url(${AllListSummary?.[38].coverImgUrl})`,
                    backgroundSize: 'cover',
                }" class="rounded-xl w-[25vw] h-[25vw] bg-red-500 relative">
                    <van-icon class=" absolute right-[-20vw] bottom-[-19vw] text-[#fff] text-[5vw]" name="play" />
                </div>
                <div :style="{
                    backgroundImage: `url(${AllListSummary?.[50].coverImgUrl})`,
                    backgroundSize: 'cover',
                }" class="rounded-xl w-[25vw] h-[25vw] bg-red-500 relative">
                    <van-icon class=" absolute right-[-20vw] bottom-[-19vw] text-[#fff] text-[5vw]" name="play" />
                </div>
                <div :style="{
                    backgroundImage: `url(${AllListSummary?.[25].coverImgUrl})`,
                    backgroundSize: 'cover',
                }" class="rounded-xl w-[25vw] h-[25vw] bg-red-500 relative">
                    <van-icon class=" absolute right-[-20vw] bottom-[-19vw] text-[#fff] text-[5vw]" name="play" />
                </div>
            </div>

        </div>
        <div class="!mt-[8vw]">
            <h2 class="text-[5vw] !mb-[4vw] text-[#303546] flex items-center">
                <Icon class="text-[#EA4D44]" icon="ri:netease-cloud-music-fill" />
                <span class="font-medium">官方榜</span>
            </h2>
            <div class="h-[40vw] bg-[#fff] rounded-xl !mb-[5vw] !p-[4vw]" v-for="item in filteredList" :key="item.id">
                <h3 class="flex justify-between items-center">
                    <span class="text-[#303546] text-[5vw] font-semibold">{{ item.name }}</span>
                    <span class="text-[#9B9FA9] text-[3vw]">{{ item.updateFrequency }}</span>
                </h3>
                <div class="flex !mt-[3vw]">
                    <div class=" relative">
                        <!-- <img class="w-[10vw] h-[10vw] rounded-md absolute bottom-0 left-[14vw] opacity-75" :src="item.coverImgUrl" alt="">
                        <img class="w-[15vw] h-[15vw] rounded-md absolute bottom-0 left-[7vw] opacity-50" :src="item.coverImgUrl" alt="">
                        <img class="w-[20vw] h-[20vw] rounded-md relative" :src="item.coverImgUrl" alt=""> -->
                        <pic :picId="item.id"></pic>
                        <Icon class=" absolute top-[7.5vw] left-[7.5vw] text-[] text-[#fff]" icon="solar:play-bold" />
                    </div>

                    <div class="flex flex-col !ml-[6vw]">
                        <div class="flex text-[4vw]" v-for="(i, index) in item.tracks" :key="i.first">
                            <p class="w-[60vw] text-ellipsis text-nowrap overflow-hidden">
                                <span class="font-semibold">{{ index + 1 }}</span>
                                <span class="!ml-[2vw] font-medium">{{ i.first }}</span>
                                <span class="!mx-[2vw] text-[#9A9EA7]">—</span>
                                <span class="text-[#9A9EA7]">{{ i.second }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#F7F9FC] !mt-[4vw]">
            <!-- 精选榜 -->
            <div class="!mt-[8vw]">
                <h2 class="font-semibold">精选榜</h2>
                <div class="flex flex-wrap">
                    <img class="w-[28vw] h-[28vw] !mr-[3.3vw] !mt-[4vw] rounded-lg"
                        v-for="item in AllListSummary?.slice(0, 11)" :key="item.id" :src="item.coverImgUrl">
                </div>
            </div>
            <!-- 曲风榜 -->
            <div class="!mt-[8vw]">
                <h2 class="font-semibold">曲风榜</h2>
                <div class="flex flex-wrap">
                    <img class="w-[28vw] h-[28vw] !mr-[3.3vw] !mt-[4vw] rounded-lg"
                        v-for="item in AllListSummary?.slice(11, 19)" :key="item.id" :src="item.coverImgUrl">
                </div>
            </div>
            <!-- 全球榜 -->
            <div class="!mt-[8vw]">
                <h2 class="font-semibold">全球榜</h2>
                <div class="flex flex-wrap">
                    <img class="w-[28vw] h-[28vw] !mr-[3.3vw] !mt-[4vw] rounded-lg"
                        v-for="item in AllListSummary?.slice(19, 25)" :key="item.id" :src="item.coverImgUrl">
                </div>
            </div>
            <!-- 语种榜 -->
            <div class="!mt-[8vw]">
                <h2 class="font-semibold">语种榜</h2>
                <div class="flex flex-wrap">
                    <img class="w-[28vw] h-[28vw] !mr-[3.3vw] !mt-[4vw] rounded-lg"
                        v-for="item in AllListSummary?.slice(25, 32)" :key="item.id" :src="item.coverImgUrl">
                </div>
            </div>
            <!-- 特色榜 -->
            <div class="!mt-[8vw]">
                <h2 class="font-semibold">特色榜</h2>
                <div class="flex flex-wrap">
                    <img class="w-[28vw] h-[28vw] !mr-[3.3vw] !mt-[4vw] rounded-lg"
                        v-for="item in AllListSummary?.slice(32, 38)" :key="item.id" :src="item.coverImgUrl">
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { getAllRanking, getListSummary, getSongListDetails } from "@/service";
import { useRequest } from "vue-request";
import pic from "@/components/pic.vue";



const { data: AllRanking } = useRequest(getAllRanking, {});
console.log(AllRanking);

const { data: AllListSummary } = useRequest<List>(getListSummary);
console.log(AllListSummary)

const { data: SongListDetails } = useRequest(() => getSongListDetails({ id: 19723756 }));
console.log(SongListDetails);

const active = ref(0);


// 计算属性，用于过滤数据
const filteredList = computed(() => {
    return AllListSummary?.value?.filter((item: List) => item.tracks.length !== 0);
});

</script>

<style>
* {
    margin: 0 !important;
    padding: 0 !important;
}
</style>